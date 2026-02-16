import { useRef } from "react";
import { gsap, useGSAP } from "@/src/lib/gsap";

interface Props {
  max: number;
  duration?: number;
  isPercentage?: boolean;
  decimals?: number; // force decimal precision
  delay?: number;
}

export default function AnimatedCounter({
  max,
  duration = 2,
  isPercentage = false,
  decimals,
  delay = 0,
}: Props) {
  const numberRef = useRef<HTMLSpanElement>(null);

  const formatNumber = (value: number) => {
    // Percentage mode
    if (isPercentage) {
      const fixed =
        decimals !== undefined ? value.toFixed(decimals) : value.toFixed(1);

      return `${fixed}%`;
    }

    // Millions
    if (value >= 1_000_000) {
      return (
        (value / 1_000_000).toFixed(
          decimals ?? (value % 1_000_000 === 0 ? 0 : 1),
        ) + "M"
      );
    }

    // Thousands
    if (value >= 1_000) {
      return (
        (value / 1_000).toFixed(decimals ?? (value % 1_000 === 0 ? 0 : 1)) + "K"
      );
    }

    // Normal number
    return decimals !== undefined
      ? value.toFixed(decimals)
      : Math.floor(value).toString();
  };

  useGSAP(() => {
    if (!numberRef.current) return;

    const obj = { value: 0 };

    gsap.to(obj, {
      value: max,
      duration,
      ease: "power3.out",
      delay,
      onUpdate: () => {
        numberRef.current!.textContent = formatNumber(obj.value);
      },
    });
  }, [max]);

  return <span ref={numberRef}>0</span>;
}
