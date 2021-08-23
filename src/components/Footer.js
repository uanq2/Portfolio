import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div class='footer-links'>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <section class='social-media'>
                        <div class='social-media-wrap'>
                            <div class='social-icons'>
                                <Link
                                    class='social-icon-link'
                                    to='/'
                                    target='_blank'
                                    aria-label='LinkedIn'
                                >
                                    <i class='fab fa-linkedin' />
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Footer;
