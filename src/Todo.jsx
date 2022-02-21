import React from "react";
import './index.css';

const Todo = () => {

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> Todo List</h1>
                    <br />
                    <div style={{flexDirection: 'row'}}>
                        <input type="text" placeholder="Add a Item"/>
                        <button>+</button>
                    </div>
                    <ol>
                        <li>first</li>
                    </ol>
                </div>
            </div>
        </>
    );

}

export default Todo;