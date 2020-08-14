import React, { Component } from "react";
import Title from "./components/Title"
import TableHead from "./components/TableHead"
import employees from "./EmployeeDirectory.json"
import TableBody from "./components/TableBody";



class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees: employees,
    value : ""
  };

  handleInputChange = event =>{
    this.setState({value: event.target.value});
    // const name = event.target.name;

    // this.setState({
    //   [name]:value
    // });
    console.log(this.state);
    console.log(this.state.value);

    // Render new obj with value
    let newOBj = employees.filter(function(employee){
      return employee.Name === event.target.value || employee.LastName === event.target.value;
    });

    console.log(newOBj);

    this.setState({employees: newOBj})

  }


  render() {

    return (
      <div className="container">
        <Title className="bg-success"> Employee Directory</Title>

        <div>
          <form>
            <input className="form-control form-control-lg"
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleInputChange}
              type="text"
            />
          </form>
        </div>
        <br />
        <TableHead>
          {this.state.employees.map(employee => (
            <TableBody
              img={employee.img}
              Name={employee.Name}
              LastName={employee.LastName}
              email={employee.email}
              phoneNumber={employee.phoneNumber}
              Department={employee.Department}
            />
          ))}
        </TableHead>
      </div>

    );

  }

}

export default App;
