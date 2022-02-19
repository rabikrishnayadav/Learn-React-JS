import React from 'react';

// Heading component

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

// Heading component is defining
function Heading(){
    return(
        <>
            <div style={headstyle}>
            <h1>{greeting} <span style={cssStyle}>{msg}</span></h1>
            <h3>From Rabi Kr Yadav</h3>
            </div> 
        </>
    );

}
export default Heading;