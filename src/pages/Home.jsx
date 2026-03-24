import React from "react";
import HeroSlider from "../components/home/HeroSlider";
import DentalSolutions from "../components/home/DentalSolutions";
import CoreTech from "../components/home/CoreTech";
import ProductTabs from "../components/home/ProductTabs";
import Testimonials from "../components/home/Testimonials";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      <HeroSlider />
      <DentalSolutions />
      <ProductTabs />
      <CoreTech />
      <Testimonials />
    </div>
  );
};

export default Home;
