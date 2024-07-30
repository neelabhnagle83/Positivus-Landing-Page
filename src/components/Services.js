import React from 'react';
import './Services.css';
import image1 from '../assets/tokyo-magnifier-web-search-with-elements 2.png';
import ppcImage from '../assets/tokyo-selecting-a-value-in-the-browser-window 1.png';
import smmImage from '../assets/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png';
import emailImage from '../assets/tokyo-sending-messages-from-one-place-to-another 1.png';
import contentImage from '../assets/tokyo-many-browser-windows-with-different-information 1.png';
import analyticsImage from '../assets/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png';

const Services = () => {
  return (
    <div id='service-container'>
      <div className='service-heading'>
        <h1>Services</h1>
        <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>

      <div className="service-cards">
        <div className="seo-card card-1">
          <div className="seo-content">
            <div className="seo-text">
              <span className="highlight">Search engine optimization</span>
            </div>
            <div className="seo-button">
              <button>Learn more</button>
            </div>
          </div>
          <div className="seo-image">
            <img src={image1} alt="SEO" />
          </div>
        </div>

        <div className="seo-card card-2">
          <div className="seo-content">
            <div className="seo-text">
              <span className="highlight">Pay-Per-Click Advertising</span>
            </div>
            <div className="seo-button">
              <button>Learn more</button>
            </div>
          </div>
          <div className="seo-image">
            <img src={ppcImage} alt="PPC" />
          </div>
        </div>

        <div className="seo-card card-3">
          <div className="seo-content">
            <div className="seo-text">
              <span className="highlight">Social Media Marketing</span>
            </div>
            <div className="seo-button">
              <button>Learn more</button>
            </div>
          </div>
          <div className="seo-image">
            <img src={smmImage} alt="SMM" />
          </div>
        </div>

        <div className="seo-card card-4">
          <div className="seo-content">
            <div className="seo-text">
              <span className="highlight">Email Marketing</span>
            </div>
            <div className="seo-button">
              <button>Learn more</button>
            </div>
          </div>
          <div className="seo-image">
            <img src={emailImage} alt="Email Marketing" />
          </div>
        </div>

        <div className="seo-card card-5">
          <div className="seo-content">
            <div className="seo-text">
              <span className="highlight">Content Marketing</span>
            </div>
            <div className="seo-button">
              <button>Learn more</button>
            </div>
          </div>
          <div className="seo-image">
            <img src={contentImage} alt="Content Marketing" />
          </div>
        </div>

        <div className="seo-card card-6">
          <div className="seo-content">
            <div className="seo-text">
              <span className="highlight">Analytics & Reporting</span>
            </div>
            <div className="seo-button">
              <button>Learn more</button>
            </div>
          </div>
          <div className="seo-image">
            <img src={analyticsImage} alt="Analytics" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
