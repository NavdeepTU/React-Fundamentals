// import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'
// import { Welcome } from "./main-concepts/04 Components and Props";
// import { Clock } from "./main-concepts/05 State and Lifecycle";
// import { Form, LoggingButton } from "./main-concepts/06 Handling Events";
// import { App } from "./advanced-guides/Error Boundaries";
// import { Greeting } from "./main-concepts/07 Conditional Rendering";
// import {
//     NumberList
// } from "./main-concepts/08 Lists and Keys";
// import UncontrolledComponent from "./advanced-guides/Uncontrolled Components";

// import Refs from "./advanced-guides/Refs";
import ClickCounter from './advanced-guides/hoc/click-counter';
import HoverCounter from './advanced-guides/hoc/hover-counter';
import UseRefBasics from './hooks/1-useRef-basics';

// ReactDOM.render(<Render />, document.getElementById("root"));
// ReactDOM.render(<App increment = {1} />, document.getElementById("root"));

// function tick() {
//   ReactDOM.render(<Tick />, document.getElementById("root2"));
// }

// setInterval(tick, 1000);

// ReactDOM.render(
//   <>
//     <ClickCounter name="Ayush" />
//     <HoverCounter />
//   </>,
//   document.getElementById('root')
// );
ReactDOM.render( < UseRefBasics / > ,
  document.getElementById('root')
);