import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import '../components/App.css';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = type => {
    if (type === 'good') setGood(prev => prev + 1);
    if (type === 'neutral') setNeutral(prev => prev + 1);
    if (type === 'bad') setBad(prev => prev + 1);
  };

  const total = good + neutral + bad;

  const positivePercentage = total === 0 ? 0:Number(((good / total) * 100).toFixed(2));

  return (
    <div>
      <Section title="Please leave fedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
