import React from 'react'
import "../styles/project-section.css"

const ProjectSection = () => {
  return (
   <section id="projects">
    <div className="container">
      <h2 className='section-title'>Featured Transformations</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80" alt="Car window tinting project in Dubai - before and after view of luxury SUV with privacy film" className="project-image"/>
          <div className="project-content">
            <h3 className="project-title">Car Window Tinting</h3>
            <p className="project-desc">Transformed a luxury SUV with 3M Crystalline film for 97% heat rejection and ultimate privacy while maintaining crystal-clear visibility.</p>
            <a href="before-after.html#car" className="project-btn">View Details</a>
          </div>
        </div>
        <div className="project-card">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Home window tinting project in Abu Dhabi - modern residence with UV protective film installation" className="project-image"/>
          <div className="project-content">
            <h3 className="project-title">Home Window Tinting</h3>
            <p className="project-desc">Installed solar control film on a modern home to reduce glare, block 99% UV rays, and lower energy costs without compromising natural light.</p>
            <a href="before-after.html#home" className="project-btn">View Details</a>
          </div>
        </div>
        <div className="project-card">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="Villa window tinting project in Dubai - luxury villa with heat-rejecting window film" className="project-image"/>
          <div className="project-content">
            <h3 className="project-title">Villa Window Tinting</h3>
            <p className="project-desc">Enhanced a high-end villa with ceramic tinting for superior heat reduction and privacy, creating a cooler, more comfortable living space.</p>
            <a href="before-after.html#villa" className="project-btn">View Details</a>
          </div>
        </div>
        <div className="project-card">
          <img src="/projects-imgs/project-4.jpeg" alt="Office window tinting project in Abu Dhabi - commercial building with glare-reducing film" className="project-image"/>
          <div className="project-content">
            <h3 className="project-title">Office Window Tinting</h3>
            <p className="project-desc">Applied commercial-grade film to office windows, reducing glare on screens, improving energy efficiency, and enhancing professional privacy.</p>
            <a href="before-after.html#office" className="project-btn">View Details</a>
          </div>
        </div>
        <div className="project-card">
          <img src="/projects-imgs/project-5.jpeg" alt="Apartment window tinting project in Dubai - high-rise apartment with privacy and UV protection film" className="project-image"/>
          <div className="project-content">
            <h3 className="project-title">Apartment Window Tinting</h3>
            <p className="project-desc">Upgraded high-rise apartment windows with one-way privacy film for better views, UV protection, and cooler interiors without dark rooms.</p>
            <a href="before-after.html#apartment" className="project-btn">View Details</a>
          </div>
        </div>
        <div className="project-card">
          <img src="/projects-imgs/project-6.jpeg" alt="Apartment window tinting project in Dubai - high-rise apartment with privacy and UV protection film" className="project-image"/>
          <div className="project-content">
            <h3 className="project-title">Kitchen PPF (Paint Protection Film)</h3>
            <p className="project-desc">Shield your premium marble and quartz from stains, scratches, and heat without changing their natural beauty.</p>
            <a href="before-after.html#apartment" className="project-btn">View Details</a>
          </div>
        </div>
        <div className="project-card">
          <img src="/projects-imgs/project-7.jpeg" alt="Apartment window tinting project in Dubai - high-rise apartment with privacy and UV protection film" className="project-image"/>
          <div className="project-content">
            <h3 className="project-title">Doorstep Premium Tinting – Elite Heat & UV Shield</h3>
            <p className="project-desc">Get world-class window tinting without leaving home. Maximum heat rejection + 99% UV protection, flawless bubble-free finish, installed by professionals.</p>
            <a href="before-after.html#apartment" className="project-btn">View Details</a>
          </div>
        </div>
        <div className="project-card">
          <img src="/projects-imgs/project-8.jpeg" alt="Apartment window tinting project in Dubai - high-rise apartment with privacy and UV protection film" className="project-image"/>
          <div className="project-content">
            <h3 className="project-title">Commercial & Office Window Tinting </h3>
            <p className="project-desc">We handle everything from consultation to flawless, bubble-free installation — backed by 14+ years of expertise. Upgrade your workspace efficiently and cost-effectively.</p>
            <a href="before-after.html#apartment" className="project-btn">View Details</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProjectSection