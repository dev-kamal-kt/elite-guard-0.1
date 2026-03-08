import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import ProjectSection from "../components/ProjectSection";
import FilmCalculator from "../components/FilmCalculator";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <ProjectSection/>
      <FilmCalculator/>
      <ContactSection/>
    </>
  );
};

export default Home;
