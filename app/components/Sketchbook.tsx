"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Sketchbook() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animação do título
      gsap.from(".sketchbook-title", {
        scrollTrigger: {
          trigger: ".sketchbook-title",
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
      });

      // Entrada das imagens
      gsap.from(".sketchbook-item", {
        scrollTrigger: {
          trigger: ".sketchbook-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // ==========================================
      // ESTRELAS CAINDO
      // ==========================================

      const stars = gsap.utils.toArray<HTMLElement>(".falling-star");

      stars.forEach((star, index) => {
        const section = sectionRef.current;

        if (!section) return;

        const height = section.offsetHeight;

        gsap.set(star, {
          x: `${[8, 18, 29, 41, 53, 64, 76, 87, 94, 34, 70, 15][index]}vw`,
          y: -80,
        });

        gsap.to(star, {
          y: height + 80,
          duration: [5, 7, 6, 8, 5.5, 7.5, 6.5, 8.5, 5, 7, 6, 9][index],
          delay: [0, 2, 4, 1, 6, 3, 7, 1.5, 5, 8, 3.5, 6.5][index],
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
      className="relative min-h-screen overflow-hidden bg-black px-8 py-32 text-white"
    >

      {/* ==========================================
          ESTRELAS
          ========================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

        <div className="falling-star">
          <div className="star-trail" />
          <div className="star-head">✦</div>
        </div>

        <div className="falling-star">
          <div className="star-trail" />
          <div className="star-head">✦</div>
        </div>

        <div className="falling-star">
          <div className="star-trail" />
          <div className="star-head">✦</div>
        </div>

        <div className="falling-star">
          <div className="star-trail" />
          <div className="star-head">✦</div>
        </div>

        <div className="falling-star">
          <div className="star-trail" />
          <div className="star-head">✦</div>
        </div>

        <div className="falling-star">
          <div className="star-trail" />
          <div className="star-head">✦</div>
        </div>

        <div className="falling-star">
          <div className="star-trail" />
          <div className="star-head">✦</div>
        </div>

        <div className="falling-star">
          <div className="star-trail" />
          <div className="star-head">✦</div>
        </div>

        <div className="falling-star">
          <div className="star-trail" />
          <div className="star-head">✦</div>
        </div>

        <div className="falling-star">
          <div className="star-trail" />
          <div className="star-head">✦</div>
        </div>

        <div className="falling-star">
          <div className="star-trail" />
          <div className="star-head">✦</div>
        </div>

        <div className="falling-star">
          <div className="star-trail" />
          <div className="star-head">✦</div>
        </div>

      </div>

      {/* ==========================================
          CONTEÚDO
          ========================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">

        <p className="mb-6 text-[#7C3AED] uppercase tracking-[0.4em]">
          Personal Archive
        </p>

        <h2 className="whitespace-nowrap text-[9vw] font-normal tracking-[0.02em] text-[#7C3AED] sm:text-6xl md:text-8xl md:tracking-[0.2em]">
          SKETCHBOOK
        </h2>

        <div className="sketchbook-grid mt-20 grid grid-cols-2 items-start gap-4 md:grid-cols-4">

          {/* SKETCH 05 */}
          <div className="sketchbook-item border border-[#7C3AED]/70 shadow-[0_0_6px_rgba(168,85,247,0.9),0_0_20px_rgba(124,58,237,0.55),0_0_45px_rgba(124,58,237,0.2)]">
            <Image
              src="/images/sketch-05.jpg"
              alt="Sketchbook sketch 05"
              width={1200}
              height={1200}
              sizes="(max-width: 768px) 50vw, 25vw"
              className="block h-auto w-full"
            />
          </div>

          {/* SKETCH 06 */}
          <div className="sketchbook-item border border-[#7C3AED]/70 shadow-[0_0_6px_rgba(168,85,247,0.9),0_0_20px_rgba(124,58,237,0.55),0_0_45px_rgba(124,58,237,0.2)]">
            <Image
              src="/images/sketch-06.jpg"
              alt="Sketchbook sketch 06"
              width={1200}
              height={1600}
              sizes="(max-width: 768px) 50vw, 25vw"
              className="block h-auto w-full"
            />
          </div>

          {/* SKETCH 07 */}
          <div className="sketchbook-item border border-[#7C3AED]/70 shadow-[0_0_6px_rgba(168,85,247,0.9),0_0_20px_rgba(124,58,237,0.55),0_0_45px_rgba(124,58,237,0.2)]">
            <Image
              src="/images/sketch-07.jpg"
              alt="Sketchbook sketch 07"
              width={1200}
              height={1200}
              sizes="(max-width: 768px) 50vw, 25vw"
              className="block h-auto w-full"
            />
          </div>

          {/* SKETCH 04 */}
          <div className="sketchbook-item border border-[#7C3AED]/70 shadow-[0_0_6px_rgba(168,85,247,0.9),0_0_20px_rgba(124,58,237,0.55),0_0_45px_rgba(124,58,237,0.2)]">
            <Image
              src="/images/sketch-04.jpg"
              alt="Sketchbook sketch 04"
              width={1200}
              height={1600}
              sizes="(max-width: 768px) 50vw, 25vw"
              className="block h-auto w-full"
            />
          </div>

          {/* SKETCH 08 */}
          <div className="sketchbook-item border border-[#7C3AED]/70 shadow-[0_0_6px_rgba(168,85,247,0.9),0_0_20px_rgba(124,58,237,0.55),0_0_45px_rgba(124,58,237,0.2)]">
            <Image
              src="/images/sketch-08.jpg"
              alt="Sketchbook sketch 08"
              width={1200}
              height={1200}
              sizes="(max-width: 768px) 50vw, 25vw"
              className="block h-auto w-full"
            />
          </div>

          {/* SKETCH 09 */}
          <div className="sketchbook-item border border-[#7C3AED]/70 shadow-[0_0_6px_rgba(168,85,247,0.9),0_0_20px_rgba(124,58,237,0.55),0_0_45px_rgba(124,58,237,0.2)]">
            <Image
              src="/images/sketch-09.jpg"
              alt="Sketchbook sketch 09"
              width={1200}
              height={1200}
              sizes="(max-width: 768px) 50vw, 25vw"
              className="block h-auto w-full"
            />
          </div>

          {/* SKETCH 10 */}
          <div className="sketchbook-item border border-[#7C3AED]/70 shadow-[0_0_6px_rgba(168,85,247,0.9),0_0_20px_rgba(124,58,237,0.55),0_0_45px_rgba(124,58,237,0.2)]">
            <Image
              src="/images/sketch-10.jpg"
              alt="Sketchbook sketch 10"
              width={1200}
              height={1200}
              sizes="(max-width: 768px) 50vw, 25vw"
              className="block h-auto w-full"
            />
          </div>

          {/* SKETCH 11 */}
          <div className="sketchbook-item border border-[#7C3AED]/70 shadow-[0_0_6px_rgba(168,85,247,0.9),0_0_20px_rgba(124,58,237,0.55),0_0_45px_rgba(124,58,237,0.2)]">
            <Image
              src="/images/sketch-11.jpg"
              alt="Sketchbook sketch 11"
              width={1200}
              height={1200}
              sizes="(max-width: 768px) 50vw, 25vw"
              className="block h-auto w-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}