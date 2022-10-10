import React from 'react';
import './css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return(
        <footer id="main-footer">
            <div id="footer-divider">
                <div className="footer-sections">Section 1</div>
                <div className="footer-sections">Section 2</div>
                <div className="footer-sections">Section 3</div>
            </div>
            <div id="footer-copyright">
                Developed with 
                <FontAwesomeIcon icon={faHeart} className="heart-icon"/>
                by Awais Ali
            </div>
        </footer>
    )
}


export default Footer;