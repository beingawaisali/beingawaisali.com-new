import React from 'react';
import './connect.css';


let Connect = () => {
    return (
        <div id='connect-parent'>
            <div>
                <h2>Contact</h2>
                <h3 className='h3'>Let's Connect & Make Something Amazing Together!</h3>
                <form className='connect-form'>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea row="40" column="10" placeholder='Type Something...'/>
                    <button className='button-1'>Submit</button>
                </form>
            </div>
            <div className='connect-detals'>
                <h5 className='h5'>
                    {/* <i class="fa-sharp fa-solid fa-location-dot"></i> */}
                    Location:</h5>
                <p className='para'>Karachi, PK</p>
                <h5 className='h5'>
                    {/* <i class="fa-regular fa-envelope"></i> */}
                    Email:</h5>
                <p className='para'>beingawaisali@gmail.com</p>
                <h5 className='h5'>
                    {/* <i class="fa-regular fa-hashtag"></i> */}
                    Number:</h5>
                <p className='para'>+923222832388</p>
            </div>
        </div>
    )
}

export default Connect;