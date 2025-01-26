import Image from "next/image";
import Head from 'next/head'
import Button from "./component/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>NITE Organization</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center bg-white">
        {/* Header */}
        <header className="w-full px-6 py-2 flex justify-between items-center border-b border-gray-300">
          <div className="text-lg font-bold">LOGO</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#home" className="hover:underline">home</a>
            <a href="#about" className="hover:underline">about</a>
            <a href="#curriculum" className="hover:underline">curriculum</a>
            <a href="#contact" className="hover:underline">contact</a>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-600 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <section className="flex flex-col items-center text-center px-6 mt-8">
          <h1 className="text-4xl font-extrabold tracking-wide mb-3">
            <span className="text-blue-600">N</span>
            <span className="text-green-600">I</span>
            <span className="text-blue-600">T</span>
            <span className="text-green-600">E</span>
          </h1>
          <p className="text-gray-600 mb-6 text-sm">An organization focused on empowering our community</p>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 text-sm">
              Become a NeuroAdvocate
            </button>
            <button className="px-4 py-2 border-2 border-green-600 text-green-600 font-semibold rounded-full hover:bg-green-100 text-sm">
              Donate
            </button>
          </div>
        </section>
      </main>
    </>
  );
}