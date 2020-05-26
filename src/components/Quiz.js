import React, { Component } from 'react';
import quizQuestions from '../questions';
import Answers from './Answers';
import ChefResult from './ChefResult';
import CleanerResult from './CleanerResult';
import HoarderResult from './HoarderResult';
import Undetermined from './Undetermined';
import '../scss/style.scss';
export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
    };

    this.handleSelectedAnswer = this.handleSelectedAnswer.bind(this);
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswerCount
    );
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
    this.setUserAnswer(e.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }
  renderAnswerOptions(key) {
    return (
      <Answers
        key={key.content || key.image}
        answerContent={key.content || key.image}
        img={key.image}
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

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

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
  }
  setNextQuestion() {
    let counter = this.state.counter + 1;
    let questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions:
        quizQuestions[counter].answers ||
        quizQuestions[counter][1].answers ||
        quizQuestions[counter].answers.map((answ) => answ.type),
      answer: '',
    });
  }
  renderResults() {
    if (this.state.result === 'Chef') {
      return <ChefResult quizResult={this.state.result} />;
    } else if (this.state.result === 'Obsessive Cleaner') {
      return <CleanerResult quizResult={this.state.result} />;
    } else if (this.state.result === 'Hoarder') {
      return <HoarderResult quizResult={this.state.result} />;
    } else {
      return <Undetermined />;
    }
  }
  render() {
    return (
      <div>
        <h1>{!this.state.result.length ? this.state.question : ''}</h1>
        <h2 className="answerOptions">
          {this.state.result
            ? this.renderResults()
            : this.state.answerOptions.map((answer) =>
                this.renderAnswerOptions(answer)
              )}
        </h2>
      </div>
    );
  }
}
