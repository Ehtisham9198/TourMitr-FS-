import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer' style={{position: 'relative', bottom:0, width: '100%'}}>
            <h4>All Right Reserved &copy; My App </h4>
             <p>
                <Link to='/about' className='ml-2 mr-2'>About</Link>
                |
                <Link to='/contact' className='ml-2 mr-2'>Contact</Link>
                |
                <Link to='/policy' className='ml-2 mr-2 '>Privacy Policy</Link>

            </p>
        </div>
    );
}

export default Footer;
