import React from 'react';
import './HeroSection.css';
import HeroImage from '../assets/Illustration.png';

const HeroSection = () => {
  return (
    <div id='hero-section'>
      <div className='hs-content'>
        <h1>Navigating the digital landscape for success</h1>
        <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <button className='hs-button'>Book a consultation</button>
      </div>
      <img className='hs-img' src={HeroImage} alt='Hero Illustration'/>
    </div>
  );
}

export default HeroSection;
