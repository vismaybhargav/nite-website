import { Card, CardContent } from "@/components/ui/card";
import { archivo, inter } from "../fonts/font";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ScrollReveal from "../component/scroll_reveal";

type Leader = {
    name: string,
    role: string,
    image: string,
    bio: string,
}

type Member = {
    name: string,
    role: string,
    image: string,
}

const leaders: Leader[] = [
    {
        "name": "Mokshit Kidambi",
        "role": "Chairman",
        "image": "/mokshit.jpg",
        "bio": "Mokshit is a high school student from Milpitas, California. He is passionate about technology and education, and he believes that everyone should have access to quality tech education. In his free time, he enjoys coding, playing chess, and reading about new technologies."
    },
    {
        "name": "Caden Atmodjo",
        "role": "Vice Chairman",
        "image": "/caden.jpg",
        "bio": "Caden is a high school student from Milpitas, California. He is passionate about technology and education, and he believes that everyone should have access to quality tech education. In his free time, he enjoys coding, playing chess, and reading about new technologies."
    },
    {
        "name": "Merdy Udutha",
        "role": "Teaching Lead",
        "image": "/merdy.jpg",
        "bio": "Merdy is a high school student from Milpitas, California. He is passionate about technology and education, and he believes that everyone should have access to quality tech education. In his free time, he enjoys coding, playing chess, and reading about new technologies."
    },
    {
        "name": "Anya Gattani",
        "role": "Marketing Lead",
        "image": "/anya.jpg",
        "bio": "Anya is a high school student from Milpitas, California. She is passionate about technology and education, and she believes that everyone should have access to quality tech education. In her free time, she enjoys coding, playing chess, and reading about new technologies."
    },
    {
        "name": "Eshan Gupta",
        "role": "Finance Lead",
        "image": "/eshan.jpg",
        "bio": "Eshan is a high school student from Milpitas, California. He is passionate about technology and education, and he believes that everyone should have access to quality tech education. In his free time, he enjoys coding, playing chess, and reading about new technologies."
    },
    {
        "name": "Thejas Anoop Kumar",
        "role": "Secretary",
        "image": "/thejas.jpg",
        "bio": "Thejas is a high school student from Cupertino, California. He is passionate about technology and education, and he believes that everyone should have access to quality tech education. In his free time, he enjoys coding, playing chess, and reading about new technologies."
    },
    {
        "name": "Vismay Achar Bhargav",
        "role": "Programs Lead",
        "image": "/vismay.jpg",
        "bio": "Vismay is a high school student from Cupertino, California. He is passionate about technology and education, and he believes that everyone should have access to quality tech education. In his free time, he enjoys coding, playing chess, and reading about new technologies."
    }
];

const members: Member[] = Array<Member>(20).fill({"name": "John Doe", "role": "Teacher", "image": "/leader-placeholder.png"});

export default function LeadershipPage() {
    return (
        <div>
            {/* DO NOT REMOVE THIS mt-15, the nav bar hovers over the content, so its going to look pushed up */}
            <section className="mt-40">
                <h1 className={`text-9xl ${archivo.className} font-stretch-expanded text-center mb-20`}>Meet our Team</h1>
                <div className="p-10">
                    <div className="grid grid-cols-2 place-items-center gap-18 last:justify-self-center">
                        {leaders.map((leader, index) => (
                            <ScrollReveal key={index} delay={index * 100}>
                                <LeaderView key={index} leader={leader} />
                            </ScrollReveal>
                        ))}
                    </div>
                <h1 className={`text-7xl ${archivo.className} font-stretch-expanded text-center mt-10`}>Members</h1>
                    <div className="grid grid-cols-4 mt-10 gap-8">
                        {members.map((member, index) => (
                            <MemberView key={index} member={member} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

function LeaderView(props: { leader: Leader }) {
    const { leader } = props;
    return (
        <Card className="max-h-md items-center">
            <CardContent>
                {/* <Image src={leader.image} width={400} height={400} alt={leader.name} /> */}
                <div className="w-full h-100 bg-gray-400"></div>
                <p className={`${archivo.className} text-3xl mt-4`}>{leader.name}</p>
                <p className={`${inter.className} text-2xl mb-3 text-muted-foreground`}>{leader.role}</p>
                <p className={`${inter.className} leading-7`}>{leader.bio}</p>
            </CardContent>
        </Card>
    )
}

function MemberView(props: { member: Member }) {
    const { member } = props;
    return (
        <div className="flex flex-col mx-auto items-center">
            <Avatar className="h-48 w-48">
                <AvatarImage src={member.image} />
                <AvatarFallback className={`text-6xl ${archivo.className}`}>{initials(member.name)}</AvatarFallback>
            </Avatar>
            <p className={`${inter.className} text-2xl`}>{member.name}</p>
            <p className={`${inter.className} text-muted-foreground`}>{member.role}</p>
        </div>
   );
}

const initials = (s: string) => {
  const p = s.trim().split(/\s+/);
  if (!p.length) return "";
  const a = (p[0][0] ?? "").toUpperCase();
  const b = p.length > 1 ? (p[p.length - 1][0] ?? "").toUpperCase() : "";
  return a + b;
};
