"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animação do título
      gsap.from(".projects-title", {
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power2.out",
      });

      // Animação dos cards
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".project-card",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Parallax das imagens
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
  const image = card.querySelector(".project-image");

  if (!image) return;

  gsap.from(image, {
    scrollTrigger: {
      trigger: card,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    y: -80,
    ease: "none",
  });
});
      // Hover das imagens
      const images = gsap.utils.toArray<HTMLElement>(".project-image");

      images.forEach((image) => {
        const handleEnter = () => {
          gsap.to(image, {
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        };

        image.addEventListener("mouseenter", handleEnter);
        image.addEventListener("mouseleave", handleLeave);

        return () => {
          image.removeEventListener("mouseenter", handleEnter);
          image.removeEventListener("mouseleave", handleLeave);
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen bg-[#7C3AED] px-8 py-32 text-black"
    >
      <div className="mx-auto max-w-6xl">

        <p className="mb-6 text-sm uppercase tracking-[0.4em]">
          Work of Saint
        </p>

        <h2 className="projects-title text-5xl font-bold md:text-7xl">
          PROJECTS
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {/* PROJECT ONE */}
          <article className="project-card border border-black p-8">
            <p className="text-sm">01</p>

            <div className="relative mt-6 aspect-video overflow-hidden">
              <Image
                src="/images/sketch-03.jpg"
                alt="Project One"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="project-image object-cover"
            />
            </div>

            <h3 className="mt-16 text-3xl font-bold">
              PROJECT ONE
            </h3>

            <p className="mt-7 text-sm uppercase tracking-wider">
              Saint For The World · 2033
            </p>

            <Link
              href="#"
              className="mt-8 inline-block text-sm font-bold uppercase tracking-wider"
            >
              Coming Soon →
            </Link>
          </article>

          {/* PROJECT TWO */}
          <article className="project-card border border-black p-8">
            <p className="text-sm">02</p>

            <div className="relative mt-6 aspect-video overflow-hidden">
              <Image
                src="/images/sketch-01.jpg"
                alt="Project Two"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="project-image object-cover"
            />
            </div>

            <h3 className="mt-16 text-3xl font-bold">
              PROJECT TWO
            </h3>

            <p className="mt-6 text-sm uppercase tracking-wider">
              AIYRA IS THE WORLD · 2033
            </p>

            <Link
              href="#"
              className="mt-8 inline-block text-sm font-bold uppercase tracking-wider"
            >
              Coming Soon →
            </Link>
          </article>

        </div>

      </div>
    </section>
  );
}