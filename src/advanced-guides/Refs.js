import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Refs extends Component {
  constructor(props) {
    super(props);
    // using createRef()
    this.inputRef = React.createRef();
    // usinf callback refs
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
    console.log(this.cbRef);
    // this.inputRef.current.focus();
    console.log(this.inputRef);
  }
  clickHandler = () => {
    console.log(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
        <br />
        <input type="text" ref={this.setCbRef} />
      </div>
    );
  }
}

ReactDOM.render(<Refs />, document.getElementById('root'));

export default Refs;
