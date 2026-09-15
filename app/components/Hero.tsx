"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".falling-star").forEach((star) => {
  gsap.to(star, {
    y: "110vh",
    x: gsap.utils.random(-40, 40),
    duration: gsap.utils.random(5, 9),
    repeat: -1,
    delay: gsap.utils.random(0, 8),
    ease: "none",
  });
});
  
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden bg-black px-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
  {Array.from({ length: 20 }).map((_, i) => (
  <span
    key={i}
    className="falling-star absolute"
    style={{
      left: `${(i * 47) % 100}%`,
      top: `${-((i * 31) % 100)}%`,
    }}
  >
  <span className="star-trail" />
  <span className="star-head">✦</span>
</span>
  ))}
</div>

      <div className="relative z-10">
        <p className="hero-label mb-12 text-sm uppercase tracking-[0.3em]">
          antisocial lifestyle
        </p>

        <h1 className="hero-title text-6xl font-normal tracking-[0.3em] text-[#7C3AED] md:text-4xl">
          SAINT AIYRA
        </h1>

        <p className="hero-description mt-8 max-w-xl text-lg text-[#7C3AED]">
          Films, music, edits, code and things I like.
        </p>
      </div>
    </section>
  );
}