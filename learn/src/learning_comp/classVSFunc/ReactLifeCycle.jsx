import React from "react";

//componentDidMount === useeffect properties in functional based components
//shouldComponentUpdate
//componentDidUpdate
//componentWillUnmount

setTimeout(() => {
  console.log("called timer outside");
}, 3000);

class ReactLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    // this.componentDidMount = this.componentDidMount.bind(this);
    this.increment = this.increment.bind(this);
  }

  //   there are two methods o call a new function like these
  //   increment() {
  //     this.setState((prev) => {
  //       return {
  //         count: prev.count + 1,
  //       };
  //     });
  //   }

  increment() {
    this.setState(() => {
      return {
        count: this.state.count + 1,
      };
    });
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("componentDidMount timer");
    }, 3000);
  }

  shouldComponentUpdate() {
    return true; //by default it is set to true so that ui changes can be seen although using this lalso the logic is still working but not getting updated in ui
  }

  componentDidUpdate() {
    setTimeout(() => {
      console.log("componentDidUpdate timer");
    }, 3000);
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}

export default ReactLifeCycle;
