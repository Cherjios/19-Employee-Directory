import React from "react";
import "./style.css";

function TableHead(props) {
    return (
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Img</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Department</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.img}</td>
                    <td>{props.name}</td>
                    <td>{props.LastName}</td>
                    <td>{props.email}</td>
                    <td>{props.phoneNumber}</td>
                    <td>{props.Department}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default TableHead;