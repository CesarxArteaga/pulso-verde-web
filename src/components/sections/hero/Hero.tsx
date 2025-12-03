import { gsap, useGSAP } from "@/src/lib/gsap";

export default function Hero() {
  const fontSize = "text-[170px]";
  const boxSize = "h-[155px]";

  useGSAP(() => {
    gsap.to(".resizesable-box", {
      height: "0px",
      ease: "circ.out",
      delay: "0.6",
    });
  }, []);

  return (
    <div className="hero-bg">
      <div className="hero-backdrop">
        <div className="hero-content text-white p-12">
          <div className={`${boxSize} overflow-clip`}>
            <div className={`resizesable-box ${boxSize}`}></div>
            <span
              className={`${fontSize} leading-none tracking-[0px]`}
            >
              Pulso
            </span>
          </div>
          <div className={`${boxSize} overflow-clip`}>
            <div className={`resizesable-box ${boxSize}`}></div>
            <span
              className={`${fontSize} leading-none tracking-[0px]`}
            >
              Verde
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
