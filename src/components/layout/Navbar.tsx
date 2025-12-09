"use client";
import { gsap, useGSAP } from "@/src/lib/gsap";

const resizableBoxClassname = "resizable-box w-[40px] h-[110px] ";

const menuItems = ["Inicio", "Contenido", "Equipo", "Contacto"];

export default function Navbar() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".ani",
      {
        y: 50,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1.1,
        ease: "circ.out",
        stagger: {
          each: 0.3, // <-- one finishes before next starts
        },
      }
    );
  }, []);

  return (
    <div className="flex top-0 left-0 right-0 absolute justify-center">
      <div className="min-w-[800px] w-[1100px] max-w-[1200px] flex items-center justify-between h-[60px] overflow-hidden">
        <div className="flex">
          <img
            src={"/assets/logos/pulso-verde-blanco-x1.png"}
            className="ani h-[50px] opacity-0"
          />
        </div>

        <div className="text-white flex w-[300px] justify-between">
          {menuItems.map((menu) => (
            <div key={menu} className="flex">
              <span className="ani opacity-0">{menu}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <span></span>
      </div>
    </div>
  );
}
