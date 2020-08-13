import React, { Component } from "react";
import Title from "./components/Title"
import TableHead from "./components/TableHead"
import employees from "./EmployeeDirectory.json"


class App extends Component {
// Setting this.state.employees to the employees json array
state = {
  employees: employees
};


  render(){

    return(
      <div>
         <Title className="bg-success"> Employee Directory</Title>
        {this.state.employees.map(employee => (
          <TableHead
          img={employee.img}
          name={employee.Name}
          lastName={employee.LastName}
          email={employee.email}
          phone={employee.phoneNumber}
          department={employee.Department}
          />
        ))}
        
      </div>
     
    );

  }
  
}

export default App;
