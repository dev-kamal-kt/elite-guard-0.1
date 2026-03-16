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
  }, [location]);

  return (
    <header>
      <nav className="container">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="logo"
          data-translate="logo"
        >
          <img src="/images/logo.png" alt="Elite Guard Logo" />
        </div>
        <ul ref={navRef} className="nav-links">
          <li>
            <NavLink
              onClick={openMenu}
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
                        <NavLink
                          onClick={openMenu}
                          to="/services/Car Window Tinting"
                        >
                          Car Window Tinting
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink onClick={openMenu} to="/services/Paint Protection Film">
                          Paint Protection Film
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink onClick={openMenu} to="/services/Windshield Protection Film">
                          Windshield Protection Film
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink onClick={openMenu} to="/services/Headlight Protection Film">
                          Headlight Protection Film
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
                        <NavLink
                          onClick={openMenu}
                          to="/services/Home Window Tinting"
                        >
                          Home Window Tinting
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink
                          onClick={openMenu}
                          to="/services/Privacy Window Film"
                        >
                          Privacy Window Film
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink onClick={openMenu} to="/services/Kitchen Window Film">
                          Kitchen Window Film
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink onClick={openMenu} to="/services/UV Protection Film">
                          UV Protection Film
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink onClick={openMenu} to="/services/Heat Reduction Film">
                          Heat Reduction Film
                        </NavLink>
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
                        <NavLink onClick={openMenu} to="/services/Office Window Tinting">
                          Office Window Tinting
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink onClick={openMenu} to="/services/Building Glass Film">
                          Building Glass Film
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink to="/services/Safety Security Film">
                          Safety Security Film
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink
                          onClick={openMenu}
                          to="/services/Anti Glare Film"
                        >
                          Anti Glare Film
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink
                          onClick={openMenu}
                          to="/services/Decorative Frosted Film"
                        >
                          Decorative Frosted Film
                        </NavLink>
                      </li>
                      <div className="arrow"></div>
                    </ul>
                  </div>
                </li>
                {/* More Services */}
                <li className="dropdown-link">
                  <NavLink to="#">
                    Surface Protection
                    <i className="fas fa-caret-down"></i>
                  </NavLink>
                  <div className="dropdown second">
                    <ul>
                      <li className="dropdown-link">
                        <NavLink onClick={openMenu} to="/services/Surface Paint Protection Film">
                          Surface Paint Protection Film
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink onClick={openMenu} to="/services/Kitchen Cabinet Protection Film">
                          Kitchen Cabinet Protection Film
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink to="/services/Marble Surface Protection Film">
                          Marble Surface Protection Film
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink
                          onClick={openMenu}
                          to="/services/Furniture Protection Film"
                        >
                          Furniture Protection Film
                        </NavLink>
                      </li>
                      <li className="dropdown-link">
                        <NavLink
                          onClick={openMenu}
                          to="/services/Elevator Panel Protection Film"
                        >
                          Elevator Panel Protection Film
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
              onClick={openMenu}
              className={path === "/why-us" ? "active-nav" : ""}
              to="/why-us"
              data-translate="nav_why_us"
            >
              Why Us
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={openMenu}
              className={path === "/projects" ? "active-nav" : ""}
              to="/projects"
              data-translate="nav_projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={openMenu}
              to="/blogs"
              className={path === "/blogs" ? "active-nav" : ""}
              data-translate="nav_contact"
            >
              Blogs
            </NavLink>
          </li>
          <li className="flex-row">
            <NavLink
              onClick={openMenu}
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

