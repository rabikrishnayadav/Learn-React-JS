import React, {useState} from "react";
import './index.css';

const Forms = () => {
    const [inputCurValue, setNewInputValue] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const inputEvent = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setNewInputValue((prevValue) =>{
            if(name === 'fullName'){
                return{
                    fullName: value,
                    email: prevValue.email,
                    password: prevValue.password
                };
            }else if(name === 'email'){
                return{
                    fullName: prevValue.fullName,
                    email: value,
                    password: prevValue.password
                };
            }else if(name === 'password'){
                return{
                    fullName: prevValue.fullName,
                    email: prevValue.email,
                    password: value
                };
            }
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
                Password: {inputCurValue.password} </h1>
               <input type="text" placeholder='Enter Your Name' name="fullName" value={inputCurValue.fullName} onChange={inputEvent}/>
               <input type="email" placeholder='Enter Your Email' name="email" value={inputCurValue.email} onChange={inputEvent}/>
               <input type="password" placeholder='Enter Your Password' name="password" value={inputCurValue.password} onChange={inputEvent}/>
               <button type="submit"> Submit 👍</button>
           </div>
        </form>
        </>
    );
}

export default Forms;