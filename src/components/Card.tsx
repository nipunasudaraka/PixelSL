import React from "react";

type CardProps = {
  title: string;
  description: string;
  icon: React.ElementType; // Accepts a component like Palette
};

export default function Card({ title, description, icon: Icon }: CardProps) {
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <div className="flex w-[48px] h-[48px] bg-orange-950 rounded-full items-center justify-center">
        <Icon className="text-orange-500" />
      </div>
      <h3 className="text-xl font-bold text-center text-white mt-6">{title}</h3>
      <p className="text-center text-gray-500 text-xs px-16 max-w-sm w-full mt-3">
        {description}
      </p>
    </div>
  );
}
