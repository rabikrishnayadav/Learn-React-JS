import React from 'react'; // this is importing for use jsx in app
import ReactDOM from 'react-dom'; // this is importing for use render method which will show output
ReactDOM.render(<h1>Hello World!!</h1>,document.getElementById('root'));

// jsx full name is javascript extension or javasxript XML
// jsx is the html code its mean uses of html is called jsx

// pure javascript
var h1 = document.createElement('h1');
h1.innerHTML = 'Pure Java Script';
document.getElementById('root').appendChild(h1);