import Link from "next/link"
import AnimatedText from "@/app/component/animated_text";
import { archivo, inter } from "../fonts/font";

export default function Hero() {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
                <source src="/hero-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-background" />

            {/* Hero Content */}
            <div className="relative z-10 flex h-full items-center justify-center">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-6 text-center">
                        <div className="space-y-4">
                            <h1 className={`text-6xl font-bold tracking-tightest font-stretch-expanded animate-stretch text-foreground sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl ${archivo.className}`}>
                                Empower with NITE
                            </h1>
                            <AnimatedText
                                text="Developing the community around us through tech"
                                className={`text-lg md:text-xl lg:text-2xl text-white ${inter.className}}`}
                            />
                        </div>
                        <div className="flex gap-4">
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
                <div className="flex h-6 w-4 justify-center rounded-full border-2 border-primary">
                    <div className="mt-1 h-2 w-0.5 rounded-full bg-primary"></div>
                </div>
            </div>
        </section>
    )
}



