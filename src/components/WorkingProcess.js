import React, { useState } from 'react';
import './WorkingProcess.css';

const WorkingProcess = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const steps = [
    {
      title: 'Consultation',
      description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
      title: 'Research and Strategy Development',
      description: 'We will conduct thorough research and develop a comprehensive strategy tailored to your business needs, ensuring that our approach aligns with your objectives.'
    },
    {
      title: 'Implementation',
      description: 'Our team will execute the strategy, implementing various tactics to achieve the desired outcomes and closely monitoring progress.'
    },
    {
      title: 'Monitoring and Optimization',
      description: 'We continuously monitor the performance of our strategies and make data-driven adjustments to optimize results and ensure maximum efficiency.'
    },
    {
      title: 'Reporting and Communication',
      description: 'Regular reports and transparent communication keep you informed about the progress and outcomes of our efforts, ensuring you are always in the loop.'
    },
    {
      title: 'Continual Improvement',
      description: 'We believe in continual improvement, consistently analyzing performance and incorporating feedback to refine and enhance our strategies for even better results.'
    }
  ];

  return (
    <div id='wp-container'>
      <div className='wp-heading'>
        <h1>Our Working Process</h1>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>
      <div className='wp-steps'>
        {steps.map((step, index) => (
          <div key={index} className={`wp-step ${activeIndex === index ? 'active' : ''}`}>
            <div className='wp-step-header' onClick={() => handleToggle(index)}>
              <span className='wp-step-number'>{`0${index + 1}`}</span>
              <span className='wp-step-title'>{step.title}</span>
              <span className='wp-step-toggle'>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className='wp-step-content'>
                <div className='wp-step-divider'></div>
                <div className='wp-step-description'>{step.description}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingProcess;
