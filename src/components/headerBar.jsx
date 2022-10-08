import React from 'react';
import './css/header.css';
import Logo from '../images/Logo-1.png';

let HeaderBar = (props) => {
    return (
        <div id="main-header">
            <img src={Logo} className="main-logo"/>
            <ul className="manu-bar">
                <li className="menu-list">About</li>
                <li className="menu-list">Hire</li>
                <li className="menu-list">Portfolio</li>
                <li className="menu-list">Connect</li>
                <li className="menu-list">
                    <button>Resume</button>
                </li>
            </ul>
        </div>
    )
}

export default HeaderBar;