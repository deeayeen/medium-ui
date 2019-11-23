import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import cogoToast from "cogo-toast";

export default class NotifExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button1: false,
      counter: 0
    };
  }
  success() {
    var positions = [
      "top-right",
      "bottom-right",
      "bottom-center",
      "bottom-left",
      "top-left",
      "top-center"
    ];
    if (this.state.counter === 0) {
      cogoToast.success("This is a success message", {
        position: positions[this.state.counter]
      });
    } else if (this.state.counter === 1) {
      cogoToast.info("This is a info message", {
        position: positions[this.state.counter]
      });
    } else if (this.state.counter === 2) {
      cogoToast.loading("This is a loading message", {
        position: positions[this.state.counter]
      });
    } else if (this.state.counter === 3) {
      cogoToast.warn("This is a warn message", {
        position: positions[this.state.counter]
      });
    } else if (this.state.counter === 4) {
      cogoToast.error("This is a error message", {
        position: positions[this.state.counter]
      });
    } else {
      cogoToast.success("This is a success message", {
        position: positions[this.state.counter]
      });
    }
    this.state.counter++;
  }
  render() {
    return (
      <>
        <div class="d-flex align-items-center">
          <div>
            <Button
              onClick={() => this.setState({ button1: true })}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </div>
          <div>
            <h3
              style={{
                margin: 0,
                marginLeft: 20,
                padding: 0,
                color: this.state.button1 ? "black" : "white"
              }}
            >
              Submitted
            </h3>
          </div>
        </div>
        <div class="d-flex">
          <Button
            onClick={() => this.success()}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </>
    );
  }
}
