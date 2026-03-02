import { useRef, useState } from "react";
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

  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  useGSAP(() => {
    if (!window) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pulso-show-scroll-container-1",
        pin: true,
        start: "top top",
        end: "+=200%",
        scrub: true,
      },
    });

    tl.fromTo(
      ".pulso-show-banner",
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        ease: "power1.inOut",
        duration: 1,
      },
    )
      .fromTo(
        ".pulso-show-text",
        {
          y: 100,
          opacity: 0,
        },
        { y: 0, opacity: 1, ease: "power1.inOut" },
      )
      .fromTo(
        ".pulso-show-image",
        {
          y: 100,
          opacity: 0,
        },
        { y: 0, opacity: 1, ease: "power1.inOut" },
      );
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pulso-show-scroll-container-2",
        pin: true,
        start: "top top",
        end: "+=200%",
        scrub: true,
      },
    });

    tl.fromTo(
      ".pulso-show-text-2",
      {
        y: 100,
        opacity: 0,
      },
      { y: 0, opacity: 1, ease: "power1.inOut" },
    ).fromTo(
      ".pulso-show-comerciales",
      {
        y: 100,
        opacity: 0,
      },
      { y: 0, opacity: 1, ease: "power1.inOut" },
    );
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pulso-show-scroll-container-3",
        pin: true,
        start: "top top",
        scrub: true,
      },
    });

    tl.fromTo(
      ".pulso-show-text-trailer",
      {
        y: 100,
        opacity: 0,
      },
      { y: 0, opacity: 1, ease: "power1.inOut" },
    ).fromTo(
      ".pulso-show-image-trailer",
      {
        y: 100,
        opacity: 0,
      },
      { y: 0, opacity: 1, ease: "power1.inOut" },
    );
  }, []);

  return (
    <div className="flex justify-center bg-primary container-pulso-show">
      <div className="max-w-[1200px]">
        <div className="pulso-show-scroll-container-1">
          <div className="py-[150px] flex flex-col justify-center items-center">
            <div className="pulso-show-banner flex flex-col items-center">
              <div className="w-[500px] h-[200px]">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src="/assets/images/pulso_show.png"
                  alt="pulso_show"
                />
              </div>
              <div className="bg-secondary px-2 rotate-[-1deg] relative">
                <span className="text-white text-[22px]">
                  El primer talk show de sostenibilidad en el mundo del mundo
                </span>
                <span className="h-[40px] w-[240px] absolute bottom-[-35px] right-[-10px]">
                  <img
                    className="w-[100%] h-[100%] object-cover"
                    src="/assets/images/lo_googleamos.png"
                    alt="gogleamos"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="max-w-[800px] mb-[80px]">
              <p className="pulso-show-text text-white text-[24px] text-justify leading-none">
                El Pulshow es el espacio perfecto para que la gente vea tu
                marca. Combinamos sostenibilidad y entretenimiento en un show
                revolucionario. Tu marca no interrumpe, se fusiona con los
                talentos y la temáticas.
              </p>
            </div>
            <div className="pulso-show-image w-[100%] h-[100%] [300px]">
              <img
                className="w-[100%] h-[100%] object-cover"
                src="/assets/images/pulso_show_1.png"
                alt="pulso_show1"
              />
            </div>
          </div>
        </div>
        <div className="pulso-show-scroll-container-2">
          <div>
            <div className="py-[150px] flex flex-col justify-center">
              <div className="flex flex-1 pb-[150px]">
                <p className="pulso-show-text-2 flex flex-1 justify-center text-white text-[26px] italic">
                  “El único show que la audiencia quiere más cortes comerciales”
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-1 justify-center">
                  <div className="pulso-show-comerciales">
                    <video controls>
                      <source
                        src="/assets/videos/interagua.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="pulso-show-comerciales">
                    <video controls>
                      <source
                        src="/assets/videos/marriot.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pulso-show-scroll-container-3">
          <div className="flex justify-center">
            <p className="pulso-show-text-trailer text-white text-[26px] mt-[100px]">
              Mira por ti mismo el trailer de nuestra última temporada
            </p>
          </div>
          <div className="p-8 mb-12">
            {isPlayingVideo ? (
              <div className="w-[100%] h-[100%]">
                <video width="100%" height="100%" controls autoPlay>
                  <source
                    src="/assets/videos/resumen_temporada_1.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            ) : (
              <div
                ref={containerRef}
                className="pulso-show-image-trailer cursor-none overflow-hidden"
              >
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
                <img
                  onClick={() => setIsPlayingVideo(true)}
                  className="hover:scale-[1.05] hover:brightness-50 duration-300 ease-in-out"
                  src="/assets/images/video_2.png"
                  alt="video_2"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col items-center pb-[100px]">
            <p className="text-white text-[22px] py-[50px]">
              Descubre más contenido en nuestro canal de YouTube
            </p>
            <a href="https://www.youtube.com/@pulso__verde" target="_blank">
              <div className="w-[550px] h-[300px] hover:scale-[1.05] transition delay-100">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src="/assets/images/pulso_show_thumb.png"
                  alt="resumen"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
