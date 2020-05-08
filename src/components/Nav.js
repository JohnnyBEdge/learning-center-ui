import React from 'react';
import { Link } from 'react-router-dom';
import '../comp-styling/nav.css'
 
const Nav = () => {

    return (
        <ul id="nav_bar">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={'/flashcards'}>FlashCards</Link></li>
            <li><Link to={'/resources'}>Resources</Link></li>
            <li><Link to={'/orig-content'}>Original Content</Link></li>
        </ul>
    );
}

export default Nav;
