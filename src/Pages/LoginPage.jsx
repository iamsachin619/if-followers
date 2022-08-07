import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { signInEmail,continueWithGoogle } from "../Firebase/firebase";
import "./login.scss";
import {useToaster , Notification} from 'rsuite'
export default function LoginPage({setUser,order}) {

  const toaster = useToaster()
  const navigation = useNavigate()

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState(null)
  const loginEmail = async (e) => {
    e.preventDefault()
    const res = await signInEmail(email, pass)
    console.log(res)
    if(res.status === true){
      setUser({...res.user, ...res.data})
      toaster.push(message)
      if(order){
        navigation('/processPayment')
      }else{
        navigation('/main')
      }
    }else{
      setErr(res.error.message)
    }
  }


  const signGoogle = async (e) => {
    e.preventDefault()
    const res = await continueWithGoogle();
    console.log({res})
    if(res.status){
      setUser({...res.user, ...res.data})
      toaster.push(message)
          if(order){
            navigation('/processPayment')
          }else{
            navigation('/main')
          }
    }else{
      setErr('Something went wrong, Please try again!')
    }
  }

  const message = (
    <Notification type={'success'} header={'Welcome back!'} closable>
      <p className="text">
        Logged in successfully.
      </p>
    </Notification>
  );
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
        <div className="contents order-1   mt-2 py-4 ">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-11">
                <div className="mb-4">
                  <h3>Sign In</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                </div>
                {err && <p className="alert alert-danger">{err}</p>}
                <form >
                  <div className="form-group first">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" value={email} onChange={e => setEmail(e.target.value)}/>
                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={pass}
                      onChange={e => setPass(e.target.value)}
                    />
                  </div>
                  <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0">
                      <input type="checkbox" defaultChecked="checked" />
                      <span className="caption ml-2">Remember me</span>
                      <div className="control__indicator" />
                    </label>
                    <span className="ml-auto">
                      <a href="#" className="forgot-pass">
                        Forgot Password
                      </a>
                    </span>
                  </div>
                  <div className="d-flex mb-4 align-items-center text-center">
                    <label className="control control--checkbox mb-0  mx-auto">
                      <span className="caption text-dark">Not a user yet? <Link to='/signup' className="forgot-pass">
                        SignUp here!
                      </Link></span>
                      
                    
                    </label>
                    
                  </div>
                  <button
                    onClick={(e)=> {loginEmail(e)}}
                    className="btn btn-block btn-common"
                  >Log In</button>
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
                      onClick={e => signGoogle(e)}
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
  );
}
