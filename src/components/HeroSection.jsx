// src/components/HeroSection.jsx
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import '../styles/hero-sliders.css';
import slides from "./Hero-Sliders"

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <Carousel
        autoPlay
        interval={5000} // 5 seconds per slide
        infiniteLoop
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        stopOnHover
        swipeable
        emulateTouch
        dynamicHeight={false}
        className="carousel-wrapper"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
            }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <a href={slide.buttonLink} className="btn">
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;