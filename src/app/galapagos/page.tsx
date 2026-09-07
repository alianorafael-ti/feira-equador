import Image from "next/image";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";


export default function GalapagosPage() {
  return (
    <main className="bg-[#0b1114]">
      {/* =====================================================
          HERO — GALÁPAGOS
      ====================================================== */}
      <section className="relative min-h-screen overflow-hidden bg-[#0b1114] text-white">
        <Image
          src="/assets/images/galapagos1.jpeg"
          alt="Paisagem das Ilhas Galápagos, no Equador"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Tratamento cinematográfico */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/15" />

        <BackButton />

        {/* Conteúdo */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-16 md:px-12 md:pb-20 lg:px-20 lg:pb-24">
          <div className="max-w-5xl">
            <p className="mb-6 text-xs font-bold tracking-[0.35em] text-white/80 md:text-sm">
              04 — GALÁPAGOS
            </p>

            <h1 className="max-w-5xl font-serif text-[3.25rem] leading-[0.92] tracking-[-0.035em] md:text-7xl lg:text-[6.3rem]">
              Onde a natureza
              <br />
              escreveu sua história.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
              No Oceano Pacífico, a cerca de mil quilômetros da costa
              equatoriana, um arquipélago vulcânico abriga algumas das formas
              de vida mais extraordinárias do planeta.
            </p>
          </div>
        </div>
      </section>
      {/* =====================================================
    ILHAS NO PACÍFICO
====================================================== */}
<section className="bg-[#f1efe7] px-6 py-24 text-[#111513] md:px-12 md:py-32 lg:px-20 lg:py-40">
  <div className="mx-auto max-w-7xl">

    {/* Introdução */}
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div>
        <p className="text-xs font-bold tracking-[0.3em] text-[#17677a]">
          ILHAS NO PACÍFICO
        </p>
      </div>

      <div>
        <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.025em] md:text-6xl lg:text-8xl">
          Nascidas
          <br />
          do fogo.
        </h2>

        <p className="mt-8 max-w-2xl text-base leading-8 text-black/65 md:text-lg">
          Galápagos é um arquipélago de origem vulcânica formado no Oceano
          Pacífico. Suas ilhas revelam uma paisagem marcada pelo contraste:
          rochas escuras, praias claras, águas transparentes e terrenos
          moldados pela atividade vulcânica.
        </p>
      </div>
    </div>

    {/* Imagem panorâmica */}
    <div className="mt-16 md:mt-24 lg:mt-32">
      <div className="relative h-[340px] overflow-hidden md:h-[560px] lg:h-[680px]">
        <Image
          src="/assets/images/galapagos2.jpeg"
          alt="Costa vulcânica e águas do arquipélago de Galápagos"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="mt-5 flex items-center justify-between gap-6">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-black/40">
          Oceano • Vulcões • Ilhas
        </p>

        <span className="hidden h-px flex-1 bg-black/15 md:block" />
      </div>
    </div>

    {/* Transição para fauna */}
    <div className="mt-24 border-t border-black/15 pt-12 md:mt-32 md:pt-16 lg:mt-40">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-bold tracking-[0.3em] text-[#17677a]">
            UM LABORATÓRIO VIVO
          </p>
        </div>

        <div>
          <h3 className="max-w-3xl font-serif text-4xl leading-[1] tracking-[-0.02em] md:text-5xl lg:text-6xl">
            A vida encontrou
            <br />
            seu próprio caminho.
          </h3>

          <p className="mt-8 max-w-2xl text-base leading-8 text-black/65 md:text-lg">
            Isoladas do continente durante milhões de anos, as ilhas
            desenvolveram ecossistemas extraordinários. Animais e plantas
            adaptaram-se às condições particulares de cada ambiente,
            transformando Galápagos em um dos lugares mais singulares do
            planeta.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>
{/* =====================================================
    VIDA QUE NÃO EXISTE EM NENHUM OUTRO LUGAR
====================================================== */}
<section className="bg-[#0b1114] px-6 py-24 text-white md:px-12 md:py-32 lg:px-20 lg:py-40">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">

      {/* Conteúdo */}
      <div>
        <p className="text-xs font-bold tracking-[0.3em] text-[#76b8b3]">
          VIDA ÚNICA
        </p>

        <h2 className="mt-8 max-w-2xl font-serif text-5xl leading-[0.95] tracking-[-0.025em] md:text-6xl lg:text-7xl">
          Um mundo
          <br />
          à parte.
        </h2>

        <p className="mt-8 max-w-xl text-base leading-8 text-white/65 md:text-lg">
          As tartarugas-gigantes estão entre os animais mais emblemáticos de
          Galápagos. O isolamento das ilhas favoreceu o desenvolvimento de
          espécies e populações adaptadas a diferentes ambientes do
          arquipélago.
        </p>

        <div className="mt-14 border-t border-white/15 pt-10 md:mt-20">
          <p className="max-w-xl font-serif text-3xl leading-[1.15] text-white/90 md:text-4xl">
            Em Galápagos, observar a natureza ajudou a transformar nossa
            compreensão sobre a própria vida.
          </p>
        </div>
      </div>

      {/* Fotografia */}
      <div>
        <div className="relative h-[520px] overflow-hidden md:h-[680px] lg:h-[760px]">
          <Image
            src="/assets/images/galapagos3.jpeg"
            alt="Tartaruga-gigante em ambiente natural nas Ilhas Galápagos"
            fill
            className="object-cover object-center"
          />
        </div>

        <p className="mt-5 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/40">
          Tartaruga-gigante • Galápagos
        </p>
      </div>

    </div>

    {/* DARWIN */}
    <div className="mt-24 border-t border-white/15 pt-16 md:mt-32 md:pt-20 lg:mt-40">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

        <div>
          <p className="text-xs font-bold tracking-[0.3em] text-[#76b8b3]">
            1835
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
            Charles Darwin
          </p>

          <h3 className="mt-6 max-w-3xl font-serif text-4xl leading-[1] tracking-[-0.02em] md:text-5xl lg:text-6xl">
            Ilhas que ajudaram
            <br />
            a mudar a ciência.
          </h3>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Em 1835, Charles Darwin visitou Galápagos durante a viagem do
            HMS Beagle. As observações feitas nas ilhas contribuíram para
            suas reflexões posteriores sobre adaptação, variação entre
            espécies e evolução por seleção natural.
          </p>
        </div>

      </div>
    </div>

    {/* FECHAMENTO */}
    <div className="mt-24 border-t border-white/15 pt-8 md:mt-32">
      <div className="flex flex-col gap-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/35 md:flex-row md:items-center md:justify-between">
        <span>Equador • Ilhas Galápagos</span>
        <span>04 — Galápagos</span>
      </div>
    </div>

  </div>
</section>
<Footer />

    </main>
  );
}