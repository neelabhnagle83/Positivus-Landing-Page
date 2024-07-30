import React from 'react'
import './Socials.css'
import com from '../assets/Company logo.png';
import com1 from '../assets/Company logo-1.png'
import com2 from '../assets/Company logo-2.png'
import com3 from '../assets/Company logo-3.png'
import com4 from '../assets/Company logo-4.png'
import com5 from '../assets/Company logo-5.png'


const Socials = () => {
  return (
    <div id='companies'>
      <img src={com} alt=''/>
      <img src={com1} alt=''/>
      <img src={com2} alt=''/>
      <img src={com3} alt=''/>
      <img src={com4} alt=''/>
      <img src={com5} alt=''/>
    </div>
  )
}

export default Socials
