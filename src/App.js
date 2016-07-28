import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import QuestionCount from './components/QuestionCount';
import AnswerOption from './components/AnswerOption';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Quiz</h2>
        </div>
        <div className="quiz">
          <QuestionCount
            counter={1}
            total={5}
          />
          <Question content="What is your favourite food?" />
          <ul className="answerOptions">
            <AnswerOption
              answerType="test"
              answerContent="apple"
              userAnswer=""
              onAnswerSelected=""
            />
            <AnswerOption
              answerType="test"
              answerContent="pear"
              userAnswer=""
              onAnswerSelected=""
            />
            <AnswerOption
              answerType="test"
              answerContent="orange"
              userAnswer=""
              onAnswerSelected=""
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
