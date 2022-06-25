import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😂": "Face with tears of joy",
  "💕": "Friend love",
  "❤️": "Real Heart",
  "👌": "Nice",
  "☺️": "Cute Smile",
  "😉": "winkling face",
  "😊": "Normal Smile",
  "😊": "Sad",
  "😒": "Unamused Face"
};
//name=prompt("Enter Your name");
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiHandler} />
      <h2>"😂 ❤️ 👌 💕 😊 😉 ☺️ 😒 "</h2>
      <h2>{meaning}</h2>
    </div>
  );
}
