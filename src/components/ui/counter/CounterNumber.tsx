import { gsap, useGSAP } from "@/src/lib/gsap";
import { useRef, useState } from "react";

interface Props {
  max: number;
  duration?: number;
}

export default function CounterNumber({ max, duration = 100 }: Props) {
  const [count, setCount] = useState(0);

  useGSAP(() => {
    const obj = { value: 0 };

    gsap.to(obj, {
      value: max,
      duration: duration,
      ease: "power1.out",
      snap: { value: 1 }, // ensures whole numbers
      onUpdate: () => setCount(obj.value),
    });
  }, [max]);

  return (
    <div>
      <span className="counter-number">{count}</span>
    </div>
  );
}
