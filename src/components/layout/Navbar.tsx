"use client";
import { gsap, useGSAP } from "@/src/lib/gsap";

const resizableBoxClassname = "resizable-box w-[40px] h-[110px]";

const menuItems = ["Inicio", "Contenido", "Equipo", "Contacto"];

export default function Navbar() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".resizable-box", {
      height: 0,
      delay: 1.4,
      duration: 0.6,
      ease: 'circ.out',
      stagger: {
        each: 0.6, // <-- one finishes before next starts
      },
    });
  }, []);

  return (
    <div className="flex items-center justify-between h-[60px] absolute top-0 left-0 right-0 overflow-clip">
      <div>
        <div className={resizableBoxClassname}></div>
        <img
          src={"/assets/logos/pulso-verde-blanco-x1.png"}
          className="h-[50px]"
        />
      </div>

      <div className="text-white flex justify-evenly w-[300px]">
        {menuItems.map((menu) => (
          <div key={menu}>
            <div className={resizableBoxClassname}></div>
            <span>{menu}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
