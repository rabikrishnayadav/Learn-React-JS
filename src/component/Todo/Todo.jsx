import React, { useState } from "react";
import '../../index.css'
import TodoData from "./TodoData";

const Todo = () => {

    const [inputList, setInputList] = useState('');
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    
    const listofItem = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList('');
    };

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        });
    };

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> Todo List</h1>
                    <br />
                    <div style={{flexDirection: 'row'}}>
                        <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent}/>
                        <button onClick={listofItem}>+</button>
                    </div>
                    <ol>
                        {items.map((itemval, index) => {
                           return <TodoData text={itemval} key={index} id={index} onSelect={deleteItems} />;
                        })}
                    </ol>
                </div>
            </div>
        </>
    );

}

export default Todo;