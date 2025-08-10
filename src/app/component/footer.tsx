import {Instagram,} from "lucide-react";
import Link from "next/link";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {archivo} from "@/app/fonts/font";

const footerLinks = [
    {
        title: "Overview",
        href: "#",
    },
    {
        title: "Leadership",
        href: "#",
    },
    {
        title: "Blog",
        href: "#",
    },
    {
        title: "Affiliations",
        href: "#",
    },
];



export default function Footer() {
    return (
        <footer>
            <div className="max-w-screen-xl mx-auto">
                <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
                    <div>
                        {/* Logo */}
                        <p className={`${archivo.className} text-2xl font-bold font-stretch-expanded`}>NITE Nonprofit</p>
                        <ul className="mt-6 flex items-center gap-4 flex-wrap">
                            {footerLinks.map(({ title, href }) => (
                                <li key={title}>
                                    <Link
                                        href={href}
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="max-w-xs w-full">
                        <h6 className="font-semibold">Stay up to date</h6>
                        <form className="mt-6 flex items-center gap-2">
                            <Input type="email" placeholder="Enter your email" />
                            <Button>Contact</Button>
                        </form>
                    </div>
                </div>
                <Separator />
                <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
                    {/* Copyright */}
                    <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
                        <Link href="/" target="_blank">
                NITE Nonprofit
              </Link>
              . All rights reserved.
            </span>
                    <div className="flex items-center gap-5 text-muted-foreground">
                        <Link href="#" target="_blank">
                            <Instagram className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}