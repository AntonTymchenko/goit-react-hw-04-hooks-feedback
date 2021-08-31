import React from "react";

function Statistics({ good, neutral, bad, persentage }) {
  return (
    <ul>
      <li>Good: {good} </li>
      <li>Neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>total: {bad + neutral + good}</li>
      <li>Positive percentage: {persentage} %</li>
    </ul>
  );
}

export default Statistics;
