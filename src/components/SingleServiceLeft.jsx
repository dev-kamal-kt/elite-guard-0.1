import React from "react";
import { NavLink } from "react-router-dom";

const SingleServiceLeft = () => {
  return (
    <div className="col-50">
      {/* Get Service Box */}
      <div data-aos="fade-left"
     className="ct-fancy-box ct-fancy-box-layout1">
        <div className="item--inner">
          <div className="item--meta">
            <h4 className="item--title">Get Service</h4>
            <div className="item--description">
              With quality parts to meet every budget and friendly staff trained
              to make your visit informative and hassle free.
            </div>
            <div className="item--link">
              <NavLink className="btn btn-style2" to="/contact-us#quick-contact">
                Get Service
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info: Phone */}
      <div data-aos="fade-left"
     className="ct-contact-info">
        <div className="ct-contact-content">
          <label className="ct-contact-title">Contact Us</label>
          <div className="ct-contact-list">
            <a href="tel:+971564911220" aria-label="Call us at +971564911220">
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
              <span>+971564911220</span>
            </a>
          </div>
          <div className="ct-contact-list">
            <a
              href="mailto:eliteguardcarcare@gmail.com"
              aria-label="Email us at eliteguardcarcare@gmail.com"
            >
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <span>eliteguardcarcare@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Info: Address */}
      <div data-aos="fade-left"
      className="ct-contact-info">
        <div className="ct-contact-content">
          <label className="ct-contact-title">Address</label>
          <div className="ct-contact-list">
            <a
              href="https://www.google.com/maps/place/24%C2%B058'07.5%22N+55%C2%B011'31.5%22E/@24.9687415,55.1894963,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.9687415!4d55.1920712?hl=en&entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our location on Google Maps"
            >
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <span>
                DIP 2, Dubai - Street 30 - Dubai Investment Park Second - Dubai
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Always open section */}
      <div data-aos="fade-left"
      className="ct-contact-info">
        <div className="ct-contact-content">
          <label className="ct-contact-title">Open For Consultation 24/7</label>
          <div className="ct-contact-list">
          
          </div>
        </div>
      </div>


      {/* Open Hours Box */}
      <div data-aos="fade-left"
     className="ct-fancy-box ct-fancy-box-layout2">
        <div className="item--inner">
          <div className="item--meta">
            <h4 className="item--title">Open Hours</h4>
            {[
              { day: "Monday", hours: "8 am - 8 pm" },
              { day: "Tuesday", hours: "8 am - 8 pm" },
              {
                day: "Wednesday",
                hours: "8 am - 8 pm",
              },
              { day: "Thursday", hours: "8 am - 8 pm" },
              { day: "Friday", hours: "8 am - 8 pm" },
              { day: "Saturday", hours: "9 am - 7 pm" },
              { day: "Sunday", hours: "9 am - 7 pm" },
            ].map((item, index) => (
              <div key={index} className="item--list">
                <span>{item.day}</span>
                <span>{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceLeft;
