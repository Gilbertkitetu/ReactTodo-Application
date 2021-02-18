import React from "react";
import ReactDom from "react-dom";
import "./index.css";
/*import todolist file*/

//import TodoList from "./TodoList";

const name = "Gilbert Perez";
function tick() {


const element = (
    <div>
    <h1>Hello, {name}</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
        );

var destination = document.querySelector("#container");

ReactDom.render(
    <div>

        {element}



    </div>,
    destination
);
    }

        setInterval(tick, 1000);