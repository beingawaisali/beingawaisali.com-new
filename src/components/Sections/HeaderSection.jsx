import React from 'react';
import './header-section.css';


let HeaderSection = (props) => {
    return (
        <div id="header-section-main">

            <div id="header-section">
                <p>{props.intro}</p>
                <h1>{props.mainHeading}</h1>
                <h2>{props.subHeading}</h2>
                <p className="bio">{props.bio}</p>
                <p className="mobile-bio">{props.mobileBio}</p>
                <div>
                    <button className='button-1 shape'>Let's Connect</button>
                </div>
            </div>

            <div id="header-section-blank"></div>

        </div>
    )
}

export default HeaderSection;