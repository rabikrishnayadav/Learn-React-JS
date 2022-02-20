import React from "react";

function add(num1, num2){
    let res;
    res = num1 + num2;
    return res;
}

function sub(num1, num2){
    let res;
    res = num1 - num2;
    return res;
}

function mult(num1, num2){
    let res;
    res = num1 * num2;
    return res;
}

function div(num1, num2){
    let res;
    res = num1 / num2;
    res = res.toFixed(2);
    return res;
}

function Calc(){
    return(
        <>
            <ul>
            <li>sum of two no is {add(40,4)}</li>
            <li>sub of two no is {sub(30,3)}</li>
            <li>Mult of two no is {mult(10,3)}</li>
            <li>Div of two no is {div(10,3)}</li>
           </ul>
        </>
    );
}
export default Calc;
export {add, sub, mult, div};