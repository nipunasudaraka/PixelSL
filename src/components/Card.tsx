import React from "react";
import { Palette } from "lucide-react";

export default function Card() {
  return (
    <div className="flex flex-col justify-center items-center p-8 ">
      <div className="flex w-[48px] h-[48px] bg-orange-950 rounded-full items-center justify-center">
        <Palette className="text-orange-500 " />
      </div>
      <h3 className="text-xl font-bold text-center text-white mt-6">
        Iteractive Courses
      </h3>

      <p className="text-center text-gray-500 text-xs px-16 max-w-sm w-full mt-3">
        Learn the fundamentals of design and get hands-on experience with
        real-world projects.
      </p>
    </div>
  );
}
