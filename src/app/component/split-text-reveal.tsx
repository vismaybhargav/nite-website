"use client"

import { motion } from "framer-motion"

interface SplitTextRevealProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  variant?: "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "fade" | "scale" | "blurFade" | "slideUpBlur"
  splitBy?: "character" | "word"
  trigger?: boolean
}

export const SplitTextReveal = ({
  text,
  className = "",
  delay = 0,
  duration = 0.5,
  variant = "slideUp",
  splitBy = "character",
  trigger = true,
}: SplitTextRevealProps) => {
  const getVariants = () => {
    const variants = {
      slideUp: {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      },
      slideDown: {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      },
      slideLeft: {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      },
      slideRight: {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      },
      fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      },
      scale: {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
      },
      blurFade: {
        hidden: { opacity: 0, filter: "blur(10px)" },
        visible: { opacity: 1, filter: "blur(0px)" },
      },
      slideUpBlur: {
        hidden: { y: 50, opacity: 0, filter: "blur(8px)" },
        visible: { y: 0, opacity: 1, filter: "blur(0px)" },
      },
    }
    return variants[variant]
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren:
          splitBy === "character" ? 0.015 : variant === "blurFade" || variant === "slideUpBlur" ? 0.05 : 0.1,
        delayChildren: delay,
      },
    },
  }

  const childVariants = getVariants()

  const splitText = () => {
    if (splitBy === "word") {
      return text.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={childVariants}
          transition={{
            duration: duration,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
          style={{ marginRight: "0.5rem" }}
        >
          {word}
        </motion.span>
      ))
    } else {
      return text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={childVariants}
          transition={{
            duration: duration,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
          style={{
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </motion.span>
      ))
    }
  }

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={trigger ? "visible" : "hidden"}
    >
      {splitText()}
    </motion.div>
  )
}
