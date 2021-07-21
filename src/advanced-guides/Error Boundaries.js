// Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

import React from "react";
import ReactDOM from "react-dom";

const MyWidget = (props) => {
  if (props.user === "Navdeep") {
    throw new Error("Navdeep you are not allowed !");
  }
  return (
    <div>
      <h1>Hello, {props.user}!</h1>
      <h2>No error</h2>
    </div>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h3>Somthing unexpected occured</h3>;
    }

    return this.props.children;
  }
}

const App = () => {
  return (
    <ErrorBoundary>
      <MyWidget user={"Navdeep"} />
    </ErrorBoundary>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export { App };


// Note
// Error boundaries do not catch errors for:

//     Event handlers
//     Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
//     Server side rendering
//     Errors thrown in the error boundary itself (rather than its children)

