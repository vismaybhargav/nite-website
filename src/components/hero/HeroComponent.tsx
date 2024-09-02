import React from "react";
import heroImage from '../../res/hero_image.png';
import './HeroComponent.css'
import Button from "../widget/Button";
import Color from "../../util/Color";

function Hero() {
  return (
    <div className="hero-container">
      <img src={heroImage} className="hero-img" alt="Temp Placeholder" />
      <div className="hero-content">
        <h1 className="hero-title">NITE</h1>
        <h3 className="hero-title-desc">
          A non-profit focused on fostering the growth of nuerodivergent
          individuals' technological prowess.
        </h3>
        <div>
          <Button
            filled={true}
            rounded={true}
            color={Color.WHITE}
            text="Become a Neuro-Advocate"
          />
          <Button
            filled={false}
            rounded={true}
            color={Color.WHITE}
            text="Mission Statement"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
