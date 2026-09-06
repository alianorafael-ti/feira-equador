import WorldCard from "@/components/WorldCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <section className="relative h-screen min-h-[650px] overflow-hidden bg-black text-white">
        {/* Vídeo */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/assets/videos/equador-hero.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Conteúdo */}
        <div className="relative z-10 flex h-full items-end">
          <div className="w-full px-6 pb-16 md:px-12 md:pb-20 lg:px-20 lg:pb-24">
            <p className="mb-4 text-xs font-bold tracking-[0.3em] md:text-sm">
              FEIRA DAS NAÇÕES
            </p>

            <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.8] tracking-[-0.04em]">
              EQUADOR
            </h1>

            <p className="mt-6 text-lg font-light md:text-2xl">
              Um país. Quatro mundos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--light)] px-6 py-24 md:px-12 md:py-32 lg:px-20">
  <div className="mx-auto max-w-7xl">
    <p className="mb-6 text-xs font-bold tracking-[0.25em] text-[var(--blue)]">
      01 &nbsp; CONHEÇA O EQUADOR
    </p>

    <h2 className="max-w-4xl text-4xl leading-[1.05] font-medium tracking-[-0.02em] md:text-6xl lg:text-7xl">
      Pequeno no mapa.
      <br />
      Imenso em diversidade.
    </h2>

    <div className="mt-16 grid border-t border-black/20 pt-8 sm:grid-cols-2 lg:grid-cols-3">
  <div className="border-b border-black/20 py-5 lg:border-r lg:pr-8">
    <span className="block text-xs font-bold tracking-[0.18em] text-black/50">
      CAPITAL
    </span>
    <strong className="mt-2 block text-xl font-medium">Quito</strong>
  </div>

  <div className="border-b border-black/20 py-5 sm:pl-8 lg:border-r lg:px-8">
    <span className="block text-xs font-bold tracking-[0.18em] text-black/50">
      CONTINENTE
    </span>
    <strong className="mt-2 block text-xl font-medium">
      América do Sul
    </strong>
  </div>

  <div className="border-b border-black/20 py-5 lg:pl-8">
    <span className="block text-xs font-bold tracking-[0.18em] text-black/50">
      ÁREA
    </span>
    <strong className="mt-2 block text-xl font-medium">
      aproximadamente 256 mil km²
    </strong>
  </div>

  <div className="border-b border-black/20 py-5 lg:border-r lg:pr-8">
    <span className="block text-xs font-bold tracking-[0.18em] text-black/50">
      MOEDA
    </span>
    <strong className="mt-2 block text-xl font-medium">
      Dólar americano
    </strong>
  </div>

  <div className="border-b border-black/20 py-5 sm:pl-8 lg:border-r lg:px-8">
    <span className="block text-xs font-bold tracking-[0.18em] text-black/50">
      IDIOMA OFICIAL
    </span>
    <strong className="mt-2 block text-xl font-medium">Castelhano</strong>
  </div>

  <div className="border-b border-black/20 py-5 lg:pl-8">
    <span className="block text-xs font-bold tracking-[0.18em] text-black/50">
      LITORAL
    </span>
    <strong className="mt-2 block text-xl font-medium">
      Oceano Pacífico
    </strong>
  </div>
</div>
    
  </div>
</section>

<section className="bg-[var(--light)] px-6 py-24 md:px-12 md:py-32 lg:px-20">
  <div className="mx-auto max-w-7xl">
    <div className="mb-12">
      <p className="mb-4 text-xs font-bold tracking-[0.25em] text-[var(--blue)]">
        UM PAÍS. QUATRO MUNDOS.
      </p>

      <h2 className="text-4xl leading-tight md:text-6xl">
        Quatro regiões.
        <br />
        Quatro experiências.
      </h2>
    </div>

   <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
  <WorldCard
    number="01"
    title="Costa"
    description="O encontro entre o Equador e o Pacífico."
    image="/assets/images/equador1.jpeg"
    href="/costa"
  />

  <WorldCard
    number="02"
    title="Andes"
    description="Vulcões, montanhas e cidades históricas."
    image="/assets/images/equador2.jpeg"
    href="/andes"
  />

  <WorldCard
    number="03"
    title="Amazônia"
    description="Floresta, rios e uma extraordinária biodiversidade."
    image="/assets/images/equador3.jpeg"
    href="/amazonia"
  />

  <WorldCard
    number="04"
    title="Galápagos"
    description="Um dos maiores patrimônios naturais do planeta."
    image="/assets/images/equador4.jpeg"
    href="/galapagos"
  />

    </div>
  </div>
</section>

<section className="bg-[var(--dark)] px-6 py-20 text-white md:px-12 md:py-24 lg:px-20">
  <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-3">
    
    <div className="border-b border-white/20 py-8 md:border-r md:border-b-0 md:px-8 md:first:pl-0">
      <strong className="block text-6xl font-medium leading-none md:text-7xl">
        14
      </strong>
      <span className="mt-4 block text-xs font-bold uppercase tracking-[0.2em] text-white/60">
        Nacionalidades
      </span>
    </div>

    <div className="border-b border-white/20 py-8 md:border-r md:border-b-0 md:px-8">
      <strong className="block text-6xl font-medium leading-none md:text-7xl">
        18
      </strong>
      <span className="mt-4 block text-xs font-bold uppercase tracking-[0.2em] text-white/60">
        Povos indígenas
      </span>
    </div>

    <div className="py-8 md:px-8 md:last:pr-0">
      <strong className="block text-6xl font-medium leading-none md:text-7xl">
        1978
      </strong>
      <span className="mt-4 block text-xs font-bold uppercase tracking-[0.2em] text-white/60">
        Quito Patrimônio Mundial
      </span>
    </div>

  </div>
</section>

<section className="bg-[var(--light)] px-6 py-24 md:px-12 md:py-32 lg:px-20">
  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[420px_1fr] lg:gap-20">
    
    <div className="aspect-square overflow-hidden">
      <img
        src="/assets/images/Chimborazo.jpeg"
        alt="Vulcão Chimborazo, no Equador"
        className="h-full w-full object-cover"
      />
    </div>

    <div>
      <p className="mb-5 text-xs font-bold tracking-[0.25em] text-[var(--blue)]">
        VOCÊ SABIA?
      </p>

      <h2 className="max-w-3xl text-5xl leading-[0.95] tracking-[-0.03em] md:text-6xl lg:text-7xl">
        Mais perto
        <br />
        das estrelas?
      </h2>

      <p className="mt-8 max-w-2xl text-base leading-7 text-black/70 md:text-lg md:leading-8">
        O Chimborazo é um vulcão localizado nos Andes equatorianos. Por causa
        do formato da Terra, seu cume é o ponto da superfície terrestre mais
        distante do centro do planeta.
      </p>

      <p className="mt-5 max-w-2xl text-base leading-7 text-black/70 md:text-lg md:leading-8">
        Isso significa que, medido a partir do centro da Terra, o Chimborazo
        está mais perto do espaço do que o próprio Monte Everest.
      </p>
    </div>

  </div>
</section>

 <Footer />
    </main>
  );
}