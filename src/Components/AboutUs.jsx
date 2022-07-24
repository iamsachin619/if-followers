import React from 'react'

export default function AboutUs() {
  return (
    <div>
<div>
  <div className="about-area section-padding bg-gray" id='aboutUs'>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-xs-12 info">
          <div className="about-wrapper wow fadeInLeft" data-wow-delay="0.3s">
            <div>
              <div className="site-heading">
                <p className="mb-3">Manage Statistics</p>
                <h2 className="section-title">Detailed Statistics of your Company</h2>
              </div>
              <div className="content">
                <p>
                InstaFamous is a platform created for anybody who wants to organically boost their following. Our interconnected global networks of influencers and creators have allowed us to create a large bank of audiences. We incentivize the audiences to engage with the creators that pay us for our services. Build your engagement and following now!  
                </p>
                <a href="#" className="btn btn-common mt-3">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
          <img className="img-fluid" src="assets/img/about/img-1.png" alt />
        </div>
      </div>
    </div>
  </div>
  {/* About Section End */}
  {/* Features Section Start */}
  <section id="features" className="section-padding">
    <div className="container">
      <div className="section-header text-center">          
        <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">How to Use this Site</h2>
        <div className="shape wow fadeInDown" data-wow-delay="0.3s" />
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <div className="content-left">
            <div className="box-item wow fadeInLeft" data-wow-delay="0.3s">
              <span className="icon">
                <i className="lni-rocket" />
              </span>
              <div className="text">
                <h4>Bootstrap 4 Based</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="box-item wow fadeInLeft" data-wow-delay="0.6s">
              <span className="icon">
                <i className="lni-laptop-phone" />
              </span>
              <div className="text">
                <h4>Fully Responsive</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="box-item wow fadeInLeft" data-wow-delay="0.9s">
              <span className="icon">
                <i className="lni-cog" />
              </span>
              <div className="text">
                <h4>HTML5, CSS3 &amp; SASS</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <div className="show-box wow fadeInUp" data-wow-delay="0.3s">
            <img src="assets/img/feature/intro-mobile.png" alt />
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <div className="content-right">
            <div className="box-item wow fadeInRight" data-wow-delay="0.3s">
              <span className="icon">
                <i className="lni-leaf" />
              </span>
              <div className="text">
                <h4>Modern Design</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
            </div>
            <div className="box-item wow fadeInRight" data-wow-delay="0.6s">
              <span className="icon">
                <i className="lni-layers" />
              </span>
              <div className="text">
                <h4>Multi-purpose Template</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="box-item wow fadeInRight" data-wow-delay="0.9s">
              <span className="icon">
                <i className="lni-leaf" />
              </span>
              <div className="text">
                <h4>Working Contact Form</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  )
}
