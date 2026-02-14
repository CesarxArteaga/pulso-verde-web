"use client";
import { gsap, useGSAP } from "@/src/lib/gsap";
import AnimatedCircle from "./AnimatedCircle";
import { useRef, useState } from "react";
import CounterStats from "./CounterStats";

export default function Hero() {
  const container = useRef(null);
  const [index, setIndex] = useState(0);

  const cards = [
    "/assets/images/slide/1.png",
    "/assets/images/slide/2.png",
    "/assets/images/slide/3.png",
  ];

  useGSAP(() => {
    //   const tl = gsap.timeline();

    //   tl.fromTo(
    //     ".animated-text",
    //     {
    //       y: 200,
    //     },
    //     { y: 0, ease: "circ.out", opacity: 1 }
    //   );

    //   gsap.fromTo(
    //     ".subtitle",
    //     {
    //       y: 200,
    //     },
    //     { y: 0, opacity: 1, delay: 0.8, duration: 0.6, ease: "circ.out" }
    //   );

    //   gsap.to(".bottom-circle", {
    //     delay: 1.2,
    //     opacity: 1,
    //     scale: 1,
    //     ease: "expo.out",
    //   });

    const elements = gsap.utils.toArray(".slide");

    elements.forEach((card: any, i) => {
      const position = (i - index + cards.length) % cards.length;

      if (position === 0) {
        // Active card
        gsap.to(card, {
          x: 0,
          scale: 1.3,
          opacity: 1,
          zIndex: 3,
          duration: 0.6,
          ease: "power3.out",
        });
      } else if (position === 1) {
        // Right card
        gsap.to(card, {
          x: 120,
          scale: 0.9,
          opacity: 0.7,
          zIndex: 2,
          duration: 0.6,
        });
      } else {
        // Left/back card
        gsap.to(card, {
          x: -120,
          scale: 0.9,
          opacity: 0.7,
          zIndex: 1,
          duration: 0.6,
        });
      }
    });
  }, [index]);

  // Auto rotate
  useGSAP(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    gsap.to(".slider", {
      opacity: 1,
      scale: 1,
      delay: 0.6,
      ease: "circ.inOut",
    });

    gsap.to(".hero-text", {
      opacity: 1,
      delay: 0.6,
    });
  }, []);

  return (
    <div className="hero-bg flex justify-center">
      <div className="max-w-[1200px] flex">
        <div className="place-content-center">
          <div className="grid grid-cols-2">
            <div className="pl-6">
              <br />
              <br />
              <p className="hero-text opacity-0 text-[#ffbb00] font-[800] uppercase text-[55px] leading-none">
                Transformamos la sostenibilidad en entretenimiento
              </p>
              <br />
              <br />
              <p className="hero-text opacity-0  text-white font-[300] text-[25px] leading-none">
                Nuestro propósito es: <br />
                Agitar conciencias para convertirlas en acciones de
                sostenibilidad
              </p>
            </div>
            <div className="flex justify-center">
              <div className="slider opacity-0 scale-0" ref={container}>
                {[1, 2, 3, 1, 2, 3].map((n, i) => (
                  <div className="slide" key={i}>
                    <img src={`/assets/images/slide/${n}.png`} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <CounterStats />
        </div>
      </div>
    </div>
  );
}
