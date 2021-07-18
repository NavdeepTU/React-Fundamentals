import React from "react";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        meaningOfLife: 47+this.props.increment,
      };
    }

//   state = {
//     meaningOfLife: 47 + this.props.increment,
//   };

  handleClick = () => {
    // setState function is asynchronous
    this.setState(
      (prevState, prevProps) => {
        return { meaningOfLife: prevState.meaningOfLife + prevProps.increment };
      },
      () => console.log(this.state.meaningOfLife)
    );
  };

  render() {
    return (
      <div>
        <p> {this.state.meaningOfLife} </p>
        <button onClick={this.handleClick}>Update State </button>{" "}
      </div>
    );
  }
}

export default App;
