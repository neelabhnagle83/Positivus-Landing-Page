import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Socials from './components/Socials';
import Services from './components/Services'
import CalltoAction from './components/CalltoAction';
import CaseStudy from './components/CaseStudy';
import WorkingProcess from './components/WorkingProcess';
import Team from './components/Team'
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
const Home = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Socials/>
    <Services/>
    <CalltoAction/>
    <CaseStudy/>
    <WorkingProcess/>
    <Team/>
    <Testimonials/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default Home
