import React, { Component } from "react";
import Title from "./components/Title"
import TableHead from "./components/TableHead"
import employees from "./EmployeeDirectory.json"
import TableBody from "./components/TableBody";



class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees: employees,
    value: "",
    sorted: false
    
  };

  SortByName = () => {
    if(!this.state.sorted){
      this.setState({ employees: employees.sort((a, b) => (a.Name > b.Name) ? 1 : (a.Name === b.Name) ? ((a.LastName > b.LastName) ? 1 : -1) : -1) })
    // console.log(this.state.employees);
    this.setState({sorted:true});
    }else{
      this.setState({ employees: employees.sort((a, b) => (a.Name < b.Name) ? 1 : (a.Name === b.Name) ? ((a.LastName < b.LastName) ? 1 : -1) : -1) })
    // console.log(this.state.employees);
    this.setState({sorted:false})
    }
  }

  SortByLastName = () => {
    if(!this.state.sorted){
      this.setState({ employees: employees.sort((a, b) => (a.LastName > b.LastName) ? 1 : (a.LastName === b.LastName) ? ((a.LastName > b.LastName) ? 1 : -1) : -1) })
    // console.log(this.state.employees);
    this.setState({sorted:true});
    }else{
      this.setState({ employees: employees.sort((a, b) => (a.LastName < b.LastName) ? 1 : (a.LastName === b.LastName) ? ((a.Name < b.Name) ? 1 : -1) : -1) })
    // console.log(this.state.employees);
    this.setState({sorted:false})
    }
  }

  SortByEmail = () => {
    if(!this.state.sorted){
      this.setState({ employees: employees.sort((a, b) => (a.email > b.email) ? 1 : (a.email === b.email) ? ((a.Name > b.Name) ? 1 : -1) : -1) })
    // console.log(this.state.employees);
    this.setState({sorted:true});
    }else{
      this.setState({ employees: employees.sort((a, b) => (a.email < b.email) ? 1 : (a.email === b.email) ? ((a.email < b.email) ? 1 : -1) : -1) })
    // console.log(this.state.employees);
    this.setState({sorted:false})
    }
  }

  SortByPhoneNumber= () => {
    if(!this.state.sorted){
      this.setState({ employees: employees.sort((a, b) => (a.phoneNumber > b.phoneNumber) ? 1 : (a.phoneNumber === b.honeNumber) ? ((a.phoneNumber > b.phoneNumber) ? 1 : -1) : -1) })
    // console.log(this.state.employees);
    this.setState({sorted:true});
    }else{
      this.setState({ employees: employees.sort((a, b) => (a.phoneNumber < b.phoneNumber) ? 1 : (a.phoneNumber === b.phoneNumber) ? ((a.phoneNumber < b.phoneNumber) ? 1 : -1) : -1) })
    // console.log(this.state.employees);
    this.setState({sorted:false})
    }
  }


  handleInputChange = event => {
    this.setState({ value: event.target.value });
    // const name = event.target.name;

    // this.setState({
    //   [name]:value
    // });
    console.log(this.state);
    console.log(this.state.value);

    // Render new obj with value
    let newOBj = employees.filter(function (employee) {
      return employee.Name.toLowerCase() === event.target.value.toLowerCase() || employee.LastName.toLowerCase() === event.target.value.toLowerCase()
        || employee.email === event.target.value || employee.phoneNumber === event.target.value || employee.Department === event.target.value
        || employee.Name.toLowerCase() + " " + employee.LastName.toLowerCase() === event.target.value.toLowerCase() || employee.DOB === event.target.value;
    });

    console.log(newOBj);

    this.setState({ employees: newOBj })

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
        <TableHead
          SortByName={this.SortByName}
          SortByLastName={this.SortByLastName}
          SortByEmail={this.SortByEmail}
          SortByPhoneNumber={this.SortByPhoneNumber}
        >
          <tbody>
            {this.state.employees.map(employee => (
              <TableBody
                key={employee.id}
                img={employee.img}
                Name={employee.Name}
                LastName={employee.LastName}
                email={employee.email}
                phoneNumber={employee.phoneNumber}
                DOB={employee.DOB}
                Department={employee.Department}
              />
            ))}
          </tbody>
        </TableHead>
      </div>

    );

  }

}

export default App;
