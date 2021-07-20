import React from "react";
import ReactDOM from "react-dom";

function Form() {
  function onSubmitHandler(evt) {
    evt.preventDefault();
    console.log("Form submitted...");
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <button type="submit">Submit</button>
    </form>
  );
}

// ReactDOM.render(<Form/>, document.getElementById('root'));

class LoggingButton extends React.Component {
  handleClick() {
    console.log("This is: ", this);
  }

  render() {
    return <button onClick={() => this.handleClick()}>Click Me</button>;
  }
}

ReactDOM.render(<LoggingButton/>, document.getElementById('root'))

export { Form, LoggingButton };
