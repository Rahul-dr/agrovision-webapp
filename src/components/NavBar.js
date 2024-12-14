import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; // Make sure the path is correct

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/prediction">Prediction</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
    );
};

export default NavBar;

