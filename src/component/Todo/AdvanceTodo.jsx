import React from 'react';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';    
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

const AdvanceTodo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if(!inputData){
            alert('fill the data');
        }else if(inputData && !toggleSubmit ){
            setItems(
                items.map((elem) => {
                    if(elem.id == isEditItem){
                        return{...elem, name:inputData}
                    }return elem;
                })
            );
            setToggleSubmit(true);
            setInputData('');
            setIsEditItem(null);
        }else{
            const allInputData = {id: new Date().getTime().toString(), name: inputData}
            setItems([...items, allInputData]);
            setInputData('');
        }
    };

    const deleteItem = (index) => {
        const updateItems = items.filter((elem) => {
            return index !== elem.id;
        });
        setItems(updateItems);
    };

    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id == id
        });
        setToggleSubmit(false);
        setInputData(newEditItem.name);
        setIsEditItem(id);
    };

    const removeAll = () => {
        setItems([]);
    }


  return (
    <>
    <div className="main_div" style={{background:'lightblue'}}>
        <div className="center_div"><br />
            <figure>
                <h2> Advance ToDo</h2>
                <figcaption>Add your List Here 👈</figcaption>
            </figure>
            <div className="addItems">
                <input type="text" placeholder='✍️ Add Items ...' value={inputData} onChange={(event) => setInputData(event.target.value)} />
                <div className="btn_div">
                {
                    toggleSubmit ? <Tooltip title="Add">
                    <Button className='btn_green' style={{background:'lightgreen'}} onClick={addItem}><AddCircleIcon /></Button>
                </Tooltip> : <Tooltip title="Update Item"><Button className='btn_green' style={{background:'orange'}}><EditIcon /></Button></Tooltip>
                }
                    
                </div>
                
            </div>
            <div className="showItems">
            {items.map((elem) => {
                return(
                    <div className="eachItem" key={elem.id}>
                        <div className="row">
                            <div className="col-7">
                                <h3>{ elem.name }</h3>
                            </div>
                            <div className="col-5">
                                <div className="btn_div">
                                    <div className="row">
                                        <div className="col-6">
                                            <Tooltip title="Edit Item">
                                            <Button className='btn_green' style={{background:'yellow',color:'black'}} onClick={() => editItem(elem.id)}><EditIcon /></Button>
                                            </Tooltip>
                                        </div>
                                        <div className="col-6">
                                            <Tooltip title="Delete Item">
                                            <Button className='btn_green' style={{background:'red'}} onClick={() => deleteItem(elem.id)}><DeleteIcon /></Button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
            <div className="showItems">
                <div className="btn_div">
                    <Button className="btn effect04" data-sm-link-text='Remove All' onClick={removeAll}>
                    <span>CHECK LIST</span>
                    </Button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default AdvanceTodo;