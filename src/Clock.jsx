import React, { useState } from "react";
import './index.css';

function Clock(){

    const state = useState();
    const [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count + 1);
    };
    
    let currentTime = new Date().toLocaleTimeString();
    const [curtime, setcurtime] = useState(currentTime);
    const UpdateTime = () => {
        let updatedTime = new Date().toLocaleTimeString();
        setcurtime(updatedTime);
    }

    let time = new Date().toLocaleTimeString();
    const [curDTime, setCurDTime] = useState(time);

    const DigitalClock = () => {
        let DigitalTime = new Date().toLocaleTimeString();
        setCurDTime(DigitalTime);
    }
    setInterval(DigitalClock,1000);
    return(
        <div className='div'>
            <h1> {count} </h1>
            <button onClick={curtime}>Click Me</button><br /><br />
            <h1>{currentTime}</h1>
            <button onClick={UpdateTime}>get time</button>
            <h1>Digital Time: {curDTime} </h1>
        </div>
    );
}

export default Clock;
