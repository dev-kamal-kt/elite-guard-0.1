import React from 'react'
import "../styles/contact-style.css"

const ContactUs = () => {
  return (
   <>
      {/* Hero / Contact Header */}
      <section id="contact-hero">
        <div className="container">
          <h1 className="hero-title">Let's Talk About Your Car</h1>
          <p className="hero-subtitle">
            Questions about tinting, wrapping, PPF, ceramic coating or detailing?  
            Message us — we usually reply within 30 minutes.
          </p>
        </div>
      </section>
      {/* Main Contact Content */}
      <div className="container">
        <div className="contact-grid">
          {/* Left column: Info + Form */}
          <div className="contact-left">
            <div className="contact-method">
              <div className="method-icon">📞</div>
              <div className="method-content">
                <h3>Call or WhatsApp</h3>
                <p>
                  <a href="tel:+971564911220">+971 56 491 1220</a>
                </p>
                <p>
                  <a href="tel:+971523323919">+971 52 332 3919</a>
                </p>
              </div>
            </div>
            <div className="contact-method">
              <div className="method-icon">✉️</div>
              <div className="method-content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:eliteguardcarcare@gmail.com">
                    eliteguardcarcare@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-method">
              <div className="method-icon">📍</div>
              <div className="method-content">
                <h3>Mobile Service Areas</h3>
                <p>
                  Dubai • Abu Dhabi • Al Ain<br />
                  We come to you
                </p>
              </div>
            </div>
            <hr
              style={{
                border: 'none',
                borderTop: '1px solid var(--border)',
                margin: '36px 0',
              }}
            />
            <h2 style={{ fontSize: '1.55rem', marginBottom: '24px' }}>
              Send us a message
            </h2>
            <form id="contactForm">
              <input
                type="text"
                placeholder="Your Name *"
                required
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
              />
              <textarea
                placeholder="Vehicle type, service you're interested in, or any questions..."
                rows={6}
                required
              />

              <div className="submit-wrapper">
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* Right column: Map + WhatsApp button */}
          <div className="contact-right">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.851843!2d55.227488!3d25.075759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde1ccce38514413!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1732000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href="https://wa.me/971564911220?text=Hello%20Elite%20Guard%20Team%2C%20I'd%20like%20a%20quote%20for..."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-big-btn"
            >
              <span style={{ fontSize: '1.5rem' }}>💬</span> Chat on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default ContactUs