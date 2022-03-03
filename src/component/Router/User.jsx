import { Button, ListItemSecondaryAction } from '@material-ui/core';
import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';

const User = () => {

    const {name} = useParams();
    const location = useLocation();
    // const history = useHistory();
  return (
    <>
    <h1>This is User Page</h1>
    <h2>The User Name is { name }</h2>
    <h3>User Current Location is {location.pathname}</h3>
    {/* {location.pathname === `/user/rabi/yadav` ? <Button onClick={ () => history.goback()}>go back</Button> : null}
    {location.pathname === `/user/rabi/yadav` ? <Button onClick={ () => history.push('/')}>go Homepage</Button> : null} */}
    </>
  );
};

export default User;