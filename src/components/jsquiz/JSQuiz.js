import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './jsquiz.scss';
import data from '../../quizdata.json';
import { applyAnswerClick, applyClasses } from '../common';

let count = 0;
const JSQuiz = () => {
  let history = useHistory();
  const [questions, setQuestions] = useState(data.quiz);
  const [showQuestion, setShowQueston] = useState([questions[0]]);
  const [saveAnswers, setSaveAnswers] = useState({
    correct: [],
    incorrect: []
  });
  const [selected, setSelected] = useState({
    selectedRow: {},
    selectedAns: {},
    disable: false
  });

  const selectAnswer = (qNo, row) => {
    let getSelectedQ = questions.filter(question=> question.id===qNo);
    console.log(getSelectedQ);
    setSelected({...selected, 
      selectedAns: row,
      selectedRow: getSelectedQ[0],
      disable: true
    });
  }
  const showNextQuestion = () => {
      if(count < questions.length) {
       let nextQuestion = questions[count+1];
       setShowQueston([nextQuestion])
       count++;
      }
      
     const {selectedRow, selectedAns } = selected;
     selectedRow.userSelectedAns = selectedAns;
     if(selectedRow.answerId === selectedAns.id) {
           setSaveAnswers({...saveAnswers, correct: [...saveAnswers.correct ,selectedRow]})
     } else {
      setSaveAnswers({...saveAnswers, incorrect: [...saveAnswers.incorrect ,selectedRow]})
     }     
  }
  const submitQuestion = () => {
    const {selectedRow, selectedAns } = selected;
    selectedRow.userSelectedAns = selectedAns;
    let correctUpdate = [...saveAnswers.correct];
    let incorrectUpdate = [...saveAnswers.incorrect];
    if(selectedRow.answerId === selectedAns.id) {
       correctUpdate = [...saveAnswers.correct, selectedRow];
       setSaveAnswers({...saveAnswers, correct: correctUpdate})
    } else {
       incorrectUpdate = [...saveAnswers.incorrect, selectedRow];
       setSaveAnswers({...saveAnswers, incorrect: incorrectUpdate})
    }   
    history.push({
      pathname: '/results',
      state: { quizData: {correctUpdate, incorrectUpdate}}
    });
  }
  
  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Javascript quiz</h1>
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
        <div style={{display: 'flex', justifyContent: "flex-end"}}>
            {count + 1 < questions.length &&
               <button type="button" className="my-5 btn btn-info" 
                 onClick={showNextQuestion}>
                 Next Question
               </button>
            }
            { count + 1 === questions.length &&
               <button type="button" className="my-5 btn btn-primary"
               onClick={submitQuestion}>
               Submit quiz
             </button>
            }
        </div>
      </div>
    </div>
  );
};

function Cards({question, options, id, 
  snippet, selectAnswer, selected, questions}){
  const { selectedAns, selectedRow } = selected;
   return (
    <div className={"my-3 card shadow"}>
      <div className="card-header alignHeader">
       <span className="badge badge-light text-info">{id}.  {question} </span> 
        <span className="quiz-count">{count + 1}/{ questions.length}</span>
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
          <span className="badge badge-light text-info">{option.id}  -</span> 
          {option.title}
        </p>
        )}
    </div>
  </div>
   )
}
export default JSQuiz;
