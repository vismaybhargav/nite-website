import { archivo } from "../fonts/font";
import ScrollReveal from "./scroll_reveal";
import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="flex justify-center items-center flex-col mb-50">
            <ScrollReveal>
                <h1 className={`text-6xl xs:text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold font-stretch-expanded ${archivo.className}`}>About Us</h1>
            </ScrollReveal>
            <ScrollReveal>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                        <Image
                            src="/camera-woman.jpg"
                            alt="Student Led, Student Driven"
                            width={200}
                            height={400}
                            className="rounded-lg object-cover w-full"
                        />
                    </div>
                    <div className="order-1 lg:order-2 space-y-4">
                        <h2 className="text-3xl font-bold text-foreground">Student Led, Student Driven</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            NITE Nonprofit is a student-led organization founded by passionate high school students from Milpitas and Cupertino. Created with the vision of empowering youth through community service and innovation, NITE is driven entirely by students who design and lead projects that make a tangible impact. By combining creativity, leadership, and collaboration, the organization proves that young people can create meaningful change in their communities and beyond.
                        </p>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
