import React, {useState} from 'react';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


const ListComp = (props) => {

    const [line, setLine] = useState(false);
    const cutIt = () => {
        setLine(true);
    }
  return (
    <>
        <div className="todo_style">
            <span onClick={cutIt}><RemoveCircleIcon className='deleteIcon' style={{cursor:'pointer'}} /></span>
            <li style={{textDecoration: line ?'line-through' : 'none'}}>{props.text}</li>
        </div>
    </>
  );
};

export default ListComp;