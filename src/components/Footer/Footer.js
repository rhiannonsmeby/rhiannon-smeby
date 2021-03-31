import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
             <div className="group">
            <div className="item">
                <p className="footer-name">&#169; Rhiannon Smeby</p>
            </div>
            <div class="item-2">
                <a href={"mailto:smebyrhi@gmail.com"} target={"_blank"} rel={'noreferrer'}><FontAwesomeIcon icon={faEnvelope}/></a>
                <a href={"https://github.com/rhiannonsmeby"} target={"_blank"} rel={'noreferrer'}><FontAwesomeIcon icon={faGithub}/></a>
                <a href={"https://www.linkedin.com/in/rhiannonsmeby/"} target={"_blank"} rel={'noreferrer'}><FontAwesomeIcon icon={faLinkedinIn}/></a>
            </div>
        </div>
        </footer>
    );
}