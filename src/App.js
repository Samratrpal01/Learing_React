import "./styles.css";
import React, { useState } from "react";

var shoppingList = ["Milk", "Eggs", "Bread", "Flowers"];

export default function App() {
  const [object, setObject] = useState("");
  function listItemClickHandler(item) {
    console.log("clicked", item);
    var obj = item;
    setObject(obj);
  }
  function getBg(index) {
    if (index % 2 === 0) {
      return "white";
    }
    return "grey";
  }
  return (
    <div className="App">
      <b>
        <h1>My Shopping List </h1>
        <ul type="square">
          {shoppingList.map(function (item, index) {
            return (
              <li
                key={item}
                onClick={() => listItemClickHandler(item)}
                style={{ background: getBg(index) }}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <h3>"Clicked Item is"{object}</h3>
      </b>
    </div>
  );
}
