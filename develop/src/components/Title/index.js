import React from "react";
import "./style.css";

function Title(props) {
    return (
        <div class="jumbotron jumbotron-fluid bg-info">
            <div class="container">
                <h1 class="title">{props.children}</h1>
            </div>
        </div>
    );
}

export default Title;