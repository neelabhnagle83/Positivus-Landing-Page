import React, { useState } from 'react';
import './ContactUs.css';
import IMAGE from "../assets/Illustration (2).png";

const ContactUs = () => {
  const [formType, setFormType] = useState('sayHi');

  const handleFormTypeChange = (event) => {
    setFormType(event.target.value);
  };

  return (
    <div id='cu-container'>
      <div className='cu-heading'>
        <h1>Contact Us</h1>
        <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>

      <div className='form-wrapper'>
        <div className='form-container'>
          <div className='form-type'>
            <label>
              <input
                type='radio'
                value='sayHi'
                checked={formType === 'sayHi'}
                onChange={handleFormTypeChange}
              />
              Say Hi
            </label>
            <label>
              <input
                type='radio'
                value='getQuote'
                checked={formType === 'getQuote'}
                onChange={handleFormTypeChange}
              />
              Get a Quote
            </label>
          </div>

          <form className='contact-form'>
            <input type='text' name='name' placeholder='Name' />
            <input type='email' name='email' placeholder='Email' required />
            <textarea name='message' placeholder='Message' required></textarea>
            <button type='submit'>Send Message</button>
          </form>
        </div>

        <img className="image-container" src={IMAGE} alt=''/>
      </div>
    </div>
  );
};

export default ContactUs;
