import React, { useRef } from "react";
import { useGSAP, gsap } from "@/src/lib/gsap";

export default function Team() {
  const container = useRef<HTMLDivElement>(null);
  const team = [
    {
      id: 1,
      name: "Luis Muñoz",
      img: "https://media.istockphoto.com/id/1389823037/vector/young-smiling-woman-mia-avatar-3d-vector-people-character-illustration-cartoon-minimal-style.jpg?s=612x612&w=0&k=20&c=ciwsDqBIy3mcTxhWN4I1S-kKSTvjoN1einMrQawNZDQ=",
    },
    {
      id: 2,
      name: "Luis Muñoz",
      img: "https://media.istockphoto.com/id/1389823037/vector/young-smiling-woman-mia-avatar-3d-vector-people-character-illustration-cartoon-minimal-style.jpg?s=612x612&w=0&k=20&c=ciwsDqBIy3mcTxhWN4I1S-kKSTvjoN1einMrQawNZDQ=",
    },
    {
      id: 3,
      name: "Luis Muñoz",
      img: "https://media.istockphoto.com/id/1389823037/vector/young-smiling-woman-mia-avatar-3d-vector-people-character-illustration-cartoon-minimal-style.jpg?s=612x612&w=0&k=20&c=ciwsDqBIy3mcTxhWN4I1S-kKSTvjoN1einMrQawNZDQ=",
    },
    {
      id: 4,
      name: "Luis Muñoz",
      img: "https://media.istockphoto.com/id/1389823037/vector/young-smiling-woman-mia-avatar-3d-vector-people-character-illustration-cartoon-minimal-style.jpg?s=612x612&w=0&k=20&c=ciwsDqBIy3mcTxhWN4I1S-kKSTvjoN1einMrQawNZDQ=",
    },
    {
      id: 5,
      name: "Luis Muñoz",
      img: "https://media.istockphoto.com/id/1389823037/vector/young-smiling-woman-mia-avatar-3d-vector-people-character-illustration-cartoon-minimal-style.jpg?s=612x612&w=0&k=20&c=ciwsDqBIy3mcTxhWN4I1S-kKSTvjoN1einMrQawNZDQ=",
    },
    {
      id: 6,
      name: "Luis Muñoz",
      img: "https://media.istockphoto.com/id/1389823037/vector/young-smiling-woman-mia-avatar-3d-vector-people-character-illustration-cartoon-minimal-style.jpg?s=612x612&w=0&k=20&c=ciwsDqBIy3mcTxhWN4I1S-kKSTvjoN1einMrQawNZDQ=",
    },
  ];

  useGSAP(() => {
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
          markers: false, // set true for debugging,
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
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex justify-center bg-primary">
      <div className="w-[100%] max-w-[1200px] flex flex-col justify-center min-h-[500px]">
        <div className="flex justify-center pb-[40px]">
          <div className="bg-secondary px-4 py-1 rotate-[-2deg]">
            <p className="text-white text-[40px] font-[800] leading-none rotate-[1deg]">El Dream Team</p>
          </div>
        </div>
        <div
          ref={container}
          className=" h-[200px] relative flex flex-wrap justify-between gap-4 w-full max-w-4xl mx-auto overflow-hidden"
        >
          {team.map((member) => (
            <Member key={member.id} img={member.img} name={member.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Member = React.memo(({ img, name }: { img: string; name: string }) => {
  useGSAP(() => {
    gsap.to(".name-wrapper", {
      height: 100,
      delay: 3.5,
      duration: 1,
      ease: "circ.inOut",
    });
  }, []);

  return (
    <div className="flex flex-col">
      <div className=" opacity-0 photo h-[130px] w-[130px] rounded-[100px] border border-[6px] color-terciary overflow-hidden">
        <img
          className="h-[100%] w-[100%] object-cover scale-[1.3]"
          src={img}
          alt="member"
        />
      </div>
      <div className="name-wrapper overflow-hidden h-[0px]">
        <p className="text-center mt-2 text-white ">{name}</p>
      </div>
    </div>
  );
});
