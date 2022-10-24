import React from 'react';
import './header-section.css';

let colorNew = {
    color: '#A5C9CA'
}

let HeaderSection = (props) => {
    return (
        <div id="header-section-main">

            <div id="header-section">
                <p style={colorNew}>{props.intro}</p>
                <h1 className="h1">{props.mainHeading}</h1>
                <h2 className="h2">{props.subHeading}</h2>
                <p className="bio para">{props.bio}</p>
                <p className="mobile-bio para">{props.mobileBio}</p>
                <div>
                    <button className='button-1 shape'>Let's Connect</button>
                </div>
            </div>

            <div id="header-section-blank"></div>

        </div>
    )
}

export default HeaderSection;