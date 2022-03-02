import React, {createContext} from 'react';
import ComB from './ComB';

const FirstName = createContext();
const LastName = createContext();

const ComC = () => {
    return(
        <>
            <h1>Component C</h1>
            <FirstName.Provider value={'Rabi'}>
            <LastName.Provider value={'yadav'}>
            <ComB/>
            </LastName.Provider>
            </FirstName.Provider>
        </>
    );
}

export default ComC;
export {FirstName, LastName};