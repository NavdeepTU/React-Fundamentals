import React from "react";
import ReactDOM from "react-dom";

// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

// 1. Function Component

function Welcome(props) {
  return (
    <div>
      <p>Function Component</p>
      <h1>Hello, {props.name}</h1>
    </div>
  );
}

// 2. Class Component

class WelcomeClass extends React.Component {
  render() {
    return (
      <div>
        <p>Class Component</p>
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}

function App() {
  return (
    <div>
    <Welcome name="Sara" />
    <Welcome name="Chahal" />
    <Welcome name="Edite" />
    </div>
    );
}

// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(
//   <WelcomeClass name="Navdeep" />,
//   document.getElementById("root2")
// );

// Extracting Components
// A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be extracted to a separate component.

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};


ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById("root")
);


export { Welcome };
