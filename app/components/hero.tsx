"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypewriterEffect } from "./typewriter-effect";
import { ubuntuMono } from '@/app/fonts';

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
    [
      { text: "Innovative" },
      { text: "and" },
      { text: "master" },
      { text: "of" },
      { text: "the" },
      { text: "art.", className: "text-blue-500" },
    ],
    
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % wordLists.length);
    }, 5000); // Change the interval time as needed

    return () => clearInterval(interval);
  });
  return (
    <section className={`relative h-[100vh] overflow-hidden flex items-center text-white text-lg ${ubuntuMono.className}`}>
      <div className="lg:ml-32 ml-20 flex flex-col translate-y-10 gap-3">
        <p className="text-blue-500 font-semibold text-xl"> Hello, World!</p>
        <h1>
          I&apos;m <span className="text-5xl font-extrabold">Abenezer Seifu</span>
        </h1>
        <TypewriterEffect 
          key={index}
          words={wordLists[index]} 
          className={`mt-2`} 
        />
      </div>
      <Image
        src="/profile.png"
        alt="Abenezer Seifu's profile picture"
        width={600}
        height={600}
        className="absolute -right-10 bottom-0 hidden md:block w-[53%]"
      />
      <div className="w-8 flex flex-col gap-3 items-center absolute bottom-12 right-24 z-30">
        <div className="border-l-2 border-blue-500 h-20"></div>
        <a href="https://github.com/abe16s"><svg className="w-8" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path className="fill-white hover:fill-blue-500" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
        <a href="https://leetcode.com/u/abe16s/"><svg className="w-8" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LeetCode</title><path className="fill-white hover:fill-blue-500" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg></a>
        <a href="https://codeforces.com/profile/abe16s"><svg className="w-8" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Codeforces</title><path className="fill-white hover:fill-blue-500" d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/></svg></a>
      </div>
    </section>
  );
};

export default Hero;
