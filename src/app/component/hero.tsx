"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function Hero() {
    const words = ["Thinkers", "Educators", "Together", "NITE"]
    const [currentIndex, setCurrentIndex] = useState(0)
    const [containerWidth, setContainerWidth] = useState("auto")
    const textRefs = useRef<(HTMLSpanElement | null)[]>([])
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        textRefs.current = textRefs.current.slice(0, words.length)
    }, [words.length])

    useEffect(() => {
        // Create a function to measure all words and find the widest one
        const measureAllWords = () => {
            const widths = textRefs.current.map((ref) => ref?.offsetWidth || 0)
            const maxWidth = Math.max(...widths)
            // Add a small buffer to prevent text wrapping during transitions
            return maxWidth + 10 + "px"
        }

        setTimeout(() => {
            setContainerWidth(measureAllWords())
        }, 100)

        const handleResize = () => {
            setContainerWidth(measureAllWords())
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        }, 2000) // Change word every 2 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
                <source src="/hero-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Hero Content */}
            <div className="relative z-10 flex h-full items-center justify-center">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-6 text-center">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                Empower with NITE
                            </h1>
                            <p className="mx-auto max-w-[700px] text-lg text-gray-200 md:text-xl lg:text-2xl">
                                Developing the community around us through tech
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="#features"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow-lg transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="#about"
                                className="inline-flex h-12 items-center justify-center rounded-md border-2 border-white bg-transparent px-8 text-sm font-medium text-white shadow-lg transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="flex h-6 w-4 justify-center rounded-full border-2 border-white">
                    <div className="mt-1 h-2 w-0.5 rounded-full bg-white"></div>
                </div>
            </div>
        </section>
    )
}



