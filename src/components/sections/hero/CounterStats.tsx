import { gsap, useGSAP } from "@/src/lib/gsap";
import AnimatedCounter from "../../ui/counter/AnimatedCounter";
import {
  ChartBarIcon,
  PlayCircleIcon,
  StarIcon,
  UsersIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function CounterStats() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".counter-wrapper", {
      y: 0,
      delay: 0.6,
      duration: 0.2,
      ease: "expo.inOut",
    })
      .to(".counter-wrapper", {
        borderRadius: 0,
        width: "100%",
        height: "100%",
        duration: 0.4,
        ease: "expo.inOut",
      })
      .to(".item-counter", {
        opacity: 1,
      })
      .to(".legend", {
        opacity: 1,
        ease: "power1.inOut",
      });
  }, []);

  const delayCount = 1.3;

  return (
    <div className="bg-white w-[100%] place-content-center flex justify-center py-8">
      <div className="flex justify-center w-[100%]">
        <div className="flex flex-col place-content-center w-[100%] max-w-[1200px]">
          <div className="counter-wrapper flex flex-col justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 text-center h-[100%] place-content-center">
              <div className="item-counter opacity-0">
                <center>
                  <PlayCircleIcon
                    weight="fill"
                    size={40}
                    className="color-terciary"
                  />
                </center>
                <p className="text-[40px] font-[800] leading-none">
                  <AnimatedCounter max={3800000} delay={delayCount} />
                </p>
                <small className="leading-none text-neutral-800">Views</small>
              </div>
              <div className="item-counter opacity-0">
                <center>
                  <StarIcon
                    weight="fill"
                    size={40}
                    className="color-terciary"
                  />
                </center>
                <p className="text-[40px] font-[800] leading-none">
                  <AnimatedCounter max={18.9} isPercentage delay={delayCount} />
                </p>
                <small className="leading-none text-neutral-800">
                  Engagement
                </small>
              </div>
              <div className="item-counter opacity-0">
                <center>
                  <ChartBarIcon
                    weight="fill"
                    size={40}
                    className="color-terciary"
                  />
                </center>
                <p className="text-[40px] font-[800] leading-none">
                  <AnimatedCounter
                    max={716.123}
                    decimals={3}
                    delay={delayCount}
                  />
                </p>{" "}
                <small className="leading-none text-neutral-800">Reach</small>
              </div>
              <div className="item-counter opacity-0">
                <center>
                  <UsersIcon
                    weight="fill"
                    size={40}
                    className="color-terciary"
                  />
                </center>
                <p className="text-[40px] font-[800] leading-none">
                  <AnimatedCounter max={75} isPercentage delay={delayCount} />
                </p>{" "}
                <small className="leading-none text-neutral-800">Users</small>
              </div>
            </div>
            <div className="flex justify-center pt-4 md:pt-0">
              <p className="legend px-6 py-12 md:py-8 text-center text-[20px] font-[500] md:font-[400] leading-none text-neutral-700 opacity-0">
                Somos un hub de entretenimiento que usa el humor para agitar
                conciencias y convertirlas en acciones de sostenibilidad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
