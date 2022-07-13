import React from 'react'

export default function Pricing() {
  return (
    <div>
<section id="pricing" className="section-padding">
  <div className="container">
    <div className="section-header text-center">          
      <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Pricing</h2>
      <div className="shape wow fadeInDown" data-wow-delay="0.3s" />
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6 col-xs-12">
        <div className="table wow fadeInLeft" data-wow-delay="1.2s">
          <div className="icon-box">
            <i className="lni-package" />
          </div>
          <div className="pricing-header">
            <p className="price-value">$10<span> /mo</span></p>
          </div>
          <div className="title">
            <h3>Pro</h3>
          </div>
          <ul className="description">
            <li>1 user</li>
            <li>10 GB storage</li>
            <li>Email support</li>
            <li>Lifetime updates</li>
          </ul>
          <button className="btn btn-common">Buy Now</button>
        </div> 
      </div>
      <div className="col-lg-4 col-md-6 col-xs-12 ">
        <div className="table wow fadeInUp" id="active-tb" data-wow-delay="1.2s">
          <div className="icon-box">
            <i className="lni-drop" />
          </div>
          <div className="pricing-header">
            <p className="price-value">$35<span> /mo</span></p>
          </div>
          <div className="title">
            <h3>Plus</h3>
          </div>
          <ul className="description">
            <li>10 user</li>
            <li>30 GB storage</li>
            <li>Priority email support</li>
            <li>Lifetime updates</li>
          </ul>
          <button className="btn btn-common">Buy Now</button>
        </div> 
      </div>
      <div className="col-lg-4 col-md-6 col-xs-12">
        <div className="table wow fadeInRight" data-wow-delay="1.2s">
          <div className="icon-box">
            <i className="lni-star" />
          </div>
          <div className="pricing-header">
            <p className="price-value">$150<span> /mo</span></p>
          </div>
          <div className="title">
            <h3>Premium</h3>
          </div>
          <ul className="description">
            <li>Unlimited users</li>
            <li>Unlimited storage</li>
            <li>24/7 support</li>
            <li>Lifetime updates</li>
          </ul>
          <button className="btn btn-common">Buy Now</button>
        </div> 
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
