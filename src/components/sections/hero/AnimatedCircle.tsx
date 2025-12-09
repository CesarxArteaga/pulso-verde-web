import { gsap, useGSAP } from "@/src/lib/gsap";

export default function AnimatedCircle() {
  const phrase = "SOSTENIBILIDAD . COOL . ";

  const chars = phrase.split("");

  const degStep = 360 / chars.length;
  const radius = 100; // radius in px

  useGSAP(() => {
    gsap.to(".animated-circle", {
      rotation: 360,
      duration: 20, // speed
      ease: "none",
      repeat: -1, // infinite
    });
  }, []);

  return (
    <div className="animated-circle relative w-[140px] h-[140px] radius-[50%] m-[60px]">
      {chars.map((char, i) => (
        <span
          className="font-[700] text-[20px] absolute left-[50%] top-[50%]"
          key={i}
          style={{
            whiteSpace: "pre",
            transform: `rotate(${
              i * degStep
            }deg) translate(${radius}px) rotate(90deg)`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
