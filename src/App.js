import { useState } from "react";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import Feedback from "./components/Feedback/Feedback";

const App = () => {
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const {good, neutral, bad} = stats;

  const handleIncrementStat = ({target: {textContent} }) => 
  setStats((prState) => ({
    ...prState,
    [textContent]: stats[textContent] + 1,
  }));

const countTotalFeedback = () => {
const result = good + neutral + bad;
return result;
};

const countPositiveFeedbackPercentage = () =>
Math.round(((good * 100) / countTotalFeedback()) * 10) / 10;

  return (
    <Container>
      <Section title="Please leave feedback">
        <Feedback
        options={Object.keys(stats)}
        onLeaveFeedback={handleIncrementStat}
        />
      </Section>

      <Section title="Statistics">
      <Statistics 
      good={good} 
      neutral={neutral} 
      bad={bad} 
      total={countTotalFeedback} 
      positivePercentage={countPositiveFeedbackPercentage}
      />
     </Section>
    </Container>
  );
};

export default App;