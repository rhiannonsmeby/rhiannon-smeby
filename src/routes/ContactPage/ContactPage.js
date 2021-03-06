import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './ContactPage.css';

export default function ContactPage() {
    return (
        <section>
            <div className="contact">
                <h2>Contact Me:</h2>
                    <p>
                        Thank you for taking the time to check out my portfolio! 
                        If you'd like to get in contact with me, you can reach 
                        me at <a href={'mailto:smebyrhi@gmail.com'} target={'_blank'} rel={'noreferrer'}>smebyrhi@gmail.com </a> 
                        or feel free to use the form below. I will get back to you ASAP!
                    </p>
                <div className="form">
                    <form action="https://formspree.io/f/mvovqodp" method="POST">
                        <h3>Email me:</h3>
                        <label htmlFor="username">Name:</label>
                        <input id="username" type="text" name="name" placeholder="Enter your full name" />
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="text" name="_replyto" placeholder="Enter your email address" />
                        <label htmlFor="form-message">Message:</label>
                        <textarea id="form-message" name="message" placeholder="How can I help you?"></textarea>
                        <button type="submit">Send</button>
                        <button type="reset">Reset</button>
                    </form>
                </div>
                <ul className="contact-icons">
                    <li className="icon"><a href={"mailto:smebyrhi@gmail.com"} target={"_blank"} rel={'noreferrer'}><FontAwesomeIcon icon={faEnvelope}/></a></li>
                    <li className="icon"><a href={"https://github.com/rhiannonsmeby"} target={"_blank"} rel={'noreferrer'}><FontAwesomeIcon icon={faGithub}/></a></li>
                    <li className="icon"><a href={"https://www.linkedin.com/in/rhiannonsmeby/"} target={"_blank"} rel={'noreferrer'}><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
                </ul>
            </div>
        </section>
    );
}