import React from 'react';
import { Link } from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <div  className='container mt-5'>
      <h1 className='text-primary mb-3'>Take your quiz</h1>
      <div className="row">
      <div className="col-sm-6 my-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <Link className="btn btn-primary" to="/js">Javascript Test</Link>
          </div>
        </div>
      </div>
      <div className="col-sm-6 my-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <Link className="btn btn-primary" to="/react">React Test</Link>
          </div>
        </div>
      </div>
      <div className="col-sm-6 my-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <Link className="btn btn-primary" to="/css">CSS Test</Link>
          </div>
        </div>
      </div>
      <div className="col-sm-6 my-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <Link className="btn btn-primary" to="/html">HTML Test</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default App;
