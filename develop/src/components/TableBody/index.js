import React from "react";
import "./style.css";

function TableBody(props) {
    return (
                <tr key={props.id}>
                    <td><img alt={props.Name} src={props.img} /></td>
                    <td>{props.Name}</td>
                    <td>{props.LastName}</td>
                    <td>{props.email}</td>
                    <td>{props.phoneNumber}</td>
                    <td>{props.DOB}</td>
                    <td>{props.Department}</td>
                </tr>
    );
}

export default TableBody;