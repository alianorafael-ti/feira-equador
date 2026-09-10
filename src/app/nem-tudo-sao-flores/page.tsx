import Image from "next/image";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";

export default function NemTudoSaoFloresPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#111411]">
      {/* HEADER */}
      <header className="px-6 pb-12 pt-24 md:px-12 md:pb-16 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-[#ed1c24]">
            O Equador de hoje
          </span>

          <h1 className="max-w-5xl font-serif text-5xl font-bold leading-[0.95] md:text-7xl lg:text-8xl">
            Nem tudo são flores.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl">
            Além das paisagens, existe um país real.
          </p>
        </div>
      </header>

      {/* TIRA COM AS QUATRO FRENTES */}
      <section className="px-6 md:px-12">
        <div className="relative mx-auto aspect-[2.76/1] w-full max-w-7xl overflow-hidden">
          <Image
            src="/assets/images/nem-tudo-sao-flores.png"
            alt="Sociedade e economia, segurança, política e perspectiva no Equador"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1280px"
          />
        </div>
      </section>

      {/* ABERTURA */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-serif text-2xl leading-relaxed md:text-3xl">
            Ao longo desta viagem conhecemos um Equador de paisagens
            extraordinárias, culturas diversas e uma riqueza natural que
            atravessa quatro mundos.
          </p>

          <p className="mt-8 text-lg leading-relaxed text-black/70">
            Mas nenhum país pode ser compreendido apenas por suas belezas. O
            Equador de hoje também enfrenta desafios econômicos, sociais,
            políticos e de segurança. Conhecer essa realidade não diminui tudo
            aquilo que vimos até aqui. Pelo contrário: nos ajuda a enxergar o
            país de forma mais completa.
          </p>
        </div>
      </section>

            {/* QUATRO FRENTES */}
      <section className="px-6 pb-20 md:px-12 md:pb-32">
        <div className="mx-auto max-w-5xl">

          {/* SOCIEDADE E ECONOMIA */}
          <article className="border-t border-black/20 py-12 md:grid md:grid-cols-[220px_1fr] md:gap-16 md:py-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#034ea2]">
                01
              </span>

              <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                Sociedade e economia
              </h2>
            </div>

            <div className="mt-6 md:mt-0">
              <p className="text-lg leading-relaxed text-black/75">
                A economia equatoriana voltou a crescer depois das dificuldades
                enfrentadas nos últimos anos, mas parte da população ainda
                convive com pobreza, informalidade e empregos de baixa
                qualidade.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-black/75">
                Por trás dos números estão trabalhadores, comerciantes e
                famílias que todos os dias movimentam cidades, mercados e
                comunidades. <strong>A economia também é feita de pessoas.</strong>
              </p>
            </div>
          </article>

          {/* SEGURANÇA */}
          <article className="border-t border-black/20 py-12 md:grid md:grid-cols-[220px_1fr] md:gap-16 md:py-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                02
              </span>

              <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                Segurança
              </h2>
            </div>

            <div className="mt-6 md:mt-0">
              <p className="text-lg leading-relaxed text-black/75">
                Nos últimos anos, o avanço do narcotráfico e de organizações
                criminosas tornou a segurança um dos maiores desafios do
                Equador. A violência passou a interferir diretamente na vida
                cotidiana de muitas comunidades.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-black/75">
                É uma realidade difícil, mas importante para compreender o
                momento vivido pelos equatorianos —{" "}
                <strong>
                  sem permitir que a violência se transforme na única imagem
                  que temos deles.
                </strong>
              </p>
            </div>
          </article>

          {/* POLÍTICA */}
          <article className="border-t border-black/20 py-12 md:grid md:grid-cols-[220px_1fr] md:gap-16 md:py-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffb800]">
                03
              </span>

              <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                Política
              </h2>
            </div>

            <div className="mt-6 md:mt-0">
              <p className="text-lg leading-relaxed text-black/75">
                O Equador é uma república democrática, com presidente,
                Assembleia Nacional e eleições periódicas. Como muitas
                democracias, o país enfrenta disputas políticas e desafios
                institucionais.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-black/75">
                Nesse cenário, as decisões tomadas pelo Estado têm papel
                importante na busca por respostas para questões sociais,
                econômicas e de segurança.
              </p>
            </div>
          </article>

          {/* PERSPECTIVA */}
          <article className="border-y border-black/20 py-12 md:grid md:grid-cols-[220px_1fr] md:gap-16 md:py-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#034ea2]">
                04
              </span>

              <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                Perspectiva
              </h2>
            </div>

            <div className="mt-6 md:mt-0">
              <p className="font-serif text-2xl leading-relaxed md:text-3xl">
                O Equador não é definido somente pelos problemas que enfrenta.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-black/75">
                Há jovens estudando, comunidades buscando novas oportunidades e
                pessoas trabalhando para construir um futuro melhor. Ao mesmo
                tempo, permanecem desafios importantes na educação, no trabalho
                e na redução das desigualdades.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-black/75">
                <strong>
                  O futuro do país continua sendo construído por sua própria
                  população.
                </strong>
              </p>
            </div>
          </article>

        </div>
      </section>

            {/* FONTES E REFERÊNCIAS */}
      <section className="px-6 pb-20 md:px-12 md:pb-28">
        <div className="mx-auto max-w-5xl border-t border-black/20">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-8">
              <div>
                <span className="block text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                  Pesquisa
                </span>

                <h2 className="mt-2 font-serif text-2xl md:text-3xl">
                  Fontes e referências
                </h2>

                <p className="mt-2 text-sm text-black/50">
                  Dados consultados para a construção desta página.
                </p>
              </div>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/20 text-2xl font-light transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="grid gap-8 border-t border-black/10 pb-10 pt-8 md:grid-cols-2">
              <a
                href="https://www.ecuadorencifras.gob.ec/institucional/inec-presenta-resultados-de-la-enemdu-diciembre-2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link"
              >
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#034ea2]">
                  Sociedade e economia
                </span>

                <h3 className="mt-2 font-serif text-xl group-hover/link:underline">
                  Instituto Nacional de Estadística y Censos
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-black/55">
                  ENEMDU — emprego, desemprego, pobreza e condições sociais.
                </p>
              </a>

              <a
                href="https://www.unicef.org/ecuador/informes/capital-humano-en-ecuador"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link"
              >
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#ed1c24]">
                  Segurança e desenvolvimento
                </span>

                <h3 className="mt-2 font-serif text-xl group-hover/link:underline">
                  UNICEF + Grupo Banco Mundial
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-black/55">
                  Capital humano en Ecuador: sembrar futuro en tiempos de
                  incertidumbre — março de 2026.
                </p>
              </a>

              <a
                href="https://www.asambleanacional.gob.ec/es/blogs/maria-villacreses-herrera/107447-inicio-del-nuevo-periodo"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link"
              >
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffb800]">
                  Política
                </span>

                <h3 className="mt-2 font-serif text-xl group-hover/link:underline">
                  Asamblea Nacional del Ecuador
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-black/55">
                  Instalação do período legislativo 2025–2029.
                </p>
              </a>

              <a
                href="https://www.unicef.org/ecuador/informes/capital-humano-en-ecuador"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link"
              >
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#034ea2]">
                  Perspectiva
                </span>

                <h3 className="mt-2 font-serif text-xl group-hover/link:underline">
                  UNICEF Ecuador
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-black/55">
                  Educação, infância, capital humano e perspectivas para o
                  futuro do país.
                </p>
              </a>
            </div>
          </details>
        </div>
      </section>

            {/* ENCERRAMENTO */}
      <section className="bg-[#111411] px-6 py-20 text-[#f5f1e8] md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffdd00]">
            Um país muito maior que seus desafios
          </span>

          <div className="mt-8 max-w-4xl">
            <h2 className="font-serif text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
              Nem tudo são flores.
              <br />
              <span className="text-white/55">
                Mas também nem tudo são espinhos.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-10 border-t border-white/20 pt-10 md:grid-cols-2 md:gap-16">
            <p className="text-lg leading-relaxed text-white/70">
              Entre dificuldades e possibilidades existe um povo trabalhando,
              estudando, criando seus filhos e imaginando o amanhã.
            </p>

            <p className="text-lg leading-relaxed text-white/70">
              Depois de conhecer a Costa, subir os Andes, entrar na Amazônia e
              chegar às Galápagos, talvez possamos olhar novamente para o
              Equador de outra maneira.
            </p>
          </div>

          <p className="mt-16 max-w-4xl font-serif text-3xl leading-relaxed md:text-5xl">
            Não apenas como um lugar de belas paisagens, mas como um país vivo,
            feito de{" "}
            <span className="text-[#ffdd00]">
              pessoas, desafios e esperança.
            </span>
          </p>
        </div>
      </section>

      <BackButton />
      <Footer />
    </main>
  );
}