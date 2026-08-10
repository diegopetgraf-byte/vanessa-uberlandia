export interface Technology {
  id: string;
  name: string;
  headline: string;
  description: string;
  benefits: string[];
  indications: string[];
  faq: { question: string; answer: string }[];
  imageSrc?: string;
}

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'ultraformer',
    name: 'Ultraformer',
    headline: 'Lifting não cirúrgico com HIFU de alta intensidade',
    description: 'O Ultraformer é considerado um dos equipamentos mais avançados do mundo para lifting não cirúrgico. Utiliza ultrassom microfocado de alta intensidade (HIFU) para atuar com precisão nas camadas profundas da pele — inclusive no SMAS, camada abordada nas cirurgias de lifting —, promovendo contração imediata dos tecidos e estimulando a síntese de colágeno ao longo dos meses seguintes. O resultado é um efeito de lifting progressivo, natural e duradouro, sem cirurgia e sem recuperação.',
    benefits: [
      'Lifting imediato e progressivo',
      'Ação no SMAS (camada profunda)',
      'Sem cirurgia, sem anestesia geral',
      'Sem recuperação — retorno imediato às atividades',
      'Estímulo profundo de colágeno',
      'Definição do óvulo facial e do pescoço',
      'Tratamento de papada',
      'Resultados duradouros (12 a 18 meses)',
    ],
    indications: [
      'Flacidez facial moderada a avançada',
      'Ptose de bochechas e sobrancelhas',
      'Papada e gordura submentoniana',
      'Flacidez de pescoço',
      'Quem busca alternativa não cirúrgica ao lifting',
      'Manutenção preventiva do contorno facial',
    ],
    faq: [
      { question: 'O procedimento dói?', answer: 'Pode haver sensação de calor e pressão durante a aplicação. A intensidade varia conforme a profundidade e área tratada. Na maioria dos casos, o desconforto é tolerável e não exige anestesia.' },
      { question: 'Quantas sessões são necessárias?', answer: 'Em geral, uma sessão por ano é suficiente para manutenção. Casos mais avançados podem necessitar de protocolos com duas sessões.' },
      { question: 'Em quanto tempo vejo os resultados?', answer: 'Há uma melhora inicial imediata e o efeito completo se desenvolve ao longo de 2 a 4 meses, conforme o colágeno é produzido.' },
      { question: 'Posso retornar às atividades no mesmo dia?', answer: 'Sim. O Ultraformer não exige recuperação. Pode haver leve vermelhidão ou inchaço por algumas horas.' },
    ],
  },
  {
    id: 'hipro',
    name: 'Hipro',
    headline: 'Alta performance em radiofrequência e HIFU combinados',
    description: 'O Hipro é um equipamento de alta tecnologia que combina radiofrequência fracionada microfocada e HIFU em uma única plataforma, permitindo tratar flacidez com múltiplas profundidades em uma mesma sessão. Sua versatilidade permite abordar face, pescoço e corpo com alta eficácia clínica e resultado progressivo.',
    benefits: [
      'Combinação de RF e HIFU',
      'Tratamento multidepth em uma sessão',
      'Aplicação facial e corporal',
      'Alta eficácia clínica',
      'Resultado progressivo e duradouro',
      'Estímulo de colágeno e elastina',
    ],
    indications: [
      'Flacidez facial moderada a severa',
      'Flacidez corporal',
      'Gordura localizada',
      'Pescoço e colo flácidos',
      'Casos que necessitam de abordagem combinada',
    ],
    faq: [
      { question: 'Qual a diferença entre o Hipro e o Ultraformer?', answer: 'O Hipro combina radiofrequência e HIFU em uma plataforma, sendo mais versátil para tratar múltiplas camadas e área corporal. A escolha do equipamento ideal é feita na avaliação com Dra. Marcelle.' },
      { question: 'Quantas sessões são necessárias?', answer: 'O protocolo é definido na avaliação conforme o grau de flacidez e os objetivos do paciente.' },
      { question: 'O tratamento é doloroso?', answer: 'Pode haver sensação de calor durante a aplicação. Geralmente bem tolerado sem necessidade de anestesia.' },
    ],
  },
  {
    id: 'pixie',
    name: 'PIXIE',
    headline: 'Microagulhamento com radiofrequência para precisão máxima',
    description: 'O PIXIE representa a evolução do microagulhamento tradicional ao combinar microagulhas com emissão de radiofrequência diretamente na derme. Esta combinação permite entregar energia térmica com precisão milimétrica em diferentes profundidades, estimulando colágeno de forma intensa, controlada e com resultados superiores ao microagulhamento convencional.',
    benefits: [
      'Entrega de RF direto na derme',
      'Controle preciso de profundidade',
      'Estimulo intenso de colágeno e elastina',
      'Tratamento de cicatrizes e poros',
      'Melhora de flacidez e textura',
      'Mínima lesão superficial',
    ],
    indications: [
      'Cicatrizes de acne',
      'Poros dilatados',
      'Flacidez leve a moderada',
      'Rugas finas',
      'Estrias',
      'Pele com textura irregular',
    ],
    faq: [
      { question: 'Qual a diferença do PIXIE para o microagulhamento convencional?', answer: 'O PIXIE emite radiofrequência nas agulhas, entregando energia diretamente na derme. Isso proporciona resultado muito superior com menor trauma superficial.' },
      { question: 'Quantas sessões são necessárias?', answer: 'Em geral 3 a 4 sessões com intervalo de 4 a 6 semanas. O protocolo é definido na avaliação.' },
      { question: 'Qual é a recuperação?', answer: 'Vermelhidão por 24 a 72h e possível descamação leve. Retorno às atividades no dia seguinte.' },
    ],
  },
  {
    id: 'lavieen',
    name: 'Lavieen',
    headline: 'Renovação profunda da pele com mínima recuperação',
    description: 'O Lavieen é uma tecnologia laser inovadora com microagulhas aquecidas (MFRT — Micro-focused RF Treatment) que combina laser de Er:YAG com emissão térmica precisa. Permite tratar manchas, textura, poros dilatados e rejuvenescimento com resultados expressivos e tempo de recuperação muito reduzido comparado aos lasers ablativos tradicionais.',
    benefits: [
      'Renovação cutânea profunda',
      'Clareamento e uniformização de manchas',
      'Fechamento de poros',
      'Melhora de textura e cicatrizes',
      'Rejuvenescimento global',
      'Mínima recuperação',
    ],
    indications: [
      'Manchas e melasma',
      'Poros dilatados',
      'Cicatrizes de acne',
      'Textura irregular',
      'Fotoenvelhecimento',
      'Rejuvenescimento preventivo',
    ],
    faq: [
      { question: 'É necessária anestesia?', answer: 'Aplicamos creme anestésico antes do procedimento para garantir máximo conforto.' },
      { question: 'Quantas sessões são necessárias?', answer: 'De 1 a 4 sessões, dependendo da condição tratada. Manchas e rejuvenescimento geralmente respondem em 1 a 2 sessões.' },
      { question: 'Qual é o tempo de recuperação?', answer: 'De 3 a 5 dias com vermelhidão e descamação leve. Muito inferior ao laser ablativo convencional.' },
      { question: 'Posso me expor ao sol após o tratamento?', answer: 'Evitar exposição solar por pelo menos 30 dias e usar protetor solar diariamente. Isso é fundamental para o resultado.' },
    ],
  },
];

export function getTechnologyById(id: string): Technology | undefined {
  return TECHNOLOGIES.find(t => t.id === id);
}
