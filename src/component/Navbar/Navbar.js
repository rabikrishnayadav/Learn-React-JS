import React, {useState} from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Navmenu() {

    const [showMeidaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
        <nav className='main-nav'>
            <div className="logo">
                <h2>
                    <span>N</span>av
                    <span>M</span>enu
                </h2>
            </div>
            <div className={showMeidaIcons ? "menu-link mobile-menu-link" : "menu-link" }>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="social-media">
                <ul className="social-media-desktop">
                    <li>
                        <a href="https://www.facebook.com/RavikrYadavv/" target='_blank'>
                            <IconButton>
                                <FacebookIcon style={{ color:'#3b5998' }} />
                            </IconButton>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/rabikrishnayadav/" target='_blank'>
                            <IconButton>
                                <InstagramIcon style={{color:'#c32aa3'}} />
                            </IconButton>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/rabikryadav" target='_blank'>
                            <IconButton>
                                <GitHubIcon style={{color:'#171515'}} />
                            </IconButton>
                        </a>
                    </li>
                </ul>
                <div className="hamburger-menu">
                    <a href="#" onClick={() => setShowMediaIcons(!showMeidaIcons)}>
                       <Button style={{backgroundColor:'lightblue', fontSize:'20px'}}>💨</Button>
                    </a>
                </div>
            </div>
        </nav>
        <section className='hero-section'>
            <p>This is the Simple</p>
            <h1>Navigation Menu</h1>
        </section>
    </div>
  );
};

export default Navmenu;