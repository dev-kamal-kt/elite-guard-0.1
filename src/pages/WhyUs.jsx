import React from 'react'
import "../styles/why-us.css"

const WhyUs = () => {
  return (
    <>
    <section id="why-hero">
        <div className="why-hero-content">
            <h1>Why Choose Elite Guard </h1>
            <p>Your trusted partner for premium automotive protection and styling in United Arab Emirates.</p>
            <a href="#why" className="btn">Discover More</a>
        </div>
    </section>
    <section id="why">
        <div id='whyyy' className="why-container">
            <h2>What Sets Us Apart</h2>
            <p className="intro">At Elite Guard , we are committed to delivering exceptional quality, expertise, and customer satisfaction. Here's why discerning vehicle owners choose us for their automotive needs.</p>
            
            <div className='certicate'>
                <div className='c-col'>
                    <img src='/images/certificate.png' alt='Certificate'/>
                </div>
                <div className='c-col'>
                    <h3>Certified Tinting Services</h3>
                    <p>
                        Our tinting services are fully certified, ensuring compliance with industry standards and delivering superior UV protection, heat rejection, and privacy for your vehicle.
                    </p>
                </div>
            </div>
            <div className="why-grid">
                <div className="why-item">
                    <span className="why-icon">🏆</span>
                    <h3> Nano Care Certified Installers</h3>
                    <p> Our team undergoes rigorous training and certification from Nano Care, guaranteeing precise and professional installations that meet the highest industry standards.</p>
                </div>
                <div className="why-item">
                    <span className="why-icon">✅</span>
                    <h3>Dubai Municipality Compliant</h3>
                    <p>We adhere strictly to all local regulations and standards set by Dubai Municipality, ensuring your vehicle modifications are legal and safe.</p>
                </div>
                <div className="why-item">
                    <span className="why-icon">📜</span>
                    <h3>ISO & SGS Certified Products</h3>
                    <p>All our materials are certified by international bodies like ISO and SGS, providing you with reliable, high-performance products that last.</p>
                </div>
                <div className="why-item">
                    <span className="why-icon">🔒</span>
                    <h3>100% Original Nano Care Films</h3>
                    <p>
We use only authentic Nano Care films sourced directly from the manufacturer, avoiding counterfeits to deliver genuine quality and performance.
                        </p>
                </div>
                <div className="why-item">
                    <span className="why-icon">🛡️</span>
                    <h3>Up to 10-Year Warranty</h3>
                    <p>Enjoy peace of mind with our extended warranties covering materials and workmanship, backed by our confidence in durable results.</p>
                </div>
                <div className="why-item">
                    <span className="why-icon">👨‍🔧</span>
                    <h3>Highly Trained Technicians</h3>
                    <p>Our technicians are experts with years of experience, continuously updated on the latest techniques for flawless service delivery.</p>
                </div>
                <div className="why-item">
                    <span className="why-icon">🚗</span>
                    <h3>UAE-Wide Doorstep Service</h3>
                    <p>We offer convenient doorstep service across the UAE, bringing our premium automotive care directly to you for ultimate convenience.</p>
                </div>
                <div className="why-item">
                    <span className="why-icon">⭐</span>
                    <h3>Customer Satisfaction Guarantee</h3>
                    <p>We stand behind our work with a 100% satisfaction guarantee, ensuring every client leaves with a smile and a finish that exceeds expectations.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WhyUs