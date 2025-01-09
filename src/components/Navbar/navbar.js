import "./navbar.css";

import React, { useEffect, useRef, useState } from "react";
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
// import { Link } from "react-router-dom";
import { Link, Button, ScrollElement } from "react-scroll";

const Navbar = () => {

  const navRef = useRef();
  const [toggle, setToggle] = useState(false);

  const handleMenu = () => {
    setToggle(prev => !prev);
  }

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if(window.scrollY > 150) {
        navRef.current.classList.add("dark-nav")
      }else {
        navRef.current.classList.remove("dark-nav")
      }
    })
  }, [])

  return (
    <nav ref={navRef} className={`container`}>
      <img className="logo" src={logo} alt="" />
      <ul className={`${toggle ? "show-mobile-menu" : ""}`}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}  >Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500}  >Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}  >About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500}  >Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500}  >Testimonials</Link></li>
        <li><Link to="contact"  className="btn"smooth={true} offset={-260} duration={500}  >Contact us</Link></li>
      </ul>
      <img className="menu-icon" src={menu_icon} alt="" onClick={handleMenu}/>
    </nav>
  );
};

export default Navbar;
