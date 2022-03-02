import React from 'react';
import {useParams} from 'react-router-dom';

const User = () => {

    const {name} = useParams();
  return (
    <>
    <h1>This is User Page</h1>
    <h2>The User Name is { name }</h2>
    </>
  );
};

export default User;