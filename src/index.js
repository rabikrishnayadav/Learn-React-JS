import React from 'react'; // this is importing for use jsx in app
import ReactDOM from 'react-dom'; // this is importing for use render method which will show output

import './index.css'; // importing class file for style

// ReactDOM.render(<h1>Hello World!!</h1>,document.getElementById('root'));

// jsx full name is javascript extension or javasxript XML
// jsx is the html code its mean uses of html is called jsx

// pure javascript
// var h1 = document.createElement('h1');
// h1.innerHTML = 'Pure Java Script';
// document.getElementById('root').appendChild(h1);

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


const greeting = 'Hello Sir,';
let msg = '';
const cssStyle = { };
let curTime = new Date();
curTime = curTime.getHours();
if(curTime >= 1 && curTime < 12){
  msg = 'Good Morning';
  cssStyle.color = 'green';
}else if(curTime >= 12 && curTime < 19){
  msg = 'Good Afternoon';
  cssStyle.color = 'orange';
}else{
  msg = 'Good Night';
  cssStyle.color = 'black';
}

const headstyle = {
  textAlign: 'center',
  backgroundColor: 'gray',
  flex: 'center',
  padding: '6px 10px'
}

ReactDOM.render(
  <>
  <div style={headstyle}>
  <h1>{greeting} <span style={cssStyle}>{msg}</span></h1>
  </div>
  </>,
  document.getElementById('root'));