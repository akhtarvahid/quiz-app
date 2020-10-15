import React, { useState } from 'react';
import './jsquiz.scss';
import data from '../../quizdata.json';

let showQuestion = [];
let count = 0;
const JSQuiz = () => {
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

    // let updateOptions = getSelectedQ[0].options.map(option=> option.id === row.id ? ({...option, correct: true}): option);
    // console.log(updateOptions);
    // let updateQuestions = questions.map(q=> q.id === getSelectedQ[0].id ? ({...q, options: updateOptions}): q);
    // console.log(updateQuestions);
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
  console.log(saveAnswers, count,  questions.length);
  
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
               <button type="button" className="my-5 btn btn-info" onClick={showNextQuestion}>
                 Next Question
               </button>
            }
            { count + 1 === questions.length &&
               <button type="button" className="my-5 btn btn-primary">
               Submit quiz
             </button>
            }
        </div>
      </div>
    </div>
  );
};

function Cards({question, options, id, 
  snippet, selectAnswer, selected, questions, saveAnswers}){
    const { correct, incorrect } = saveAnswers;
    let isSelected = (correct && correct.length) || (incorrect && incorrect.length)
  const { selectedAns, selectedRow, disable } = selected;
   return (
    <div className={"my-3 card shadow"}>
      <div className="card-header alignHeader">
       <span className="badge badge-light text-info">{id}.  {question} </span> 
        <span>{count + 1}/{ questions.length}</span>
      </div>
    <div className="card-body">
      <p className="card-text">
      {snippet && <code>{snippet}</code> }
      </p>
    </div>
    <div className="card-body">
      {options.map(option=>
        <p key={option.id} 
        className={Object.keys(selectedAns).length !== 0 ? 
          option.correct === true &&
          option.id === selectedAns.id && 
          id === selectedRow.id ? 
          'card-text options-text correct' :
           (option.id === selectedAns.id && 
          id === selectedRow.id) ? 'card-text options-text incorrect': 
          'card-text options-text' :
          'card-text options-text'}
          onClick={()=>( Object.keys(selectedAns).length !== 0 &&
          (option.id !== selectedAns.id && 
          id === selectedRow.id)) ? null : selectAnswer(id, option)}>
          <span className="badge badge-light text-info">{option.id}  )</span> 
          {option.title}
        </p>
        )}
    </div>
  </div>
   )
}
export default JSQuiz;
