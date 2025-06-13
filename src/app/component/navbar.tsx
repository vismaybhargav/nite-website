"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    <Link
                        href="/"
                        className={`text-xl font-bold transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}
                    >
                        Brand
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="#leadership"
                            className={`transition-colors hover:opacity-80 ${isScrolled ? "text-gray-700" : "text-white"}`}
                        >
                            Leadership
                        </Link>
                        <Link
                            href="#donate"
                            className={`transition-colors hover:opacity-80 ${isScrolled ? "text-gray-700" : "text-white"}`}
                        >
                            Donate
                        </Link>
                        <Link
                            href="#services"
                            className={`transition-colors hover:opacity-80 ${isScrolled ? "text-gray-700" : "text-white"}`}
                        >
                            Services
                        </Link>
                        <Link
                            href="#contact"
                            className={`transition-colors hover:opacity-80 ${isScrolled ? "text-gray-700" : "text-white"}`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/*<button
                        className={`inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium transition-colors ${
                            isScrolled ? "bg-gray-900 text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-100"
                        }`}
                    >
                        Get Started
                    </button>*/}
                    <button className="btn btn-secondary">Join Today</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;