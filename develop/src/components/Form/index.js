import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form>
          <input  className="form-control form-control-lg"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default Form;
