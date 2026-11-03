import { AnimatedSection } from '@/components/ui/AnimatedSection';

/**
 * A marca Oni Face: símbolo, visão, missão e atributos.
 * Texto a partir da apresentação de identidade visual da marca (Studio Milleon),
 * entregue pela Dra. Vanessa em novembro de 2026.
 */
const ATRIBUTOS = ['Elegante', 'Marcante', 'Minimalista', 'Exclusiva'];

const PILARES = [
  {
    titulo: 'Visão',
    texto:
      'Redefinir a forma como a estética facial é percebida, unindo ciência, arte e propósito para revelar o melhor de cada rosto de forma natural, elegante e precisa.',
  },
  {
    titulo: 'Missão',
    texto:
      'Construir resultados sutis e harmônicos, com base científica, técnica refinada e olhar artístico, valorizando a beleza individual de cada paciente.',
  },
];

export function SobreAMarca() {
  return (
    <section id="a-marca" aria-labelledby="a-marca-titulo" className="section relative overflow-hidden bg-[#1B3A6B]">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{ backgroundImage: 'url(/marca/pattern-dourado.webp)', backgroundSize: '240px' }}
        aria-hidden="true"
      />
      <div className="container-uniq relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <AnimatedSection direction="left" className="lg:col-span-5 flex flex-col items-center">
            <img
              src="/marca/simbolo-oniface-claro.svg"
              alt="Símbolo da Oni Face: borboleta geométrica dourada formada pelas letras V e S e um ponto"
              width={640}
              height={1025}
              loading="lazy"
              className="h-56 sm:h-72 w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            />
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:gap-0 sm:justify-center" aria-label="Atributos da marca">
              {ATRIBUTOS.map((a, i) => (
                <li
                  key={a}
                  className={`flex items-center justify-center w-28 h-28 rounded-full border border-[#B8965A]/70 text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-[#F7F3EC] ${i > 0 ? 'sm:-ml-4' : ''}`}
                >
                  {a}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="lg:col-span-7">
            <span className="eyebrow mb-4 block text-[#D9BE8C]">A marca Oni Face</span>
            <h2 id="a-marca-titulo" className="text-headline text-[#F7F3EC] mb-6">
              Uma borboleta que nasce do nome Vanessa
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[rgba(247,243,236,0.86)] font-light max-w-2xl">
              <p>
                O símbolo da Oni Face une técnica, delicadeza e força. A forma geométrica parte do V de Vanessa, que traz a ideia de vitória e elevação, ligado à curva sutil do S, que lembra o movimento natural e o equilíbrio das formas do rosto.
              </p>
              <p>
                O ponto representa as marcações dos procedimentos, o olhar clínico em cada detalhe. Juntos, os elementos formam uma borboleta abstrata: transformação, renascimento e beleza natural.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PILARES.map((p) => (
                <div key={p.titulo} className="rounded-2xl border border-[#B8965A]/35 bg-[#142C52]/60 p-6">
                  <h3 className="font-heading italic text-2xl text-[#D9BE8C] mb-3">{p.titulo}</h3>
                  <p className="text-sm leading-relaxed text-[rgba(247,243,236,0.82)] font-light">{p.texto}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
