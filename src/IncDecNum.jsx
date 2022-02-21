import React, {useState} from "react";
import './index.css';
import AddIcon from '@material-ui/icons/Add';                   // for v4
import DeleteIcon from '@material-ui/icons/Delete';             // for v4
import Button from '@material-ui/core/Button';                   // for v4
import Tooltip from '@material-ui/core/Tooltip';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
// import Button from '@mui/material/Button';
// import AddCircleIcon from '@mui/icons-material/AddCircle';       // for v5
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const IncDecNum = () => {

    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    };
    
    const decNum = () => {
        if(num > 0) {
        setNum(num - 1);
        }else{
            alert('Zero Limit Reached');
            setNum(0);
        }
    };
    
    return(
        <>
            <div className="main_div" style={{backgroundColor:'#badc58'}}>
                <div className="center_div" style={{height: '60vh'}}>
                    <br /><br /><br /><br />
                    <h1 style={{backgroundColor:'#30336b'}}> {num} </h1>
                    <br />
                    <div className="btn_div">
                        <Tooltip title="Add">
                        <Button className='btn_green' onClick={incNum}><AddIcon /></Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                        <Button className='btn_red' onClick={decNum}><DeleteIcon /></Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IncDecNum;