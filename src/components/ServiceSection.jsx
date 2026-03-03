import React from 'react'
import "../styles/service-section.css"

const ServiceSection = () => {
  return (
   <section className="services-grid container">
    <div className="service-card">
      <div className="card-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop&q=80')"}}></div>
      <div className="card-body">
        <h2 className="card-title">Window Tinting</h2>
        <div className="card-subtitle">3M Crystalline & Ceramic</div>
        <div className="card-price">from AED 1,499</div>
        <ul className="card-features">
          <li>Up to 97% heat rejection</li>
          <li>99% UV protection</li>
          <li>Reduces glare & fading</li>
          <li>Lifetime / 10-year warranty</li>
        </ul>
        <a href="#quote" className="book-btn">
          Book Now <span className="heartbeat">♥</span>
        </a>
      </div>
    </div>
    <div className="service-card">
      <div className="card-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80')"}}></div>
      <div className="card-body">
        <h2 className="card-title">Car Wrapping</h2>
        <div className="card-subtitle">Full / Partial • 3M & Avery</div>
        <div className="card-price">from AED 4,999</div>
        <ul className="card-features">
          <li>Matte, satin, gloss, chrome</li>
          <li>Paint protection included</li>
          <li>Removable & reversible</li>
          <li>5–7 year durability</li>
        </ul>
        <a href="#quote" className="book-btn">
          Book Now <span className="heartbeat">♥</span>
        </a>
      </div>
    </div>
    <div className="service-card">
      <div className="card-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop&q=80')"}}></div>
      <div className="card-body">
        <h2 className="card-title">Paint Protection Film</h2>
        <div className="card-subtitle">Self-healing PPF</div>
        <div className="card-price">from AED 3,499</div>
        <ul className="card-features">
          <li>Invisible shield</li>
          <li>Self-healing top coat</li>
          <li>Hydrophobic surface</li>
          <li>10-year warranty</li>
        </ul>
        <a href="#quote" className="book-btn">
          Book Now <span className="heartbeat">♥</span>
        </a>
      </div>
    </div>
    <div className="service-card">
      <div className="card-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&auto=format&fit=crop&q=80')"}}></div>
      <div className="card-body">
        <h2 className="card-title">Ceramic Coating</h2>
        <div className="card-subtitle">Professional Grade</div>
        <div className="card-price">from AED 1,799</div>
        <ul className="card-features">
          <li>Extreme gloss & shine</li>
          <li>2–5 year protection</li>
          <li>Easy maintenance</li>
          <li>Strong hydrophobic effect</li>
        </ul>
        <a href="#quote" className="book-btn">
          Book Now <span className="heartbeat">♥</span>
        </a>
      </div>
    </div>
  </section>
  )
}

export default ServiceSection