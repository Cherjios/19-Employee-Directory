import React from "react";
import "./style.css";

function TableHead(props) {
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Img</th>
                    <th scope="col">Name
                    <span onClick={() => props.SortByName} className="">
                    (&uarr;)
                    </span></th>
                    <th scope="col">Last Name</th>
                    <th scope="col">email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Department</th>
                </tr>
            </thead>
            {props.children}
        </table>
    );
}

export default TableHead;