import React, { useRef, useState, useEffect } from 'react';
import { NavLink,Outlet } from 'react-router-dom'
import { BsWhatsapp } from "react-icons/bs";
import { FiArrowUpCircle } from "react-icons/fi";
import "../styles/app.layout.css"
import AnnouncementBar from "./AnnouncementBar"
import Header from "./Header"
import Footer from "./Footer"

const Layouts = () => {
  const topRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <AnnouncementBar />
    <Header/>
    <div ref={topRef}></div>
    <Outlet/>
    <NavLink to="https://wa.me/971564911220?text=Hello%20Elite%20Guard%20Team%2C%20I%27d%20like%20a%20quote%20for%20window%20tinting..." 
           target="_blank"  className="float-container">
      <BsWhatsapp size={30} color='#ffffff'/>
    </NavLink>
    <NavLink onClick={scrollToTop}  to="#" className={showButton ? "float-top" : ""}>
      <FiArrowUpCircle size={30} color='#ffffff'/>
    </NavLink>
    <Footer/>
    </>
  )
}

export default Layouts