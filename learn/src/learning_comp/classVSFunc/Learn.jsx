import React from "react";

// today we are going to learb the difference betweeen a class based component and a function based component

class Learn extends React.Component {
  //embedding props in parameter and super is used for to usable in parent class
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.Inc = this.Inc.bind(this);
  }

  Inc() {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  }

  render() {
    return (
      <>
        <p>Counter</p>
        <h1>this is class based compo and counter --{this.state.count}</h1>
        <button onClick={this.Inc}>Increment</button>
      </>
    );
  }
}

// const Learn = () => {
//   return (
//     <div>Learn</div>
//   )
// }

export default Learn;
