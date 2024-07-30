import React from 'react';
import './Team.css';
import icon from '../assets/Social-icon.png';  // Update the path to your icon
import johnSmith from '../assets/Picture.png';  // Update the path to your images
import janeDoe from '../assets/Picture (1).png';
import michaelBrown from '../assets/Picture (2).png';
import emilyJohnson from '../assets/Picture (3).png';
import brianWilliams from '../assets/Picture (4).png';
import sarahKim from '../assets/Picture (5).png';

const teamMembers = [
    {
      name: "John Smith",
      position: "CEO and Founder",
      experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      image: johnSmith
    },
    {
      name: "Jane Doe",
      position: "Director of Operations",
      experience: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      image: janeDoe
    },
    {
      name: "Michael Brown",
      position: "Senior SEO Specialist",
      experience: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      image: michaelBrown
    },
    {
      name: "Emily Johnson",
      position: "PPC Manager",
      experience: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      image: emilyJohnson
    },
    {
      name: "Brian Williams",
      position: "Social Media Specialist",
      experience: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
      image: brianWilliams
    },
    {
      name: "Sarah Kim",
      position: "Content Creator",
      experience: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
      image: sarahKim
    }
  ];

const Team = () => {
    return (
      <div id='team-container'>
        <div className='tm-heading'>
          <h1>Our Working Process</h1>
          <p>Step-by-Step Guide to Achieving Your Business Goals</p>
        </div>
        <div className="team-content">
          <div className="team-cards">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="card-header">
                  <img src={member.image} alt={member.name} className="profile-pic" />
                  <img src={icon} alt="LinkedIn icon" className="linkedin-icon" />
                </div>
                <div className="info-container">
                  <h3>{member.name}</h3>
                  <h4>{member.position}</h4>
                  <p>{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="tm-button">See all team</button>
        </div>
      </div>
    );
}

export default Team;
