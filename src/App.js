import React, { useState, useEffect } from 'react';
import './App.scss';
import data from './quizdata.json';

const App = () => {
  const [questions, setQuestions] = useState([]);
  console.log(data);
  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Javascript quiz</h1>
      {data.quiz.map(q=> 
        <div key={q.id}>
           <Cards {...q} />
         </div>  
       )}
      <span className="breadcrumb-item"/>
      <button type="button" className="my-5 btn btn-primary">Submit quiz</button>
    </div>
  );
};

function Cards({question, options, id, snippet}){
  console.log(question, options, snippet)
   return (
    <div className="my-3 card shadow">
    <div className="card-header">
    <span class="badge badge-light text-info">{id}.   </span>
      {question}
    </div>
    <div className="card-body">
    <p className="card-text">
    {snippet && <code>{snippet}</code> }
    </p>
    </div>
    <div className="card-body">
      {options.map(option=>
        <p key={option.id} className="card-text options-text">
          {/* <span class="badge badge-light text-info">{option.id}  )</span>  */}
          {option.title}
        </p>
        )}
    </div>
  </div>
   )
}
export default App;
