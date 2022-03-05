import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Pokemon = () => {

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(() => {
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    });

  return (
    <>
        <div className="container pt-5 text-center" style={{height:'50vh'}}>
            <h1>You Choose <span className='text-danger'> {num} value </span></h1>
            <h1>The Name is <span className='text-danger text-capitalize'> {name} </span></h1>
            <h1><span className='text-info text-capitalize'>{name} </span> have <span className='text-danger'> {moves} moves </span></h1>
            <select style={{width:'100px', height:'30px',textAlign:'center'}} value={num} onChange={(event) => {
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