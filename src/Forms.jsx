import React, {useState} from "react";
import './index.css';

const Forms = () => {
    const [name, setName] = useState('');
    const [fullName, setFullName] = useState();
    
    const inputEvent = (event) => {
        setName(event.target.value);
    };
    
    const [password, setPassword] = useState('');
    const [fullPassword, setFullPassword] = useState();

    const inputPasswordEvent = (event) => {
        setPassword(event.target.value);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        setFullName(name);
        setFullPassword(password);
    }

    return(
        <>
        <form onSubmit={onSubmit}>
           <div className='eventDiv'>
                <h1>Hello, {fullName} <br /> Your Password is: {fullPassword} </h1>
               <input type="text" placeholder='Enter Your Name' value={name} onChange={inputEvent}/>
               <input type="password" placeholder='Enter Your Password' value={password} onChange={inputPasswordEvent}/>
               <button type="submit"> Submit 👍</button>
           </div>
        </form>
        </>
    );
}

export default Forms;