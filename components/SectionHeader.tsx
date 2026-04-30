type Props = {
  eyebrow: string;
  title: string;
};

export default function SectionHeader({ eyebrow, title }: Props) {
  return (
    <div className="mb-12 flex flex-col gap-3">
      <span className="text-xs uppercase tracking-[0.18em] text-sage">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-cream">
        {title}
      </h2>
    </div>
  );
}
