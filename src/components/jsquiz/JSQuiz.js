import React, { useEffect, useState } from 'react';
import './jsquiz.scss';
import data from '../../quizdata.json';
import { useNavigate } from 'react-router-dom';
import Cards from '../cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../../redux/reducers/quizes/quizSlice';

let status = false;
const JSQuiz = () => {
  const history = useNavigate();
  const quiz = useSelector((state) => state?.quizData);
  const dispatch = useDispatch();
  const questions = quiz !== null ? quiz?.quiz : data.quiz;

  const [showQuestion, setShowQueston] = useState([questions[0]]);

  let [count, setCount] = useState(0);
  const [saveAnswers, setSaveAnswers] = useState({
    answers: []
  });
  const [selected, setSelected] = useState({
    selectedRow: {},
    selectedAns: {}
  });

  useEffect(() => {
    dispatch(getQuestions())
  }, [dispatch]);

  const selectAnswer = (qNo, row) => {
    let getSelectedQ = questions.filter(question => question.id === qNo);
    setSelected({
      ...selected,
      selectedAns: row,
      selectedRow: getSelectedQ[0]
    });
    status = true;
  }
  const showNextQuestion = () => {
    if (count < questions.length) {
      let nextQuestion = questions[count + 1];
      setShowQueston([nextQuestion]);
      setCount(++count);
    }
    const { selectedAns } = selected;
    setSaveAnswers({ answers: [...saveAnswers.answers, selectedAns] });
    status = false;
  }
  const submitQuestion = () => {
    const { selectedAns } = selected;
    localStorage.setItem('solved', JSON.stringify([...saveAnswers.answers, selectedAns]))
    setSaveAnswers({ answers: [...saveAnswers.answers, selectedAns] })
    setCount(++count)
    history('/results',
      {
        state: {
          answers: [...saveAnswers.answers, selectedAns], questions
        }
      }
    )
  }

  return (
    <>
      <div className='container mt-5'>
        <h1 className='text-primary mb-3'>Javascript Quiz</h1>
        <div>
          {showQuestion.map(q =>
            <div key={q.id}>
              <Cards
                {...q}
                selectAnswer={selectAnswer}
                selected={selected}
                questions={questions}
                saveAnswers={saveAnswers}
                count={count}
              />
            </div>
          )}
          <span className="breadcrumb-item" />
          <div className="buttons">
            <div>*questions are mandatory</div>
            {count + 1 < questions.length &&
              <button
                type="button"
                onClick={showNextQuestion}
                className={status ? 'my-5 btn btn-info' : 'my-5 btn btn-info disabled'}>
                Next Question
              </button>
            }
            {count + 1 === questions.length &&
              <button
                type="button"
                onClick={submitQuestion}
                className={status ? 'my-5 btn btn-primary' : 'my-5 btn btn-primary disabled'}>
                Finish quiz
              </button>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default JSQuiz;
