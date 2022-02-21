import React, {useState} from "react";
import './index.css';

const Forms = () => {
    const [inputCurValue, setNewInputValue] = useState({
        fullName: '',
        email: '',
        password: '',
        number: ''
    });

    const inputEvent = (event) => {
        const {name, value} = event.target;

        setNewInputValue((prevValue) =>{
            
            return {
                ...prevValue,
                [name] : value,
            };
        });
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <>
        <form onSubmit={onSubmit}>
           <div className='eventDiv'>
                <h1>Hello, {inputCurValue.fullName} <br />
                Email: {inputCurValue.email} <br />
                Number: {inputCurValue.number} <br />
                Password: {inputCurValue.password} </h1>
               <input type="text" placeholder='Enter Your Name' name="fullName" value={inputCurValue.fullName} onChange={inputEvent}/>
               <input type="email" placeholder='Enter Your Email' name="email" value={inputCurValue.email} onChange={inputEvent}/>
               <input type="text" placeholder='Enter Your Mobile Number' name="number" value={inputCurValue.number} onChange={inputEvent}/>
               <input type="password" placeholder='Enter Your Password' name="password" value={inputCurValue.password} onChange={inputEvent}/>
               <button type="submit"> Submit 👍</button>
           </div>
        </form>
        </>
    );
}

export default Forms;