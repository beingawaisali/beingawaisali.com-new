import React from 'react';
import './css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer id="main-footer">
            <div id="footer-divider">
                <div className="footer-sections">
                    <h3 className='h3'>About</h3>
                    <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="footer-sections">
                    <h3 className='h3'>Social Media</h3>
                    <ul className="footer-list-sec">
                        <li>
                            <i className="fab fa-github"></i>
                            <a href="https://github.com/beingawaisali" rel="nofollow noopener noreferrer" target="_blank">Github</a>
                        </li>
                        <li>
                            <i className="fab fa-facebook"></i>
                            <a href="https://facebook.com/beingawaisali" rel="nofollow noopener noreferrer" target="_blank">Facebook</a>
                        </li>
                        <li>
                            <i className="fab fa-linkedin"></i>
                            <a href="https://linkedin.com/beingawaisali" rel="nofollow noopener noreferrer" target="_blank">LinkedIn</a>
                        </li>
                        <li>
                            <i className="fab fa-twitter"></i>
                            <a href="https://twitter.com/beingawaisali" rel="nofollow noopener noreferrer" target="_blank">Twitter</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-sections">
                    <h3 className='h3'>Top Content</h3>
                    <ul className="footer-list-sec">
                        <li>Blog 1</li>
                        <li>Blog 2</li>
                        <li>Blog 3</li>
                        <li>Blog 4</li>
                    </ul>
                </div>
                <div className="footer-sections">
                    <h3 className='h3'>Email</h3>
                    <p className='para'>Enter Your Email to Subscribe my Email List</p>
                    <form>
                        <input type="email" className="sub-input input-1" placeholder='Email...'/>
                        <button className='sub-button button-1'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div id="footer-copyright">
                Developed with
                <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                by Awais Ali
            </div>
        </footer>
    )
}


export default Footer;