import { gsap, useGSAP } from "@/src/lib/gsap";
import { useRef } from "react";

export default function QuieresResumen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !followerRef.current) return;

    const container = containerRef.current;
    const follower = followerRef.current;

    // Smooth delayed movement
    const xTo = gsap.quickTo(follower, "x", {
      duration: 0.2,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(follower, "y", {
      duration: 0.2,
      ease: "power3.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      xTo(x);
      yTo(y);
    };

    const handleEnter = () => {
      gsap.to(follower, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(follower, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="flex justify-center bg-slate-50">
      <div className="max-w-[1200px]">
        <br />
        <br />
        <p className="color-terciary uppercase text-[40px] font-[800]">
          ¿Quiéres un resumen?
        </p>
        <p className="color-terciary uppercase text-[30px]">
          Este video lo dice todo
        </p>
        <br />
        <div ref={containerRef} className=" cursor-none overflow-hidden">
          <div
            ref={followerRef}
            className="absolute w-[100px] h-[100px] bg-secondary"
            style={{
              borderRadius: "50%",
              pointerEvents: "none",
              transform: "translate(-50%, -50%) scale(0)",
              opacity: 0,
              zIndex: 100,
            }}
          >
            <div className="flex flex-1 justify-center">
              <span>PLAY</span>
            </div>
          </div>
          <img
            className="hover:scale-[1.05] hover:brightness-50 duration-300 ease-in-out"
            src="/assets/images/video_1.png"
            alt="video_1"
          />
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
