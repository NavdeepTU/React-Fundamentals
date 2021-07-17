import React from "react";
import ReactDOM from "react-dom";
import { Tick } from "./main-concepts/index";

// ReactDOM.render(<Render />, document.getElementById("root"));

function tick() {
  ReactDOM.render(<Tick />, document.getElementById("root2"));
}

setInterval(tick, 1000);