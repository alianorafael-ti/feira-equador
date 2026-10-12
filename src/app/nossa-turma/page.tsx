
import Image from "next/image";
import Link from "next/link";

export default function NossaTurma() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#10191f] px-4 py-12 text-white md:px-8">
      <article className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[var(--dark)] shadow-2xl">
        <div className="grid h-2 grid-cols-4">
          <div className="col-span-2 bg-[var(--yellow)]" />
          <div className="bg-[var(--blue)]" />
          <div className="bg-[var(--red)]" />
        </div>

        <div className="p-6 md:p-12">
          <div className="mb-10 flex items-start justify-between gap-6">
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.25em] text-white/50">
                FEIRA DAS NAÇÕES · 2026
              </p>

              <h1 className="text-4xl leading-tight md:text-6xl">
                Quem fez acontecer.
              </h1>

              <p className="mt-4 text-sm text-white/60 md:text-base">
                1º C · AEJA Mackenzie
              </p>
            </div>

            <Link
              href="/"
              aria-label="Voltar ao Equador"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-xl transition-colors hover:bg-white hover:text-black"
            >
              ×
            </Link>
          </div>

          <div className="overflow-hidden rounded-lg">
            <Image
              src="/1%C2%BAC-mackenzie.png"
              alt="Turma do 1º C da AEJA Mackenzie"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, 1024px"
              className="h-auto w-full"
              priority
            />
          </div>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            Um projeto construído com dedicação, pesquisa e
            colaboração. Cada descoberta sobre o Equador
            representa também uma conquista coletiva da
            nossa turma.
          </p>

          <div className="mt-10 border-t border-white/15 pt-6">
            <Link
              href="/"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              ← Voltar ao Equador
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
