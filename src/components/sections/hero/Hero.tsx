"use client";
import { gsap, useGSAP } from "@/src/lib/gsap";
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
      <div className="h-[75px]" />
      <div className="w-[100%] max-w-[1200px] flex">
        <div className="h-[440px] md:h-[630px] flex flex-col place-content-center lg:grid lg:grid-cols-2 ">
          <div className="flex flex-col place-content-center px-4 md:px-8">
            <h1 className="hero-text opacity-0 text-[#ffbb00] font-[700] text-[40px] text-center lg:text-[60px] xl:text-[45px] leading-none">
              Transformamos la sostenibilidad en entretenimiento
            </h1>
            <p className="hero-text pt-8 px-4 opacity-0 text-white font-[500] md:font-[400] text-[20px] md:text-[24px] text-center leading-none">
              Nuestro propósito es: <br />
              Agitar conciencias para convertirlas en acciones de sostenibilidad
            </p>
          </div>
          {/**
           * SLIDER
           */}
          <div className="hidden lg:flex flex-col place-content-center">
            <div
              className="slider lg:w-[100%] lg:h-[400px] opacity-0 scale-0"
              ref={container}
            >
              {[1, 2, 3, 1, 2, 3].map((n, i) => (
                <div
                  className="slide lg:w-[240px] lg:h-[410px] xl:w-[300px] xl:h-[440px]"
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
