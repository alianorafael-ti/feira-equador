import Image from "next/image";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";

export default function AmazoniaPage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-screen overflow-hidden bg-[#0b100d] text-white">
        <Image
          src="/assets/images/amazonia1.jpeg"
          alt="Floresta Amazônica no Equador"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Escurecimento geral */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Gradiente inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/20" />

        <BackButton />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-16 md:px-12 md:pb-20 lg:px-20 lg:pb-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-bold tracking-[0.35em] text-white/80 md:text-sm">
              03 — AMAZÔNIA
            </p>

            <h1 className="max-w-4xl font-serif text-[3.4rem] leading-[0.92] tracking-[-0.035em] md:text-7xl lg:text-[6.5rem]">
              Onde a floresta
              <br />
              respira.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
              No leste do Equador, a Cordilheira dos Andes dá lugar a rios,
              florestas e a uma das regiões de maior biodiversidade do planeta.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          UM OCEANO DE FLORESTA
      ====================================================== */}
      <section className="bg-[#f2f0e8] px-6 py-24 text-[#101511] md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mx-auto max-w-7xl">
          {/* Abertura editorial */}
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-[#28613f]">
                AMAZÔNIA EQUATORIANA
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.025em] md:text-6xl lg:text-8xl">
                Um oceano
                <br />
                de floresta.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-black/65 md:text-lg">
                A Amazônia ocupa a região oriental do Equador, onde uma imensa
                rede de rios atravessa a floresta tropical. Vista do alto, a
                vegetação forma um horizonte quase contínuo, marcado pela
                umidade, pela chuva e por uma extraordinária diversidade de
                vida.
              </p>
            </div>
          </div>

          {/* Fotografia panorâmica */}
          <div className="mt-16 md:mt-24 lg:mt-32">
            <div className="relative h-[340px] overflow-hidden md:h-[560px] lg:h-[680px]">
              <Image
                src="/assets/images/amazonia2.jpeg"
                alt="Floresta Amazônica vista do alto no Equador"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="mt-5 flex items-center justify-between gap-6">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-black/40">
                Floresta • Água • Biodiversidade
              </p>

              <span className="hidden h-px flex-1 bg-black/15 md:block" />
            </div>
          </div>

          {/* =================================================
              BIODIVERSIDADE
          ================================================== */}
          <div className="mt-24 border-t border-black/15 pt-12 md:mt-32 md:pt-16 lg:mt-40">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-xs font-bold tracking-[0.3em] text-[#28613f]">
                  BIODIVERSIDADE
                </p>
              </div>

              <div>
                <h3 className="max-w-3xl font-serif text-4xl leading-[1] tracking-[-0.02em] md:text-5xl lg:text-6xl">
                  A vida está
                  <br />
                  em toda parte.
                </h3>

                <p className="mt-8 max-w-2xl text-base leading-8 text-black/65 md:text-lg">
                  A floresta amazônica reúne milhares de espécies de plantas,
                  aves, mamíferos, répteis, anfíbios e insetos. Muitas delas
                  dependem de ambientes muito específicos e fazem parte de um
                  dos ecossistemas mais complexos do planeta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =====================================================
    POVOS DA AMAZÔNIA
====================================================== */}
<section className="bg-[#0b100d] px-6 py-24 text-white md:px-12 md:py-32 lg:px-20 lg:py-40">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">

      {/* Fotografia */}
      <div>
        <div className="relative h-[620px] overflow-hidden md:h-[760px] lg:h-[820px]">
          <Image
            src="/assets/images/amazonia3.jpeg"
            alt="Família em uma comunidade da Amazônia equatoriana"
            fill
            className="object-cover object-center"
          />
        </div>

        <p className="mt-5 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/40">
          Pessoas • Cultura • Território
        </p>
      </div>

      {/* Conteúdo */}
      <div>
        <p className="text-xs font-bold tracking-[0.3em] text-[#8ebf78]">
          POVOS DA AMAZÔNIA
        </p>

        <h2 className="mt-8 max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.025em] md:text-6xl lg:text-7xl">
          A floresta
          <br />
          também é casa.
        </h2>

        <p className="mt-8 max-w-xl text-base leading-8 text-white/65 md:text-lg">
          Na Amazônia equatoriana vivem diferentes povos e comunidades
          indígenas, entre eles Kichwa e Shuar. Suas histórias estão ligadas
          aos rios, à floresta, à agricultura e a conhecimentos transmitidos
          entre gerações.
        </p>

        {/* Fechamento */}
        <div className="mt-14 border-t border-white/15 pt-10 md:mt-20">
          <p className="max-w-xl font-serif text-3xl leading-[1.15] text-white/90 md:text-4xl">
            Preservar a Amazônia também significa reconhecer as pessoas que
            fazem dela seu lar.
          </p>
        </div>
      </div>
    </div>

    {/* Identificação final */}
    <div className="mt-24 border-t border-white/15 pt-8 md:mt-32">
      <div className="flex flex-col gap-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/35 md:flex-row md:items-center md:justify-between">
        <span>Equador • Região Amazônica</span>
        <span>03 — Amazônia</span>
      </div>
    </div>

  </div>
</section>

{/* FOOTER */}
<Footer />
    </main>
  );
}