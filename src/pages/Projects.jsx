import React from "react";
import ProjectSection from "../components/ProjectSection"

const Projects = () => {
  return (
    <>
      <section id="process-hero">
        <div className="container">
          <h1 className="hero-title">Our Signature Projects</h1>
          <p className="hero-subtitle">
            Discover real-world transformations — from luxury cars to modern
            villas, we bring premium protection and style to every project in
            Dubai & Abu Dhabi.
          </p>
        </div>
      </section>
      <ProjectSection/>
    </>
  );
};

export default Projects;
