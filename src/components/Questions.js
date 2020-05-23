import React, { Component } from 'react';
import quizQuestions from '../questions';
import Answers from './Answers';
export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      questionTotal: 0,
      answersCount: {},
      questions: quizQuestions,
    };
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.handleSelectedAnswer = this.handleSelectedAnswer.bind(this);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }
  setUserAnswer(answer) {
    this.setState((state) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answers: answer,
    }));
  }
  handleSelectedAnswer(e) {
    this.setUserAnswer(e);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(), 300);
    }
  }
  renderAnswerOptions(key) {
    return (
      <Answers
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={this.state.answer}
        questionId={this.state.questionId}
        onAnswerSelected={this.handleSelectedAnswer}
      />
    );
  }
  shuffleAnswer(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  componentDidMount() {
    const shuffledAnswer = quizQuestions.map((question) =>
      this.shuffleAnswer(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswer[0],
    });
    console.log(shuffledAnswer[0]);
  }
  setNextQuestion() {
    let counter = this.state.counter + 1;
    console.log(counter);
    this.setState({
      counter: counter,
      question: quizQuestions[counter].question,
      answerOptions:
        quizQuestions[counter].answers || quizQuestions[counter][1].answers,
      answer: '',
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.question}</h1>
        <h2>
          {this.state.answerOptions.map((answer) =>
            this.renderAnswerOptions(answer)
          )}
        </h2>
        <button onClick={this.setNextQuestion}></button>
      </div>
    );
  }
}
