"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { playpenSans } from "@/app/fonts";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const menuItemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Effect to handle the indicator's movement
  useEffect(() => {
    if (activeIndex !== null && indicatorRef.current && menuItemRefs.current[activeIndex]) {
      const item = menuItemRefs.current[activeIndex];
      indicatorRef.current.style.width = `${item?.offsetWidth}px`;
      indicatorRef.current.style.left = `${item?.offsetLeft}px`;
    } else if (indicatorRef.current) {
      indicatorRef.current.style.width = "0";
    }
  }, [activeIndex]);

  return (
    <header className="flex items-center justify-between md:px-16 py-7 absolute z-10 w-full px-10">
      <Image src="/logo.svg" alt="logo" width={100} height={100} />

      {/* Hamburger Icon for small screens */}
      <div className="md:hidden cursor-pointer z-20" onClick={toggleMenu}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </div>

      {/* Navigation menu */}
      <nav
        className={`${playpenSans.className} md:flex hidden md:relative text-lg`}
      >
        <ul className="flex relative">
          <div
            ref={indicatorRef}
            className="absolute bg-blue-700 h-full w-0 transition-all duration-300 ease-in-out rounded-md"
          ></div>
          {menuItems.map((item, index) => (
            <li
              key={index}
              ref={(el) => {(menuItemRefs.current[index] = el)}}
              className="relative group"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <a
                href={item.href}
                className="block py-1 px-5 text-white relative z-10 scroll-smooth"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={`${
          playpenSans.className
        } fixed top-0 right-0 h-full w-1/2 bg-gray-800 text-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-10`}
      >
        <ul className="flex flex-col w-full mt-20">
          {menuItems.map((item, index) => (
            <li key={index} className="group">
              <a
                href={item.href}
                className="block py-3 px-5 text-white w-full text-center active:text-blue-700"
                onClick={() => setIsOpen(false)} 
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
