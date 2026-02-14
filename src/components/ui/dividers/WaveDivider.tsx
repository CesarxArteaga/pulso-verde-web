interface Props {
  max?: number;
}

export default function WaveDivider({ max = 1 }: Props) {
  return (
    <div className="wave-divider">
      {Array.from({ length: max }, (_, i) => i + 1).map((item: number) => (
        <svg key={item} viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path
            d="M0,80 C360,150 1080,0 1440,80 L1440,150 L0,150 Z"
            fill="#111"
          />
        </svg>
      ))}
    </div>
  );
}
