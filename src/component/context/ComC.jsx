import React, {createContext} from 'react';
import ComA from './ComA';

const FirstName = createContext();
const LastName = createContext();

const ComC = () => {
    return(
        <>
            <h1>Component C</h1>
            <FirstName.Provider value={'Rabi'}>
            <LastName.Provider value={'yadav'}>
            <ComA/>
            </LastName.Provider>
            </FirstName.Provider>
        </>
    );
}

export default ComC;
export {FirstName, LastName};