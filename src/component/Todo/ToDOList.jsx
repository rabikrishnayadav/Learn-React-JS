import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ListComp from './ListComp';

function ToDOList() {

    const [item, setItem] = useState('');
    const [newitem, setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
    };

    const listOfItem = () => {
        setNewItem( (prevValue) => {
            return [...prevValue, item];
        });
        setItem('');
    };
  return (
    <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1> ToDo List</h1>
                <br />
                <input type="text" placeholder='Add An Items' onChange={itemEvent}  value={item} />
                <Button className='newBtn' onClick={listOfItem}>
                <AddCircleIcon />
                </Button>
                <br />
                <ol>
                    {newitem.map( (val) => {
                        return <ListComp text={val} />
                    })}
                </ol>
            </div>
        </div>
    </>
  );
};

export default ToDOList;