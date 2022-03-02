import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../../App';
import About from './About';
import Contact from './Contact';
import Error from './Error';

function Navbar() {
  return (
    <>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/about' component={About} />
            <Route component={Error} />
        </Switch>
    </>
  )
}

export default Navbar;