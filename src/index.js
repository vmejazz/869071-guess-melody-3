import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

const MAX_ERROR = 5;

ReactDOM.render(
    <App errorCount={MAX_ERROR}/>,
    document.getElementById(`root`)
);
