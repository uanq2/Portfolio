import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <section class='social-media'>
                            <div class='social-media-wrap'>
                                <div class='social-icons'>
                                    <Link
                                        class='social-icon-link'
                                        target='_blank'
                                    >
                                        <i class='fab fa-linkedin' />
                                        <a href='https://www.linkedin.com/'></a>
                                        <i class="fab fa-behance-square"></i>
                                        <i class="fab fa-github-square"></i>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Footer;
