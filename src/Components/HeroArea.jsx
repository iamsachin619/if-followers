import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
export default function HeroArea() {
  return (
    <div>
        <div id="hero-area" className="hero-area-bg" >
  <div className="container">      
    <div className="row">
      <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
        <div className="contents">
          <h2 className="head-title">Boost your Social Media engagement & following instantly! </h2>
          <p>Are you looking for an instant, cheap way to boost your social media presence? <br></br>Our services allow you to add any number of organic followers, likes and comments with just the click of a few buttons.</p>
          <div className="header-button">
            <a href="#" className="btn btn-common">Get Started</a>
            <AnchorLink href="#features" offset='50' className="btn btn-border video-popup">Learn More</AnchorLink>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
        <div className="intro-img">
          <img className="img-fluid" src="assets/img/intro-mobile.png" alt />
        </div>            
      </div>
    </div> 
  </div> 
</div>

    </div>
  )
}
