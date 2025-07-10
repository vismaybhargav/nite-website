import Navbar from "@/app/component/navbar";
import Hero from "@/app/component/hero";
import Footer from "@/app/component/footer";
import OurMission from "@/app/component/our_mission";
import AboutUs from "@/app/component/about_us";
import CirriculumSection from "@/app/component/cirriculum";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar noScrollClear={false}/>
            <Hero  />
            <OurMission />
            <AboutUs />
            <CirriculumSection />
            <Footer />
        </main>
    );
}
