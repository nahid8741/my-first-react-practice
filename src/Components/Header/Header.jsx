import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
            <a href="/food">Food</a>
            <a href="/order">Order</a>
            <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;