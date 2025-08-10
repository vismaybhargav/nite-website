"use client"

import type React from "react"
import { motion } from "motion/react"

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: "up" | "down" | "left" | "right"
    distance?: number
}

export default function ScrollReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
    distance = 50,
}: ScrollRevealProps) {
    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return { y: distance, opacity: 0 }
            case "down":
                return { y: -distance, opacity: 0 }
            case "left":
                return { x: distance, opacity: 0 }
            case "right":
                return { x: -distance, opacity: 0 }
            default:
                return { y: distance, opacity: 0 }
        }
    }

    const getAnimatePosition = () => {
        switch (direction) {
            case "up":
            case "down":
                return { y: 0, opacity: 1 }
            case "left":
            case "right":
                return { x: 0, opacity: 1 }
            default:
                return { y: 0, opacity: 1 }
        }
    }

    return (
        <motion.div
            className={className}
            initial={getInitialPosition()}
            whileInView={getAnimatePosition()}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.8,
                delay: delay / 1000,
                ease: [0.25, 0.25, 0.25, 0.75],
            }}
        >
            {children}
        </motion.div>
    )
}
