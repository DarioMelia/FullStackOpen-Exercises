import React, { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stats = {
    good,
    neutral,
    bad,
  };

  const handleClick = (reviewType) => {
    switch (reviewType) {
      case "g":
        return () => setGood(good + 1);
      case "n":
        return () => setNeutral(neutral + 1);
      case "b":
        return () => setBad(bad + 1);
      default:
        return;
    }
  };

  return (
    <>
      <h1>Give FeedBack</h1>
      <Button onClick={handleClick("g")} text="good"></Button>
      <Button onClick={handleClick("n")} text="neutral"></Button>
      <Button onClick={handleClick("b")} text="bad"></Button>
      <Statistics stats={stats}></Statistics>
    </>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const StatLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);
const Statistics = ({ stats }) => {
  const { good, neutral, bad } = stats;
  let allFeedBack = good + neutral + bad;
  let average = getAverage();
  let positive = getPositivePer();
  function getAverage() {
    return (good + bad * -1) / allFeedBack;
  }
  function getPositivePer() {
    return (good / allFeedBack) * 100;
  }
  if (allFeedBack !== 0) {
    return (
      <>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatLine text="good" value={good} />
            <StatLine text="neutral" value={neutral} />
            <StatLine text="bad" value={bad} />
            <StatLine text="all" value={allFeedBack} />
            <StatLine text="average" value={average} />
            <StatLine text="positive" value={positive.toString().concat("%")} />
          </tbody>
        </table>
      </>
    );
  } else {
    return (
      <>
        <h1>Statistics</h1>
        <h3>No feedback was given</h3>
      </>
    );
  }
};

export default App;
