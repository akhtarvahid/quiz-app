import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JSQuiz from './components/jsquiz/JSQuiz';
import ResultQuiz from './components/resultquiz/ResultQuiz';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<JSQuiz />} />
          <Route exact path="/results" element={<ResultQuiz />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);