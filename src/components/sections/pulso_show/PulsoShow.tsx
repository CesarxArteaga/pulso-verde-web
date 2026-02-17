import { useRef } from "react";
import { gsap, useGSAP } from "@/src/lib/gsap";

export default function PulsoShow() {
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
    <div className="flex justify-center bg-neutral-900">
      <div className="max-w-[1200px]">
        <div className="grid grid-cols-2">
          <div className="px-12">
            <div className="py-[150px] flex flex-col">
              <div className="w-[500px] h-[200px]">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src="/assets/images/pulso_show.png"
                  alt="pulso_show"
                />
              </div>
              <div className="bg-secondary px-2 rotate-[-1deg]">
                <span className="text-white text-[18px]">
                  El primer talk show de sostenibilidad en el mundo del mundo
                </span>
              </div>
            </div>
            <div className="pb-[120px]">
              <p className="text-white text-[20px] leading-none">
                El Pulshow es el espacio perfecto para que la gente vea tu
                marca. Combinamos sostenibilidad y entretenimiento en un show
                revolucionario. Tu marca no interrumpe, se fusiona con los
                talentos y la temáticas.
              </p>
            </div>
          </div>
          <div className="w-[100%] h-[100%]">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="/assets/images/pulso_show_1.png"
              alt="pulso_show1"
            />
          </div>
        </div>
        <div>
          <div className="py-[150px] flex flex-col justify-center">
            <div className="flex flex-1 pb-[150px]">
              <p className="flex flex-1 justify-center text-white text-[26px] italic">
                “El único show que la audiencia quiere más cortes comerciales”
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-1 justify-center">
                <div className="w-[470px] h-[290px]">
                  <img
                    className="w-[100%] h-[100%] object-cover "
                    src="/assets/images/pulso_show_3.png"
                    alt="pulso"
                  />
                </div>
              </div>
              <div className="flex flex-1 justify-center">
                <div className="w-[470px] h-[290px]">
                  <img
                    className="w-[100%] h-[100%] object-cover scale-[1.1]"
                    src="/assets/images/pulso_show_2.png"
                    alt="pulso"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <p className="text-white text-[26px]">
              Mira por ti mismo el trailer de nuestra última temporada
            </p>
          </div>
          <div className="p-8 mb-12">
            <div ref={containerRef} className=" cursor-none overflow-hidden">
              <div
                ref={followerRef}
                className="absolute w-[100px] h-[100px] bg-terciary"
                style={{
                  borderRadius: "50%",
                  pointerEvents: "none",
                  transform: "translate(-50%, -50%) scale(0)",
                  opacity: 0,
                  zIndex: 100,
                }}
              >
                <div className="flex flex-col h-[100%] justify-center items-center">
                  <center>
                    <span className="font-[800]">PLAY</span>
                  </center>
                </div>
              </div>
              <img className="hover:scale-[1.05] hover:brightness-50 duration-300 ease-in-out" src="/assets/images/video_2.png" alt="video_2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
