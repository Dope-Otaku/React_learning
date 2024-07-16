// let listen;
// function ValueDupli(e) {
//   listen = e.target.value;
//   return console.log(listen);
// }

import { useState } from "react";

const btnstyle = {
  padding: 20,
  backgroundColour: "#f1f1f1",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "row",
  margin: 10,
};

function Home() {
  const [inputValue, setInputValue] = useState(0);

  const increment = () => {
    // setInputValue((prevValue) => prevValue + 1); //there are two ways to do this and also this one is more efficient
    setInputValue(inputValue + 1);
  };

  const decrement = () => {
    setInputValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  return (
    <>
      <div>
        <input
          style={{ padding: 20, border: "1px solid rba(0,0,0,0.4" }}
          type="number"
          placeholder="Enter your name.."
          value={inputValue}
          readOnly //new thing learned
        />
        <button style={btnstyle} onClick={increment}>
          +
        </button>
        <button style={btnstyle} onClick={decrement}>
          -
        </button>
      </div>
    </>
  );
}

export default Home;
