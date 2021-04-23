import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import './NavBar.css';

export default function Header() {

    let [navToggle, setNavToggle] = useState(false);

    function handleClick() {
        setNavToggle(prevNavToggle => !prevNavToggle);
    }

    return (
      <div className='container'>
        <div>
            <div className='nav-toggle' id='navToggle'>
                <FontAwesomeIcon icon={faBars} className={navToggle ? 'hidden' : 'navIcon'} onClick={handleClick}/>
                <FontAwesomeIcon icon={faTimes} className={navToggle ? 'navIcon' : 'hidden'} onClick={handleClick}/>
            </div>   
        </div>
        <nav className={navToggle ? 'open' : 'closed'}>
            <ul className='nav'>
                <li className='nav-item'><NavLink exact to={`/`} activeClassName='navActive'>About me</NavLink></li>
                <li className='nav-item'><NavLink to={`/projects`} activeClassName='navActive'>Projects</NavLink></li>
                <li className='nav-item'><NavLink to={`/contact-me`} activeClassName='navActive'>Contact me</NavLink></li>
            </ul>
        </nav>
      </div>
    );
}