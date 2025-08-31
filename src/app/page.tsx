import Image from "next/image";
import Iridescence from "@/components/Iridescence";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import { Palette, UsersRound, Folder, HeartHandshake } from "lucide-react";

const cards = [
  {
    title: "Interactive Courses",
    description: "Real-time feedback and hands-on challenges",
    icon: Palette,
  },
  {
    title: "Expert Mentorship",
    description: "Learn from industry professionals",
    icon: UsersRound,
  },
  {
    title: "Portfolio Builder",
    description: "Showcase your skills professionally",
    icon: Folder,
  },
  {
    title: "Design Community",
    description: "Connect and grow with peers",
    icon: HeartHandshake,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Section 1 with background + overlay */}
      <div className="relative flex flex-col items-center justify-center h-screen w-full">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Iridescence
            // color={[1, 1, 1]}
            color={[0.6, 0.2, 0.1]}
            mouseReact={false}
            amplitude={0.1}
            speed={2.0}
          />
        </div>

        {/* Black overlay with 90% opacity */}
        <div className="absolute inset-0 bg-black/80 z-10"></div>

        {/* Foreground content */}
        <div className="relative z-20 text-center text-white flex flex-col items-center justify-start">
          <Image src="/2.png" alt="Coming Soon" width={200} height={200} />
          <h1 className="text-4xl lg:text-8xl font-bold">Coming Soon!</h1>
          <p className="tesx-sm lg:text-lg mt-5 text-orange-500 font-semibold px-10 ">
            Bringing UI/UX to Lanka&apos;s Designers, Simple and Vibrant! 😎🇱🇰
          </p>

          <div className="flex flex-col lg:flex-row  w-full mt-20 gap-5 lg:gap-2 px-10">
            <Input type="email" placeholder="Email" className="py-5" />
            <Button
              type="submit"
              // variant="outline"
              className="py-5 bg-orange-500 text-white hover:bg-orange-600"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Section 2 without background */}
      <div className=" z-10 mt-8 h-auto flex flex-col items-center justify-center py-28">
        <div className="flex flex-col ">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
            What&apos;s Coming
          </h1>
          <p className="text-xs md:text-lg mt-2 text-white text-center">
            Transform your design journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-32 max-w-7xl">
            {cards.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
        <div className=" z-10 mt-8 h-screen flex flex-col w-full max-w-3xl items-center justify-center py-28">
          <div className="flex flex-col px-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
              Ready to Transform Your Design Career?
            </h1>
            <p className="text-xs md:text-lg mt-2 text-white text-center">
              Join the waitlist for the next generation of design education
            </p>
          </div>
          <div className="flex flex-col lg:flex-row  w-full mt-20 gap-5 lg:gap-2 px-10">
            <Input type="email" placeholder="Email" className="py-5" />
            <Button
              type="submit"
              // variant="outline"
              className="py-5 bg-orange-500 text-white hover:bg-orange-600"
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* footer */}
        <footer className=" py-10 w-full">
          <div className="container mx-auto text-center border-t border-gray-800 w-full ">
            <p className="text-gray-400 mt-12">
              &copy; {new Date().getFullYear()} PixelSL. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
//  <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
//               Ready to Transform Your Design Career
//             </h1>
//             <p className="text-xs md:text-lg mt-2 text-white text-center">
//               Join the waitlist for the next generation of design education
//             </p>
