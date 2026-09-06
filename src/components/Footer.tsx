import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] text-white">
      {/* Cores da bandeira */}
      <div className="grid h-2 grid-cols-4">
        <div className="col-span-2 bg-[var(--yellow)]" />
        <div className="bg-[var(--blue)]" />
        <div className="bg-[var(--red)]" />
      </div>

      <div className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            {/* Identidade */}
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.25em] text-white/50">
                FEIRA DAS NAÇÕES
              </p>

              <h2 className="text-5xl leading-none md:text-7xl">
                EQUADOR
              </h2>

              <p className="mt-5 text-base text-white/60 md:text-lg">
                Um país. Quatro mundos.
              </p>
            </div>

            {/* Navegação */}
            <nav
              aria-label="Regiões do Equador"
              className="flex flex-wrap gap-x-8 gap-y-4 text-sm"
            >
              <Link
                href="/costa"
                className="transition-opacity hover:opacity-60"
              >
                Costa
              </Link>

              <Link
                href="/andes"
                className="transition-opacity hover:opacity-60"
              >
                Andes
              </Link>

              <Link
                href="/amazonia"
                className="transition-opacity hover:opacity-60"
              >
                Amazônia
              </Link>

              <Link
                href="/galapagos"
                className="transition-opacity hover:opacity-60"
              >
                Galápagos
              </Link>
            </nav>
          </div>

          {/* Base */}
          <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
            <p>AEJA Mackenzie • Feira das Nações • 2026</p>

            <p>
              Desenvolvido por{" "}
              <span className="text-white/70">Click Simples</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}