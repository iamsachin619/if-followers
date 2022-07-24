import React,{useState} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'
export default function NavbarLogged() {
    const [collapseStatus, setCollapsestatus] = useState(false)
  return (
    <div>
         <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar" style={{backgroundColor:'white',boxShadow:'0px 3px 6px 3px rgba(0,0,0,0.04)', zIndex:'2'}}>
  <div className="container">
    {/* Brand and toggle get grouped for better mobile display */}
    <AnchorLink  href="index.html" className="navbar-brand"><img src="assets/img/logo.png" alt /></AnchorLink >       
    <button className={`navbar-toggler ${collapseStatus?'collapsed':''}`} type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"
    onClick={()=>{

        console.log(collapseStatus)
        setCollapsestatus((prev)=> !prev)}}>
      <i className="lni-menu" />
    </button>
    <div className={`${collapseStatus?'show':''} navbar-collapse ${collapseStatus?'collapse ':'collapse '}`} id="navbarCollapse">
      <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
        <li className="nav-item active">
          <AnchorLink  className="nav-link" href="#hero-area">
            Home
          </AnchorLink >
        </li>
        <li className="nav-item">
          <AnchorLink  className="nav-link" href="#hero-area">
            Order
          </AnchorLink >
        </li>
        <li className="nav-item">
          <AnchorLink  className="nav-link" href="#hero-area">
            Home
          </AnchorLink >
        </li>
        <li className="nav-item">
          {/* <Link to='/login' className="btn btn-common" id='loginBtn' href="#contact" 
          onMouseEnter={e => {
            console.log(e.target.style.color)
            e.target.style.color = ' #F63854'
          }}
          onMouseLeave={e => {
            console.log(e.target.style.color)
            e.target.style.color = 'white'
          }}
          >
            Sign in
          </Link >

          */}
          <Link to='/signup' className="btn btn-border ml-2" id='loginBtn' href="#contact" 
          onMouseEnter={e => {
            console.log(e.target.style.color)
            e.target.style.color = ' white'
          }}
          onMouseLeave={e => {
            console.log(e.target.style.color)
            e.target.style.color = '#F63854'
          }}
          >
            LogOut
          </Link > 
        </li>
        <li className="nav-item">
          
          
        </li>
      </ul>
    </div>
  </div>
 
         </nav>
    </div>
  )
}
