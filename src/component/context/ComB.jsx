import React from 'react';
import { createContext } from 'react';

const MiddleName = createContext();

const ComB = () => {
    return(
        <>
            <h1>Component B</h1>
            <MiddleName.Provider value={'Krishna'} ></MiddleName.Provider>
        </>
    );
}

export default ComB;
export {MiddleName};