import { ReactNode, useRef, useState } from "react";
import { useGSAP, gsap, Draggable } from "@/src/lib/gsap";

interface Props {
  children: ReactNode;
  visibleSlides?: number;
  config?: {
    indicatorColor: string;
  };
}

export default function CustomSlider({
  children,
  visibleSlides = 2,
  config,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(0);

  const slides = Array.isArray(children) ? children : [children];

  const maxIndex = slides.length - visibleSlides;

  useGSAP(() => {
    if (!containerRef.current || !trackRef.current || !progressRef.current)
      return;

    const container = containerRef.current;
    const track = trackRef.current;
    // const progress = progressRef.current;

    const slideWidth = container.offsetWidth / visibleSlides;
    const totalWidth = slideWidth * slides.length;
    const maxX = totalWidth - container.offsetWidth;

    gsap.set(track, { width: totalWidth });
    gsap.set(track.children, { width: slideWidth });

    function updateProgress(snapped = false) {
      const currentX = Math.abs(gsap.getProperty(track, "x") as number);
      const maxX = track.offsetWidth - containerRef.current!.offsetWidth;

      const parentWidth = progressRef.current!.parentElement!.offsetWidth;

      // Number of positions the slider can be in
      const steps = slides.length - visibleSlides + 1;

      // Calculate percentage of progress (0 → 1)
      const percent = maxX === 0 ? 0 : currentX / maxX;

      // Indicator width = one segment
      const indicatorWidth = parentWidth / steps;

      // Indicator X position (smooth)
      const indicatorX = percent * (parentWidth - indicatorWidth);

      // Animate with GSAP
      gsap.to(progressRef.current, {
        x: indicatorX,
        width: indicatorWidth,
        duration: snapped ? 0.3 : 0.2,
        ease: "power1.out",
      });

      // Update index for other purposes if needed
      const newIndex = Math.round(currentX / slideWidth);
      setIndex(newIndex);
    }

    Draggable.create(track, {
      type: "x",
      bounds: { minX: -maxX, maxX: 0 },
      inertia: true,

      // 👇 THIS is what makes it stick
      snap: {
        x: (value) => {
          return Math.round(value / slideWidth) * slideWidth;
        },
      },

      onDrag: () => updateProgress(false),
      onThrowUpdate: () => updateProgress(true),

      // 👇 Initialize indicator at first position
    });
    updateProgress(true);
  }, []);

  const next = () => {
    if (index < maxIndex) setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  const indicatorColor = config?.indicatorColor;

  return (
    <div className="w-full mx-auto">
      {/* Slider */}
      <div ref={containerRef} className="overflow-hidden cursor-grab">
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

      <div className="w-full h-[6px] bg-gray-300 mt-4 relative overflow-hidden">
        <div
          ref={progressRef}
          className="absolute top-0 left-0 h-full "
          style={{
            backgroundColor: indicatorColor || "black",
          }}
        />
      </div>
    </div>
  );
}
