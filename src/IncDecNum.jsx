import React, {useState} from "react";
import './index.css';

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
                        <button onClick={incNum}>Increm</button>
                        <button onClick={decNum}>Decrem</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IncDecNum;