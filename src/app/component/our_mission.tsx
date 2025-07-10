import React from 'react';
import Image from 'next/image'

export default function OurMission() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-center font-bold tracking-tight text-gray-900 sm:text-4xl md:text-7xl lg:text-9xl mb-20">
                   Our Mission
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>

                        <p className="text-lg text-gray-600 mb-6">
                            An environment where community and technology come together.
                        </p>
                        <p className="text-lg text-gray-600 mb-30">
                            Since the beginning, we've been committed to fostering a culture of inclusivity and innovation.
                            We believe that by providing the right tools and support, we can help individuals reach their full potential.
                        </p>
                        <div className="grid grid-cols-3 gap-8">
                            <StatBox value="3+" label="Allies per session" />
                            <StatBox value="1:1" label="Interaction" />
                            <StatBox value="1" label="Session Per Week" />
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            src="/camera-woman.jpg"
                            alt="About us"
                            width={1000}
                            height={800}
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

function StatBox({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex text-center bg-gray-100 rounded-lg h-40 justify-ce">
            <div className="text-3xl font-bold text-gray-900">
                {value}
            </div>
            <div className="text-sm text-gray-600">
                {label}
            </div>
        </div>
    )
}
