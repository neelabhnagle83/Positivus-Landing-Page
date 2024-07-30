import React, { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp"
  },
  {
    id: 2,
    quote: "Working with Positivus has been a game-changer for our company. Their expertise in digital marketing has helped us achieve a 50% increase in our online sales. The team is dedicated, innovative, and always available to provide support. I highly recommend their services to any business looking to enhance their online presence.",
    name: "Jane Doe",
    title: "Marketing Manager at ABC Inc"
  },
  {
    id: 3,
    quote: "Positivus has exceeded our expectations in every way. Their strategic approach to digital marketing has significantly improved our brand visibility and customer engagement. The team is professional, proactive, and results-driven. I would definitely recommend Positivus to any company seeking to boost their digital marketing efforts.",
    name: "Bob Johnson",
    title: "CEO at DEF Corp"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id='testi-container'>
      <div className='testi-heading'>
        <h1>Testimonials</h1>
        <p>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
      </div>
      <div className="slider-container">
        <div className="slider">
          {testimonialsData.map((testimonial, index) => (
            <div key={testimonial.id} className={`slide ${index === currentIndex ? 'active' : ''}`}>
              <p className="quote">"{testimonial.quote}"</p>
              <p className="name">{testimonial.name}</p>
              <p className="title">{testimonial.title}</p>
            </div>
          ))}
        </div>
        <div className="navigation">
          <button onClick={handlePrevClick} className="nav-button">&lt;</button>
          <div className="pagination">
            {testimonialsData.map((_, index) => (
              <span key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} />
            ))}
          </div>
          <button onClick={handleNextClick} className="nav-button">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
