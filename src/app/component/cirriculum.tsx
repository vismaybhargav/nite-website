"use client"

import ScrollReveal from "@/app/component/scroll_reveal";
import AnimatedText from "@/app/component/animated_text";
import Image from "next/image"

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

export default function CirriculumSection() {
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