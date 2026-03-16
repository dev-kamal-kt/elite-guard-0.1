import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


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
              <span className="icon"><MdAddIcCall size={25}/></span> +971564911220
            </NavLink>
          </li>
          <li>
            <NavLink to="mailto:eliteguardcarcare@gmail.com" className="footer-link">
              <span className="icon"><MdOutlineEmail size={25}/></span> eliteguardcarcare@gmail.com
            </NavLink>
          </li>
          <li className='social-links'>
             <NavLink target='_blank' to="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbnItdU1TcEJGc01Hc2k5bzlzVjZOdVA4SXFRZ3xBQ3Jtc0trcXotMTZvU2R2TndDa0p1eFpCQzJzb1F3ZFZ3NWZwZ1ZZU0YyNjdTbFJqSVdlX1ppM3ZhTy1mbXRLbWxaTjBlcS1KNzE3WHQ4SzFaajZFTnNzTlhxYkhENml5cm5leVN3UjI0Nk90dnJoT3RqSFhTSQ&q=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61587138735648">
                <IoLogoFacebook size={25}/>
             </NavLink>
             <NavLink target='_blank' to="https://www.instagram.com/eliteguardcar">
                <FaSquareInstagram size={25}/>
             </NavLink>
             <NavLink target='_blank' to="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqa0xqYmxQOWlSRXNuMVNYWUFCWW5UZXMtUUo1QXxBQ3Jtc0ttNElPdXIwRkdnaXducWJBNjdaM05xV0tGR2txcGU1blc3STB2TmM2MTh6amJQTGJpdFhBakN3ZGdWOG1TTE5pWjg3Z0JQdWFDNjlnaU1QUVZhNHNHWFBNWXk1ZVRzVGJDUjd4Qnc1Sl9kU0V3LTNkZw&q=https%3A%2F%2Fx.com%2Fguard_elit36151">
                <FaXTwitter size={25}/>
             </NavLink>

          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h3 className="footer-title">Our Services</h3>
        <ul className="footer-list">
          <li><NavLink to="/services/Car Window Tinting" className="footer-link">Automotive Protection</NavLink></li>
          <li><NavLink to="/services/Home Window Tinting" className="footer-link">Residential Window Film</NavLink></li>
          <li><NavLink to="/services/Office Window Tinting" className="footer-link">Commercial Window Film</NavLink></li>
          <li><NavLink to="/services/Surface Paint Protection Film" className="footer-link">Surface Protection</NavLink></li>
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
        © 2026 Elite Guard Auto Accessories Fittings LLC. All rights reserved.<br/>
        Proudly serving DIP 2, Dubai - Street 30 - Dubai Investment Park Second - Dubai
      </p>
    </div>
  </div>
</footer>
  )
}

export default Footer