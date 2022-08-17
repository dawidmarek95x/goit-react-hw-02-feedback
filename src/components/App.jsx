import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statictics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = (state) => {
    return Object.values(state).reduce((prev, el) => prev + el, 0);
  }

  countPositiveFeedbackPercentage = (good, total) => {
    const positivePercentage = Math.round((good / total) * 100);
    return (
      isNaN(positivePercentage)
        ? 0
        : positivePercentage
    )
  }

  feedbackIncrement = (evt) => {
    const key = evt.target.textContent;
    this.setState((state) => ({[key]: state[key] + 1}));
  }

  render() {
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback(this.state);
    const positive = this.countPositiveFeedbackPercentage(good, total);
    const btnNames = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={btnNames} 
            onLeaveFeedback={this.feedbackIncrement}
          />
        </Section>
        <Section title="Statistics">
          {(total !== 0)
            ? <Statistics 
                good={good} 
                neutral={neutral} 
                bad={bad} 
                total={total} 
                positivePercentage={positive}
              />
            : <Notification message="There is no feedback" />
          }
        </Section>
      </>
    );
  }
}
 
export default App;