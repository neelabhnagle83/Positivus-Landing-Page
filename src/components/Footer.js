import React from 'react';
import './Footer.css';
import Logo from '../assets/Icon white.png';
import Ldin from '../assets/Social-icon.png';
import Bird from '../assets/Social icon-1.png';
import Fbook from '../assets/Social icon-2.png';

const Footer = () => {
  return (
    <div id="footer">
      <div className='top-sec'>
        <div className='f-navbar'>
          <img src={Logo} alt="Positivus Logo" />
          <h1>Positivus</h1>
        </div>
        <div className='F-list'>
          <ul>
            <li>About us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className='f-socials'>
          <img src={Fbook} alt='Facebook' />
          <img src={Ldin} alt='LinkedIn' />
          <img src={Bird} alt='Twitter' />
        </div>
      </div>
      <div className='mid-sec'>
        <div className='left-mid-sec'>
          <h1>Contact Us:</h1>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
        </div>
        <div className='right-mid-sec'>
          <input type='email' name='email' placeholder='Email' required />
          <button type='submit'>Subscribe to news</button>
        </div>
      </div>
      <div className='f-divider'></div>
      <div className='rights'>© 2023 Positivus. All Rights Reserved. <a href='/privacy'>Privacy Policy</a></div>
    </div>
  );
}

export default Footer;
