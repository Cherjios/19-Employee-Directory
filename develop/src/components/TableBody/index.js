import React from "react";
import "./style.css";

function TableBody(props) {
    return (
            <tbody>
                <tr>
                    <td>{props.img}</td>
                    <td>{props.Name}</td>
                    <td>{props.LastName}</td>
                    <td>{props.email}</td>
                    <td>{props.phoneNumber}</td>
                    <td>{props.Department}</td>
                </tr>
            </tbody>
    );
}

export default TableBody;