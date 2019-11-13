import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Process from "./components/Process Report";
import MovieL from "./components/Movie List";
// <MovieL /> <Process />
const mystyle = {
  backgroundColor: "#2C3439", //"#2b2c45"
  padding: "30px"
};
ReactDOM.render(
  <div>
    <body1>
      <MovieL />
    </body1>
    <body2></body2>
    <footer style={mystyle}></footer>
  </div>,
  document.getElementById("root")
);
//ReactDOM.render(<MovieL />, document.getElementById("root"));
//ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();