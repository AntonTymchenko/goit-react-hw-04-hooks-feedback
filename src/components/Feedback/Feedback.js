import React, { useState } from "react";
import Buttons from "./Buttons";
import Statistics from "./Statistics";
import Notification from "./Notification";
import Panel from "./Panel";
import s from "./Statistics.module.css";

const optionsForReaction = [
  { value: "Good", id: "id-1" },
  { value: "Neutral", id: "id-2" },
  { value: "Bad", id: "id-3" },
];

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseItems = (value) => {
    switch (value.toLowerCase()) {
      case "good":
        setGood((state) => state + 1);

        break;

      case "neutral":
        setNeutral((state) => state + 1);

        break;

      case "bad":
        setBad((state) => state + 1);

        break;
      default:
        return;
    }
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  }
  function persentage() {
    const total = countTotalFeedback();
    if (total === 0) {
      return good * 100;
    } else {
      return Math.floor((good * 100) / total);
    }
  }
  return (
    <div className={s.container}>
      <Buttons increaseItems={increaseItems} options={optionsForReaction} />
      <Panel title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            persentage={persentage()}
          />
        )}
      </Panel>
    </div>
  );
}

export default Feedback;
