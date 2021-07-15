import React from 'react'

let user = {
  firstname: "Navdeep",
  lastname: "Sharma",
};

function formatName(user) {
  return user.firstname + " " + user.lastname;
}

function getGreetings(user) {
  if (user) {
    return <h2> Hello, {formatName(user)} !</h2>;
  }
  return <h2>Hello, Stranger !</h2>;
}

function greetingsWithChildren(user) {
  return (
    <div>
      <h1>Hello, {formatName(user)}</h1>
      <h2>Good to see you here.</h2>
    </div>
  );
}

function helloWorld() {
  return React.createElement('h1', {className:'greetings'}, 'Hello World!')
}

const JSX = () => {
  const name = "Navdeep";
  const fbURL = "http://facebook.com";
  return (
    <>
      <h1> Hello {name} </h1>
      <h2> Hello {formatName(user)} !</h2>
      {getGreetings()}
      {getGreetings(user)}
      <a href="http://google.com" target="_blank">
        Google
      </a>
      <a href={fbURL} target="_blank">
        Facebook
      </a>
      {greetingsWithChildren(user)}
      {helloWorld()}
    </>
  );
};

export default JSX;
