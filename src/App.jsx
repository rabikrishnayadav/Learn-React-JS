import React, { useState } from 'react'; // this is importing for use jsx in app
import ReactDOM from 'react-dom'; // this is importing for use render method which will show output

import './index.css'; // importing class file for style

import Heading from './Heading'; // importing heading component

// Render multiple elements with two method by using div elements or array
// 1) With Div
// ReactDOM.render(
// <div>
// <header>used multiple element with Div element</header>
// <h1>This is first h1 element</h1>
// <h2>This is first h2 element</h2>
// <p>This is paragraph element</p>
// </div>,
// document.getElementById('root')
// );

// 2) with Array
// ReactDOM.render(
// [
// <header>used multiple element with array</header>,
// <h1>This is first h1 element</h1>,
// <h2>This is first h2 element</h2>,
// <p>This is paragraph element</p>
// ],
// document.getElementById('root')
// );

// React Fragment
// it is used for reduce extra div in browser
// for use it there is two method
// 1) use React.Fragment

// ReactDOM.render(
// <React.Fragment>
// <header>used multiple element with Div element</header>
// <h1>This is first h1 element</h1>
// <h2>This is first h2 element</h2>
// <p>This is paragraph element</p>
// </React.Fragment>,
// document.getElementById('root')
// );

// 2) use <> </> bracket
// ReactDOM.render(
// <>
// <h1>The Netflix Pick</h1>
// <p>List of 5 Best Series.</p>
// <ol>
//   <li>Dark</li>
//   <li>Extra Curricular</li>
//   <li>My Holo Love</li>
//   <li>My first-2 Love</li>
//   <li>Mr Robot</li>
// </ol>
// </>,
// document.getElementById('root')
// );

// jsx expression
// here we use javascript inside jsx

// const fullName = 'Rabi Kr Yadav';
// ReactDOM.render(
// <>
// <h1> My Name is {fullName} </h1>
// <p>The random number is {Math.random()} </p>
// </>,
// document.getElementById('root')
// );


// Template Literals in jsx
// this is use for show multiple javascript in jsx
// for use it {`expression`}

// const firstName = 'Rabi';
// const middleName = 'Krishna';
// const lastName = 'Yadav';
// ReactDOM.render(
// <>
// <h1> {`My Name is ${firstName} ${middleName} ${lastName}`} </h1>
// </>,
// document.getElementById('root')
// );

// Display Current Date and Time in JSX

// const Name = 'Rabi Kr Yadav';
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();
// ReactDOM.render(
// <>
// <h1> My Name is {Name} </h1>
// <p>Current Date is: {currDate}</p>
// <p>Current Time is: {currTime}</p>
// </>,
// document.getElementById('root')
// );

// JSX Attributes

// const Name = 'Rabi Kr Yadav';
// const photo = 'https://picsum.photos/215/200';
// const photo1 = 'https://picsum.photos/220/200';
// const mywebLink = 'https://rabikrishnayadav.com.np';
// const extcss = {
//   textAlign: 'center',
//   fontWeight: 'bold',
//   fontFamily: '"Gideon Roman", cursive'
// }
// ReactDOM.render(
// <>
// <h1 className="heading"> My Name is {Name} </h1>
// <div className="img_div">
//   <img src='https://picsum.photos/210/200' alt="Random Images" />
// <img src={photo} alt="Random Images" />
// <a href={mywebLink} target='_blank'><img src={photo1} alt="Random Images" /></a>
// </div>
// <div style={extcss}>This is Internal Css</div>
// <div style={{
//   color: '#fa9191',
//   textAlign: 'center'
// }}>This is Inline Css</div>
// </>,
// document.getElementById('root')
// );

// import export
import guest from './Details';
import Calc from './Calc';
import Netflix from './Netflix';
import Amazon from './Amazon';
import SlotMachine from './SlotMachine';
import Clock from './Clock';

const favSeries = "netflix";

     function App(){  
          const mybgcolor = '#8e44ad';
          const [curbg, setcurbg] = useState(mybgcolor);
          const btnName = 'Click Me';
          const [curname, setcurname] = useState(btnName);
          const BgChange = () => {
               let newbg = '#34495e';
               setcurbg(newbg);
               setcurname('ouch!! 💓')
          }
          const bgBack = () => {
               setcurbg(mybgcolor);
               setcurname('Click Me');
          }

          const [name, setName] = useState('');
          const [fullName, setFullName] = useState();

          const inputEvent = (event) => {
               setName(event.target.value);
          };
          
          const onSubmit = () => {
               setFullName(name);
          }
    return(
        <>
            <Heading />
            <h3 style={{textAlign:'center'}}>You are {guest} </h3>
            <Calc />
           <div style={{backgroundColor:'aquamarine',padding:'10px'}}>
                <h1 className='card_heading'>List of Top Web Series</h1>
                {(favSeries === 'netflix') ? <Netflix /> : <Amazon />}
           </div>
           <div className='slot_machine card_heading'>
                <h1>🎰 Welcome to <span style={{ fontWeight:'bold' }}>Slot machine game</span> 🎰</h1>
                <SlotMachine x = '💓' y = '💓' z = '💓' />
                <SlotMachine x = '🥝' y = '💓' z = '😄' />
                <SlotMachine x = '💓' y = '😄' z = '🍎' />
                <SlotMachine x = '🍎' y = '🍎' z = '🍎' />
           </div>
           <Clock />
           <div className='eventDiv' style= { { backgroundColor: curbg } } >
                <button onClick={BgChange} onDoubleClick={bgBack}> {curname} </button>
           </div>
           <div className='eventDiv'>
               <h1>Hello {fullName} </h1>
               <input type="text" placeholder='Enter Your Name' value={name} onChange={inputEvent}/>
               <button onClick={onSubmit}> Click Me 👍</button>
           </div>
        </>
    );
  }
  export default App;