"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "motion"
import { useState, useEffect, useRef } from "react"

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
        <section className="py-20 md:py-32">
            <div className="container flex flex-col items-center text-center">
                <h1 className="mb-8 text-5xl md:text-7xl font-bold flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-4">
                    <span className="inline-block">We are</span>

                    {/* Hidden elements for measuring text width */}
                    <div className="absolute opacity-0 pointer-events-none">
                        {words.map((word, index) => (
                            <span
                                key={`measure-${index}`}
                                //@ts-expect-error This is a ref, it's fine
                                ref={(el) => (textRefs.current[index] = el)}
                                className="text-5xl md:text-7xl font-bold"
                            >
                                {/*TODO Use the NITE Logo here insteed*/}
                                {word === "NITE" ? (
                                    <>
                                        <span className="text-[#202296]">NI</span>
                                        <span className="text-[#3b684a]">TE</span>
                                    </>
                                ) : (
                                    word
                                )}
                            </span>
                        ))}
                    </div>

                    {/* Animated text container with fixed width */}
                    <div
                        ref={containerRef}
                        style={{
                            width: containerWidth,
                            minHeight: "1.5em",
                        }}
                        className="relative flex items-center justify-center md:justify-start"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex items-center justify-center md:justify-start"
                            >
                                {words[currentIndex] === "NITE" ? (
                                    <span>
                                        <span className="text-[#202296]">NI</span>
                                        <span className="text-[#3b684a]">TE</span>
                                    </span>
                                ) : (
                                    words[currentIndex]
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </h1>
                <p className="max-w-3xl mb-10 text-sm text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Link
                        href="#"
                        className="btn btn-primary rounded-full bg-[#202296] border-[#202296] hover:bg-[#20216a] hover:border-[#20216a]"
                    >
                        Become a NITE Member
                    </Link>
                    <Link
                        href="#"
                        className="btn btn-outline rounded-full border-[#3b684a] text-[#3b684a] hover:bg-[#3b684a] hover:text-white hover:border-[#3b684a]"
                    >
                        Donate
                    </Link>
                </div>
            </div>
        </section>
    )
}
