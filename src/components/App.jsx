import React from 'react';
import PropTypes from 'prop-types';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification';
import css from 'components/App.module.css';

export class App extends React.Component {
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
    const total = this.countTotalFeedback();

    return (
      <div className={css.widjetContainer}>
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        {total > 0 && (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}

        {total === 0 && <Notification message={'There is no feedback'} />}
      </div>
    );
  }
}

App.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
