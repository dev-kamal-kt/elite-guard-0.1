import React from "react";
import "../styles/service-section.css";

const ServiceSection = () => {
  return (
    <>
      <h2 className="section-title">Our Latest Services</h2>
      <section className="services-grid container">
        <div className="service-card">
          <div
            className="card-image"
            style={{ backgroundImage: "url('/service-imgs/car-tinting.jpeg')" }}
          ></div>
          <div className="card-body">
            <h2 className="card-title">Car Window Tinting</h2>
            {/* <div className="card-subtitle">3M Crystalline & Ceramic</div> */}
            {/* <div className="card-price">from AED 1,499</div> */}
            <ul className="card-features">
              <li>We will come to your doorstep</li>
              <li>Premium Heat Rejection & 99% UV Protection</li>
              <li>Zero Bubble & Dust Free Installation</li>
              <li>Professional Work with 14yrs + Experience</li>
              <li>We Come to Your Doorstep – Hassle-Free Mobile Service</li>
            </ul>
            <a href="#quote" className="book-btn">
              Book Now <span className="heartbeat">♥</span>
            </a>
          </div>
        </div>
        <div className="service-card">
          <div
            className="card-image"
            style={{
              backgroundImage: "url('/service-imgs/window-tinting.jpeg')",
            }}
          ></div>
          <div className="card-body">
            <h2 className="card-title">Premium Window Tinting</h2>
            {/* <div className="card-subtitle">Full / Partial • 3M & Avery</div> */}
            {/* <div className="card-price">from AED 4,999</div> */}
            <ul className="card-features">
              <li>Heat & Glare Reduction for Better Comfort</li>
              <li>Up to 99% UV Protection</li>
              <li>Improved Privacy Without Blocking Natural Light</li>
              <li>Energy Saving & Interior Protection</li>
              <li>Installed by Certified & Experienced Professionals</li>
            </ul>
            <a href="#quote" className="book-btn">
              Book Now <span className="heartbeat">♥</span>
            </a>
          </div>
        </div>
        <div className="service-card">
          <div
            className="card-image"
            style={{
              backgroundImage:
                "url('/service-imgs/gold-reflective.jpeg')",
            }}
          ></div>
          <div className="card-body">
            <h2 className="card-title">GS Reflective Film</h2>
            {/* <div className="card-subtitle">Self-healing PPF</div> */}
            {/* <div className="card-price">from AED 3,499</div> */}
            <ul className="card-features">
              <li>GS Reflective – Mirror Privacy + Extreme Heat Block</li>
              <li>GS Reflective Tint – 92% IR Rejection Inside Out</li>
              <li>Clear View In, Mirror Shine Out – GS Reflective</li>
              <li>GS Reflective Film – Cool Cabin, Total Privacy</li>
              <li>GS Mirror Tint – Glare Gone, Heat Rejected</li>
            </ul>

            <a href="#quote" className="book-btn">
              Book Now <span className="heartbeat">♥</span>
            </a>
          </div>
        </div>
        <div className="service-card">
          <div
            className="card-image"
            style={{
              backgroundImage:
                "url('/service-imgs/luxery-tinting.jpg')",
            }}
          ></div>
          <div className="card-body">
            <h2 className="card-title">Luxury & Custom Tinting Solutions</h2>
            {/* <div className="card-subtitle">Professional Grade</div>
            <div className="card-price">from AED 1,799</div> */}
            <ul className="card-features">
              <li>Tailored Shades for Luxury & Sports Cars</li>
              <li>Multiple VLT Options to Match Your Style</li>
              <li>Precision Edge-to-Edge Application</li>
              <li>Premium Look with High-End Film Quality</li>
              <li>VIP Doorstep Service – Discreet & Fast</li>
            </ul>
            <a href="#quote" className="book-btn">
              Book Now <span className="heartbeat">♥</span>
            </a>
          </div>
        </div>
        <div className="service-card">
          <div
            className="card-image"
            style={{
              backgroundImage:
                "url('/service-imgs/heat-tinting.jpg')",
            }}
          ></div>
          <div className="card-body">
            <h2 className="card-title">Heat Rejection Window Films</h2>
            {/* <div className="card-subtitle">Professional Grade</div>
            <div className="card-price">from AED 1,799</div> */}
            <ul className="card-features">
              <li>Drastic Reduction in Cabin Temperature</li>
              <li>Less Reliance on Air Conditioning</li>
              <li>Improved Fuel Efficiency in Hot Climates</li>
              <li>Instant Comfort Even After Parking in Sun</li>
              <li>Superior Solar Control for UAE Summers</li>
            </ul>
            <a href="#quote" className="book-btn">
              Book Now <span className="heartbeat">♥</span>
            </a>
          </div>
        </div>
        <div className="service-card">
          <div
            className="card-image"
            style={{
              backgroundImage:
                "url('/service-imgs/privacy-tinting.jpg')",
            }}
          ></div>
          <div className="card-body">
            <h2 className="card-title">Privacy Window Tinting</h2>
            {/* <div className="card-subtitle">Professional Grade</div>
            <div className="card-price">from AED 1,799</div> */}
            <ul className="card-features">
              <li>Enhanced Day & Night Privacy Protection</li>
              <li>Dark Exterior Look with Clear Interior View</li>
              <li>Blocks Glare from Sun & Headlights</li>
              <li>Keeps Valuables Hidden from View</li>
              <li>Secure & Stylish Appearance Upgrade</li>
            </ul>
            <a href="#quote" className="book-btn">
              Book Now <span className="heartbeat">♥</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
