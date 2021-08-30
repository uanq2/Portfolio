import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-links'>
            <section className='social-media'>
                <a href="https://www.linkedin.com/in/urielnunez/" target="_blank" className='fab fa-linkedin'></a>
                <a href="https://www.behance.net/uriel_nunez" target="_blank" className="fab fa-behance-square"></a>
                <a href="https://github.com/uanq2" target="_blank" className="fab fa-github-square"></a>
            </section>
        </div >
    )
}

export default Footer;
