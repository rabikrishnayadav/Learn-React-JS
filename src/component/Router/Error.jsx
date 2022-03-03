import React from 'react';
import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <>
    <h1>Error 404: Error Page</h1>
    <p>Sorry, This page does't exist</p>
    <NavLink to={'/'}>Go Back</NavLink>
    </>
  );
};

export default Error;