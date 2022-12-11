    import React from 'react';
    import './hire.css';
    import sample1 from '../images/sample-1.jpg';


    let Hire = () => {
        return (
            <div id="hire-parent">
                <h2>Hire Me</h2>
                <div className="hire-parent">
                    <div className='hire-service'>
                        <img src={sample1} className="hire-image" />
                        <h3>Web Development</h3>
                        <button>Hire Now</button>
                    </div>
                    <div className='hire-service'>
                        <img src={sample1} className="hire-image" />
                        <h3>Digital Marketing</h3>
                        <button>Hire Now</button>
                    </div>
                    <div className='hire-service'>
                        <img src={sample1} className="hire-image" />
                        <h3>Affiliate Marketing</h3>
                        <button>Hire Now</button>
                    </div>
                </div>
            </div>
        )
    }

    export default Hire;