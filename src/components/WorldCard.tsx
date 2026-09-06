import Link from "next/link";

type WorldCardProps = {
  number: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function WorldCard({
  number,
  title,
  description,
  image,
  href,
}: WorldCardProps) {
  return (
    <Link
      href={href}
      className="group relative block h-[430px] overflow-hidden bg-[var(--dark)] text-white"
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-6">
        <span className="mb-3 block text-xs font-bold tracking-[0.2em] text-white/70">
          {number}
        </span>

       <h3 className="text-4xl leading-none text-white">{title}</h3>

        <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
          {description}
        </p>
      </div>
    </Link>
  );
}