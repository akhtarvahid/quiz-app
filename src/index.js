import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, 
    Switch, Route} from 'react-router-dom';
import App from './App';
import JSQuiz from './components/jsquiz/JSQuiz';
import ReactQuiz from './components/reactquiz/ReactQuiz';

ReactDOM.render(
 <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/js" component={JSQuiz} />
      <Route exact path="/react" component={ReactQuiz}/>
    </Switch>
  </Router>
, document.getElementById('root'));
