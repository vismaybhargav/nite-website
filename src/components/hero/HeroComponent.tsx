import React from "react";
import heroImage from '../../res/hero_image.png';
import './HeroComponent.css'

function Hero() {
  return (
    <div className="hero-container">
    <img src={heroImage} className="hero-img" alt="Temp Placeholder" />
      <div className="hero-content">
        <h1 className="hero-title">NITE</h1>
        <h3 className="hero-title-desc">
          A non-profit focused on fostering the growth of nuerodivergent
          individuals' technological prewess.
        </h3>
        <button className="hero-advocate-btn">Be A NueroAdvocate</button>
      </div>
  </div>

  );
}

export default Hero;