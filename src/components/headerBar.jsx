import React from 'react';
import './css/header.css';
import Logo from '../images/Logo-1.png';

let mobileMenu = false;

let toggleMenu = () => {
    if (mobileMenu == false) {
        mobileMenu = true
    } else (
        mobileMenu = false
    )
}

let HeaderBar = (props) => {
    return (
        <div id="main-header">
            <img src={Logo} className="main-logo"/>
            <ul className="manu-bar">
                <li className="menu-list">01. About</li>
                <li className="menu-list">02. Hire</li>
                <li className="menu-list">03 Portfolio</li>
                <li className="menu-list">04. Connect</li>
                <li className="menu-list">
                    <button className="button-1 shape">Resume 
                    </button>
                </li>
                
            </ul>
            <div className="mobile-menu">
                <i class="fa-light fa-bars"></i>
            </div>
        </div>
    )
}

export default HeaderBar;