import React from 'react';
import './css/body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMouse } from '@fortawesome/free-solid-svg-icons';


function Body () {
    return (
        <div id="body-parent">

            {/* Sidebar Left */}
            <div className="body-side">
                <ul id="social-sidebar">
                    <li className="social-list">
                        <a href="https://github.com/beingawaisali" rel="nofollow noopener noreferrer" target="_blank">
                            <i className="fab fa-github social-icons-sidebar"></i>
                        </a>
                    </li>
                    <li className="social-list">
                        <a href="https://facebook.com/beingawaisali" rel="nofollow noopener noreferrer" target="_blank">
                        <i className="fab fa-facebook social-icons-sidebar"></i>
                        </a>
                    </li>
                    <li className="social-list">
                        <a href="https://linkedin.com/beingawaisali" rel="nofollow noopener noreferrer" target="_blank">
                        <i className="fab fa-linkedin social-icons-sidebar"></i>
                        </a>
                    </li>
                    <li className="social-list">
                        <a href="https://twitter.com/beingawaisali" rel="nofollow noopener noreferrer" target="_blank">
                            <i className="fab fa-twitter social-icons-sidebar"></i>
                        </a>
                    </li>
                    <li className="social-list">
                        <a href="https://instagram.com/beingawaisali" rel="nofollow noopener noreferrer" target="_blank">
                            <i className="fab fa-instagram social-icons-sidebar"></i>
                        </a>
                    </li>
                    <li className="social-list">
                        <a href="" rel="nofollow noopener noreferrer" target="_blank">
                            <i classNamw="fab fa-earth social-icons-sidebar"></i>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Main Body */}
            <div className="body-main">
                <div className="body-card">
                    <h2>Profile</h2>
                </div>
                <div className="body-card">
                    <h2>About</h2>
                </div>
                <div className="body-card">
                    <h2>Portfolio</h2>
                </div>
                <div className="body-card">
                    <h2>Hire</h2>
                </div>
                <div className="body-card">
                    <h2>Connect</h2>
                </div>
            </div>
            
            

            {/* Sidebar Right */}
            <div className="body-side">
                <div className='email-parent'>
                    <a href="beingawaisali@gmail.com" className="email">beingawaisali@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Body;