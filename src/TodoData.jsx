import React from "react";
import './index.css';

const TodoData = (props) => {

    return(
    <>
        <div className="todo_style">
            <button className="fa-times" onClick={() => {
                props.onSelect(props.id);
            }}>x</button>
            <li> {props.text} </li>
        </div>
    </>
    );
}

export default TodoData;