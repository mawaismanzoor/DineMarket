import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroposter from "/heroposter.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* 1st part */}
      <div className="flex-1">
        <Badge className=" bg-blue-200 rounded-lg text-cyan-600 hover:bg-blue-300 px-4 py-2">
          Badge
        </Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className=" bg-black rounded-none px-9 justify-normal">
          Start Shopping
        </Button>
      </div>
      {/* 2nd part */}
      <div className="flex-1">
        <Image
          src="/heroposter.png"
          width={500}
          height={500}
          alt="Main Picture"
        />
      </div>
    </section>
  );
};
