import React from 'react';
import { archivo, inter } from '../fonts/font';
import ScrollReveal from './scroll_reveal';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { BookText, Cpu, Lightbulb, LucideIcon, Rocket, Target, User, Users } from 'lucide-react';

export default function OurMission() {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <ScrollReveal>
                    <h2 className={`${archivo.className} text-6xl text-center font-bold tracking-tight font-stretch-expanded text-foreground sm:text-5xl md:text-8xl lg:text-9xl`}>
                        Our Mission
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                    <h3 className={`${inter.className} text-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl text-muted-foreground`}>
                        An environment where neuro-diverse people and technology come together.
                    </h3>
                </ScrollReveal>
                <div className='flex flex-col md:flex-row justify-between gap-8 my-30'>
                    <ScrollReveal delay={400}>
                        <MissionBox title="Innovation" desc="Breaking boundaries in learning" icon={Lightbulb} />
                    </ScrollReveal>
                    <ScrollReveal delay={600}>
                        <MissionBox title="Growth" desc="Growing as learners and educators" icon={Rocket} />
                    </ScrollReveal>
                    <ScrollReveal delay={800}>
                        <MissionBox title="Impact" desc="Developing the neurodivergent community" icon={Target} />
                    </ScrollReveal>
                    <ScrollReveal delay={1000}>
                        <MissionBox title="Education" desc="Allowing educators and students to thrive" icon={BookText} />
                    </ScrollReveal>
                </div>
                <ScrollReveal delay={1200}>
                    <h2 className={`${archivo.className} text-5xl font-bold font-stretch-expanded text-center`}>Our Impact</h2>
                </ScrollReveal>
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8 items-center mt-10 mb-40">
                    <ScrollReveal delay={1600}>
                        <StatBox value="3+" label="STEM Related Topics" icon={Cpu} />
                    </ScrollReveal>
                    <ScrollReveal delay={1400}>
                        <StatBox value="1:1" label="Interaction" icon={User} />
                    </ScrollReveal>
                    <ScrollReveal delay={1600}>
                        <StatBox value="100%" label="Community Driven" icon={Users} />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}

function StatBox(props: { value: string; label: string, icon: LucideIcon }) {
    return (
        <Card>
            <CardContent>
                <div className="flex justify-between">
                    <h1 className={`${archivo.className} text-5xl font-extrabold font-stretch-expanded`} >{props.value}</h1>
                    {props.icon && <props.icon className="size-12" />}
                </div>
            </CardContent>
            <CardFooter>
                <p className={`${archivo.className} lg:text-xl`}>{props.label}</p>
            </CardFooter>
        </Card>
    )
}

function MissionBox(props: { title: string, desc: string, icon: LucideIcon }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <props.icon className="size-24" />
            <h2 className={`${inter.className} text-3xl font-bold`}>{props.title}</h2>
            <h3 className={`${inter.className} text-xl text-muted-foreground text-center`}>{props.desc}</h3>
        </div>
    )
}
