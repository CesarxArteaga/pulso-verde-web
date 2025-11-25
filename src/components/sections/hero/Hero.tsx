import { gsap, useGSAP } from "@/src/lib/gsap";

export default function Hero() {
  const fontSize = "text-[170px]";
  const boxSize = "h-[155px]";

  useGSAP(() => {
    gsap.to(".resizesable-box", {
      height: "0px",
      ease: "circ.out",
      delay: "0.4",
    });
  }, []);

  return (
    <div className="text-white">
      <div className={`${boxSize} overflow-clip`}>
        <div className={`resizesable-box ${boxSize}`}></div>
        <span className={`${fontSize} font-[800] leading-none tracking-[0px]`}>
          Pulso
        </span>
      </div>
      <div className={`${boxSize} overflow-clip`}>
        <div className={`resizesable-box ${boxSize}`}></div>
        <span className={`${fontSize} font-[800] leading-none tracking-[0px]`}>
          Verde
        </span>
      </div>
    </div>
  );
}
