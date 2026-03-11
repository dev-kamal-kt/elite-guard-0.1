import React from "react";
import "../styles/blogs-grid.css"
import { NavLink } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <section id="blog">
        <div className="container">
            <h2>Latest Articles & Tips</h2>

            <div className="blog-grid">
                <div className="blog-card">
                    <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80" 
                         alt="Car window tinting in Dubai" className="blog-image"/>
                    <div className="blog-content">
                        <h3 className="blog-title">Why Window Tinting Is a Must in the UAE Heat</h3>
                        <p className="blog-excerpt">Discover how modern ceramic and crystalline films reduce heat by up to 97%, protect your interior from fading, and keep you cooler while staying fully legal in Dubai and Abu Dhabi.</p>
                        <NavLink to="/blog-view" className="read-more">Read More →</NavLink>
                    </div>
                </div>
                <div className="blog-card">
                    <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80" 
                         alt="Matte car wrap transformation" className="blog-image"/>
                    <div className="blog-content">
                        <h3 className="blog-title">Car Wrapping vs Painting: What’s Better in 2026?</h3>
                        <p className="blog-excerpt">Explore the pros and cons of vinyl wrapping compared to traditional paint jobs — cost, durability, reversibility, and the stunning finishes available today.</p>
                        <NavLink to="/blog-view" className="read-more">Read More →</NavLink>
                    </div>
                </div>
                <div className="blog-card">
                    <img src="https://images.unsplash.com/photo-1617814088426-5e2c3c3c3c3c?auto=format&fit=crop&w=800&q=80" 
                         alt="Luxury car detailing process" className="blog-image"/>
                    <div className="blog-content">
                        <h3 className="blog-title">How Often Should You Detail Your Luxury Car in the UAE?</h3>
                        <p className="blog-excerpt">The desert climate, sand, and sun take a toll. Learn the ideal detailing schedule and protective steps to keep your vehicle looking showroom fresh year-round.</p>
                        <a href="#" className="read-more">Read More →</a>
                    </div>
                </div>
                <div className="blog-card">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                         alt="Clear PPF on supercar" className="blog-image"/>
                    <div className="blog-content">
                        <h3 className="blog-title">Does Paint Protection Film (PPF) Really Work?</h3>
                        <p className="blog-excerpt">Self-healing, hydrophobic, nearly invisible — we explain how modern PPF protects your paint from chips, scratches, and environmental damage with real-world results.</p>
                        <a href="#" className="read-more">Read More →</a>
                    </div>
                </div>

            </div> *

        </div>
    </section>
    </>
  );
};

export default Blogs;
