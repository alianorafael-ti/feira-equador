import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

export default function CostaPage() {
  return (
    <main>
  <BackButton />
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-black text-white">
        {/* Imagem */}
        <img
          src="/assets/images/costa1.jpeg"
          alt="Litoral da região Costa do Equador"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Conteúdo */}
        <div className="relative z-10 flex h-full items-end">
          <div className="w-full px-6 pb-16 md:px-12 md:pb-20 lg:px-20 lg:pb-24">
            <p className="mb-5 text-xs font-bold tracking-[0.3em] md:text-sm">
              01 — COSTA
            </p>

            <h1 className="max-w-5xl text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-8xl">
              O Equador e o
              <br />
              Oceano Pacífico
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-[var(--light)] px-6 py-24 md:px-12 md:py-32 lg:px-20">
  <div className="mx-auto max-w-7xl">
    <p className="mb-6 text-xs font-bold tracking-[0.25em] text-[var(--blue)]">
      CONHECENDO A REGIÃO
    </p>

    <h2 className="max-w-5xl text-5xl leading-[1.02] tracking-[-0.03em] md:text-6xl lg:text-7xl">
      Entre os Andes
      <br />
      e o Pacífico.
    </h2>

    <div className="mt-12 max-w-2xl border-t border-black/20 pt-8">
      <p className="text-base leading-7 text-black/70 md:text-lg md:leading-8">
        A Costa equatoriana se estende entre a Cordilheira dos Andes e o
        Oceano Pacífico. É uma região marcada por planícies, praias, rios,
        cidades importantes e intensa atividade econômica.
      </p>
    </div>
  </div>
</section>

<section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-20">
  <div className="mx-auto max-w-7xl">
    <p className="mb-6 text-xs font-bold tracking-[0.25em] text-[var(--blue)]">
      PAISAGEM E ECONOMIA
    </p>

    <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-20">
      <h2 className="text-5xl leading-[1.02] tracking-[-0.03em] md:text-6xl lg:text-7xl">
        Uma região voltada
        <br />
        para o Pacífico.
      </h2>

      <p className="max-w-xl text-base leading-7 text-black/65 md:text-lg md:leading-8">
        As planícies férteis e a proximidade com o oceano fazem da Costa uma
        das regiões economicamente mais importantes do Equador.
      </p>
    </div>

    <div className="mt-16 h-[650px] overflow-hidden">
      <img
        src="/assets/images/costa2.jpeg"
        alt="Paisagem da região Costa do Equador"
        className="h-full w-full object-cover"
      />
    </div>
<div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
  <div className="h-[480px] overflow-hidden">
    <img
      src="/assets/images/costa3.jpeg"
      alt="Atividade econômica na Costa equatoriana"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2">
    <div className="border-b border-black/20 pb-8 sm:border-r sm:pr-8">
      <span className="text-xs font-bold tracking-[0.2em] text-[var(--blue)]">
        01
      </span>
      <h3 className="mt-4 text-3xl">Agricultura</h3>
      <p className="mt-4 leading-7 text-black/65">
        As terras férteis favorecem cultivos como banana, cacau, arroz e
        cana-de-açúcar.
      </p>
    </div>

    <div className="border-b border-black/20 py-8 sm:py-0 sm:pl-8">
      <span className="text-xs font-bold tracking-[0.2em] text-[var(--blue)]">
        02
      </span>
      <h3 className="mt-4 text-3xl">Pesca</h3>
      <p className="mt-4 leading-7 text-black/65">
        O Oceano Pacífico sustenta uma importante atividade pesqueira e
        contribui para a economia das comunidades costeiras.
      </p>
    </div>

    <div className="border-b border-black/20 py-8 sm:border-r sm:border-b-0 sm:pr-8">
      <span className="text-xs font-bold tracking-[0.2em] text-[var(--blue)]">
        03
      </span>
      <h3 className="mt-4 text-3xl">Comércio</h3>
      <p className="mt-4 leading-7 text-black/65">
        Grandes centros urbanos concentram comércio, serviços e parte
        importante da atividade econômica do país.
      </p>
    </div>

    <div className="pt-8 sm:pl-8">
      <span className="text-xs font-bold tracking-[0.2em] text-[var(--blue)]">
        04
      </span>
      <h3 className="mt-4 text-3xl">Portos</h3>
      <p className="mt-4 leading-7 text-black/65">
        Os portos da Costa conectam o Equador aos mercados internacionais e
        são fundamentais para suas exportações.
      </p>
    </div>
  </div>
</div>

  </div>
</section>

<section className="bg-[var(--dark)] px-6 py-24 text-white md:px-12 md:py-32 lg:px-20">
  <div className="mx-auto max-w-7xl">

    {/* Abertura */}
    <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-20">
      <div>
        <p className="mb-6 text-xs font-bold tracking-[0.25em] text-[var(--yellow)]">
          GUAYAQUIL
        </p>

        <h2 className="text-5xl leading-[0.98] tracking-[-0.03em] md:text-6xl lg:text-7xl">
          A grande cidade
          <br />
          da Costa.
        </h2>
      </div>

      <p className="max-w-xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
        Guayaquil é a maior cidade do Equador e um dos principais centros
        econômicos do país. Sua história e seu desenvolvimento estão
        profundamente ligados ao rio Guayas, ao comércio e à atividade
        portuária.
      </p>
    </div>

    {/* Imagem principal */}
    <div className="mt-16 h-[620px] overflow-hidden">
      <img
        src="/assets/images/guayakil1.jpeg"
        alt="Vista de Guayaquil, no Equador"
        className="h-full w-full object-cover"
      />
    </div>

    {/* Texto + segunda imagem */}
    <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
      <div>
        <span className="text-xs font-bold tracking-[0.2em] text-[var(--yellow)]">
          CIDADE E RIO
        </span>

        <h3 className="mt-5 text-4xl leading-[1.05] md:text-5xl">
          Às margens
          <br />
          do Guayas.
        </h3>

        <p className="mt-7 max-w-lg text-base leading-7 text-white/65 md:text-lg md:leading-8">
          O rio Guayas faz parte da identidade de Guayaquil. Ao longo de suas
          margens, a cidade cresceu como ponto estratégico para o transporte,
          o comércio e a conexão do Equador com o Oceano Pacífico.
        </p>
      </div>

      <div className="h-[500px] overflow-hidden">
        <img
          src="/assets/images/guayakil2.jpeg"
          alt="Guayaquil e o rio Guayas"
          className="h-full w-full object-cover"
        />
      </div>
    </div>

    {/* Terceira imagem + encerramento */}
    <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">

      <div className="h-[500px] overflow-hidden">
        <img
          src="/assets/images/guayakil3.jpeg"
          alt="Paisagem urbana de Guayaquil"
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <span className="text-xs font-bold tracking-[0.2em] text-[var(--yellow)]">
          ECONOMIA E MOVIMENTO
        </span>

        <h3 className="mt-5 text-4xl leading-[1.05] md:text-5xl">
          Uma cidade
          <br />
          em movimento.
        </h3>

        <p className="mt-7 max-w-lg text-base leading-7 text-white/65 md:text-lg md:leading-8">
          Comércio, indústria, serviços e atividades portuárias fazem de
          Guayaquil um dos grandes motores econômicos do Equador. A cidade
          também reúne espaços históricos, áreas modernas e uma intensa vida
          urbana.
        </p>
      </div>

    </div>

  </div>
</section>

<Footer />

    </main>
  );
}