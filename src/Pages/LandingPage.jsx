import React from 'react'
import AboutUs from '../Components/AboutUs'
import HeroArea from '../Components/HeroArea'
import Navbar from '../Components/Navbar'
import Pricing from '../Components/Pricing'
import Services from '../Components/Services'
import Testemonials from '../Components/Testemonials'
import Footer from '../Components/Footer'
export default function LandingPage() {
  return (
    <div>
        <Navbar/>
        <HeroArea/>
        <Services/>
        <AboutUs/>
        <Pricing/>
        <Testemonials/>
        <Footer/>
    </div>
  )
}
