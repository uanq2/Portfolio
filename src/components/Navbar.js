import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeHmbgrMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        URIEL A. NUNEZ
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/about-me' className='nav-links' onClick={closeHmbgrMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/webDev' className='nav-links' onClick={closeHmbgrMenu}>
                                Web Dev
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/design' className='nav-links' onClick={closeHmbgrMenu}>
                                Graphic Design
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/resume' className='nav-links' onClick={closeHmbgrMenu}>
                                Resume
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeHmbgrMenu}>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar

