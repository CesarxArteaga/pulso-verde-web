interface Props {
  text: string;
  fullWidth?: boolean;
}

export default function Button({ text, fullWidth }: Props) {
  const full = fullWidth ? "w-[100%]" : undefined;

  return (
    <button className={`bg-secondary py-2 px-4 rounded-xl ${full}`}>
      {text}
    </button>
  );
}
