import React, { Component } from 'react';
import styles from './App.module.scss';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  }

  countTotalFeedback = () => {
    this.setState(({good, neutral, bad}) => ({total: good + neutral + bad}));
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(({good, total}) => ({positive: Math.round((good / total) * 100)}));
  }

  feedbackIncrementHandler = (evt) => {
    this.feedbackIncrement(evt.target.textContent);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  feedbackIncrement = (key) => {
    this.setState((state) => ({[key]: state[key] + 1}));
  }

  goodFeedbackIncrement = () => {
    this.setState(({good}) => ({good: good + 1}));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  neutralFeedbackIncrement = () => {
    this.setState(({neutral}) => ({neutral: neutral + 1}));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  badFeedbackIncrement = () => {
    this.setState(({bad}) => ({bad: bad + 1}));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  render() {
    const {title, btns, stats, stats__item} = styles;
    const {good, neutral, bad, total, positive} = this.state;

    return (
      <>
        <h2 className={title}>Please leave feedback</h2>
        <button className={btns} onClick={this.feedbackIncrementHandler}>good</button>
        <button className={btns} onClick={this.feedbackIncrementHandler}>neutral</button>
        <button className={btns} onClick={this.feedbackIncrementHandler}>bad</button>
        <h2 className={title}>Statistics</h2>
        <ul className={stats}>
          <li className={stats__item}>Good: {good}</li>
          <li className={stats__item}>Neutral: {neutral}</li>
          <li className={stats__item}>Bad: {bad}</li>
          <li className={stats__item}>Total: {total}</li>
          <li className={stats__item}>Positive feedback: {positive}%</li>
        </ul>
      </>
    );
  }
}

// <h2 className={title}>Please leave feedback</h2>
/* {btnNames.map(n => (
  <button key={n} className={btns}>{n}</button>
))} */
 
export default App;