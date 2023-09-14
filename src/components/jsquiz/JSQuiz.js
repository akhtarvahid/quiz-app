import React, { useState } from 'react';
import './jsquiz.scss';
import data from '../../quizdata.json';
import { applyAnswerClick, applyClasses,
applyMark, applyListOrdering } from '../common';
import { useNavigate } from 'react-router-dom';
import { ImCheckmark } from "react-icons/im";


let count = 0;
let status = false;
const JSQuiz = () => {
  const history = useNavigate();
  const questions = data && data.quiz;
  const [showQuestion, setShowQueston] = useState([questions[0]]);
  const [saveAnswers, setSaveAnswers] = useState({
    answers: []
  });
  const [selected, setSelected] = useState({
    selectedRow: {},
    selectedAns: {}
  });


  const selectAnswer = (qNo, row) => {
    let getSelectedQ = questions.filter(question=> question.id===qNo);
    setSelected({...selected, 
      selectedAns: row,
      selectedRow: getSelectedQ[0]
    });
    status = true;
  }
  const showNextQuestion = () => {
      if(count < questions.length) {
       let nextQuestion = questions[count+1];
       setShowQueston([nextQuestion]);
       count++;
      }
     const {selectedAns } = selected;
     setSaveAnswers({answers: [...saveAnswers.answers, selectedAns]});
     status = false;
  }
  const submitQuestion = () => {
    const {selectedRow, selectedAns } = selected;
    selectedRow.userSelectedAns = selectedAns;
    localStorage.setItem('solved', JSON.stringify([...saveAnswers.answers, selectedAns]))
    setSaveAnswers({answers: [...saveAnswers.answers, selectedAns]})
    count++;
    history('/results',
      { state: {
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
        {showQuestion.map(q=> 
          <div key={q.id}> 
            <Cards {...q} 
             selectAnswer={selectAnswer}
             selected={selected} 
             questions={questions}
             saveAnswers={saveAnswers}
             />
          </div>  
        )}
        <span className="breadcrumb-item"/>
        <div className="buttons">
            <div>*questions are mandatory</div>
            {count + 1 < questions.length &&
               <button type="button" onClick={showNextQuestion}
                 className={status ? 'my-5 btn btn-info' : 'my-5 btn btn-info disabled'}>
                 Next Question
               </button>
            }
            { count + 1 === questions.length &&
               <button type="button" className={status ? 'my-5 btn btn-primary' : 'my-5 btn btn-primary disabled'}
               onClick={submitQuestion}>
               Finish quiz
             </button>
            }
        </div>
      </div>
    </div>
    </>
  );
};

function Cards({question, options, id, 
  snippet, selectAnswer, selected, questions,
}){

  const { selectedAns, selectedRow } = selected;
   return (
    <div className="my-4 card shadow">
      <div className="card-header alignHeader">
      <span className="quiz-count">{count + 1}/
       <span>{ questions.length }.</span> 
      </span> {question} 
      </div>
    <div className="card-body">
      <p className="card-text">
      {snippet && <code>{snippet}</code> }
      </p>
    </div>
    <div className="card-body">
      {options.map(option=>
        <p key={option.id} 
          className={applyClasses(selectedAns, selectedRow, option, id, selectAnswer)}
          onClick={()=> applyAnswerClick(selectedAns,selectedRow, option , id) ? null : selectAnswer(id, option)}>
          <span className="text-info">{applyListOrdering(option)}  - {option.title}</span> 
          {applyMark(selectedAns,selectedRow,option,id) && <ImCheckmark />}
        </p>
        )}
    </div>
  </div>
   )
}
export default JSQuiz;
