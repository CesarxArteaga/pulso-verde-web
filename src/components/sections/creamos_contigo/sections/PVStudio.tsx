import { useRef } from "react";
import { gsap, useGSAP } from "@/src/lib/gsap";

export default function PVStudio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;

    const totalWidth = track.scrollWidth / 2; // half because duplicated

    gsap.to(track, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(

    
    (context) => {

      if (window.innerWidth < 768) return

      const images = context.selector?.(".gallery-image") as HTMLElement[];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          start: "top top",
          scrub: true,
        },
      });

      tl.fromTo(
        images,
        { y: 400, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
      );
    },
    { scope: container },
  );

  return (
    <div className="flex justify-center bg-slate-50">
      <div className="max-w-[1200px]">
        <div
          ref={container}
          className="flex items-center justify-center overflow-hidden px-4"
        >
          <div className="columns-1 md:columns-2 gap-10 space-y-8">
            <div className="gallery-image">
              <div className="flex justify-center">
                <img
                  className="w-[220px] pt-6"
                  src="/assets/images/pv_studio.png"
                  alt="pvstudio"
                />
              </div>
              <p className="color-terciary uppercase text-[40px] text-center font-[800] leading-none">
                PV studio
              </p>
              <p className="uppercase py-10 text-[30px] text-center md:text-[40px] leading-none font-[800] color-primary">
                SOMOS UN ESTUDIO CREATIVO EXPERTO EN SOSTENIBILIDAD
              </p>
              <p className="py-4 font-[400] text-[24px] text-center leading-none text-neutral-800">
                Creamos contenido original que entretiene y visibiliza el
                impacto real de las empresas y convierte esa conexión en
                preferencia y confianza
              </p>
            </div>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="gallery-image h-[auto] flex justify-center overflow-hidden"
              >
                <img
                  className="h-[100%] w-[100%] object-contain"
                  src={`/assets/images/pv_studio/${item}.jpg`}
                  alt="pv"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="py-10 hidden lg:flex">
          <p className="text-[20px] text-neutral-800 font-[400] py-10 text-center">
            Estas son algunas de las empresas que confían en nosotros
          </p>
            <div
              ref={containerRef}
              className="relative overflow-hidden w-full h-20"
            >
              <div
                ref={trackRef}
                className="flex items-center gap-12 whitespace-nowrap"
              >
                {[1, 2, 3, 4, 5].map((item) => (
                  <img
                    key={item}
                    className="h-[70px] w-auto brightness-0"
                    src={`/assets/images/clientes/${item}.png`}
                    alt="Google"
                  />
                ))}
                {/* Duplicate manually */}
                {[1, 2, 3, 4, 5].map((item) => (
                  <img
                    key={`logo-dup-${item}`}
                    className="h-[70px] w-auto brightness-0"
                    src={`/assets/images/clientes/${item}.png`}
                    alt="client logo"
                  />
                ))}
                {/* Duplicate manually */}
                {[1, 2, 3, 4, 5].map((item) => (
                  <img
                    key={`logo-dup-dup-${item}`}
                    className="h-[70px] w-auto brightness-0"
                    src={`/assets/images/clientes/${item}.png`}
                    alt="client logo"
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-[30px] py-10 text-center font-[800]">
            100% Renovación
          </p>
      </div>
    </div>
  );
}
