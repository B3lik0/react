import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Content from "./Content.js";
import Total from "./Total.js";
// import Total from './Total.js'
const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const parts = [part1,part2,part3]
const exercises = [exercises1,exercises2,exercises3]
const App = () => {
  return (
    <div>
      <Header curso={course} />
      <Content parts={parts} exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
