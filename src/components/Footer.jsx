import React from 'react';
import './css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return(
        <footer id="main-footer">
            <div id="footer-divider">
                <div className="footer-sections">
                    <h3>About</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="footer-sections">
                    <h3>Social Media</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className="footer-sections">
                    <h3>Top Content</h3>
                    <ul>
                        <li>Blog 1</li>
                        <li>Blog 2</li>
                        <li>Blog 3</li>
                        <li>Blog 4</li>
                    </ul>
                </div>
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