import React from "react";
import "./Footer.css";
import github from './github.svg';

function Footer() {

    const handleClick = () => {
        window.open('https://github.com/agr1996/startup', '_blank');
    };
    return (
        <>
            <footer className='footer'>
                <strong>Andrew Redd</strong>
                <button className='github-button' onClick={handleClick}>
                    <img src={github} alt="Sent" style={{ width: '20px', height: '20px' }} />
                </button>
            </footer>
        </>
    );
}

export default Footer;