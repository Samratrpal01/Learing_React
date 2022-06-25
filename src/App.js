import "./styles.css";
import React, { useState } from "react";

var headingtext = "inside out";
var color = "red";
var name = "Samrat Rahul Pal";
//name=prompt("Enter Your name");
export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  var count = 0;
  function likeClickHandler() {
    var newlikeCounter = likeCounter + 1;
    setLikeCounter(newlikeCounter);
  }
  return (
    <div className="App">
      <h1>TonyStark</h1>
      <h1 style={{ backgroundColor: "blue" }}>
        Welcome<span style={{ backgroundColor: "red" }}> {name}</span>
      </h1>
      <h2>Hii How are you</h2>
      <h3 style={{ backgroundColor: color }}>{headingtext}</h3>
      <button onClick={likeClickHandler}>Like Me!</button>
      <h1>you click it </h1>
      {likeCounter}
    </div>
  );
}
