import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../styles/drop-down.css";

const Header = () => {
  const location = useLocation();
  const [path, setPath] = useState("/");
  const navRef = useRef(null);
  const qtrRef = useRef(null);
  const [scrollCount, setScrollCount] = useState(0);
  const navigate = useNavigate();

  const openMenu = () => {
    navRef.current.classList.toggle("active");
  };
  const getQote = () => {
    qtrRef.current.click();
    //navigate("https://wa.me/971564911220?text=Hello%20Elite%20Guard%20Team%2C%20I%27d%20like%20a%20quote%20for%20window%20tinting...")
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollCount((prev) => prev + 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollCount > 0 && navRef.current) {
      navRef.current.classList.remove("active");
    }
  }, [scrollCount]);

  useEffect(() => {
    setPath(location.pathname);
    console.log(path);
  }, [location]);

  return (
    <header>
      <nav className="container">
        <div className="logo" data-translate="logo">
          <img src="./images/logo.png" alt="Elite Guard Logo" />
        </div>
        <ul ref={navRef} className="nav-links">
          <li>
            <NavLink
              className={path === "/" ? "active-nav" : ""}
              to="/"
              data-translate="nav_home"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="#">
              Services
              <i className="fas fa-caret-down"></i>
            </NavLink>
            <div className="dropdown">
              <ul>
                <li className="dropdown-link">
                  <NavLink to="#">
                    Automotive Services
                    <i className="fas fa-caret-down"></i>
                  </NavLink>
                  <div className="dropdown second">
                    <ul>
                      <li className="dropdown-link">
                        <NavLink to="/service/fullstack-seo">
                         Car Window Tinting
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink to="/service/google-ads">
                          Paint Protection Film
                        </NavLink>
                      </li>
                      <div className="arrow"></div>
                    </ul>
                  </div>
                </li>
                {/* More Services */}
                <li className="dropdown-link">
                  <NavLink to="#">
                    Residential Services
                    <i className="fas fa-caret-down"></i>
                  </NavLink>
                  <div className="dropdown second">
                    <ul>
                      <li className="dropdown-link">
                        <NavLink to="/service/graphic-design">
                          Home Window Tinting
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink to="/service/video-production">
                          Privacy Window Film
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink to="/service/copywriting">
                         Kitchen Window Film
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink to="/service/logo-desgin">Surface Protection Film (Surface PPF)</NavLink>
                      </li>
                     
                      <div className="arrow"></div>
                    </ul>
                  </div>
                </li>
                {/* More Services */}
                <li className="dropdown-link">
                  <NavLink to="#">
                   Commercial Services
                    <i className="fas fa-caret-down"></i>
                  </NavLink>
                  <div className="dropdown second">
                    <ul>
                      <li className="dropdown-link">
                        <NavLink to="/service/blog-writing">
                         Office Window Tinting
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink to="/service/sound-canvas">
                         Building Glass Film
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink to="/service/product-description">
                         Security Window Film
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink to="/service/content-strategy">
                         Surface Protection Film
                        </NavLink>
                      </li>
                      <div className="arrow"></div>
                    </ul>
                  </div>
                </li>
                <div className="arrow"></div>
              </ul>
            </div>
          </li>
          {/* <li className="dropdown">
            <NavLink className={path === "/services" ? "active-nav" : ""} to="#services" data-translate="nav_services">
              Services
            </NavLink>
            <ul className="dropdown-content">
              <li>
                <NavLink to="#services" data-translate="nav_window_tinting">
                  Window Tinting
                </NavLink>
              </li>
              <li>
                <NavLink to="#services" data-translate="nav_car_wrapping">
                  Car Wrapping
                </NavLink>
              </li>
              <li>
                <NavLink to="#services" data-translate="nav_car_detailing">
                  Car Detailing
                </NavLink>
              </li>
              <li>
                <NavLink to="#services" data-translate="nav_protection_films">
                  Protection Films
                </NavLink>
              </li>
            </ul>
          </li> */}

          <li>
            <NavLink
              className={path === "/process" ? "active-nav" : ""}
              to="/process"
              data-translate="nav_process"
            >
              Process
            </NavLink>
          </li>
          <li>
            <NavLink
              className={path === "/why-us" ? "active-nav" : ""}
              to="/why-us"
              data-translate="nav_why_us"
            >
              Why Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={path === "/projects" ? "active-nav" : ""}
              to="/projects"
              data-translate="nav_projects"
            >
              Projects
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="#contact" data-translate="nav_contact">
              Contact
            </NavLink>
          </li> */}
          <li className="flex-row">
            <NavLink
              className={path === "/contact-us" ? "active-nav" : ""}
              to="/contact-us"
              data-translate="nav_contact"
            >
              Contact
            </NavLink>
            <button onClick={getQote} className="qute-btn">
              Get Free Quote
            </button>
          </li>
        </ul>
        <NavLink
          ref={qtrRef}
          to="https://wa.me/971564911220?text=Hello%20Elite%20Guard%20Team%2C%20I%27d%20like%20a%20quote%20for%20window%20tinting..."
          target="_blank"
          className="glow-button"
          data-translate="nav_contact"
        >
          Get Free Quote
        </NavLink>
        <div onClick={openMenu} className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

/*
Services
Automotive Services
__Car Window Tinting
__Paint Protection Film (PPF)
Residential Services
__Home Window Tinting
__Privacy Window Film
__Kitchen Window Film
__Surface Protection Film (Surface PPF)
Commercial Services
__Office Window Tinting
__Building Glass Film
__Security Window Film
__Surface Protection Film

*/
