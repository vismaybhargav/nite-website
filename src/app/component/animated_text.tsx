"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
    text: string
    className?: string
    delay?: number
    type?: "typewriter" | "fade" | "slide" | "rainbow" | "glow"
}

export default function AnimatedText({ text, className = "", delay = 0, type = "typewriter" }: AnimatedTextProps) {
    const [displayText, setDisplayText] = useState("")
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
            if (type === "typewriter") {
                let i = 0
                const typeTimer = setInterval(() => {
                    if (i < text.length) {
                        setDisplayText(text.slice(0, i + 1))
                        i++
                    } else {
                        clearInterval(typeTimer)
                    }
                }, 50)
                return () => clearInterval(typeTimer)
            } else {
                setDisplayText(text)
            }
        }, delay)

        return () => clearTimeout(timer)
    }, [text, delay, type])

    const getAnimationClass = () => {
        switch (type) {
            case "fade":
                return `transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`
            case "slide":
                return `transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`
            case "rainbow":
                return "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse"
            case "glow":
                return "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse"
            default:
                return ""
        }
    }

    return (
        <span className={`${getAnimationClass()} ${className}`}>
      {type === "typewriter" ? displayText : text}
            {type === "typewriter" && displayText.length < text.length && <span className="animate-blink">|</span>}
    </span>
    )
}
