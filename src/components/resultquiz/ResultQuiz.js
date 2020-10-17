import React from 'react';
import {useLocation} from 'react-router-dom';

export function ResultQuiz() {
    const location = useLocation();
    console.log(location);
    const { state } = location;
    return (
        <div  className='container mt-5'>
         <h1 className='text-primary mb-3'>Results</h1>
         <div>Congrats! You just solved all the 10 Javascript challenges!</div>
         <>
          <h3>Corrects</h3>
          {state && state.quizData.correctUpdate.map(q=> 
           <div className="card my-3" key={q.id}>
           <div className="card-header">
            {q.question}
           </div>
         </div>)}
        </>
        <>
        <h3>Incorrects</h3>
         {state && state.quizData.incorrectUpdate.map(q=> 
          <div className="card my-3" key={q.id}>
          <div className="card-header">
            {q.question}
          </div>
         </div>)}
        </>
       </div>
    )
}