import Head from 'next/head'
import Navbar from "@/app/component/navbar";

export default function Home() {
  return (
      <>
        <Head>
          <title>NITE Organization</title>
        </Head>
        <main className="min-h-screen flex flex-col items-center bg-white">
          <Navbar />

          {/* Main Content */}
          <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop >
            <source src="bg-video.mp4" type="video/mp4" />
          </video>

          <section className="flex flex-col items-center text-center mt-8 bg-transparent w-full h-dvh align-middle pt-20">
            <h1 className="text-base font-extrabold tracking-wide mb-3">
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
          <section className="max-w-7xl mx-auto">
            <h1 className="text-base">Who we are</h1>
            <h2>ajsdflakjsdflkasjdfl;asdkjfalskdjf;aslkdjfaskldfjasl;dkfjaslkdfjasklfjask;dlfjasjdfaslfjalskdfjasldfkj</h2>
          </section>
          <section className="max-w-7xl mx-auto">
            <h1 className="text-base">Cirriculum</h1>
          </section>
        </main>
      </>
  );
}