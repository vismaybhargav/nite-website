"use client"

import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY == 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="fixed top-0 w-full transition-all duration-300 bg-gray-800"
        >
            <nav className="flex items-center justify-between px-6 py-4">
                <div className="text-white font-semibold text-xl">NITE</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#leadership" className="text-white hover:underline">
                            Leadership
                        </a>
                    </li>
                    <li>
                        <a href="#community" className="text-white hover:underline">
                            Community
                        </a>
                    </li>
                    <li>
                        <a
                            href="#donate"
                            className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600"
                        >
                            Donate
                        </a>
                    </li>
                    <li>
                        <a
                            href="#login"
                            className="text-white hover:underline"
                        >
                            Log in
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}