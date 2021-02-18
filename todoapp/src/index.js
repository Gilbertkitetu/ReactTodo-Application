import React from "react";
import ReactDom from "react-dom";
import "./index.css";
/*import todolist file*/

//import TodoList from "./TodoList";

const name = "Gilbert Perez";
const element = <h1>Hello, {name}</h1>;

    function formatName(user){
        return user.firstName + ' ' + user.lastName;
    }
const user = {
        firstName: 'Gilbert',
    lastName: 'pere'
};
var destination = document.querySelector("#container");

ReactDom.render(
    <div>
        <p>Hello world! {formatName(user)}</p>
        {element}
    </div>,
    destination
);