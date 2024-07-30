import React from 'react'
import './CaseStudy.css'

const CaseStudy = () => {
  return (
    <div id='case-study'>
      <div className='cs-heading'>
        <h1>Case Study</h1>
        <p>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
      </div>

      <div className='cs-container'>
        <div className='cs-card'>
          <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
          <a href='#'>Learn more <span>&#8594;</span></a>
        </div>
        <div className='cs-divider'></div>
        <div className='cs-card'>
          <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
          <a href='#'>Learn more <span>&#8594;</span></a>
        </div>
        <div className='cs-divider'></div>
        <div className='cs-card'>
          <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
          <a href='#'>Learn more <span>&#8594;</span></a>
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
