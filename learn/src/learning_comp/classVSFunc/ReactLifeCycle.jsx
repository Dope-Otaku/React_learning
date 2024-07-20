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

    // this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      console.log("called timer");
    }, 3000);
  }
  render() {
    return <div>hello</div>;
  }
}

export default ReactLifeCycle;
