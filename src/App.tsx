import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import LoadingPage from './components/LoadingPage/LoadingPage'

interface Props{
}


class App extends Component<Props>{

  render(){
    return(
      <Router basename="https://kei95.github.io/KeiFolio-Portfolio-">
        <Route exact path="/MainPage" component={MainPage} />
        <Route exact path="/" component={LoadingPage} />
      </Router>
    )}
}

export default App;
