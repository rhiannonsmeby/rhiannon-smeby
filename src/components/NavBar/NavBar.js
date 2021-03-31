import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

export default function Header() {
    return (
        <nav>
            {/* <h1 className='title'>
                <Link to={`/`}>Rhiannon Smeby</Link>
            </h1> */}
            <ul className='nav'>
                <li className='nav-item'><Link to={`/`}>About me</Link></li>
                <li className='nav-item'><Link to={`/projects`}>Projects</Link></li>
                <li className='nav-item'><Link to={`/contact-me`}>Contact me</Link></li>
            </ul>
        </nav>
    );
}