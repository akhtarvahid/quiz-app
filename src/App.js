import React from 'react';
import { Link } from 'react-router-dom';
import './App.scss';
import JSQuiz from './components/jsquiz/JSQuiz';

const App = () => {
  return (
    <div  className='container mt-5'>
      <h1 className='text-primary mb-3'>Take your quiz</h1>
      <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            <Link className="btn btn-primary" to="/js">Javascript Test</Link>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            <Link className="btn btn-primary" to="/react">React Test</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default App;
