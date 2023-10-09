import React from 'react';
import './Header.css';
import logo from '../../assets/logo1.png'

const Header = () => {
    return (
        <div className='Header'>
         <img className='Logo' src={logo}  alt=""/>
            <ul className='header-menu'>
                <li>Home</li>
                <li>Programs</li>
                <li>Nos Services</li>
                <li>Conseils</li>
                
            
            </ul>

        </div>
    );
}

export default Header;
