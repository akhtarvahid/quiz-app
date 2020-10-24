import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiCheckSquare } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { applyListOrdering } from '../common';
import './results.scss';


export default function ResultQuiz() {
    const location = useLocation();
    const {state} = location;
    let scored = state && state.questions.filter((que,i)=> que.answerId === state.answers[i].id).length;
    return (
      <>
        <div  className='container mt-5'>
         <h1 className='text-primary mb-3'>JavaScript Quiz</h1>
         <div className="alert alert-success" role="alert">
            Congrats! You just solved all the 10 Javascript challenges!
         </div>
         <>
         <h3 className="scored">Quiz results 
           {scored!==0 && 
           <span>Scored:
            <span className="percentage"> {scored}0%</span>
           </span>}
         </h3>
          {state && state.questions.map(({snippet, options, question,id, answerId},i) => 
          <div className="my-3 card shadow" key={i}>
            {state && state.answers[i].id === answerId ?  
              <FiCheckSquare className="checkmark correct"/>:
              <ImCross className="checkmark incorrect"/>
            }
            <div className="card-header alignHeader">
            <span className="quiz-count">
            <span>{ id }.</span> 
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
                  className='card-text options-text'>
                  <span className="text-info">{applyListOrdering(option)}  - </span> 
                  {option.title}
                </p>
                )}
            </div>
          </div>
         )}
        </>
        <Link to="/">
          <button type="button" className="btn btn-primary my-5">Try Again</button>
        </Link>
       </div>
       </>
    )
}