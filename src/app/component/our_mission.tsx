import React from 'react';
import Image from 'next/image'

export default function AboutUs() {
    const title = "Our Mission";

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-center font-bold tracking-tight text-gray-900 sm:text-4xl md:text-7xl mb-20">
                    {title}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>

                        <p className="text-lg text-gray-600 mb-6">
                            We're dedicated to creating an enviroment where technology and community thrive together.
                            Our goal is to empower neurodiverse individuals by teaching them the skills they need to succeed in the tech industry.
                        </p>
                        <p className="text-lg text-gray-600 mb-30">
                            Since the beginning, we've been committed to fostering a culture of inclusivity and innovation.
                            We believe that by providing the right tools and support, we can help individuals reach their full potential.
                        </p>
                        <div className="grid grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">3+</div>
                                <div className="text-sm text-gray-600">Allies per session</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">1:1</div>
                                <div className="text-sm text-gray-600">Interaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">1</div>
                                <div className="text-sm text-gray-600">Session per week</div>
                            </div>
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