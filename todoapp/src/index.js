import React from "react";
import ReactDom from "react-dom";
import "./index.css";
/*import todolist file*/

//import TodoList from "./TodoList";

const name = "Gilbert Perez";
const element = <h1>Hello, {name}</h1>;


var destination = document.querySelector("#container");

ReactDom.render(
    <div>
        <p>Hello world!</p>
        {element}
    </div>,
    destination
);