import React from 'react';
import { fname, middleName, lname } from './Details';

// Heading component is defining
function Heading(){
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
    return(
        <>
            <div style={headstyle}>
            <h1>{greeting} <span style={cssStyle}>{msg}</span></h1>
            <h4>From {fname +' ' + middleName() + ' ' + lname}</h4>
            </div> 
        </>
    );

}
export default Heading;