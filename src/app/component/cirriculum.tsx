"use client"

import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import {useRef, useState} from "react";
import {archivo} from "@/app/fonts/font";

interface Phase {
    title: string,
    description: string,
    image: string,
    durationInWeeks: number
    skillsLearned: string[]
}

const phases: Phase[] = [
    {
        title: "Computer Fundamentals",
        description: "Students learn the basics of computer operation, including hardware and software components.",
        image: "/placeholder.svg?height=400&width=600&text=Phase+1",
        durationInWeeks: 4,
        skillsLearned: [
            "Computer Operation",
            "Software Basics",
            "Hardware Components",
            "Internet Safety",
        ]
    },
    {
        title: "Scratch Programming",
        description: "Introduction to programming concepts using Scratch, a visual programming language.",
        image: "/placeholder.svg?height=400&width=600&text=Phase+2",
        durationInWeeks: 6,
        skillsLearned: [
            "Basic Programming Concepts",
            "Logical Thinking",
            "Problem Solving",
            "Game Development"
        ]
    },
    {
        title: "TinkerCAD and Electronics",
        description: "Students learn to design circuits and learn to CAD using TinkerCAD",
        image: "/placeholder.svg?height=400&width=600&text=Phase+3",
        durationInWeeks: 8,
        skillsLearned: [
            "Circuit Design",
            "Electronics Basics",
            "3D Modeling",
            "Prototyping"
        ]
    }
]

export default function PhaseSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const currentIndex = useTransform(scrollYProgress, (progress) => {
        const index = Math.floor(progress * phases.length);
        return Math.min(index, phases.length - 1);
    })

    useMotionValueEvent(currentIndex, "change", (latest) => {
        setActiveIndex(latest);
    })

    const currentPhase = phases[activeIndex];

    return (
        <section className="relative bg-background">
            <div ref={containerRef} className="relative" style={{ height: `${phases.length * 100}vh` }}>
                {/* Fixed Content Container */}
                <div className="sticky top-0 h-screen flex items-center justify-center bg-background overflow-hidden">
                    {/* Main Content */}
                    <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                        {/* Text Content */}
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className={`text-foreground ${archivo.className} space-y-6`}
                        >
                            {/* Course Header */}
                            <div className="flex items-center space-x-4 mb-6">
                                <div>
                                    <div className="flex items-center space-x-3 mb-2">
                                        <span className="text-white/70">{currentPhase.durationInWeeks} weeks</span>
                                    </div>
                                </div>
                            </div>

                            {/* Course Title */}
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight font-stretch-expanded">{currentPhase.title}</h2>

                            {/* Course Description */}
                            <p className="text-xl text-white/80 leading-relaxed">{currentPhase.description}</p>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {currentPhase.skillsLearned.map((skill, index) => (
                                    <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
                                        <span className="text-sm font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Image Content */}
                        <motion.div
                            key={`image-${activeIndex}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative"
                        >
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <img
                                    src={currentPhase.image || "/placeholder.svg"}
                                    alt={currentPhase.title}
                                    className="w-full h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-black" />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Dot thing at the top */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="flex space-x-2">
                        {phases.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                    index === activeIndex ? "bg-white" : "bg-white/30"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}