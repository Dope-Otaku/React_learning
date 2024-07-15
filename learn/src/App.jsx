// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function MyComponent() {
  return <div>Souvik</div>;
}

function App() {
  return (
    <>
      <h1>
        hello my name is <MyComponent name={"raj"} />
      </h1>
      <h1>
        hello my name is <MyComponent name={"shobhik"} />
      </h1>
      <h1>
        hello my name is <MyComponent name={"sultan"} />
      </h1>
    </>
  );
}

export default App;
