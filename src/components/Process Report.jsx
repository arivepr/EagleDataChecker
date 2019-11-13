import React, { Component } from "react"; //imrc

class ProcessR extends Component {
  //cc

  state = {
    //defauilt value of the date time
    date: "0/0/00 0:00:00"
  };
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      date:
        month + "/" + date + "/" + year + " " + hours + ":" + min + ":" + sec
    });
  }
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
    const mystyle2 = {
      color: "white",
      backgroundColor: "#2C3439", //"#2b2c45"
      padding: "12px",
      fontFamily: "Arial",
      fontstyle: "italic",
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
        <h1 style={mystyle}>Process Report</h1>
        <p style={mystyle2}>REPORT ID: 123456789</p>
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
                <td class="bg-success">
                  Avengers: Infinity War (Plus Bonus Content)
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>movie</td>
                <td>tt4154796</td>
                <td class="bg-danger">
                  Marvel Studios' Avengers: Endgame (With Bonus)
                </td>
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
        <h5>Positive Process Count: 1</h5>
        <h5>Negative Process Count: 1</h5>
        <h5>Total: 3</h5>
        <button style={bstyle}>Export</button>
        <button style={bstyle}> Report Logger</button>
        <h4 style={{ fontSize: 20, marginTop: 16, color: "red" }}>
          Compiled: {this.state.date}
        </h4>
        <footer style={mystyle2}></footer>
      </div>
    );
  }
}

export default ProcessR;
