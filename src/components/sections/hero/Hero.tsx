"use client";
import { gsap, useGSAP } from "@/src/lib/gsap";

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
      { y: 0, opacity: 1, delay: 0.5, ease: "circ.out" }
    );
  }, []);

  return (
    <div className="hero-bg">
      <div className="hero-backdrop flex justify-center">
        <div className="flex-1 max-w-[1100px]">
          <div className="h-[120px]" />
          <div className="text-white flex flex-1 flex-col h-[85vh]">
            <div className="flex flex-col flex-3">
              <div className="flex h-[110px] overflow-hidden">
                <span
                  className={`animated-text text-[120px] leading-none tracking-[0px] opacity-0`}
                >
                  Pulso
                </span>
              </div>
              <div className="flex h-[110px] overflow-hidden">
                <span
                  className={`animated-text text-[120px] leading-none tracking-[0px] opacity-0`}
                >
                  Verde
                </span>
              </div>
            </div>
            <div className="flex flex-1">
              <div className="h-[100px] overflow-hidden">
                <div className="subtitle text-white uppercase max-w-[200px] opacity-0">
                  Sostenibilidad cool Sostenibilidad cool Sostenibilidad cool
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
