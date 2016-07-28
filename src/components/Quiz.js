import React from "react";
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import logo from '../svg/logo.svg';

function Quiz(props) {

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
            answerType="sony"
            answerContent="apple"
            userAnswer=""
            onAnswerSelected=""
          />
          <AnswerOption
            answerType="nintendo"
            answerContent="pear"
            userAnswer="nintendo"
            onAnswerSelected=""
          />
          <AnswerOption
            answerType="microsoft"
            answerContent="orange"
            userAnswer=""
            onAnswerSelected=""
          />
        </ul>
      </div>
    </div>
  );

}

Quiz.propTypes = {
  answer: React.PropTypes.string.isRequired,
  answerOptions: React.PropTypes.array.isRequired,
  counter: React.PropTypes.number.isRequired,
  question: React.PropTypes.string.isRequired,
  questionId: React.PropTypes.number.isRequired,
  questionTotal: React.PropTypes.number.isRequired,
  onAnswerSelected: React.PropTypes.func.isRequired
};

export default Quiz;
