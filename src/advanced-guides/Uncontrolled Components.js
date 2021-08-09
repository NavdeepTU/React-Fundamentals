import React from 'react';
import ReactDOM from 'react-dom';

class UncontrolledComponent extends React.Component {
  constructor() {
    super();
    this.email = React.createRef();
    this.password = React.createRef();
  }
  submit(e) {
    e.preventDefault();
    console.log(this.email.current.value);
    console.log(this.password.current.value);
  }
  render() {
    return (
      <div className="App">
        <h1>Uncontrolled Component</h1>
        <form
          onSubmit={(e) => {
            this.submit(e);
          }}
        >
          <input type="text" placeholder="enter email" ref={this.email} />{' '}
          <br />
          <br />
          <input
            type="password"
            placeholder="enter password"
            ref={this.password}
          />{' '}
          <br />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<UncontrolledComponent />, document.getElementById('root'));

export default UncontrolledComponent;
