import React from 'react';

function SearchResult(props) {

    const img = `https://source.unsplash.com/user/erondu/600x400/?${props.name}`;
  return (
    <>
        <div>
            <img src={img} alt="image" />
        </div>
    </>
  );
};

export default SearchResult;