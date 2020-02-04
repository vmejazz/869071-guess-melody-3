import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

const MAX_ERROR = 3;

ReactDOM.render(
    <App maxError={MAX_ERROR}/>,
    document.getElementById(`root`)
);
