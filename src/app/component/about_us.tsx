"use client"

import {motion} from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="bg-blue-100">
            <div className="container mx-auto px-4 md:px-6 py-20">
                <h1 className="text-center font-bold tracking-tight text-gray-900 sm:text-4xl md:text-7xl mb-20">
                    About Us
                </h1>
                <div className="text-black">
                </div>
                <ImageTicker />
            </div>
        </section>
    )
}

const images: string[] = [
    "/aboutUsTicker/image1.jpg",
    "/aboutUsTicker/image2.jpg",
    "/aboutUsTicker/image3.jpg",
    "/aboutUsTicker/image4.jpg",
    "/aboutUsTicker/image5.jpg"
];

function ImageTicker() {
    return (
        <div className="w-full overflow-hidden relative">
            {/* Animated Background */}
            <motion.div
                className="absolute inset-0"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            <motion.div
                className="flex space-x-8 relative z-10"
                animate={{ x: [-40, -33.333 * 16] }}
                transition={{
                    duration: 40,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
            >
                {[...images, ...images, ...images].map((photo, index) => (
                    <motion.div
                        key={index}
                        className="flex-shrink-0 group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative overflow-hidden rounded-2xl">
                            <Image
                                src={photo || "/placeholder.svg"}
                                width={100}
                                height={100}
                                alt={`Gallery photo ${index + 1}`}
                                className="h-40 w-56 object-cover"
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.div
                                className="absolute inset-0 ring-4 ring-white/20 rounded-2xl"
                                whileHover={{
                                    scale: 1.02,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}