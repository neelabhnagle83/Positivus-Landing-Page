import React from 'react'
import './CalltoAction.css'
import IMG from "../assets/Illustration (1).png"
const CalltoAction = () => {
  return (
    <div id="container">

           <div className='container-content'>
            <h1>Let’s make things happen</h1>
            <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
            <button>Get your free proposal</button>
           </div>

           <img className="container-img" src={IMG} alt='' />

    </div>
  )
}

export default CalltoAction
