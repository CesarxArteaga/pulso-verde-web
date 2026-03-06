import React, { useRef } from "react";
import { useGSAP, gsap } from "@/src/lib/gsap";
import { useWindowWidth } from "@/src/hooks/useWindowWidth";

export default function Team() {
  const container = useRef<HTMLDivElement>(null);
  const team = [
    {
      id: 1,
      name: "Daniel Rivera",
      title: "CEO",
      img: "/assets/images/team/daniel.jpeg",
    },
    {
      id: 2,
      name: "Caio Nevez",
      title: "Investigador y manager de proyectos",
      img: "/assets/images/team/caio.jpeg",
    },
    {
      id: 3,
      name: "Xavier Rivera",
      title: "Gerente de finanzas y estrategia",
      img: "/assets/images/team/xavier.jpeg",
    },
    {
      id: 4,
      name: "Cesar Viera",
      title: "Gerente de Innovación",
      img: "/assets/images/team/cesar.jpeg",
    },
    {
      id: 5,
      name: "Nabil España",
      title: "Manager de producción",
      img: "/assets/images/team/nabil.jpeg",
    },
  ];

  const width = useWindowWidth();

  useGSAP(() => {
    if (window?.innerWidth < 768) return;
    const ctx = gsap.context(() => {
      if (!container.current) return;

      const photos = gsap.utils.toArray<HTMLElement>(".photo");
      const containerRect = container.current.getBoundingClientRect();

      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;

      // Store offsets for final animation
      const offsets: { x: number; y: number }[] = [];

      photos.forEach((photo) => {
        const rect = photo.getBoundingClientRect();

        const photoCenterX = rect.left - containerRect.left + rect.width / 2;
        const photoCenterY = rect.top - containerRect.top + rect.height / 2;

        const toCenterX = centerX - photoCenterX;
        const toCenterY = centerY - photoCenterY;

        offsets.push({
          x: toCenterX,
          y: toCenterY,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%", // when top of section hits 80% of viewport
          toggleActions: "play none none none",
          once: true, // plays only once
        },
      });

      // 1️⃣ Start below container (off-screen bottom)
      tl.set(photos, {
        y: containerRect.height + 200,
        opacity: 0,
      });

      // 2️⃣ Move to center
      tl.to(photos, {
        y: (i) => offsets[i].y,
        x: (i) => offsets[i].x,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
      });

      // 3️⃣ Move to natural flex position
      tl.to(photos, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.08,
      });

      tl.to(".member-info", {
        height: "auto",
        ease: "circ.inOut",
      });

      // tl.fromTo(
      //   ".team-title",
      //   {
      //     height: 0,
      //     opacity: 0,
      //     y: 100,
      //   },
      //   {
      //     height: "auto",
      //     opacity: 1,
      //     y: 0,
      //     ease: "power1.inOut",
      //     duration: 0.3,
      //   },
      // );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex justify-center bg-primary">
      <div
        ref={container}
        className="
                  pt-[50px]
                  pb-[50px]
                  px-6
                  w-[100%] 
                  max-w-[1200px] 
                  flex
                  flex-col 
                  justify-center 
                  min-h-[500px]
         "
      >
        <div
          className="flex 
                    justify-center 
                    "
        >
          <div
            className="
                      team-title 
                      bg-secondary 
                      my-[30px]
                      py-2
                      px-4
                      "
          >
            <p
              className="
                        text-white 
                        text-[40px] 
                        font-[700] 
                        leading-none 
                        "
            >
              El Dream Team
            </p>
          </div>
        </div>
        <div
          className="
                        w-[100%] 
                        h-[auto] 
                        relative 
                        flex 
                        flex-wrap 
                        justify-center 
                        gap-12 
                        mx-auto
                        py-4
        "
        >
          {team.map((member) => (
            <Member
              key={member.id}
              img={member.img}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Member = React.memo(
  ({ img, name, title }: { img: string; name: string; title: string }) => {
    return (
      <div className="flex flex-col">
        <div
          className=" 
        photo 
        h-[160px] 
        w-[160px] 
        rounded-[100px] 
        border 
        border-[6px] 
        color-terciary 
        overflow-hidden
        "
        >
          <img
            className="h-[100%] w-[100%] object-cover scale-[1.3]"
            src={img}
            alt="member"
          />
        </div>
        <div className="member-info overflow-hidden">
          <p className="text-center text-[20px] mt-2 text-white ">{name}</p>
          <p className="uppercase text-white text-center font-[800] max-w-[150px]">
            {title}
          </p>
        </div>
      </div>
    );
  },
);
