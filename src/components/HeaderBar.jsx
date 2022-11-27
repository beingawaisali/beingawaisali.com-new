import React from 'react';
import './css/header.css';
import Logo from '../images/Logo-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

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

    let menu = false;

    function showMenu() {
        !menu ? menu = true : menu = false
    }

    return (
        <header id="main-header">
            <img src={Logo} className="main-logo"/>
            <ul className="manu-bar">
                <li className="menu-list"><span className="menu-list-num">01. </span>
                    <a href="#app" className="menu-items">About</a>
                </li>
                <li className="menu-list"><span className="menu-list-num">02. </span>
                    <a href="#hire-parent" className="menu-items">Hire</a>
                </li>
                <li className="menu-list"><span className="menu-list-num">03. </span> 
                    <a href="#portfolio-parent" className="menu-items">Portfolio</a>
                </li>
                <li className="menu-list"><span className="menu-list-num">04. </span>
                    <a href="#connect-parent" className="menu-items">Connect</a>
                </li>
                <li className="menu-list">
                    <button className="button-1 shape">Resume 
                    </button>
                </li>
                
            </ul>
            <div className="mobile-menu">
                <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={props.clickHam} />
            </div>
        </header>
    )
}

// class HeaderBar extends React.Component {
//     render(props) {
//         return(
//             <header id="main-header">
//             <img src={Logo} className="main-logo"/>
//             <ul className="manu-bar">
//                 <li className="menu-list"><span className="menu-list-num">01. </span>
//                     <a href="#app" className="menu-items">About</a>
//                 </li>
//                 <li className="menu-list"><span className="menu-list-num">02. </span>
//                     <a href="#hire-parent" className="menu-items">Hire</a>
//                 </li>
//                 <li className="menu-list"><span className="menu-list-num">03. </span> 
//                     <a href="#portfolio-parent" className="menu-items">Portfolio</a>
//                 </li>
//                 <li className="menu-list"><span className="menu-list-num">04. </span>
//                     <a href="#connect-parent" className="menu-items">Connect</a>
//                 </li>
//                 <li className="menu-list">
//                     <button className="button-1 shape">Resume</button>
//                 </li>
                
//             </ul>
//             <div className="mobile-menu">
//                 <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={props.clickHam} />
//             </div>
//         </header>
//         )
//     }
// }


export default HeaderBar;