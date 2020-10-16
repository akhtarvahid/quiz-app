import React from 'react';
import {useLocation} from 'react-router-dom';

export function ResultQuiz() {
    const location = useLocation();
    console.log(location);
    return (
        <div  className='container mt-5'>
        <h1 className='text-primary mb-3'>Results</h1>
          
       </div>
    )
}