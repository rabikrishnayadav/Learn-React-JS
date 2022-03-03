import React from 'react';
import { useState } from 'react';
import SearchResult from './SearchResult';

function Search(props) {

    const [img, setImg] = useState('');

    const inputEvent = (event) => {
        const data = event.target.value;
        setImg(data);
    };
  return (
    <>
    <h1>This is {props.name} page.</h1>
    <div className='searchbar'>
    <input type="search" placeholder='Search Anythings' onChange={inputEvent} value={img} />
    {img === '' ? null : <SearchResult name={img} />}
    </div>
    </>
  );
};

export default Search;