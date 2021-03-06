import ReactDOM from 'react-dom';
import React from 'react';

function UserGreeting(props) {
  return <h1> Welcome back! </h1>;
}

function GuestGreeting(props) {
  return <h1> Please sign up! </h1>;
}

function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <button onClick={this.handleLogoutClick}> Logout </button>;
    } else {
      button = <button onClick={this.handleLoginClick}> Login </button>;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} /> {button}{' '}
      </div>
    );
  }
}

// ReactDOM.render(<LoginControl />, document.getElementById('root'));

function Mailbox(props) {
  let unreadMessages = props.unreadMessages;

  return (
    <div>
      <h1>Hello, </h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages</h2>
      )}
    </div>
  );
}

const messages = [];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// );

const WarningBanner = (props) => {
  if (!props.warn) {
    return null;
  }
  return <div>Warning!</div>;
};

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.state = { showWarning: true };
  }

  handleToggleClick() {
    this.setState((prevState) => ({
      showWarning: !prevState.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById('root'));

export { Greeting };
