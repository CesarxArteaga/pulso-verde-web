import { gsap, useGSAP } from "@/src/lib/gsap";
import CounterNumber from "../../ui/counter/CounterNumber";

export default function CounterStats() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".counter-wrapper", {
      y: 25,
      delay: 1.6,
      ease: "power2.out",
    }).to(".counter-wrapper", {
      y: 0,
      borderRadius: 0,
      width: "100%",
      height: "100%",
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <div className="counter-section h-[100px] place-content-center ">
      <div className="flex justify-center h-[100px] ">
        <div className="place-content-center flex flex-1">
          <div className="counter-wrapper translate-y-[105px]">
            <div className="grid grid-cols-2">
              <div>
                <CounterNumber max={100} duration={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
