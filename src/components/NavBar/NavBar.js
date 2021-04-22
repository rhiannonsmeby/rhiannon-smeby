import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

export default function Header() {
    return (
        <nav>
            <ul className='nav'>
                <li className='nav-item'><NavLink exact to={`/`} activeClassName='navActive'>About me</NavLink></li>
                <li className='nav-item'><NavLink to={`/projects`} activeClassName='navActive'>Projects</NavLink></li>
                <li className='nav-item'><NavLink to={`/contact-me`} activeClassName='navActive'>Contact me</NavLink></li>
            </ul>
        </nav>
    );
}