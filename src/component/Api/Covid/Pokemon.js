import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pokemon = () => {

    const [num, setNum] = useState(0);
  return (
    <>
        <div className="container pt-5" style={{height:'100vh'}}>
            <h1>You Choose {num} value</h1>
            <select value={num} onChange={(event) => {
                setNum(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    </>
  );
};

export default Pokemon;