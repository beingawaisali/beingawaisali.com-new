import React from 'react';
import './css/header.css';
import Logo from '../images/Logo-1.png';

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
                    <button>Resume 
                    <i class="fa-solid fa-arrow-down-to-line"></i>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default HeaderBar;