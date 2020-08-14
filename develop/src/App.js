import React, { Component } from "react";
import Title from "./components/Title"
import TableHead from "./components/TableHead"
import employees from "./EmployeeDirectory.json"
import TableBody from "./components/TableBody";
import Form from "./components/Form";


class App extends Component {
// Setting this.state.employees to the employees json array
state = {
  employees: employees
};


  render(){

    return(
      <div>
         <Title className="bg-success"> Employee Directory</Title>
         <Form />
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
