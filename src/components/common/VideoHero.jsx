import React from "react";
import "./VideoHero.css";

const VideoHero = ({ videoSrc, title }) => {
  return (
    <section className="video-hero">
      <video autoPlay loop muted playsInline className="video-hero__bg">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="video-hero__overlay"></div>
      <div className="container video-hero__content text-center">
        <h1 className="hero-title pt-5">{title}</h1>
      </div>
    </section>
  );
};

export default VideoHero;
