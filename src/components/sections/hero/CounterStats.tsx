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
      delay: 1.6,
      ease: "power2.inOut",
    })
      .to(".counter-wrapper", {
        borderRadius: 0,
        width: "100%",
        height: "100%",
        duration: 0.8,
        ease: "elastic.out",
      })
      .to(".item-counter", {
        opacity: 1,
      });
  }, []);

  return (
    <div className="counter-section h-[155px] place-content-center flex justify-center">
      <div className="flex justify-center h-[155px] w-[100%]">
        <div className="place-content-center flex flex-1">
          <div className="counter-wrapper translate-y-[155px] flex justify-center">
            <div className="grid grid-cols-4 text-center h-[100%] place-content-center w-[100%] max-w-[1200px]">
              <div className="item-counter  opacity-0">
                <center>
                  <PlayCircleIcon
                    weight="fill"
                    size={40}
                    className="color-terciary"
                  />
                </center>
                <p className="text-[40px] font-[800] leading-none">
                  <AnimatedCounter max={3800000} delay={3} />
                </p>
                <small>Views</small>
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
                  <AnimatedCounter max={18.9} isPercentage delay={3} />
                </p>
                <small>Engagement</small>
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
                  <AnimatedCounter max={716.123} decimals={3} delay={3} />
                </p>{" "}
                <small className="leading-none">Reach</small>
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
                  <AnimatedCounter max={75} isPercentage delay={3} />
                </p>{" "}
                <small className="leading-none">Users</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
