import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Effect() {

    const [num, setNum] = useState(0);

    useEffect( () => {
        alert('You Clicked ' + ' ' + num + ' ' + ' times' );
    }, [num]);
  return (
    <>
    <button onClick={() => {
        setNum(num +1);
    }}>click me {num}</button>
    </>
  );
};

export default Effect;