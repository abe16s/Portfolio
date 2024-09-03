"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypewriterEffect } from "./typewriter-effect";

const Hero = () => {
  // Define multiple lists of words
  const wordLists = [
    [
      { text: "Full-stack" },
      { text: "web" },
      { text: "and" },
      { text: "mobile" },
      { text: "app" },
      { text: "developer.", className: "text-blue-500" },
    ],
    [
      { text: "Innovative" },
      { text: "and" },
      { text: "master" },
      { text: "of" },
      { text: "the" },
      { text: "art.", className: "text-blue-500" },
    ],
    [
      { text: "Building" },
      { text: "the" },
      { text: "future," },
      { text: "one" },
      { text: "line" },
      { text: "of" },
      { text: "code" },
      { text: "at" },
      { text: "a" },
      { text: "time.", className: "text-blue-500" },
    ],
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % wordLists.length);
    }, 5000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100vh] overflow-hidden flex items-center text-white text-lg">
      <div className="lg:ml-32 ml-20 flex flex-col translate-y-10 gap-3">
        <p className="text-blue-500 font-semibold text-xl">Hello, World!</p>
        <h1>
          I'm <span className="text-4xl font-extrabold">Abenezer Seifu</span>
        </h1>
        <TypewriterEffect 
          key={index}
          words={wordLists[index]} 
          className="mt-3" 
        />
      </div>
      <Image
        src="/profile.png"
        alt="Abenezer Seifu's profile picture"
        width={600}
        height={600}
        className="absolute -right-16 lg:right-0 bottom-0 hidden md:block"
      />
    </section>
  );
};

export default Hero;
