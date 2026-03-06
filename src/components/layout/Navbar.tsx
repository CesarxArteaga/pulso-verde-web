"use client";
import { gsap, useGSAP } from "@/src/lib/gsap";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";

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
    <div
      className="
    top-0
    w-[100%] 
    absolute 
    flex 
    justify-center 
    z-10 
    "
    >
      {/**
       * Mobile menu
       */}

      <div className="h-[70px] lg:hidden flex flex-1 justify-between items-center px-4 py-2 sticky">
        <div className="h-[50px] w-[102px]">
          <img
            src={"/assets/logos/pulso-verde-blanco-x1.png"}
            alt="logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div>
          <ListIcon size={40} className="text-white" />
        </div>
      </div>

      <div className="hidden lg:flex py-2 max-w-[1200px] w-[100%] flex items-center xl:justify-between overflow-hidden">
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
    </div>
  );
}
