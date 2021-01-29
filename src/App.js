import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './components/header'
import Navbar from './components/navBar'
import MainPage from './pages/mainPage'
import LearnWords from './pages/learnWords'



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route>
          <LearnWords path="/words" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
