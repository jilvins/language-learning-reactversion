import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {ContextProvider} from './contextProvider'

ReactDOM.render(
  <ContextProvider>
  <Router>
  <App />
  </Router>
  </ContextProvider>
   
  ,
  document.getElementById('root')
);

