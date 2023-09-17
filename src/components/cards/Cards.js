import React from 'react'
import { applyAnswerClick, applyClasses, applyListOrdering, applyMark } from '../common';
import { ImCheckmark } from 'react-icons/im';

function Cards({question, options, id, 
        snippet, selectAnswer, selected, questions, count
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

export default Cards;