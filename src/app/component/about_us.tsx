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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
                    <div className="p-20">
                        <Image
                            src="/camera-woman.jpg"
                            alt="Student Led, Student Driven"
                            width={100}
                            height={200}
                            className="rounded-lg object-cover w-full"
                        />
                    </div>
                    <div className="space-y-4 px-5 sm:text-center xs:text-center">
                        <h2 className="text-3xl font-bold text-foreground">Student Led, Student Driven</h2>
                        <p className="text-muted-foreground leading-relaxed text-2xl">
                            NITE Nonprofit is a student-led organization founded by passionate high school students from Milpitas and Cupertino.
                        </p>
                    </div>
                    <div className="xs:order-4 space-y-4 px-5 sm:text-center xs:text-center">
                        <h2 className="text-3xl font-bold text-foreground">We made sure to be unique.</h2>
                        <p className="text-muted-foreground leading-relaxed text-2xl">
                            Frustrated by the lack of resources and opportunities in our schools, we took matters into our own hands and created NITE Nonprofit to bridge the gap in tech education.
                        </p>
                    </div>
                    <div className="p-20">
                        <Image
                            src="/camera-woman.jpg"
                            alt="Student Led, Student Driven"
                            width={100}
                            height={200}
                            className="rounded-lg object-cover w-full"
                        />
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
