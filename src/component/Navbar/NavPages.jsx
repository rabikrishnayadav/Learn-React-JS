import React from 'react';
import Navmenu from './Navbar';
import {Routes, Route} from 'react-router-dom'
import './Navbar.css';

const Home = () => {
    return(
        <>
        <Navmenu />
        <section className='hero-section'>
            <p>Welcome to</p>
            <h1>Navigation Menu Home Page</h1>
        </section>
        </>
    );
};

const About = () => {
    return(
        <>
        <Navmenu />
        <section className='hero-section'>
            <p>Welcome to</p>
            <h1>Navigation Menu About Page</h1>
        </section>
        </>
    );
};

const Contact = () => {
    return(
        <>
        <Navmenu />
        <section className='hero-section'>
            <p>Welcome to</p>
            <h1>Navigation Menu Contact Page</h1>
        </section>
        </>
    );
};

const Services = () => {
    return(
        <>
        <Navmenu />
        <section className='hero-section'>
            <p>Welcome to</p>
            <h1>Navigation Menu Services Page</h1>
        </section>
        </>
    );
};

const NavPages = () => {
  return (
    <>
    <Routes>
        <Route path='/'>
            <Home />
        </Route>
        <Route path='/service'>
            <Services />
        </Route>
        <Route path='/about'>
            <About />
        </Route>
        <Route path='/contact'>
            <Contact />
        </Route>
    </Routes>
    </>
  );
};

export default NavPages;