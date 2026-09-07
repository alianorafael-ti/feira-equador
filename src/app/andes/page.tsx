import Image from "next/image";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";

export default function AndesPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8]">
      <BackButton />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
  src="/assets/images/andes1.jpeg"
  alt="Cordilheira dos Andes no Equador"
  fill
  priority
  className="object-cover object-[78%_center] md:object-center"

        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />

        <div className="relative z-10 flex min-h-screen items-end px-6 pb-16 md:px-12 md:pb-20 lg:px-20 lg:pb-24">
          <div className="mx-auto w-full max-w-7xl">
            <p className="mb-5 text-xs font-bold tracking-[0.3em] text-white/70 md:text-sm">
              02 — ANDES
            </p>

            <h1 className="max-w-4xl text-5xl leading-[0.95] text-white md:text-7xl lg:text-8xl">
              Entre vulcões
              <br />
              e montanhas.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              No coração do Equador, a Cordilheira dos Andes reúne grandes
              altitudes, vulcões, vales e cidades históricas.
            </p>
          </div>
        </div>
      </section>

      {/* AVENIDA DOS VULCÕES */}
      <section className="bg-[#f5f1e8] px-6 py-24 text-[#111411] md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mx-auto max-w-7xl">
          {/* Introdução */}
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-[#034ea2]">
                A AVENIDA DOS VULCÕES
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
                Uma cordilheira
                <br />
                viva.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-black/65 md:text-lg">
                Os Andes atravessam o Equador de norte a sul. Ao longo dessa
                região, grandes vulcões se erguem sobre vales, cidades e
                campos, formando uma das paisagens mais impressionantes do
                país.
              </p>
            </div>
          </div>

          {/* Cotopaxi */}
          <div className="mt-20 md:mt-28 lg:mt-36">
            <div className="relative h-[420px] overflow-hidden md:h-[600px] lg:h-[720px]">
              <Image
                src="/assets/images/cotopaxi.jpeg"
                alt="Vulcão Cotopaxi nos Andes equatorianos"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white md:p-10 lg:p-14">
                <p className="mb-3 text-xs font-bold tracking-[0.3em] text-white/70">
                  COTOPAXI
                </p>

                <h3 className="text-4xl leading-none md:text-6xl">
                  Um gigante
                  <br />
                  dos Andes.
                </h3>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-[1fr_1fr] md:gap-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/45">
                Equador • Cordilheira dos Andes
              </p>

              <p className="max-w-xl text-base leading-8 text-black/65">
                Com seu cone quase simétrico e o cume coberto de neve, o
                Cotopaxi é uma das imagens mais reconhecidas dos Andes
                equatorianos e um dos vulcões ativos mais altos do mundo.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* CHIMBORAZO */}
      <section className="bg-[#111411] px-6 py-24 text-white md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            {/* Texto */}
            <div className="lg:pb-10">
              <p className="mb-6 text-xs font-bold tracking-[0.3em] text-[#ffdd00]">
                GRANDES ALTITUDES
              </p>

              <h2 className="text-5xl leading-[0.95] md:text-6xl lg:text-7xl">
                No teto
                <br />
                do Equador.
              </h2>

              <p className="mt-8 max-w-lg text-base leading-8 text-white/65 md:text-lg">
                Nos Andes equatorianos, a paisagem muda à medida que a altitude
                aumenta. O ar se torna mais frio, a vegetação se transforma e
                grandes montanhas passam a dominar o horizonte.
              </p>
            </div>

            {/* Imagem */}
            <div className="relative h-[480px] overflow-hidden md:h-[620px] lg:h-[760px]">
              <Image
                src="/assets/images/chimborazo2.jpeg"
                alt="Chimborazo na Cordilheira dos Andes, no Equador"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Identificação */}
          <div className="mt-8 border-t border-white/15 pt-6 md:mt-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-bold tracking-[0.3em] text-white/40">
                  CHIMBORAZO
                </p>
              </div>

              <p className="max-w-xl text-base leading-8 text-white/65">
                Com 6.263 metros de altitude, o Chimborazo é a montanha mais
                alta do Equador e um dos grandes símbolos da paisagem andina
                do país.
              </p>
            </div>
          </div>
        </div>
      </section>
                 {/* VIDA NOS ANDES */}
      <section className="bg-[#f5f1e8] px-6 py-24 text-[#111411] md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mx-auto max-w-7xl">

          {/* Cabeçalho */}
          <p className="mb-12 text-xs font-bold tracking-[0.3em] text-[#ed1c24] md:mb-16">
            VIDA NOS ANDES
          </p>

          {/* Primeira composição */}
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

            {/* Imagem 1 */}
            <div>
              <div className="relative h-[500px] overflow-hidden md:h-[650px] lg:h-[760px]">
                <Image
                  src="/assets/images/povos1.jpeg"
                  alt="Pessoas e tradições da região andina do Equador"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                Identidade • Cultura • Tradição
              </p>
            </div>

            {/* Introdução */}
            <div className="lg:pt-4">
              <h2 className="max-w-3xl text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
                As montanhas
                <br />
                também têm
                <br />
                histórias.
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-black/65 md:text-lg">
                Os Andes equatorianos não são apenas uma paisagem de grandes
                altitudes e vulcões. Há séculos, diferentes comunidades vivem
                entre montanhas e vales, preservando costumes, conhecimentos,
                formas de trabalho e tradições que fazem parte da identidade
                do Equador.
              </p>
            </div>
          </div>

          {/* Segunda composição */}
          <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">

            {/* Texto */}
            <div className="lg:pt-8">
              <div className="border-t border-black/15 pt-7">
                <p className="text-xs font-bold tracking-[0.3em] text-[#034ea2]">
                  POVOS E TRADIÇÕES
                </p>

                <p className="mt-6 max-w-lg text-base leading-8 text-black/65 md:text-lg">
                  Nas comunidades andinas, tradições podem ser percebidas nas
                  roupas, no artesanato, nos mercados, na agricultura e nas
                  celebrações. São práticas que atravessam gerações e continuam
                  presentes na vida cotidiana.
                </p>
              </div>
            </div>

            {/* Imagem 2 */}
            <div>
              <div className="relative h-[420px] overflow-hidden md:h-[540px] lg:h-[600px]">
                <Image
                  src="/assets/images/povos2.jpeg"
                  alt="Cultura e cotidiano nos Andes equatorianos"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                Terra • Trabalho • Comunidade
              </p>
            </div>
          </div>

        </div>
      </section>
            {/* QUITO */}
      <section className="bg-[#111411] text-white">
        {/* Abertura */}
        <div className="px-6 pb-16 pt-24 md:px-12 md:pb-20 md:pt-32 lg:px-20 lg:pb-24 lg:pt-40">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <p className="text-xs font-bold tracking-[0.3em] text-[#ffdd00]">
                  QUITO
                </p>
              </div>

              <div>
                <h2 className="max-w-4xl text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
                  Uma cidade
                  <br />
                  entre montanhas.
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                  Capital do Equador, Quito se estende pelos vales da
                  Cordilheira dos Andes, cercada por montanhas e vulcões. A
                  altitude e a geografia fazem parte da própria identidade da
                  cidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem de Quito */}
        <div className="px-6 md:px-12 lg:px-20">
          <div className="relative mx-auto h-[500px] max-w-7xl overflow-hidden md:h-[650px] lg:h-[760px]">
            <Image
              src="/assets/images/quito.jpeg"
              alt="Quito, capital do Equador, cercada pela Cordilheira dos Andes"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:p-12">
              <p className="text-xs font-bold tracking-[0.3em] text-white/70">
                CAPITAL DO EQUADOR
              </p>

              <p className="mt-3 text-sm text-white/60">
                Andes equatorianos
              </p>
            </div>
          </div>
        </div>

        {/* Patrimônio */}
        <div className="px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
          <div className="mx-auto max-w-7xl border-t border-white/15 pt-8">
            <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-xs font-bold tracking-[0.3em] text-white/40">
                  1978
                </p>
              </div>

              <div>
                <h3 className="text-3xl leading-tight md:text-4xl">
                  Patrimônio Mundial.
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                  O centro histórico de Quito foi um dos primeiros lugares
                  reconhecidos como Patrimônio Mundial pela UNESCO, em 1978.
                  Igrejas, praças e construções históricas preservam parte
                  importante da história da capital equatoriana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}