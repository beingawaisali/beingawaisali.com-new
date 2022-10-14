import React from 'react';
import './css/header.css';
import Logo from '../images/Logo-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// let mobileMenu = false;

// console.log(mobileMenu)

// let toggleMenu = () => {
//     if (mobileMenu == false) {
//         mobileMenu = true
//     } else (
//         mobileMenu = false
//     )
// console.log(mobileMenu)
// }


let HeaderBar = (props) => {
    return (
        <div id="main-header">
            <img src={Logo} className="main-logo"/>
            <ul className="manu-bar">
                <li className="menu-list"><span className="menu-list-num">01. </span>
                    <a href="#">About</a>
                </li>
                <li className="menu-list"><span className="menu-list-num">02. </span>
                    <a href="#">Hire</a>
                </li>
                <li className="menu-list"><span className="menu-list-num">03. </span> 
                    <a href="#">Portfolio</a>
                </li>
                <li className="menu-list"><span className="menu-list-num">04. </span>
                    <a href="#">Connect</a>
                </li>
                <li className="menu-list">
                    <button className="button-1 shape">Resume 
                    </button>
                </li>
                
            </ul>
            <div className="mobile-menu">
                <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={props.toggleMenubar}/>
            </div>
        </div>
    )
}

export default HeaderBar;
