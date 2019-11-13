import React, { Component } from "react"; //imrc

class MovieL extends Component {
  //cc

  state = {};
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "#2C3439", //"#2b2c45"
      padding: "20px",
      fontFamily: "Arial",
      textAlign: "center",
      fontWeight: "bold",
      fontstyle: "italic",
      textDecorationLine: "underline",
      marginTop: "0px",
      marginBottom: "0px"
    };
    const bstyle = {
      color: "white",
      alignItems: "center",
      backgroundColor: "Maroon", //"#2b2c45"
      padding: "12px",
      fontFamily: "Arial",
      fontstyle: "italic",
      marginTop: "0px",
      marginBottom: "0px",
      display: "inline - block"
    };
    return (
      <div>
        <h1 style={mystyle}>Movie List</h1>
        <table class="table table-bordered">
          <table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Type</th>
                <th scope="col">IMBd ID</th>
                <th scope="col">Title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>movie</td>
                <td>tt4154756</td>
                <td>Avengers: Infinity War (Plus Bonus Content)</td>
              </tr>
              <tr>
                <th>2</th>
                <td>movie</td>
                <td>tt4154796</td>
                <td>Marvel Studios' Avengers: Endgame (With Bonus)</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>movie</td>
                <td>tt2283362</td>
                <td>Jumanji: Welcome To The Jungle</td>
              </tr>
            </tbody>
          </table>
        </table>
        <button style={bstyle}>Import File</button>
      </div>
    );
  }
}

export default MovieL;
