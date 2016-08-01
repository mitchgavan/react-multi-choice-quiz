import React, { Component } from 'react';
import quizQuestions from "./api/quizQuestions";
import Quiz from './components/Quiz';
import logo from './svg/logo.svg';
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

    // Bind event handlers for the render method in the constructor.
    // Why? A bind call in the render path creates a brand new function on every single render #perfmatters
    this.setUserAnswer = this.setUserAnswer.bind(this);
    this.setNextQuestion = this.setNextQuestion.bind(this);
    //this.getResults = this.getResults.bind(this);
    //this.setResults = this.setResults.bind(this);
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    //this.props.quizQuestions.forEach((question) => arrayHelpers.shuffleArray(question.answers));
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers
    });
  }

  handleAnswerSelected(event) {

    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
        setTimeout(this.setNextQuestion, 300);
    } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
    }

  }

  setUserAnswer(answer) {
    var updatedAnswersCount = Object.assign(
      {},
      this.state.answersCount,
      { [answer]: this.state.answersCount[answer] + 1 }
    );

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });
  }

  setNextQuestion() {
    var counter = this.state.counter + 1;
    var questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ''
    });
  }

  getResults() {
    var answersCount = this.state.answersCount;
    var answerCountValues = Object.keys(answersCount).map((key) => answersCount[key]);
    var maxAnswerCount = Math.max.apply(null, answerCountValues);

    return Object.keys(answersCount).filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length > 1) {
      this.setState({ result: 'Undetermined' });
    } else {
      this.setState({ result: result[0] });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <div>You prefer {this.state.result}</div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Quiz</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }

}

export default App;
