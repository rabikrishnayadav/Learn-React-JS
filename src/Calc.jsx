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

export {add, sub, mult, div};