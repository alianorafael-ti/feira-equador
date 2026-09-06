import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      aria-label="Voltar para a página inicial"
      className="fixed left-6 top-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/40 text-xl text-white backdrop-blur-sm transition hover:bg-black/70"
    >
      ←
    </Link>
  );
}