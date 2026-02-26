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
    <div className="hero-bg flex flex-col items-center">
      <div className="w-[100%] max-w-[1200px] flex">
        <div className="grid grid-cols-2 h-[700px]">
          <div className="flex flex-col place-content-center">
            <p className="hero-text opacity-0 text-[#ffbb00] font-[800] uppercase lg:text-[40px] xl:text-[45px] text-[55px] leading-none">
              Transformamos la sostenibilidad en entretenimiento
            </p>
            <p className="hero-text pt-8 opacity-0 text-white font-[300] text-[25px] leading-none">
              Nuestro propósito es: Agitar conciencias para convertirlas en
              acciones de sostenibilidad
            </p>
          </div>
          <div className="flex flex-col place-content-center">
            <div
              className="slider lg:w-[100%] lg:h-[400px] opacity-0 scale-0"
              ref={container}
            >
              {[1, 2, 3, 1, 2, 3].map((n, i) => (
                <div
                  className="slide lg:w-[200px] h-[300px] xl:w-[300px] xl:h-[400px]"
                  key={i}
                >
                  <img src={`/assets/images/slide/${n}.png`} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CounterStats />
    </div>
  );
}
