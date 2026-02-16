"use client";
import { gsap, useGSAP } from "@/src/lib/gsap";

const resizableBoxClassname = "resizable-box w-[40px] h-[110px] ";

const menuItems = ["Home", "Creamos Contigo", "Pulshow", "Contáctanos"];

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
        delay: 0.5,
        ease: "circ.out",
        stagger: {
          each: 0.2, // <-- one finishes before next starts
        },
      },
    );
  }, []);

  return (
    <div className="top-0 left-0 right-0 absolute flex justify-center ">
      <div className="py-2 max-w-[1200px] flex items-center xl:justify-between overflow-hidden">
        <div className="flex pl-4">
          <img
            src={"/assets/logos/pulso-verde-blanco-x1.png"}
            className="ani h-[60px] opacity-0"
          />
        </div>
        <div className="lg:w-[50px]"></div>
        <div className="grid grid-cols-4 gap-2">
          {menuItems.map((menu) => (
            <a
              className="ani opacity-0 text-center text-[16px] text-white uppercase font-[400]"
              key={menu}
              href="#"
            >
              {menu}
            </a>
          ))}
        </div>
      </div>

      <div>
        <span></span>
      </div>
    </div>
  );
}
