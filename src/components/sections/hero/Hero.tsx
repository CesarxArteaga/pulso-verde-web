"use client";
import { gsap, useGSAP } from "@/src/lib/gsap";
import AnimatedCircle from "./AnimatedCircle";

export default function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".animated-text",
      {
        y: 200,
      },
      { y: 0, ease: "circ.out", opacity: 1 }
    );

    gsap.fromTo(
      ".subtitle",
      {
        y: 200,
      },
      { y: 0, opacity: 1, delay: 0.8, duration: 0.6, ease: "circ.out" }
    );

    gsap.to(".bottom-circle", {
      delay: 1.2,
      opacity: 1,
      scale: 1,
      ease: "expo.out",
    });
  }, []);

  return (
    <div className="hero-bg">
      <div className="hero-backdrop flex justify-center">
        <div className="flex-1 max-w-[1100px]">
          <div className="h-[120px]" />
          <div className="text-white flex flex-1 flex-col h-[85vh]">
            <div className="flex flex-col flex-2">
              <div className="flex h-[110px] overflow-hidden">
                <span
                  className={`animated-text text-[110px] leading-none tracking-[0px] opacity-0`}
                >
                  Pulso
                </span>
              </div>
              <div className="flex h-[110px] overflow-hidden">
                <span
                  className={`animated-text text-[110px] leading-none tracking-[0px] opacity-0`}
                >
                  Verde
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center flex-1">
              <div className="flex h-[100px] overflow-hidden ">
                <span className="subtitle uppercase text-justify max-w-[210px] opacity-0">
                  Ideas, soluciones y “jajajaj”s para un mundo mejor 🍃
                </span>
              </div>
              <div className="overflow-hidden">
                <div className="bottom-circle opacity-0 scale-0">
                  <AnimatedCircle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
