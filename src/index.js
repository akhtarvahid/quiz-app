import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, 
    Switch, Route} from 'react-router-dom';
import JSQuiz from './components/jsquiz/JSQuiz';
import ResultQuiz from './components/resultquiz/ResultQuiz';

ReactDOM.render(
 <Router>
    <Switch>
      <Route exact path="/" component={JSQuiz} />
      <Route exact path="/results" component={ResultQuiz} />
    </Switch>
  </Router>
, document.getElementById('root'));
