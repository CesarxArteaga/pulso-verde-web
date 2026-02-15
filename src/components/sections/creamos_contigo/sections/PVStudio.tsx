import { useRef } from "react";
import { gsap, useGSAP } from "@/src/lib/gsap";
import WaveDivider from "@/src/components/ui/dividers/WaveDivider";

export default function PVStudio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;

    // Duplicate content for seamless scroll
    track.innerHTML += track.innerHTML;

    // Measure total width of original content
    const originalWidth = Array.from(track.children)
      .slice(0, track.children.length / 2)
      .reduce((acc, el: any) => acc + el.offsetWidth + 32, 0); // 32px gap

    // Animate track continuously
    gsap.to(track, {
      x: -originalWidth,
      duration: 15,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x: any) => {
          const val = parseFloat(x);
          return (val % originalWidth) + "px"; // wraps exactly at original width
        },
      },
    });
  }, []);

  return (
    <div className="flex justify-center bg-slate-50">
      <div className="max-w-[1200px]">
        <img
          className="w-[220px]"
          src="/assets/images/pv_studio.png"
          alt="pvstudio"
        />
        <p className="color-terciary uppercase text-[40px] font-[800] leading-none">
          PV studio
        </p>
        <br />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="relative h-[580px]">
              <div className="absolute">
                <img
                  className="h-[350px]"
                  src="/assets/images/pv_studio_1.png"
                  alt="pv1"
                />
              </div>
              <div className="absolute translate-y-[180px] translate-x-[270px]">
                <img
                  className="h-[380px]"
                  src="/assets/images/pv_studio_2.png"
                  alt="pv2"
                />
              </div>
            </div>
          </div>
          <div className="p-4">
            <p className="uppercase text-[40px] leading-none font-[800] color-primary">
              SOMOS UN ESTUDIO CREATIVO EXPERTO EN SOSTENIBILIDAD
            </p>
            <br />
            <p className="font-[300] text-[30px] leading-none text-slate-700">
              Producimos contenido original y entretenido con el que la
              audiencia se identifica fácilmente y la motiva a tomar acción.
            </p>
            <br />
            <br />
            <br />
            <br />
            <p className="text-[20px] text-slate-700 font-[300]">
              Estas son algunas de las empresas que confían en nosotros
            </p>
            <br />
            <div
              ref={containerRef}
              className="relative overflow-hidden w-full h-20"
            >
              <div
                ref={trackRef}
                className="flex items-center gap-8 whitespace-nowrap"
              >
                {[1, 2, 3, 4, 5].map((item) => (
                  <img
                    key={item}
                    className="h-10 w-auto brightness-0"
                    src={`/assets/images/clientes/${item}.png`}
                    alt="Google"
                  />
                ))}
              </div>
            </div>
            <p className="text-[20px] text-center font-[800]">
              100% Renovación
            </p>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
