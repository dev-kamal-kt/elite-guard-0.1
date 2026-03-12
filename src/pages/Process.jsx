import React from 'react'
import "../styles/process.css"
import { LiaCertificateSolid } from "react-icons/lia";

const Process = () => {
  return (<>
     <section id="process-hero">
    <div className="container">
      <div className="hero-eyebrow">OUR METHOD</div>
      <h1 className="hero-title">Precision. Care. Perfection.</h1>
      <p className="hero-subtitle">
        Every vehicle we touch receives the same meticulous attention — from first consultation to final hand-over.
      </p>
    </div>
  </section>
  <section id="process-steps">
    <div className="container">
      <div className="steps-grid">
        <div className="step-card">
          {/* <div className="step-number">1</div> */}
          <div className="step-icon">📞</div>
          <h3 className="step-title">Initial Consultation</h3>
          <p className="step-description">
            We listen carefully to your goals — protection, style, privacy or comfort — and assess your vehicle to recommend the best solution.
          </p>
        </div>
        <div className="step-card">
          {/* <div className="step-number">2</div> */}
          <div className="step-icon">📏</div>
          <h3 className="step-title">Free On-site Quote</h3>
          <p className="step-description">
            Transparent pricing with no hidden fees. We measure precisely and explain every option so you can decide with full confidence.
          </p>
        </div>
        <div className="step-card">
          {/* <div className="step-number">3</div> */}
          <div className="step-icon">🛡️</div>
          <h3 className="step-title">Surface Preparation</h3>
          <p className="step-description">
            Thorough cleaning, decontamination and paint correction (when needed) to ensure flawless adhesion and long-lasting results.
          </p>
        </div>
        <div className="step-card">
          {/* <div className="step-number">4</div> */}
          <div className="step-icon">🔧</div>
          <h3 className="step-title">Expert Installation</h3>
          <p className="step-description">
            Certified technicians apply films, coatings or wraps in a controlled environment using precision tools and proven techniques.
          </p>
        </div>
     <div className="step-card">
          {/* <div className="step-number">5</div> */}
          <div className="step-icon">✅</div>
          <h3 className="step-title">Quality Inspection</h3>
          <p className="step-description">
            Multi-point final check under different lighting. We don’t hand over until every detail meets our premium standards.
          </p>
        </div>
        <div className="step-card">
          {/* <div className="step-number">6</div> */}
          <div className="step-icon">🚗</div>
          <h3 className="step-title">Aftercare Guidance</h3>
          <p className="step-description">
            Full care instructions, maintenance tips and warranty activation — so your investment looks perfect for years to come.
          </p>
        </div>
        <div className="step-card">
          {/* <div className="step-number">6</div> */}
          <div className="step-icon">
            <LiaCertificateSolid size={80} color='#008c46'/>
          </div>
          <h3 className="step-title">Warranty Activation</h3>
          <p className="step-description">
           We provide comprehensive warranty details, covering materials and workmanship, with easy claims process for peace of mind.
          </p>
        </div>
        <div className="step-card">
          {/* <div className="step-number">6</div> */}
          <div className="step-icon">📜</div>
          <h3 className="step-title">Follow-Up Support</h3>
          <p className="step-description">
            Our team checks in post-service to ensure satisfaction and offers ongoing advice or touch-ups if needed.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="cta-section">
    <div className="container">
      <h2 className="cta-title">Ready for Premium Protection?</h2>
      <p className="cta-text">
        Experience the Elite Guard difference — precision craftsmanship, certified materials, and complete peace of mind.
      </p>
      <a href="/contact-us" className="cta-btn">
        Get Your Free Quote
      </a>
    </div>
  </section>
  </>
  )
}

export default Process