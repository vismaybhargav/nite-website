import React from "react";
import Hero from "../components/hero/HeroComponent";
import Curriculum from "../components/curriculum/CurriculumComponent";

function HomePage() {
    return (
        <div className="home-container">
            <Hero />
            <Curriculum />
        </div>
    )
}

export default HomePage; 