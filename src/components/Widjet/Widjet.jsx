import React from 'react';
import PropTypes from 'prop-types';
import { Section } from 'components/Widjet/Section';
import { FeedbackOptions } from 'components/Widjet/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from 'components/Notification';
import css from 'components/Widjet/Widjet.module.css';

export class Widjet extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    let positiveFeedbackPercentage = 0;
    positiveFeedbackPercentage = (good * 100) / (good + neutral + bad);
    return parseInt(positiveFeedbackPercentage);
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.widjetContainer}>
        <Section title="Please Leave Feedback">
          <FeedbackOptions onLeaveFeedback={this.addFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
        <Notification
          message={'There is no feedback'}
          total={this.countTotalFeedback()}
        />
      </div>
    );
  }
}

Widjet.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
