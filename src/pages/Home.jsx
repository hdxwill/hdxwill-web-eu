import React from "react";
import HeroSlider from "../components/home/HeroSlider";
import DentalSolutions from "../components/home/DentalSolutions";
import CoreTech from "../components/home/CoreTech";
import ProductsTabs from "../components/home/ProductsTabs";
import Testimonials from "../components/home/Testimonials";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      <HeroSlider />
      <DentalSolutions />
      <ProductsTabs />
      <CoreTech />
      <Testimonials />
    </div>
  );
};

export default Home;
