import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        //hide the button on small screen sizes
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    //when resizing screen, run show button
    window.addEventListener('resize', showButton);

    return(
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        BigBootyBoys <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {/* mobile menu icon will change depending on if menu is open or not */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    {/* when you click a menu item, make menu disappear */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/top-moments' className='nav-links' onClick={closeMobileMenu}>
                                Top Moments
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                                Gallery
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/calendar' className='nav-links' onClick={closeMobileMenu}>
                                Calendar
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Submit Confessional</Button>}
                </div>
            </nav> 
        </>
    )
}

export default Navbar