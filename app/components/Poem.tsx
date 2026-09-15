"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Poem() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Entrada do texto
      gsap.from(".poem-content", {
        scrollTrigger: {
          trigger: ".poem-content",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power2.out",
      });

      // Estrelas
      const stars = gsap.utils.toArray<HTMLElement>(".poem-star");

      stars.forEach((star, index) => {
        gsap.set(star, {
          x: `${[15, 50, 82][index]}vw`,
          y: -80,
        });

        gsap.to(star, {
          y: () => sectionRef.current?.offsetHeight ?? window.innerHeight,
          duration: [9, 12, 10][index],
          delay: [1, 4, 7][index],
          ease: "none",
          repeat: -1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-8 py-32 text-white"
    >
      {/* ESTRELAS */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="poem-star falling-star">
          <div className="star-trail" />
          <div className="star-head">✦</div>
        </div>

        <div className="poem-star falling-star">
          <div className="star-trail" />
          <div className="star-head">✦</div>
        </div>

        <div className="poem-star falling-star">
          <div className="star-trail" />
          <div className="star-head">✦</div>
        </div>
      </div>

      {/* CLARICE */}
      <div className="poem-content relative z-10 mx-auto max-w-3xl text-center">

        <p className="mb-12 text-xs uppercase tracking-[0.5em] text-[#7C3AED]/70">
          Afterword
        </p>

        <blockquote className="poem-text text-2xl leading-relaxed md:text-4xl">
          “Dizem que a vida é para quem sabe viver, mas
          <br className="hidden md:block" />
          ngm nasce pronto. A vida é para quem é corajoso o
          <br className="hidden md:block" />
          suficiente pra se arriscar e humilde o suficiente para
          <br className="hidden md:block" />
          aprender.”
        </blockquote>

        <div className="mx-auto mt-12 h-px w-12 bg-[#7C3AED] shadow-[0_0_10px_rgba(124,58,237,0.8)]" />

        <p className="poem-author mt-6 text-xs uppercase tracking-[0.4em]">
           — Clarice Lispector
        </p>

      </div>
    </section>
  );
}