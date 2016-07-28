import React, { Component } from 'react';
import quizQuestions from "./api/quizQuestions";
import Quiz from './components/Quiz';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        nintendo: 0,
        microsoft: 0,
        sony: 0
      },
      result: ''
    };
  }

  componentWillMount() {
    //this.props.quizQuestions.forEach((question) => arrayHelpers.shuffleArray(question.answers));
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers
    });
  }

  render() {
    return (
      <Quiz
        answer={this.state.userAnswer}
        answerOptions={this.state.answerOptions}
        counter={this.state.counter}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.onAnswerSelected}
      />
    );
  }

}

export default App;
