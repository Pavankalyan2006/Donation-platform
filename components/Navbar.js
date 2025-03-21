import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Donation Platform</div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/campaigns">Campaigns</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
