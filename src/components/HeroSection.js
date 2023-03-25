import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
        <h1>Whats up</h1>
        <p>sluts</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                START
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection