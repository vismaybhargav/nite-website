import React from 'react';

export default function AboutUs() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Text Section */}
                <div className="space-y-12">
                    {/* About Us Section */}
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h1>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <button className="px-6 py-2 border-2 border-green-800 text-green-800 rounded-full hover:bg-green-800 hover:text-white transition">
                            Learn More
                        </button>
                    </div>

                    {/* Our Mission Section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>

                {/* Right Image Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Placeholder Boxes for Images */}
                    <div className="bg-gray-300 h-80 rounded-xl"></div>
                    <div className="bg-gray-300 h-80 rounded-xl"></div>
                    <div className="bg-gray-300 h-80 rounded-xl"></div>
                    <div className="bg-gray-300 h-80 rounded-xl"></div>
                </div>
            </div>
        </div>
    );
}
