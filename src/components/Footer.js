import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join
            </p>
            <p className='footer-subscription-text'>
                You can't unjoin this fo life
            </p>
            <div className='input-areas'>
                <form>
                    <input className='footer-input' type='email' name='email' placeholder='Your Email' />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About</h2>
                    <Link to='/confessional'>How it works</Link>
                    <Link to='/'>Temp</Link>
                    <Link to='/'>Temp</Link>
                    <Link to='/'>Temp</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>About</h2>
                    <Link to='/confessional'>How it works</Link>
                    <Link to='/'>Temp</Link>
                    <Link to='/'>Temp</Link>
                    <Link to='/'>Temp</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        BBB <i className='fab fa-typo3'></i>
                    </Link>
                </div>
                <small className='website-rights'>BBB © 2023</small>
                <div className='social-icons'>
                    <Link className='social-icon-link' to='/' target='_blan' aria-label='Facebook'>
                        <i className='fab fa-facebook-f'></i>
                    </Link>
                    <Link className='social-icon-link' to='/' target='_blan' aria-label='Instagram'>
                        <i className='fab fa-instagram'></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer;