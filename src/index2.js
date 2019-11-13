import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Outside from "./components/Outside";
import MovieL from "./components/Movie List";

const mystyle = {
  backgroundColor: "#2C3439", //"#2b2c45"
  padding: "30px"
};
ReactDOM.render(
  <div>
    <h1>
      <Outside />
    </h1>
    <body>
      <MovieL />
    </body>
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
