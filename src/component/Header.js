import React from 'react';
import { Link } from 'react-router-dom';




const Header = (props) => {
    return (
        <header>
            <div className="header-container">

                <div className="logo-container">
                    <img src={props.logo}  />
                    
                    
                </div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/services'>Services</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;