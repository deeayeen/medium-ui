import React from "react";
import logo from "./logo.svg";
import FadeIn from "react-fade-in";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TableExample from "./examples/TableExample";
import MapExample from "./examples/MapExample";
import NotifExample from "./examples/NotifExample";
import StickyExample from "./examples/StickyExample";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "sticky"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <FadeIn>
              <h1 style={{ color: "black", marginBottom: "90px" }}>
                React App
                <img
                  style={{ width: "100px" }}
                  src={logo}
                  className="App-logo"
                  alt="logo"
                />
              </h1>
            </FadeIn>
            <div
              class="d-flex justify-content-around align-items-center"
              style={{ width: "100vw", color: "black" }}
            >
              {this.state.view === "table" ? (
                <TableExample />
              ) : this.state.view === "map" ? (
                <MapExample />
              ) : this.state.view === "notif" ? (
                <NotifExample />
              ) : this.state.view === "sticky" ? (
                <StickyExample />
              ) : null}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
