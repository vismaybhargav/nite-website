"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { archivo } from "../fonts/font";

export default function Navbar(props: { varient?: "transparent" | "opaque" }) {
    const { varient = "opaque" } = props;
    const [isScrolled, setIsScrolled] = useState(varient === "opaque");

    useEffect(() => {
        if (varient === "opaque") {
            return;
        }

        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50)
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${archivo.className} ${isScrolled ? "bg-background shadow-md" : "bg-transparent"}`}
        >
            <div className="mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    <Link
                        href="/"
                        className={`text-xl font-bold text-left transition-colors text-foreground`}
                    >
                        NITE
                    </Link>

                    <div className="md:flex items-center space-x-8">
                        <NavLink href="team" text="Team" />
                        <NavLink href="blog" text="Blog" />
                        <NavLink href="https://docs.google.com/forms/d/e/1FAIpQLSct8eLF7BoDtk7puXmQ1uZxcmUjfZ9CxUHxRRO7c8Kha9IxUQ/viewform?usp=header" text="Contact" />
                    </div>

                    <Button asChild variant="outline" className={`bg-background text-foreground`}>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSctmlybTYp6TZKJk721ZoeRHp1uHdHQi-v_2bLa8-dRxiFOOQ/viewform?usp=sharing&ouid=109614005940498452015">
                            Donate
                        </Link>
                    </Button>
                </div>
            </div>
        </nav>
    )
}

function NavLink({
    href,
    text,
}: {
    href: string,
    text: string,
}) {
    return (
        <Link href={href} className={`text-foreground underline-offset-4 hover:underline`}>
            {text}
        </Link>
    )
}
