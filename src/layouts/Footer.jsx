import React from 'react'
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-top">
      <div className="footer-column">
        <h3 className="footer-title">Contact Us</h3>
        <ul className="footer-contact-list">
          <li>
            <NavLink to="tel:+971564911220" className="footer-link">
              <span className="icon">📞</span> +971 56 491 1220
            </NavLink>
          </li>
          <li>
            <NavLink to="tel:+971523323919" className="footer-link">
              <span className="icon">📞</span> +971 52 332 3919
            </NavLink>
          </li>
          <li>
            <NavLink to="mailto:eliteguardcarcare@gmail.com" className="footer-link">
              <span className="icon">✉️</span> eliteguardcarcare@gmail.com
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
          <li><NavLink to="/" className="footer-link">Home</NavLink></li>
          <li><NavLink to="/faq" className="footer-link">FAQ</NavLink></li>
          <li><NavLink to="/projects" className="footer-link">Projects</NavLink></li>
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