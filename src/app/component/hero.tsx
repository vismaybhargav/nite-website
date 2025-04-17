"use client"

import {useEffect, useMemo, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

export default function Hero() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                      }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    {/*<h1 className="mb-5 text-5xl">NITE</h1>*/}
                    <HeroTitle />
                    <p className="mb-5">
                        A non profit focused on empowering our community
                        through teaching Neurodivergent individuals STEM topics
                    </p>
                    {/*<button className="btn btn-primary">Get Started</button>*/}
                </div>
            </div>
        </div>
    );
}

function HeroTitle() {
    const words = useMemo(() => ["Thinkers", "Educators", "Together", "NITE"], []);
    const intervalTime = 2000;

    const [index, setIndex] = useState(0);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [finished, setFinished] = useState(false);

    const longestWord = useMemo(
        () => words.reduce((a: string, b: string) => (a.length > b.length ? a : b), ""), [words]
    );

    useEffect(() => {
        if(index >= words.length - 1) {
            setFinished(true);
            return;
        }

        const interval = setInterval(() => {
            setIndex(prev => prev + 1);
        }, intervalTime);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <>
            <span className="text-5xl">We are </span>
            <span
                className="inline-block relative h-[1.5em] align-middle text-5xl"
                style={{ width: `${longestWord.length}ch` }}
            >
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={words[index]}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.4}}
                    >
                        {words[index]}
                    </motion.span>
                </AnimatePresence>
            </span>
        </>
    );
}