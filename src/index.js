import React from 'react'; // this is importing for use jsx in app
import ReactDOM from 'react-dom'; // this is importing for use render method which will show output
ReactDOM.render(<h1>Hello World!!</h1>,document.getElementById('root'));

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
ReactDOM.render(
<>
<h1>The Netflix Pick</h1>
<p>List of 5 Best Series.</p>
<ol>
  <li>Dark</li>
  <li>Extra Curricular</li>
  <li>My Holo Love</li>
  <li>My first-2 Love</li>
  <li>Mr Robot</li>
</ol>
</>,
document.getElementById('root')
);

