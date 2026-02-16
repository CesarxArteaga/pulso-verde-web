import {
  ReactNode,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useGSAP, gsap, Draggable } from "@/src/lib/gsap";

export interface CustomSliderRef {
  next: () => void;
  prev: () => void;
}

interface Props {
  children: ReactNode;
  visibleSlides?: number;
  config?: {
    indicatorColor?: string;
    disableDraggable?: boolean;
    hideBarIndicator?: boolean;
    showDots?: boolean;
  };
}

const CustomSlider = forwardRef<CustomSliderRef, Props>(
  ({ children, visibleSlides = 2, config }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    const [index, setIndex] = useState(0);

    const slides = Array.isArray(children) ? children : [children];
    const maxIndex = slides.length - visibleSlides;

    const slideWidthRef = useRef(0);
    const maxXRef = useRef(0);

    const draggableRef = useRef<Draggable[] | null>(null);

    function updateProgress(currentX: number, snapped = false) {
      if (!containerRef.current || !progressRef.current || !trackRef.current)
        return;

      const maxX = maxXRef.current;
      const parentWidth = progressRef.current.parentElement!.offsetWidth;
      const steps = slides.length - visibleSlides + 1;

      const percent = maxX === 0 ? 0 : Math.abs(currentX) / maxX;
      const indicatorWidth = parentWidth / steps;
      const indicatorX = percent * (parentWidth - indicatorWidth);

      gsap.to(progressRef.current, {
        x: indicatorX,
        width: indicatorWidth,
        duration: snapped ? 0.3 : 0.2,
        ease: "power1.out",
      });
    }

    useGSAP(() => {
      if (!containerRef.current || !trackRef.current) return;

      const container = containerRef.current;
      const track = trackRef.current;

      const slideWidth = container.offsetWidth / visibleSlides;
      slideWidthRef.current = slideWidth;

      const totalWidth = slideWidth * slides.length;
      const maxX = totalWidth - container.offsetWidth;
      maxXRef.current = maxX;

      gsap.set(track, { width: totalWidth });
      gsap.set(track.children, { width: slideWidth });

      // Kill previous draggable if exists
      if (draggableRef.current) {
        draggableRef.current.forEach((d) => d.kill());
        draggableRef.current = null;
      }

      //  Only create draggable if NOT disabled
      if (!config?.disableDraggable) {
        draggableRef.current = Draggable.create(track, {
          type: "x",
          bounds: { minX: -maxX, maxX: 0 },
          inertia: true,
          snap: {
            x: (value) =>
              Math.round(value / slideWidthRef.current) * slideWidthRef.current,
          },
          onDrag: function () {
            updateProgress(gsap.getProperty(track, "x") as number, false);
          },
          onThrowUpdate: function () {
            updateProgress(gsap.getProperty(track, "x") as number, true);
          },
        });
      }

      updateProgress(0, true);
    }, []);

    const next = () => {
      if (index >= maxIndex) return;

      const newIndex = index + 1;
      const newX = -newIndex * slideWidthRef.current;

      setIndex(newIndex);

      gsap.to(trackRef.current, {
        x: newX,
        duration: 0.4,
        ease: "power2.out",
        onUpdate: function () {
          updateProgress(gsap.getProperty(trackRef.current!, "x") as number);
        },
      });
    };

    const prev = () => {
      if (index <= 0) return;

      const newIndex = index - 1;
      const newX = -newIndex * slideWidthRef.current;

      setIndex(newIndex);

      gsap.to(trackRef.current, {
        x: newX,
        duration: 0.4,
        ease: "power2.out",
        onUpdate: function () {
          updateProgress(gsap.getProperty(trackRef.current!, "x") as number);
        },
      });
    };

    // Expose functions to parent
    useImperativeHandle(ref, () => ({
      next,
      prev,
    }));

    const indicatorColor = config?.indicatorColor;

    return (
      <div className="w-full mx-auto">
        <div
          ref={containerRef}
          className={`overflow-hidden ${
            config?.disableDraggable ? "" : "cursor-grab"
          }`}
        >
          <div ref={trackRef} className="flex">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-[100%] flex items-center justify-center"
              >
                {slide}
              </div>
            ))}
          </div>
        </div>

        {config?.hideBarIndicator === true ? null : (
          <div className="w-full h-[6px] bg-gray-300 mt-4 relative overflow-hidden">
            <div
              ref={progressRef}
              className="absolute top-0 left-0 h-full"
              style={{
                backgroundColor: indicatorColor || "black",
              }}
            />
          </div>
        )}

        {config?.showDots && (
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === i ? "bg-black scale-110" : "bg-gray-400 opacity-60"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    );
  },
);

export default CustomSlider;
