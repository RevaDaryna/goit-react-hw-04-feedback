import {useState} from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';

export default function App (){

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const options = {good, neutral, bad}

  const countTotalFeedback = () => {
    return good + neutral + bad
  };

  const leaveFeedback = type => {
    if(type === 'good'){
      setGood(state => state + 1)
    } else if (type === 'neutral'){
      setNeutral(state => state + 1)
    } else {setBad(state => state + 1)}
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.floor((good / total) * 100);
  };  

  return (
    <div>
      <Section title={'Please, leave your feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : ( 
          <Statistics
            value = {options}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={
              countPositiveFeedbackPercentage
            }
          />
        )}
      </Section>
    </div>
  );

}


