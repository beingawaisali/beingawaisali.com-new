import React from 'react';
import HeaderSection from './Sections/HeaderSection';

// Others
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
                    <HeaderSection intro="Hi, Welcome to my world!" mainHeading="This is Awais Ahmed" subHeading="I will develop your online presence" bio="Hi! Awais Ali is my name. I'm a web developer and digital marketing specialist who helps companies establish an online presence and increase conversions. I provide SEO, Social media marketing, and Search engine marketing services. utilizing technologies like JavaScript, React js, and WordPress to build websites. I offer solutions for any kind of business, including service-based, affiliate marketing, B2B, and e-commerce. I can create websites that meet your specifications, give them an engaging UI/UX, and market them on various channels including social media and search engines." mobileBio="Welcome, I'm Awais Ali, a tech nerd who is passionate about technology, business, marketing. I love to share my knowledge with the world through blogging." />
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