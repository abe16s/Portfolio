import Image from "next/image";
import NavBar from "./components/Navbar";
import { AuroraBackground } from "./components/aurora-background";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <NavBar/>
      <AuroraBackground> 
        <Hero/>
      </AuroraBackground>
    </>
  );
}
