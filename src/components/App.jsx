import React, { Component } from 'react';
import styles from './App.module.scss';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statictics/Statistics';

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

  render() {
    const {title} = styles;
    const btnNames = Object.keys(this.state).filter(n => (n !== "total" && n !== "positive"));
    const {good, neutral, bad, total, positive} = this.state;

    return (
      <>
        <h2 className={title}>Please leave feedback</h2>
        <FeedbackOptions options={btnNames} onLeaveFeedback={this.feedbackIncrementHandler} />
        <h2 className={title}>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positive}/>
      </>
    );
  }
}
 
export default App;