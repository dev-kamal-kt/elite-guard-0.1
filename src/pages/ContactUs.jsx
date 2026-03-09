import React from 'react'
import ContactSection from "../components/ContactSection"

const ContactUs = () => {
  return (
    <>
    <section id="contact-hero">
    <div className="container">
      <h1 className="contact-hero-title">Let's Talk About Your Car</h1>
      <p className="hero-subtitle">
        Questions about tinting, wrapping, PPF, ceramic coating or detailing?  
        Message us — we usually reply within 30 minutes.
      </p>
    </div>
  </section>
  <ContactSection/>
    </>
  )
}

export default ContactUs