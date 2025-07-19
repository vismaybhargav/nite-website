"use client"

import ScrollReveal from "@/app/component/scroll_reveal";
import AnimatedText from "@/app/component/animated_text";
import Image from "next/image"
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import {useRef, useState} from "react";

const courses = [
    {
        title: "Course 1",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=400&width=600&text=Course+1",
    },
    {
        title: "Course 2",
        description:
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "/placeholder.svg?height=400&width=600&text=Course+2",
    },
    {
        title: "Course 3",
        description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
        image: "/placeholder.svg?height=400&width=600&text=Course+3",
    },
    {
        title: "Course 4",
        description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        image: "/placeholder.svg?height=400&width=600&text=Course+4",
    },
]

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

function CirriculumSection() {
    return (
        <section id="curriculum" className="py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 relative">
            <div className="container mx-auto px-4 md:px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <AnimatedText
                            text="Curriculum"
                            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6 rainbow-text"
                            type="slide"
                        />
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-5">
                            We created a variety of courses that teach basic computer skills all the way to programming
                            languages and robotics. Each course is designed to be accessible and engaging.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-32">
                    {courses.map((course, index) => (
                        <ScrollReveal key={index} delay={index * 200}>
                            <div
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                                } group`}
                            >
                                <div
                                    className={`${index % 2 === 1 ? "lg:col-start-2" : ""} transition-all duration-300 hover:scale-105`}
                                >
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6 rainbow-text">{course.title}</h2>
                                    <h3 className="text-lg text-gray-600 leading-relaxed">{course.description}</h3>
                                </div>
                                <div
                                    className={`${index % 2 === 1 ? "lg:col-start-1" : ""} transition-all duration-300 hover:scale-105`}
                                >
                                    <Image
                                        src={course.image || "/placeholder.svg"}
                                        alt={course.title}
                                        width={100}
                                        height={100}
                                        className="w-full h-80 object-cover rounded-lg shadow-xl group-hover:shadow-2xl"
                                    />
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

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
        <section className="relative bg-gray-900">
            <div ref={containerRef} className="relative" style={{ height: `${phases.length * 100}vh` }}>
                {/* Fixed Content Container */}
                <div className="sticky top-0 h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
                    {/* Main Content */}
                    <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                        {/* Text Content */}
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="text-white space-y-6"
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
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">{currentPhase.title}</h2>

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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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