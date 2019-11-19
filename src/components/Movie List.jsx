import React, { Component } from "react"; //imrc
import { getMovies } from "../services/fakeMovieService";

class MovieL extends Component {
  //cc

  state = {
    movies: getMovies()
  };
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

    if (this.state.movies.length === 0)
      return (
        <div>
          <p style={mystyle}>There are no movies in the database</p>
          <button>Import File</button>
        </div>
      );

    return (
      <React.Fragment>
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
              {this.state.movies.map(movie => (
                <tr key={movie.id}>
                  <td></td>
                  <td>{movie.type}</td>
                  <td>{movie._id}</td>
                  <td>{movie.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </table>
        <button style={bstyle}>Import File</button>
      </React.Fragment>
    );
  }
}

export default MovieL;
