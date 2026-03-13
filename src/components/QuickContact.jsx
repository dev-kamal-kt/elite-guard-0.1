import React, { useState, useRef } from "react";
import "../styles/contact-style.css";
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import useContact from "../store/useContact";

const QuickContact = () => {
  const msgRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const { contactNow, isContacting } = useContact();

  const showMessage = (msg, isSuccess = false) => {
    const el = msgRef.current;
    if (!el) return;

    el.textContent = msg;
    el.className = isSuccess ? "success" : "error";

    setTimeout(() => {
      el.className = "";
      el.textContent = "";
    }, 3000);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+\d\s()-]{8,15}$/;

    if (!name.trim()) {
      showMessage("Please enter your name", false);
      return false;
    }

    if (!email.trim()) {
      showMessage("Please enter your email", false);
      return false;
    }

    if (!emailRegex.test(email.trim())) {
      showMessage("Please enter a valid email address", false);
      return false;
    }

    if (!phone.trim()) {
      showMessage("Please enter your phone number", false);
      return false;
    }

    if (!phoneRegex.test(phone.trim())) {
      showMessage("Please enter a valid phone number", false);
      return false;
    }

    if (!message.trim()) {
      showMessage("Please write your message", false);
      return false;
    }

    return true;
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    const formData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service,
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };
    contactNow(JSON.stringify(formData));
    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div style={{position : "relative",top : "8rem"}} id="contact-section" className="form-container">
      <div className="contact-grid">
        <div className="contact-left">

          <h2 style={{ fontSize: "1.55rem", marginBottom: "24px" }}>
            Send us a message
          </h2>

          {/* <p ref={msgRef} id="msg"></p> */}

          <form id="contactForm" onSubmit={sendMessage}>
            <input
              type="text"
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <select
              onChange={(e) => {
                setService(e.target.value);
              }}
            >
              <option value="NONE">Select Your Service</option>
              <optgroup label="Automotive Protection">
                <option value="car-window-tinting">Car Window Tinting</option>
                <option value="ppf">Paint Protection Film (PPF)</option>
                <option value="windshield-protection">
                  Windshield Protection Film
                </option>
                <option value="headlight-protection">
                  Headlight Protection Film
                </option>
              </optgroup>
              <optgroup label="Residential Window Film">
                <option value="home-tinting">Home Window Tinting</option>
                <option value="privacy-film">Privacy Window Film</option>
                <option value="heat-reduction">Heat Reduction Film</option>
                <option value="uv-protection">UV Protection Film</option>
                <option value="kitchen-window-protection">
                  Kitchen Window Protection Film
                </option>
              </optgroup>
              <optgroup label="Commercial Window Film">
                <option value="office-tinting">Office Window Tinting</option>
                <option value="anti-glare">Anti-Glare Film</option>
                <option value="decorative-frosted">
                  Decorative Frosted Film
                </option>
                <option value="safety-security">
                  Safety &amp; Security Film
                </option>
                <option value="energy-saving">
                  Building Energy Saving Film
                </option>
              </optgroup>
              <optgroup label="Surface Protection">
                <option value="surface-ppf">
                  Surface Paint Protection Film (PPF)
                </option>
                <option value="cabinet-protection">
                  Kitchen Cabinet Protection Film
                </option>
                <option value="marble-protection">
                  Marble Surface Protection Film
                </option>
                <option value="furniture-protection">
                  Furniture Protection Film
                </option>
                <option value="elevator-protection">
                  Elevator Panel Protection Film
                </option>
              </optgroup>
            </select>

            <textarea
              placeholder="Tell us about your tinting needs..."
              rows="6"
              style={{ resize: "none" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <div id="quick-contact" className="submit-wrapper">
              <button
                type="submit"
                className="submit-btn"
                disabled={isContacting}
                style={{ cursor: isContacting ? "not-allowed" : "pointer" }}
              >
                {isContacting ? "Please Wait..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
        <div className="gallary">
        <div className="gallary-card">
          <img src="/quick-contact-image/0.jpeg" alt="Car window tinting project in Dubai - before and after view of luxury SUV with privacy film" className="project-image"/>
        </div>
        <div className="gallary-card">
          <img src="/quick-contact-image/1.jpeg" alt="Car window tinting project in Dubai - before and after view of luxury SUV with privacy film" className="project-image"/>
        </div>
        <div className="gallary-card">
          <img src="/quick-contact-image/2.jpeg" alt="Car window tinting project in Dubai - before and after view of luxury SUV with privacy film" className="project-image"/>
        </div>
        <div className="gallary-card">
          <img src="/quick-contact-image/3.jpeg" alt="Car window tinting project in Dubai - before and after view of luxury SUV with privacy film" className="project-image"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default QuickContact;
