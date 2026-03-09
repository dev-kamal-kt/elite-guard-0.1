import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-top">
      <div className="footer-column">
        <h3 className="footer-title">Contact Us</h3>
        <ul className="footer-contact-list">
          <li>
            <NavLink to="tel:+971563990282" className="footer-link">
              <span className="icon"><MdAddIcCall size={25}/></span> +971563990282
            </NavLink>
          </li>
          <li>
            <NavLink to="mailto:eliteguardcarcare@gmail.com" className="footer-link">
              <span className="icon"><MdOutlineEmail size={25}/></span> eliteguardcarcare@gmail.com
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h3 className="footer-title">Our Services</h3>
        <ul className="footer-list">
          <li><NavLink to="/services#window-tinting" className="footer-link">Window Tinting</NavLink></li>
          <li><NavLink to="/services#car-wrapping" className="footer-link">Car Wrapping</NavLink></li>
          <li><NavLink to="/services#car-detailing" className="footer-link">Car Detailing</NavLink></li>
          <li><NavLink to="/services#protection-films" className="footer-link">Protection Films</NavLink></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-title">Quick Links</h3>
        <ul className="footer-list">
          <li><NavLink to="/privacy-policy" className="footer-link">Privacy Policy</NavLink></li>
          <li><NavLink to="/faq" className="footer-link">FAQ</NavLink></li>
          <li><NavLink to="/about-us" className="footer-link">About US</NavLink></li>
          <li><NavLink to="/contact" className="footer-link">Contact</NavLink></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p className="copyright">
        © 2026 Elite Guard Car Care. All rights reserved.<br/>
        Proudly serving Dubai & Abu Dhabi, UAE.
      </p>
    </div>
  </div>
</footer>
  )
}

export default Footer