import React, { useState, useRef } from "react";
import "../styles/contact-style.css";
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import useContact from "../store/useContact";

const ContactSection = () => {
  const msgRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service,setService] = useState("")
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

    /*
    console.log("=== CONTACT FORM SUBMITTED ===");
    console.log("Name    :", formData.name);
    console.log("Email   :", formData.email);
    console.log("Phone   :", formData.phone);
    console.log("Message :", formData.message);
    console.log("Time    :", formData.submittedAt);
    console.log("==============================");
    */

    // Here you would normally send data to backend
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

    contactNow(JSON.stringify(formData));

    //showMessage("Thank you! Your message has been sent.", true);

    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div id="contact-section" className="form-container">
      <h2 className="section-title">Quick to contact us</h2>

      <div className="contact-grid">
        <div className="contact-left">
          <div className="contact-method">
            <div className="method-icon">
              <MdAddIcCall color="#165f02" size={25} />
            </div>
            <div className="method-content">
              <h3>Call or WhatsApp</h3>
              <p>
                <a href="tel:+971564911220">+971563990282</a>
              </p>
            </div>
          </div>

          <div className="contact-method">
            <div className="method-icon">
              <MdOutlineEmail color="#165f02" size={25} />
            </div>
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
            <div className="method-icon">
              <IoLocationOutline color="#165f02" size={27} />
            </div>
            <div className="method-content">
              <h3>Mobile Service Areas</h3>
              <p>
                Dubai • Abu Dhabi • Al Ain
                <br />
                We come to you
              </p>
            </div>
          </div>

          <hr style={{ border: "none", margin: "36px 0" }} />

          <h2 style={{ fontSize: "1.55rem", marginBottom: "24px" }}>
            Send us a message
          </h2>

          <p ref={msgRef} id="msg"></p>

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

            <select onChange={(e)=>{setService(e.target.value)}}>
              <option value="none">Select a service</option>
              <option value="Window tinting">Window tinting</option>
              <option value="Car tinting">Car tinting</option>
              <option value="Privacy Window Tinting">
                Privacy Window Tinting
              </option>
              <option value="Premium Window Tinting">
                Premium Window Tinting
              </option>
            </select>

            <textarea
              placeholder="Tell us about your tinting needs..."
              rows="6"
              style={{ resize: "none" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <div className="submit-wrapper">
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

        <div>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.851843!2d55.227488!3d25.075759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde1ccce38514413!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1732000000000"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <a
            href="https://wa.me/971564911220?text=Hello%20Elite%20Guard%20Team%2C%20I%27d%20like%20a%20quote%20for..."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-big-btn"
          >
            <span style={{ fontSize: "1.5rem" }}>
              <BsWhatsapp size={25} />
            </span>{" "}
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
