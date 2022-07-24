import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination , Navigation , Autoplay } from "swiper";

export default function Testemonials() {
  return (
    <div>
      <section id="testimonial" className="testimonial section-padding">
        <div className="container">
        
          <div className="row justify-content-center">
      <h2 className="text-white mb-5 text-center">Our happy customers</h2>
            
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              
                <Swiper slidesPerView={"auto"} spaceBetween={10} loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        >
                  <SwiperSlide className="col-lg-4">
                    <div className="item">
                      <div className="testimonial-item">
                        <div className="img-thumb">
                          <img src="assets/img/testimonial/img1.jpg" alt />
                        </div>
                        <div className="info">
                          <h2>
                            <a href="#">David Smith</a>
                          </h2>
                          <h3>
                            <a href="#">Creative Head</a>
                          </h3>
                        </div>
                        <div className="content">
                          <p className="description">
                            Praesent cursus nulla non arcu tempor, ut egestas
                            elit tempus. In ac ex fermentum, gravida felis nec,
                            tincidunt ligula.
                          </p>
                          <div className="star-icon mt-3">
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-half" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide  className="col-lg-4">
                    <div className="item">
                      <div className="testimonial-item">
                        <div className="img-thumb">
                          <img src="assets/img/testimonial/img1.jpg" alt />
                        </div>
                        <div className="info">
                          <h2>
                            <a href="#">David Smith</a>
                          </h2>
                          <h3>
                            <a href="#">Creative Head</a>
                          </h3>
                        </div>
                        <div className="content">
                          <p className="description">
                            Praesent cursus nulla non arcu tempor, ut egestas
                            elit tempus. In ac ex fermentum, gravida felis nec,
                            tincidunt ligula.
                          </p>
                          <div className="star-icon mt-3">
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-half" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide  className="col-lg-4">
                    <div className="item">
                      <div className="testimonial-item">
                        <div className="img-thumb">
                          <img src="assets/img/testimonial/img1.jpg" alt />
                        </div>
                        <div className="info">
                          <h2>
                            <a href="#">David Smith</a>
                          </h2>
                          <h3>
                            <a href="#">Creative Head</a>
                          </h3>
                        </div>
                        <div className="content">
                          <p className="description">
                            Praesent cursus nulla non arcu tempor, ut egestas
                            elit tempus. In ac ex fermentum, gravida felis nec,
                            tincidunt ligula.
                          </p>
                          <div className="star-icon mt-3">
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-half" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide  className="col-lg-4">
                    <div className="item">
                      <div className="testimonial-item">
                        <div className="img-thumb">
                          <img src="assets/img/testimonial/img1.jpg" alt />
                        </div>
                        <div className="info">
                          <h2>
                            <a href="#">David Smith</a>
                          </h2>
                          <h3>
                            <a href="#">Creative Head</a>
                          </h3>
                        </div>
                        <div className="content">
                          <p className="description">
                            Praesent cursus nulla non arcu tempor, ut egestas
                            elit tempus. In ac ex fermentum, gravida felis nec,
                            tincidunt ligula.
                          </p>
                          <div className="star-icon mt-3">
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-half" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide  className="col-lg-4">
                    <div className="item">
                      <div className="testimonial-item">
                        <div className="img-thumb">
                          <img src="assets/img/testimonial/img1.jpg" alt />
                        </div>
                        <div className="info">
                          <h2>
                            <a href="#">David Smith</a>
                          </h2>
                          <h3>
                            <a href="#">Creative Head</a>
                          </h3>
                        </div>
                        <div className="content">
                          <p className="description">
                            Praesent cursus nulla non arcu tempor, ut egestas
                            elit tempus. In ac ex fermentum, gravida felis nec,
                            tincidunt ligula.
                          </p>
                          <div className="star-icon mt-3">
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-filled" />
                            </span>
                            <span>
                              <i className="lni-star-half" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                {/* <div className="item">
                  <div className="testimonial-item">
                    <div className="img-thumb">
                      <img src="assets/img/testimonial/img2.jpg" alt />
                    </div>
                    <div className="info">
                      <h2>
                        <a href="#">Domeni GEsson</a>
                      </h2>
                      <h3>
                        <a href="#">Awesome Technology co.</a>
                      </h3>
                    </div>
                    <div className="content">
                      <p className="description">
                        Praesent cursus nulla non arcu tempor, ut egestas elit
                        tempus. In ac ex fermentum, gravida felis nec, tincidunt
                        ligula.
                      </p>
                      <div className="star-icon mt-3">
                        <span>
                          <i className="lni-star-filled" />
                        </span>
                        <span>
                          <i className="lni-star-filled" />
                        </span>
                        <span>
                          <i className="lni-star-filled" />
                        </span>
                        <span>
                          <i className="lni-star-half" />
                        </span>
                        <span>
                          <i className="lni-star-half" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-item">
                    <div className="img-thumb">
                      <img src="assets/img/testimonial/img3.jpg" alt />
                    </div>
                    <div className="info">
                      <h2>
                        <a href="#">Dommini Albert</a>
                      </h2>
                      <h3>
                        <a href="#">Nesnal Design co.</a>
                      </h3>
                    </div>
                    <div className="content">
                      <p className="description">
                        Praesent cursus nulla non arcu tempor, ut egestas elit
                        tempus. In ac ex fermentum, gravida felis nec, tincidunt
                        ligula.
                      </p>
                      <div className="star-icon mt-3">
                        <span>
                          <i className="lni-star-filled" />
                        </span>
                        <span>
                          <i className="lni-star-filled" />
                        </span>
                        <span>
                          <i className="lni-star-filled" />
                        </span>
                        <span>
                          <i className="lni-star-filled" />
                        </span>
                        <span>
                          <i className="lni-star-half" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-item">
                    <div className="img-thumb">
                      <img src="assets/img/testimonial/img4.jpg" alt />
                    </div>
                    <div className="info">
                      <h2>
                        <a href="#">Fernanda Anaya</a>
                      </h2>
                      <h3>
                        <a href="#">Developer</a>
                      </h3>
                    </div>
                    <div className="content">
                      <p className="description">
                        Praesent cursus nulla non arcu tempor, ut egestas elit
                        tempus. In ac ex fermentum, gravida felis nec, tincidunt
                        ligula.
                      </p>
                      <div className="star-icon mt-3">
                        <span>
                          <i className="lni-star-filled" />
                        </span>
                        <span>
                          <i className="lni-star-filled" />
                        </span>
                        <span>
                          <i className="lni-star-half" />
                        </span>
                        <span>
                          <i className="lni-star-half" />
                        </span>
                        <span>
                          <i className="lni-star-half" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div> */}
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
