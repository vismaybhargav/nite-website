import Navbar from "@/app/component/hero/navbar";
import Hero from "@/app/component/hero/hero";
import Footer from "@/app/component/hero/footer";
import AboutUs from "@/app/component/hero/about_us";

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
