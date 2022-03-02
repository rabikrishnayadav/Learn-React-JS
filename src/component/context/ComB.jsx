import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import ComA from './ComA';
import { FirstName, LastName } from './ComC';


const MiddleName = createContext();

const ComB = () => {

    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return(
        <>
            <ComA />
            <h1>Hello, {fname} {lname}</h1>
            <MiddleName.Provider value={'Krishna'} ></MiddleName.Provider>
        </>
    );
}

export default ComB;
export {MiddleName};