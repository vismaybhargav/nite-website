"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar(props: {noScrollClear: boolean }) {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    function scrolled() {
        return props.noScrollClear || isScrolled || window.scrollY > 50;
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled() ? "bg-white/60 backdrop-blur-md shadow-lg rounded-4xl mt-2 ml-5 mr-5" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    <Link
                        href="/"
                        className={`text-xl font-bold text-left transition-colors ${scrolled() ? "text-gray-900" : "text-white"}`}
                    >
                        NITE
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="#leadership"
                            className={`transition-colors hover:opacity-80 ${scrolled() ? "text-gray-700" : "text-white"}`}
                        >
                            Leadership
                        </Link>
                        <Link
                            href="#donate"
                            className={`transition-colors hover:opacity-80 ${scrolled() ? "text-gray-700" : "text-white"}`}
                        >
                            Donate
                        </Link>
                        <Link
                            href="#services"
                            className={`transition-colors hover:opacity-80 ${scrolled() ? "text-gray-700" : "text-white"}`}
                        >
                            Services
                        </Link>
                        <Link
                            href="#contact"
                            className={`transition-colors hover:opacity-80 ${scrolled() ? "text-gray-700" : "text-white"}`}
                        >
                            Contact
                        </Link>
                    </div>

                    <button className={`btn ${scrolled() ? "rounded-4xl" : "bg-white text-black"} border-none`}>Join Today</button>
                </div>
            </div>
        </nav>
    )
}