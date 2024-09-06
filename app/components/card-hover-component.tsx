"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 justify-items-center",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target="_blank"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            project={{
              title: item.title,
              description: item.description,
              image: item.image,
            }}
          />
        </Link>
      ))}
    </div>
  );
};


export const Card = ({
  project,
}: {
  project: {
    title: string;
    description: string;
    image: string;
  };
}) => {
  return (
    <div className="relative group rounded-3xl h-full w-full">
        <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={500}
            className="w-full h-72 rounded-3xl object-cover object-top aspect-video"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 rounded-3xl">
            <h3 className="text-lg font-bold mb-3">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
        </div>
    </div>
  );
};
