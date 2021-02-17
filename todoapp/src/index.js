import React from "react";
import ReactDom from "react-dom";
import "./index.css";
/*import todolist file*/

import TodoList from "./TodoList";


var destination = document.querySelector("#container");

ReactDom.render(
    <div>
        <p>Hello world!</p>
        <TodoList/>
    </div>,
    destination
);