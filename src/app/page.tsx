import Navbar from "@/app/component/navbar";
import Hero from "@/app/component/hero";
import Footer from "@/app/component/footer";
import AboutUs from "@/app/component/about_us";

export default function Home() {
    return (
        <>
            <main className="min-h-screen flex flex-col items-center bg-white">
                <Navbar />
                <Hero  />
                <AboutUs />
                <Footer />
            </main>
        </>
    );
}
