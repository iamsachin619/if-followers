import React from 'react'
import Footer from "../Components/Footer";
import "./login.scss";
export default function SignupPage() {
  return (
    <div>
            <div className="d-lg-flex half">
        <div
          className="bg order-2 "
          style={{
            backgroundImage: 'url("./assets/img/intro-mobile.png)',
            backgroundColor: "pink",
            width: "100%"
            
          }}
        />
        <div className="contents order-1   mt-2 py-5 ">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-11">
                <div className="mb-4">
                  <h3>Sign Up</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                </div>
                <form action="#" method="post">
                  <div className="form-group first">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" />
                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="password">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  {/* <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0">
                      <span className="caption">Remember me</span>
                      <input type="checkbox" defaultChecked="checked" />
                      <div className="control__indicator" />
                    </label>
                    <span className="ml-auto">
                      <a href="#" className="forgot-pass">
                        Forgot Password
                      </a>
                    </span>
                  </div> */}
             
                  <div className="d-flex mb-5 align-items-center text-center">
                    <label className="control control--checkbox mb-0  mx-auto">
                      <span className="caption text-dark">Already a user? <a href="#" className="forgot-pass">
                        SignIn here!
                      </a></span>
                      
                    
                    </label>
                    
                  </div>
                  <input
                    type="submit"
                    defaultValue="Log In"
                    className="btn btn-block btn-primary"
                  />
                  <span className="d-block text-center my-4 text-muted">
                    — or —
                  </span>
                  <div className="social-login">
                    <button
                      href="#"
                      className="facebook btn d-flex justify-content-center align-items-center text-red"
                    >
                      <span className="icon-facebook mr-3" /> Continue with
                      Facebook
                    </button>
                    <button
                      href="#"
                      className="twitter btn d-flex justify-content-center align-items-center"
                    >
                      <span className="icon-twitter mr-3" /> Continue with Twitter
                    </button>
                    <button
                      href="#"
                      className="google btn d-flex justify-content-center align-items-center"
                    >
                      <span className="icon-google mr-3" /> Continue with Google
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
