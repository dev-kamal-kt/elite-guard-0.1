import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import ProjectSection from "../components/ProjectSection";
import FilmCalculator from "../components/FilmCalculator";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <ProjectSection/>
      <FilmCalculator/>
    </>
  );
};

export default Home;
