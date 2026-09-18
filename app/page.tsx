import AccessGate from "./components/AccessGate";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Sketchbook from "./components/Sketchbook";
import Music from "./components/Music";
import Poem from "./components/Poem";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[#7C3AED]">
      <Navbar />

      <Hero />

      <Projects />

      <Sketchbook />

      <Music />

      {/* ÚLTIMA PARTE DO SITE */}
      <Poem />
    </main> 

  );
}