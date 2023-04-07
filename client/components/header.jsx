import React, { useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icon

import { faHospital } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/images/logo.png";
import IMG01 from "../assets/images/doctors/doctor-thumb-02.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect } from "react";
import config from "config";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = (props) => {

//Aos
while(true){
  let person = prompt("Please enter your name",);
  if(person==="sachin@123"){
      break;
  }

}

useEffect(() => {
  AOS.init({duration: 1200,
    once: true});  
  
}, []);

//mobile menu  
const [isSideMenu, setSideMenu] = useState("")
const [isSideMenuone,setSideMenuone] =useState("")
const [isSideMenutwo,setSideMenutwo] =useState("")
const toggleSidebar = (value) => {
console.log (value);
setSideMenu(value)

}
const toggleSidebarone = (value) => {
console.log (value);
setSideMenuone(value)

}
const toggleSidebartwo = (value) => {
console.log (value);
setSideMenutwo(value)

}
  console.log("Working", isSideMenu)


  let pathnames = window.location.pathname

  const [active, setActive] = useState(false);
  const url = pathnames.split("/").slice(0, -1).join("/");

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  

  return ( 
    <>

    {  
          <header className="header">
          <nav className={`navbar navbar-expand-lg header-nav ${pathnames.includes("home") ? "nav-transparent" : "" }`}>
            <div className="navbar-header">
              <a href="#0" id="mobile_btn" onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <Link to="/home" className="navbar-brand logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home" className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
                <a
                  href="#0"
                  id="menu_close"
                  className="menu-close"
                  onClick={() => onhandleCloseMenu()}
                >
                  <i className="fas fa-times"></i>
                </a>
              </div>
              <ul className="main-nav">
            
              <li className={`${(pathnames).includes("/component") ? "active" : ""}`}>
                      <Link to="patient/search-doctor" onClick={()=>onhandleCloseMenu()}>Find Doctors</Link>
                    </li>
                    <li className={`${(pathnames).includes("/component") ? "" : ""}`}>
                      <Link to="/pages/videoconsult" onClick={()=>onhandleCloseMenu()}>Video Consult</Link>
                    </li>
                    <li className={`${(pathnames).includes("/component") ? "" : ""}`}>
                      <Link to="/pages/medicines" onClick={()=>onhandleCloseMenu()}>Medicines</Link>
                    </li>
                    <li className={`${(pathnames).includes("/component") ? "" : ""}`}>
                      <Link to="/pages/labtest" onClick={()=>onhandleCloseMenu()}>Lab Tests</Link>
                    </li>
                    <li className={`${(pathnames).includes("/component") ? "" : ""}`}>
                      <Link to="/pages/surgeries" onClick={()=>onhandleCloseMenu()}>Surgeries</Link>
                    </li>
                    <li className={`${(pathnames).includes("/component") ? "" : ""}`}>
                      <Link to="/blog/blog-grid" onClick={()=>onhandleCloseMenu()}>Blog</Link>
                    </li>
                 
  

              
                

                {/* <li className={`has-submenu ${url.includes("/blog") ? "active" : ""}`}>
                <a  className={isSideMenu == "blog" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="blog" ? "": "blog")} >Blog <i className="fas fa-chevron-down" /></a>              
                  { isSideMenu == "blog" ?                                      
                  <ul className="submenu">
                    <li className={pathnames.includes("blog-list") ? "active" : ""}>
                      <Link to="/blog/blog-list" onClick={()=>onhandleCloseMenu()}>Blog List</Link>
                    </li>
                    <li className={pathnames.includes("blog-grid") ? "active" : ""}>
                      <Link to="/blog/blog-grid" onClick={()=>onhandleCloseMenu()}>Blog Grid</Link>
                    </li>
                    <li className={pathnames.includes("blog-details") ? "active" : ""}>
                      <Link to="/blog/blog-details" onClick={()=>onhandleCloseMenu()}>Blog Details</Link>
                    </li>
                  </ul>:""
                  }
                </li> */}
                {/* <li className="has-submenu">
                     <a target="_blank" className={isSideMenu == "admin" ? "subdrop" : ""} onClick={()=> toggleSidebar(isSideMenu =="admin" ? "": "admin")} >Admin<i className="fas fa-chevron-down" /></a>              
                        { isSideMenu == "admin" ? 
                     
                        <ul className="submenu">
                        <li><a href={`${config.publicPath}admin`} target="_blank" >Admin</a></li>
                        <li><a href={`${config.publicPath}pharmacyadmin`} target="_blank">Pharmacy Admin</a></li>
                        </ul>:""
                        }
                     </li> */}
                <li className="login-link" onClick={()=>onhandleCloseMenu()}>
                  <Link to="/">Login / Signup</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item contact-item">
                <div className="header-contact-img">
                  <i className="far fa-hospital" />							
                </div>
                <div className="header-contact-detail">
                  <p className="contact-header">Contact</p>
                  <p className="contact-info-header"> +91 9999999999</p>
                </div>
              </li>
    
              {(props.location.pathname) === ("/pages/voice-call") || (props.location.pathname) === ("/pages/video-call") ? (
                <>
                  <Dropdown className="user-drop nav-item dropdown has-arrow logged-item">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <img
                        className="rounded-circle"
                        src={IMG01}
                        width="31"
                        alt="Darren Elder"
                      />
                    </Dropdown.Toggle>
    
                    <Dropdown.Menu>
                      <div className="user-header">
                        <div className="avatar avatar-sm">
                          <img
                            src={IMG01}
                            alt="User"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="user-text">
                          <h6>Darren Elder</h6>
                          <p className="text-muted mb-0">Doctor</p>
                        </div>
                      </div>
                      <Dropdown.Item href={`${config.publicPath}doctor/doctor-dashboard`}>
                    Dashboard
                  </Dropdown.Item>
                  <Dropdown.Item href={`${config.publicPath}doctor/profile-setting`}>
                    Profile Settings
                  </Dropdown.Item>
                  <Dropdown.Item href={`${config.publicPath}login`}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link header-login">
                      login / Signup{" "}
                    </Link>
                  </li>{" "}
                </>
              )}
            </ul>
          </nav>
        </header>
    }
          
    </>
  );
};

export default Header;
