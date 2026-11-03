export type TreatmentCategory =
  | 'facial'
  | 'corporal'
  | 'instituto-fs';

export const CATEGORY_LABELS: Record<TreatmentCategory, string> = {
  'facial': 'Estética Facial',
  'corporal': 'Estética Corporal',
  'instituto-fs': 'Mentoria',
};

export const CATEGORY_DESCRIPTIONS: Record<TreatmentCategory, string> = {
  'facial': 'Planejamento individualizado para reestruturação, sustentação e rejuvenescimento dos traços faciais com naturalidade e preservação da identidade.',
  'corporal': 'Protocolos avançados voltados à melhora da firmeza, estímulo de colágeno e qualidade tecidual.',
  'instituto-fs': 'Capacitação de alto nível para profissionais da estética que buscam excelência técnica, raciocínio clínico e domínio da estética facial.',
};

export interface TreatmentStep {
  title: string;
  desc: string;
}

export interface TreatmentFAQ {
  question: string;
  answer: string;
}

export interface Treatment {
  id: string;
  name: string;
  category: TreatmentCategory;
  subtitle: string;
  description: string;
  benefits: string[];
  indications: string[];
  duration?: string;
  recovery?: string;
  durability?: string;
  featured: boolean;
  imageSrc: string;
  howItWorks?: TreatmentStep[];
  faqs?: TreatmentFAQ[];
}

export const TREATMENTS: Treatment[] = [

  // ══════════════════════════════════════════════════════════════════
  // ── ESTÉTICA FACIAL ──
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'harmonizacao-facial',
    name: 'Harmonização Facial',
    category: 'facial',
    subtitle: 'Equilíbrio, proporção e sustentação em estética facial avançada',
    description: 'A Harmonização Facial na Oni Face é um planejamento integrado de alta precisão que combina técnicas injetáveis para restaurar vetores de sustentação, proporção e harmonia facial. Afastando-se de modismos e rostos padronizados, Dra. Vanessa Sanabria analisa minuciosamente a anatomia individual, dinâmica muscular e perda de volume tecidual para entregar um rejuvenescimento elegante, seguro e imperceptível aos olhos desavisados.',
    benefits: [
      'Restauração dos vetores de sustentação facial perdidos com o tempo',
      'Harmonia e simetria proporcional entre terços superior, médio e inferior',
      'Definição elegante do contorno sem criar aspecto pesado ou artificial',
      'Rejuvenescimento progressivo que preserva as expressões e identidade'
    ],
    indications: [
      'Perda de sustentação e volume nas maçãs do rosto (malar)',
      'Perda de definição da linha mandibular e mento',
      'Assimetrias faciais leves e moderadas',
      'Pessoas que buscam rejuvenescimento com naturalidade absoluta'
    ],
    duration: '60 a 90 minutos',
    recovery: 'Retorno imediato às atividades cotidianas',
    durability: '12 a 24 meses',
    featured: true,
    imageSrc: '/card_harmonizacao.jpg',
    howItWorks: [
      {
        title: '1. Diagnóstico Anatômico e Escuta',
        desc: 'Avaliação presencial minuciosa da estrutura óssea, compartimentos de gordura e mímica facial, compreendendo as expectativas e histórico do paciente.'
      },
      {
        title: '2. Planejamento Estratégico FS',
        desc: 'Construção de um mapa exclusivo de aplicação focado em pontos estratégicos de ancoragem (lifting vetorial) e refinamento proporcional.'
      },
      {
        title: '3. Execução com Microcânulas',
        desc: 'Aplicação técnica suave com cânulas de ponta atraumática e biomateriais de padrão internacional, minimizando riscos e hematomas.'
      },
      {
        title: '4. Acompanhamento e Revisão',
        desc: 'Sessão de retorno programada para avaliar a acomodação dos tecidos e garantir o resultado refinado proposto no planejamento.'
      }
    ],
    faqs: [
      {
        question: 'O procedimento vai mudar minha fisionomia?',
        answer: 'Não. O princípio central da Oni Face é justamente o oposto: revelar a sua melhor versão sem descaracterizar sua identidade. O foco é reposicionar o que o tempo alterou, e não inventar traços que nunca foram seus.'
      },
      {
        question: 'Qual o tempo de recuperação?',
        answer: 'Você pode retomar sua rotina normal no mesmo dia. Pode ocorrer um inchaço sutil nos primeiros 2 a 4 dias, facilmente camuflável e que regride espontaneamente.'
      },
      {
        question: 'Quanto tempo dura o resultado?',
        answer: 'Os ácidos hialurônicos de alta tecnologia têm durabilidade média de 12 a 24 meses, sendo absorvidos de forma gradual e segura pelo organismo.'
      },
      {
        question: 'O procedimento é doloroso?',
        answer: 'O desconforto é mínimo. Utilizamos anestésicos tópicos específicos e produtos formulados com lidocaína, garantindo uma experiência muito confortável.'
      }
    ]
  },

  {
    id: 'toxina-botulinica',
    name: 'Toxina Botulínica',
    category: 'facial',
    subtitle: 'Suavização natural de linhas de expressão e descanso do olhar',
    description: 'A aplicação de toxina botulínica na Oni Face vai além de paralisar músculos: trata-se de um refinamento dinâmico que relaxa seletivamente as tensões faciais responsáveis por rugas na testa, glabela e olhos (pés de galinha). A dosagem estratégica e a precisão nos pontos de injeção garantem uma expressão leve, descansada e comunicativa, livre do aspecto congelado.',
    benefits: [
      'Suavização eficaz de rugas dinâmicas na fronte, glabela e área periocular',
      'Prevenção inteligente da formação de vincos estáticos profundos',
      'Abertura sutil e descanso do olhar sem elevação artificial da cauda das sobrancelhas',
      'Melhora da textura da pele nas áreas tratadas'
    ],
    indications: [
      'Linhas de expressão na testa e entre as sobrancelhas (glabela)',
      'Rugas ao redor dos olhos ao sorrir (pés de galinha)',
      'Linhas no nariz (bunny lines) e rugas periorais',
      'Prevenção de envelhecimento precoce a partir dos primeiros sinais'
    ],
    duration: '20 a 30 minutos',
    recovery: 'Retorno imediato (evitar deitar ou massagear por 4h)',
    durability: '3 a 6 meses',
    featured: true,
    imageSrc: '/card_facial_injectables.jpg',
    howItWorks: [
      {
        title: '1. Mapeamento da Expressividade',
        desc: 'Análise detalhada das forças de contração muscular durante diversas expressões para definir microdoses personalizadas.'
      },
      {
        title: '2. Aplicação com Agulhas Ultrafinas',
        desc: 'Injeções precisas nos ventres musculares específicos, proporcionando relaxamento focal sem comprometer os músculos vizinhos.'
      },
      {
        title: '3. Início da Ação e Pico',
        desc: 'Os primeiros efeitos tornam-se visíveis entre 48 e 72 horas, com o resultado completo estabelecido em até 15 dias.'
      },
      {
        title: '4. Revisão em 15 Dias',
        desc: 'Consulta de retorno para avaliar a simetria perfeita e realizar microajustes caso seja indicado.'
      }
    ],
    faqs: [
      {
        question: 'Vou ficar com a expressão congelada ou artificial?',
        answer: 'Absolutamente não. Na Oni Face utilizamos técnicas modernas de microdosagem (Baby Botox / Botox Estratégico), preservando totalmente o movimento natural do rosto.'
      },
      {
        question: 'Quando começo a ver o resultado?',
        answer: 'O efeito começa a aparecer entre 2 e 4 dias após a aplicação, alcançando o resultado final em 14 a 15 dias.'
      },
      {
        question: 'Com qual frequência devo refazer?',
        answer: 'O intervalo recomendado é de 4 a 6 meses, evitando a formação de anticorpos e mantendo a musculatura sempre educada e relaxada.'
      }
    ]
  },

  {
    id: 'blefaroplastia',
    name: 'Blefaroplastia',
    category: 'facial',
    subtitle: 'Planejamento do olhar com equipe multidisciplinar',
    description: 'A blefaroplastia é a cirurgia das pálpebras que remove pele e gordura em excesso, para tratar flacidez, bolsas e o aspecto cansado do olhar. No Instituto Oni Face ela é feita por uma equipe multidisciplinar: a Dra. Vanessa Sanabria conduz a avaliação, o planejamento do olhar e o acompanhamento, e o ato cirúrgico fica com a equipe. O olhar é planejado junto com o rosto inteiro, porque nenhum ponto é tratado sozinho.',
    benefits: [
      'Olhar planejado dentro do conjunto do rosto',
      'Avaliação, planejamento e acompanhamento com a Dra. Vanessa',
      'Ato cirúrgico realizado pela equipe multidisciplinar',
      'Indicação definida em avaliação presencial'
    ],
    indications: [
      'Flacidez das pálpebras superiores e/ou inferiores',
      'Bolsas de gordura nas pálpebras',
      'Aspecto cansado ou pesado do olhar',
      'Paciente avaliada presencialmente e ciente do caráter cirúrgico do procedimento'
    ],
    featured: true,
    imageSrc: '/card_blefaroplastia.webp',
    howItWorks: [
      {
        title: '1. Avaliação',
        desc: 'A Dra. Vanessa avalia o olhar e o rosto como um conjunto e conversa com você sobre expectativas, riscos e recuperação.'
      },
      {
        title: '2. Planejamento do olhar',
        desc: 'A Dra. Vanessa planeja o olhar considerando simetria, volume e o desenho do seu rosto.'
      },
      {
        title: '3. Ato cirúrgico com a equipe',
        desc: 'O ato cirúrgico é realizado pela equipe multidisciplinar, em ambiente cirúrgico adequado.'
      },
      {
        title: '4. Acompanhamento',
        desc: 'A Dra. Vanessa acompanha a sua recuperação nos retornos combinados com a equipe.'
      }
    ],
    faqs: [
      {
        question: 'Quem realiza a cirurgia?',
        answer: 'O ato cirúrgico fica com a equipe multidisciplinar. A Dra. Vanessa Sanabria conduz a avaliação, o planejamento do olhar e o acompanhamento.'
      },
      {
        question: 'Como é a recuperação?',
        answer: 'O tempo de recuperação e os cuidados são explicados na avaliação, de acordo com o seu caso.'
      },
      {
        question: 'Quem pode fazer?',
        answer: 'A indicação é definida em avaliação presencial. Em alguns casos, outras abordagens podem ser mais adequadas.'
      }
    ]
  },

  {
    id: 'preenchimento-labial',
    name: 'Preenchimento Labial',
    category: 'facial',
    subtitle: 'Contorno refinado, hidratação profunda e proporção labial perfeita',
    description: 'O Preenchimento Labial na Oni Face tem como assinatura a elegância e o respeito à proporção áurea da boca em relação ao restante do rosto. Utilizamos ácidos hialurônicos ultraflexíveis e específicos para a mucosa labial, entregando definição do arco do cupido, hidratação e volume delicado sem efeito "bico de pato" ou perda da textura natural dos lábios.',
    benefits: [
      'Definição nítida e elegante do contorno labial e arco do cupido',
      'Volume equilibrado e proporcional ao formato dos dentes e queixo',
      'Hidratação profunda da mucosa, suavizando rugas finas ("código de barras")',
      'Correção de assimetrias entre lábio superior e inferior'
    ],
    indications: [
      'Lábios finos congênitos ou que perderam espessura com a idade',
      'Assimetrias de volume ou de contorno entre os lados',
      'Ressecamento crônico e perda de viço na mucosa labial',
      'Busca por lábios hidratados, desenhados e com volume sofisticado'
    ],
    duration: '30 a 45 minutos',
    recovery: '2 a 4 dias para acomodação do inchaço natural',
    durability: '9 a 14 meses',
    featured: true,
    imageSrc: '/labial.jpeg',
    howItWorks: [
      {
        title: '1. Análise Estética e Morfologia',
        desc: 'Avaliação das proporções labiais em repouso e no sorriso, definindo se o foco é contorno, eversão, projeção ou hidratação.'
      },
      {
        title: '2. Anestesia para Conforto Total',
        desc: 'Aplicação de anestésico tópico potente e bloqueio anestésico suave para procedimento 100% indolor.'
      },
      {
        title: '3. Escultura Labial Estratégica',
        desc: 'Depósito milimétrico de ácido hialurônico de alta maleabilidade em pontos selecionados da borda e tubérculos labiais.'
      },
      {
        title: '4. Finalização e Orientações',
        desc: 'Massagem suave de modelagem e orientações de hidratação e cuidados pós-procedimento.'
      }
    ],
    faqs: [
      {
        question: 'Meus lábios vão ficar com aspecto exagerado ou artificial?',
        answer: 'De forma alguma. Dra. Vanessa Sanabria trabalha sob o princípio de que um bom preenchimento labial não é identificado como procedimento, as pessoas apenas notarão que seus lábios estão mais bonitos, hidratados e desenhados.'
      },
      {
        question: 'Dói para fazer preenchimento labial?',
        answer: 'Graças ao nosso protocolo de conforto com anestesia local e produtos contendo lidocaína, a maioria das pacientes relata apenas uma leve pressão durante a aplicação.'
      },
      {
        question: 'O inchaço dura quanto tempo?',
        answer: 'O inchaço inicial é normal e atinge o pico nas primeiras 24 a 48 horas. A partir do 3º ou 4º dia os lábios já começam a mostrar o desenho definitivo, que se consolida em 15 dias.'
      }
    ]
  },

  {
    id: 'bioestimuladores-de-colageno',
    name: 'Bioestimuladores de Colágeno',
    category: 'facial',
    subtitle: 'Estímulo biológico endógeno para firmeza, densidade e sustentação cutânea',
    description: 'Os bioestimuladores de colágeno (como ácido poli-L-lático e hidroxiapatita de cálcio) são o padrão-ouro na regeneração tecidual moderna. Diferente dos preenchedores que apenas ocupam espaço, os bioestimuladores atuam ativando os fibroblastos a produzirem novo colágeno do tipo I e III de forma progressiva. O resultado é uma pele visivelmente mais firme, espessa, elástica e resistente à flacidez ao longo dos meses.',
    benefits: [
      'Estímulo potente e gradual da produção natural de colágeno pelo próprio organismo',
      'Melhora expressiva da densidade, espessura e elasticidade da derme',
      'Tratamento e prevenção da flacidez facial e do "derretimento" dos contornos',
      'Resultados de longa duração com aspecto totalmente natural e progressivo'
    ],
    indications: [
      'Flacidez leve a moderada na face, bochechas e pescoço',
      'Pele fina, com perda de firmeza e elasticidade',
      'Prevenção do envelhecimento tecidual a partir dos 30 anos',
      'Melhora da qualidade global da pele e efeito lifting biológico'
    ],
    duration: '30 a 60 minutos',
    recovery: 'Retorno imediato às atividades normais',
    durability: '18 a 24 meses',
    featured: true,
    imageSrc: '/bioestimuladores_final.jpg',
    howItWorks: [
      {
        title: '1. Mapeamento das Zonas de Flacidez',
        desc: 'Identificação dos vetores de tração e das áreas de maior perda de matriz extracelular na face.'
      },
      {
        title: '2. Diluição e Preparo Farmacêutico',
        desc: 'Preparo individualizado do bioestimulador para garantir dispersão homogênea e conforto na aplicação.'
      },
      {
        title: '3. Aplicação em Rede Subdérmica',
        desc: 'Distribuição uniforme do produto através de cânula na camada dérmica profunda, estimulando os fibroblastos.'
      },
      {
        title: '4. Evolução Biológica Progressiva',
        desc: 'A síntese de colágeno inicia-se em poucas semanas, com pico de melhora da firmeza visível entre 60 e 90 dias.'
      }
    ],
    faqs: [
      {
        question: 'Qual a diferença entre bioestimulador e preenchimento?',
        answer: 'O preenchimento repõe volume instantaneamente ocupando espaço com ácido hialurônico. O bioestimulador induz o seu próprio corpo a fabricar colágeno novo, melhorando a espessura e a firmeza da pele progressivamente sem volumizar.'
      },
      {
        question: 'Quantas sessões são necessárias?',
        answer: 'Geralmente recomenda-se um protocolo inicial de 1 a 3 sessões (espaçadas a cada 30-45 dias), seguido de manutenção anual.'
      },
      {
        question: 'Quando os resultados começam a aparecer?',
        answer: 'Como se trata de um processo biológico celular, os primeiros sinais de firmeza e qualidade da pele surgem a partir da 4ª semana, atingindo o ápice entre 2 e 3 meses.'
      }
    ]
  },

  {
    id: 'fios-de-sustentacao',
    name: 'Fios de Sustentação',
    category: 'facial',
    subtitle: 'Lifting mecânico imediato com reposicionamento tecidual e colágeno',
    description: 'Os Fios de Sustentação de PDO (Polidioxanona) e PLLA são filamentos 100% absorvíveis e biocompatíveis projetados para tracionar suavemente as estruturas caídas da face, reposicionando bochechas, suavizando o sulco nasogeniano e definindo a linha mandibular. Além da tração mecânica imediata, os fios estimulam a formação de um cordão fibroso de colágeno ao longo do seu trajeto de absorção.',
    benefits: [
      'Efeito lifting perceptível logo após o procedimento sem cortes cirúrgicos',
      'Reposicionamento das almofadas de gordura caídas na região malar e mandibular',
      'Estímulo contínuo de neocolagênese ao redor do trajeto do fio',
      'Procedimento minimamente invasivo com anestesia local em consultório'
    ],
    indications: [
      'Ptose (queda) leve a moderada do terço médio e inferior da face',
      'Perda de definição da mandíbula decorrente de flacidez tecidual',
      'Queda da cauda da sobrancelha (Fox Eyes sutil e natural)',
      'Pacientes que buscam efeito lifting sem se submeterem a um facelift cirúrgico'
    ],
    duration: '45 a 90 minutos',
    recovery: '3 a 7 dias com restrição de esforços intensos',
    durability: '12 a 18 meses',
    featured: false,
    imageSrc: '/card_fios-de-sustentacao.webp',
    howItWorks: [
      {
        title: '1. Desenho Vetorial de Tração',
        desc: 'Marcação precisa dos eixos de sustentação e dos pontos de ancoragem anatômica.'
      },
      {
        title: '2. Anestesia Local Focal',
        desc: 'Anestesia suave nos pontos de entrada e saída dos fios, garantindo um procedimento sem dor.'
      },
      {
        title: '3. Inserção e Ancoragem dos Fios',
        desc: 'Passagem dos fios através de microcânulas especiais no plano subcutâneo com tração controlada dos tecidos.'
      },
      {
        title: '4. Ajuste e Conforto',
        desc: 'Acomodação dos tecidos e orientações específicas sobre mímica facial e repouso nos primeiros dias.'
      }
    ],
    faqs: [
      {
        question: 'Os fios ficam visíveis ou perceptíveis ao toque?',
        answer: 'Não. Os fios são inseridos no plano subcutâneo correto, ficando completamente invisíveis e imperceptíveis após o período de cicatrização inicial.'
      },
      {
        question: 'O que acontece com os fios após o tempo de ação?',
        answer: 'Os fios são 100% degradados e absorvidos pelo organismo por hidrólise em cerca de 6 a 8 meses, deixando no seu lugar uma estrutura firme de colágeno que sustenta o resultado por até 18 meses.'
      }
    ]
  },

  {
    id: 'skinbooster',
    name: 'Skinbooster',
    category: 'facial',
    subtitle: 'Hidratação profunda celular, viço instantâneo e refinamento da textura',
    description: 'O Skinbooster é um tratamento injetável com ácido hialurônico fluido micronizado de altíssima pureza, associado a micronutrientes e antioxidantes. Diferente dos cremes que atuam apenas na epiderme superficial, o Skinbooster injeta reservatórios hídricos diretamente na derme profunda, atraindo água e restaurando o viço, o brilho saudável e a elasticidade que a pele perde com o estresse e a exposição solar.',
    benefits: [
      'Hidratação profunda e duradoura de dentro para fora',
      'Melhora instantânea do viço, luminosidade e uniformidade da pele',
      'Suavização de linhas finas ao redor dos olhos e boca',
      'Refinamento dos poros e melhora perceptível da textura ao toque'
    ],
    indications: [
      'Pele ressecada, opaca, sem brilho e desvitalizada',
      'Linhas finas difusas ("craquelado") na face, colo e pescoço',
      'Preparação e recuperação da pele antes ou depois de eventos/viagens',
      'Manutenção preventiva da saúde e longevidade cutânea'
    ],
    duration: '30 a 45 minutos',
    recovery: 'Retorno imediato às atividades normais',
    durability: '6 a 9 meses',
    featured: false,
    imageSrc: '/skinbooster_final.jpg',
    howItWorks: [
      {
        title: '1. Higienização e Anestesia Tópica',
        desc: 'Preparo da pele com higienização profunda e creme anestésico de alta eficácia.'
      },
      {
        title: '2. Microinjeções Dérmicas Precisas',
        desc: 'Distribuição de microgotas de ácido hialurônico na derme através de agulha ultrafina ou cânula.'
      },
      {
        title: '3. Hidratação Contínua dos Tecidos',
        desc: 'As moléculas atraem e retêm água nas camadas profundas, restaurando a elasticidade celular.'
      },
      {
        title: '4. Luminosidade Progressiva',
        desc: 'A pele ganha viço já nos primeiros dias, com melhora contínua nas semanas seguintes.'
      }
    ],
    faqs: [
      {
        question: 'Skinbooster aumenta o volume do meu rosto?',
        answer: 'Não. O ácido hialurônico do Skinbooster é não-volumizador, tendo função exclusivamente de hidratação, viço e estímulo dérmico.'
      },
      {
        question: 'Quantas sessões são indicadas?',
        answer: 'Geralmente recomenda-se um ciclo de 2 a 3 sessões com intervalo mensal para uma hidratação de choque, seguida de manutenção semestral.'
      }
    ]
  },

  {
    id: 'lipo-de-papada',
    name: 'Lipo de Papada',
    category: 'facial',
    subtitle: 'Redução enzimática da gordura submentoniana e definição cervical',
    description: 'A Lipo Enzimática de Papada é um protocolo não-cirúrgico para eliminação da gordura localizada na região submentoniana. Através da aplicação de ativos lipolíticos biocompatíveis (como o ácido deoxicolato), ocorre a quebra seletiva e a eliminação gradual das células adiposas que causam o duplo queixo, devolvendo o ângulo reto e a elegância ao contorno do pescoço e mandíbula.',
    benefits: [
      'Redução progressiva e duradoura da gordura abaixo do queixo',
      'Definição da linha da mandíbula e do ângulo cervicofacial',
      'Procedimento rápido em consultório, sem necessidade de cânulas cirúrgicas ou cortes',
      'Resultados duradouros quando mantido o peso corporal estável'
    ],
    indications: [
      'Gordura submentoniana persistente ("queixo duplo")',
      'Perda de definição na transição entre rosto e pescoço',
      'Pacientes que buscam harmonização do perfil sem intervenção cirúrgica'
    ],
    duration: '30 a 45 minutos',
    recovery: '3 a 5 dias para redução do inchaço natural',
    durability: 'Resultados duradouros com peso estável',
    featured: false,
    imageSrc: '/card_lipo-de-papada.webp',
    howItWorks: [
      {
        title: '1. Mapeamento da Gordura Localizada',
        desc: 'Delimitação da área de gordura submentoniana através de grade com pontos de injeção milimétricos.'
      },
      {
        title: '2. Aplicação com Microagulhas',
        desc: 'Injeção suave do ativo lipolítico diretamente no panículo adiposo sob o queixo.'
      },
      {
        title: '3. Ação Lipolítica Seletiva',
        desc: 'O composto quebra as membranas dos adipócitos, que são metabolizados e eliminados pelo organismo.'
      },
      {
        title: '4. Sessões Seriadas e Avaliação',
        desc: 'Realização de ciclos de 2 a 4 sessões com intervalo de 30 dias para evolução progressiva.'
      }
    ],
    faqs: [
      {
        question: 'A gordura pode voltar após o tratamento?',
        answer: 'As células adiposas eliminadas pelo tratamento enzimático não se regeneram. No entanto, ganhos excessivos de peso podem aumentar o volume das células restantes, por isso recomenda-se manter hábitos saudáveis.'
      },
      {
        question: 'Fica muito inchado após a sessão?',
        answer: 'Sim, o inchaço nos primeiros 3 a 5 dias é uma resposta inflamatória esperada e necessária para o mecanismo de ação da enzima lipolítica.'
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════
  // ── ESTÉTICA CORPORAL ──
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'bioestimuladores-corporais',
    name: 'Bioestimuladores Corporais',
    category: 'corporal',
    subtitle: 'Firmeza, efeito lifting e melhora da textura em glúteos, abdômen, braços e coxas',
    description: 'A aplicação de bioestimuladores de colágeno corporais é indicada para combater a flacidez tecidual profunda, melhorar a sustentação dos glúteos (efeito lifting e arredondamento sutil) e tratar a pele frouxa em áreas críticas como o abdômen pós-parto, a parte interna das coxas e os braços ("tchauzinho"). O tratamento rejuvenesce a estrutura dérmica com naturalidade absoluta.',
    benefits: [
      'Aumento expressivo da firmeza e densidade da pele corporal',
      'Efeito lifting e melhora do contorno e projeção dos glúteos',
      'Tratamento eficaz da flacidez pós-parto ou pós-emagrecimento',
      'Suavização de celulites associadas à frouxidão tecidual'
    ],
    indications: [
      'Flacidez nos glúteos, abdômen, braços, joelhos ou coxas',
      'Glúteos com perda de sustentação, celulite por flacidez ou desníveis',
      'Recuperação da firmeza dérmica após perda de peso ou gestação',
      'Prevenção do envelhecimento corporal e melhora da qualidade da pele'
    ],
    duration: '45 a 75 minutos',
    recovery: '1 a 3 dias',
    durability: '18 a 24 meses',
    featured: true,
    imageSrc: '/card_bioestimuladores.jpg',
    howItWorks: [
      {
        title: '1. Diagnóstico Corporal e Fotodocumentação',
        desc: 'Avaliação das áreas de maior flacidez, tônus muscular e histórico do paciente.'
      },
      {
        title: '2. Vetorização Estratégica',
        desc: 'Marcação dos vetores de sustentação onde o produto atuará com maior eficiência tensora.'
      },
      {
        title: '3. Aplicação Subdérmica Homogênea',
        desc: 'Distribuição do bioestimulador com cânula longa, cobrindo amplas áreas com mínimo desconforto.'
      },
      {
        title: '4. Neocolagênese Contínua',
        desc: 'A síntese de colágeno progride ao longo de 90 dias, conferindo sustentação e toque firme à pele.'
      }
    ],
    faqs: [
      {
        question: 'O bioestimulador substitui o treino físico?',
        answer: 'Não. O bioestimulador atua diretamente na pele e na derme profunda, tratando a flacidez cutânea. A associação com atividade física potencializa os resultados ao tonificar o músculo sob a pele.'
      },
      {
        question: 'Pode ser aplicado no bumbum para empinar?',
        answer: 'Sim, o protocolo de bioestimulação nos glúteos melhora a firmeza da pele, preenche pequenas irregularidades e cria um efeito lifting biológico muito valorizado.'
      }
    ]
  },

  {
    id: 'protocolos-flacidez',
    name: 'Protocolos para Flacidez',
    category: 'corporal',
    subtitle: 'Abordagem combinada para restauração do tônus e firmeza dérmica',
    description: 'Nosso protocolo para flacidez corporal combina tecnologias consagradas e bioativos tensores de alta performance para reestruturar as fibras elásticas da pele. O tratamento é desenhado sob medida após avaliação presencial, atacando a flacidez em múltiplas profundidades para restaurar o tônus e a compactação tecidual.',
    benefits: [
      'Compactação da pele e melhora do tônus tecidual',
      'Estímulo de colágeno e elastina em camadas profundas e superficiais',
      'Redução da frouxidão cutânea em abdômen, flancos e coxas',
      'Resultados progressivos e sustentáveis'
    ],
    indications: [
      'Flacidez de pele pós-emagrecimento ou gestação',
      'Pele frouxa e sem elasticidade nas coxas, braços ou abdômen',
      'Manutenção preventiva da firmeza corporal'
    ],
    duration: '45 a 60 minutos por sessão',
    recovery: 'Imediato',
    durability: 'Protocolo de ciclos com resultados progressivos',
    featured: false,
    imageSrc: '/card_body_planning.jpg',
    howItWorks: [
      {
        title: '1. Mapeamento da Qualidade Cutânea',
        desc: 'Análise do grau de flacidez (leve, moderada ou severa) e espessura do tecido.'
      },
      {
        title: '2. Plano de Ação Combinado',
        desc: 'Definição da sinergia entre bioestimulação injetável e terapias complementares.'
      },
      {
        title: '3. Aplicação das Terapias',
        desc: 'Sessões sequenciais que ativam a regeneração do colágeno e a contração das fibras dérmicas.'
      },
      {
        title: '4. Acompanhamento dos Resultados',
        desc: 'Reavaliação periódica das medidas e da firmeza da área tratada.'
      }
    ],
    faqs: [
      {
        question: 'Quantas sessões são recomendadas?',
        answer: 'O número de sessões varia entre 3 e 6 sessões conforme a gravidade da flacidez e o histórico de cada paciente.'
      }
    ]
  },

  {
    id: 'protocolos-celulite',
    name: 'Protocolos para Celulite',
    category: 'corporal',
    subtitle: 'Tratamento das causas reais: microcirculação, fibroses e flacidez',
    description: 'A celulite não é apenas gordura: é uma alteração multifatorial que envolve retenção hídrica, trave fibrosa repuxando a pele e flacidez de sustentação. Na Oni Face, tratamos a celulite em sua raiz através de protocolos integrados que desfazem as fibroses profundas, estimulam a microcirculação e promovem a firmeza do tecido, alisando o relevo da pele.',
    benefits: [
      'Alisamento visível do relevo cutâneo e atenuação do aspecto "casca de laranja"',
      'Liberação de traves fibróticas que causam os furinhos profundos',
      'Melhora da circulação local e drenagem de toxinas',
      'Reforço da estrutura dérmica com estímulo de colágeno'
    ],
    indications: [
      'Celulite em graus I, II e III nos glúteos, coxas e culotes',
      'Depressões e furinhos localizados resistentes à dieta e exercícios',
      'Pele com retenção e má circulação nos membros inferiores'
    ],
    duration: '40 a 60 minutos por sessão',
    recovery: 'Imediato',
    durability: 'Protocolo de ciclos com manutenção periódica',
    featured: false,
    imageSrc: '/card_silhouettes.jpg',
    howItWorks: [
      {
        title: '1. Classificação do Grau de Celulite',
        desc: 'Identificação dos componentes inflamatórios, fibróticos e de flacidez em cada região.'
      },
      {
        title: '2. Descompressão e Rompimento de Fibroses',
        desc: 'Aplicação de técnicas direcionadas para soltar as traves que repuxam a epiderme para baixo.'
      },
      {
        title: '3. Estímulo Circulatório e Regeneração',
        desc: 'Injeção de mesocócteis bioativos e bioestimuladores para alisar o relevo tecidual.'
      },
      {
        title: '4. Manutenção e Uniformidade',
        desc: 'Orientações de cuidados corporais para preservar a pele lisa e uniforme por longos períodos.'
      }
    ],
    faqs: [
      {
        question: 'Celulite tem cura definitiva?',
        answer: 'A celulite é uma condição fisiológica influenciada por hormônios e genética. O tratamento consegue melhorar dramaticamente o aspecto da pele (eliminando os furinhos aparentes), sendo recomendada manutenção periódica e estilo de vida equilibrado.'
      }
    ]
  },

  {
    id: 'protocolos-gordura-localizada',
    name: 'Enzimas: Gordura Localizada',
    category: 'corporal',
    subtitle: 'Lipoenzimática de alta precisão para redução de depósitos adiposos resistentes',
    description: 'A Lipo Enzimática Corporal (intradermoterapia lipolítica) utiliza mesclas de princípios ativos consagrados capazes de emulsificar e acelerar a quebra das células adiposas em áreas onde a gordura insiste em não sair com treinos e dieta, como flancos, abdômen inferior, interno de coxas e gordurinha do sutiã.',
    benefits: [
      'Redução localizada de medidas em regiões específicas e pontuais',
      'Aceleração da lipólise celular de forma segura e não cirúrgica',
      'Melhora do contorno corporal e caimento das roupas',
      'Procedimento rápido realizado em consultório sem anestesia geral'
    ],
    indications: [
      'Gordura localizada resistente em abdômen, flancos, culotes ou costas',
      'Gordura pré-axilar (gordurinha do sutiã) e interno de coxas',
      'Complemento estratégico para quem busca refinamento de silhueta'
    ],
    duration: '30 a 45 minutos',
    recovery: '1 a 3 dias com discreta sensibilidade local',
    durability: 'Resultados duradouros com estabilidade de peso',
    featured: false,
    imageSrc: '/planejamento-estetica-corporal-facial.webp',
    howItWorks: [
      {
        title: '1. Avaliação Adipométrica',
        desc: 'Medição da prega de gordura na área de interesse e planejamento da dosagem correta.'
      },
      {
        title: '2. Aplicação das Enzimas Lipolíticas',
        desc: 'Injeções subcutâneas finas com mesclas estéreis formuladas para agir diretamente no tecido adiposo.'
      },
      {
        title: '3. Ação Metabólica',
        desc: 'Os ativos decompõem as moléculas de triglicerídeos nas células de gordura, permitindo sua eliminação.'
      },
      {
        title: '4. Ciclo de Sessões',
        desc: 'Sessões quinzenais ou mensais de acordo com a resposta individual e o volume a ser tratado.'
      }
    ],
    faqs: [
      {
        question: 'Quantas sessões são necessárias para ver resultado?',
        answer: 'A maioria dos pacientes nota redução de medidas a partir da 2ª ou 3ª sessão, sendo comuns ciclos de 4 a 6 aplicações para resultados completos.'
      }
    ]
  },

];

export const FEATURED_TREATMENTS = TREATMENTS.filter(t => t.featured);

export const ALL_CATEGORIES: TreatmentCategory[] = ['facial', 'corporal'];

export function getTreatmentsByCategory(category: TreatmentCategory): Treatment[] {
  return TREATMENTS.filter(t => t.category === category);
}

export function getTreatmentById(id: string): Treatment | undefined {
  return TREATMENTS.find(t => t.id === id);
}

export const INDICATIONS: { concern: string; treatments: string[] }[] = [
  {
    concern: 'Linhas e rugas de expressão',
    treatments: ['toxina-botulinica', 'skinbooster', 'bioestimuladores-de-colageno'],
  },
  {
    concern: 'Perda de volume e sustentação',
    treatments: ['harmonizacao-facial', 'bioestimuladores-de-colageno', 'fios-de-sustentacao'],
  },
  {
    concern: 'Definição de contornos faciais',
    treatments: ['harmonizacao-facial', 'lipo-de-papada'],
  },
  {
    concern: 'Flacidez e excesso nas pálpebras',
    treatments: ['blefaroplastia', 'fios-de-sustentacao'],
  },
  {
    concern: 'Lábios: proporção e definição',
    treatments: ['preenchimento-labial'],
  },
  {
    concern: 'Qualidade e hidratação da pele',
    treatments: ['skinbooster', 'bioestimuladores-de-colageno'],
  },
  {
    concern: 'Flacidez facial e sustentação',
    treatments: ['bioestimuladores-de-colageno', 'fios-de-sustentacao', 'harmonizacao-facial'],
  },
  {
    concern: 'Firmeza corporal e glúteos',
    treatments: ['bioestimuladores-corporais', 'protocolos-flacidez'],
  },
  {
    concern: 'Celulite e textura corporal',
    treatments: ['protocolos-celulite', 'bioestimuladores-corporais'],
  },
  {
    concern: 'Gordura localizada e medidas',
    treatments: ['protocolos-gordura-localizada', 'lipo-de-papada'],
  },
];
