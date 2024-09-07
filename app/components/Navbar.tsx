"use client"
import Image from "next/image";
import { playpenSans } from '@/app/fonts';

const NavBar = () => {
  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="flex items-center justify-between lg:px-28 md:px-16 py-7 absolute z-10 w-full">
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
      <nav className={`${playpenSans.className} relative text-lg`}>
        <ul className="flex relative">
          <div
            className="absolute bg-blue-700 h-full w-0 transition-all duration-300 ease-in-out rounded-md"
            id="nav-indicator"
          ></div>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => moveIndicator(index)}
              onMouseLeave={() => resetIndicator()}
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
    </header>
  );
};

// Helper function to move the indicator
function moveIndicator(index: number) {
  const indicator = document.getElementById("nav-indicator");
  const items = document.querySelectorAll("nav ul li");
  const item = items[index] as HTMLElement;
  if (indicator) {
    indicator.style.width = `${item.offsetWidth}px`;
    indicator.style.left = `${item.offsetLeft}px`;
  }
}

// Helper function to reset the indicator
function resetIndicator() {
  const indicator = document.getElementById("nav-indicator");
  if (indicator) {
    indicator.style.width = "0";
  }
}

export default NavBar;
