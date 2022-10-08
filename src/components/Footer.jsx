import React from 'react';
import './css/footer.css';


function Footer() {
    return(
        <footer id="main-footer">
            <div id="footer-divider">
                <div className="footer-sections">Section 1</div>
                <div className="footer-sections">Section 2</div>
                <div className="footer-sections">Section 3</div>
            </div>
            <div id="footer-copyright">Created with Love</div>
        </footer>
    )
}


export default Footer;