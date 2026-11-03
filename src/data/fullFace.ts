// Páginas Full Face e Sobre (Dra. Vanessa Sanabria, Instituto Oni Face).
// Fonte única: planejamento/PAGINAS-DIEGO-2026-10-13.md (textos da Dra., combinados com o Diego em 13/10/2026).
// Regra: texto da Dra. quase literal, em primeira pessoa. Nada de formação, números, técnicas,
// marcas ou promessas que não estejam na fonte. Pendências da Dra. ficam em REVISAO-DRA-VANESSA.md,
// nunca neste arquivo.

export interface FullFaceSecao {
  titulo: string;
  paragrafos: string[];
}

export interface FullFaceMito {
  crenca: string;
  resposta: string;
}

export interface FullFaceCta {
  titulo: string;
  texto: string;
  botao: string;
  /** Mensagem já preenchida no WhatsApp (CLINIC.whatsapp). */
  mensagemWhatsapp: string;
}

export interface FullFacePage {
  slug: string;
  rota: string;
  /** Rótulo curto para menus e cartões de links relacionados. */
  nomeCurto: string;
  /** Title SEO, 30 a 60 caracteres. */
  title: string;
  /** Meta description, 70 a 155 caracteres. */
  description: string;
  h1: string;
  lead: string;
  heroImage?: string;
  heroAlt?: string;
  secoes: FullFaceSecao[];
  mitos?: FullFaceMito[];
  cta: FullFaceCta;
  /** Slugs de 3 outras páginas Full Face. */
  relacionados: string[];
}

export const FULL_FACE_AVISO = 'Conteúdo informativo. Não substitui a avaliação profissional.';

const CTA_AVALIACAO: FullFaceCta = {
  titulo: 'Agende a sua avaliação facial',
  texto:
    'Aqui a avaliação facial completa vem antes de qualquer decisão, e isso já é combinado no agendamento.',
  botao: 'Agendar avaliação pelo WhatsApp',
  mensagemWhatsapp: 'Olá, Dra. Vanessa. Gostaria de agendar uma avaliação facial.',
};

export const FULL_FACE_PAGES: FullFacePage[] = [
  {
    slug: 'full-face',
    rota: '/full-face',
    nomeCurto: 'Escultura Facial',
    title: 'Escultura Facial e Full Face em Uberlândia',
    description:
      'Full Face como escultura facial: o rosto tratado como um conjunto, com avaliação facial completa antes de qualquer decisão. Instituto Oni Face, Uberlândia.',
    h1: 'Escultura Facial em Uberlândia',
    lead: 'Harmonização pensada como um rosto inteiro, não como uma soma de preenchimentos.',
    heroImage: '/full-face-hero.webp',
    heroAlt:
      'Imagem ilustrativa: rosto feminino com linhas de planejamento facial e detalhes de olhos, nariz, lábios e queixo',
    secoes: [
      {
        titulo: 'Full Face, para mim, é escultura facial',
        paragrafos: [
          'Numa escultura, nada é isolado. Todos os pontos do rosto conversam entre si, e é por isso que não existe harmonia tratando um ponto sozinho.',
          'Preencher só o sulco, só a maçã, só a boca não harmoniza nada: só desloca o problema de lugar.',
        ],
      },
      {
        titulo: 'É detalhe, como uma maquiagem muito bem feita',
        paragrafos: [
          'Eu trabalho a sombra e devolvo a iluminação. Trato volume, sustentação, proporção e qualidade de pele, sempre pensando no rosto como um conjunto.',
        ],
      },
      {
        titulo: 'O que você quer nem sempre é o que você precisa',
        paragrafos: [
          'Muita paciente chega pedindo um procedimento específico porque nunca foi avaliada de verdade. Por isso, aqui, a avaliação facial completa vem antes de qualquer decisão, e isso já é combinado no agendamento.',
          'Eu observo tudo: a sua postura, o seu jeito de falar, o que você aponta quando olha uma foto sua. Tudo comunica o que de fato está te incomodando.',
        ],
      },
    ],
    cta: CTA_AVALIACAO,
    relacionados: ['planejamento', 'resultado-natural', 'mitos'],
  },

  {
    slug: 'resultado-natural',
    rota: '/full-face/resultado-natural',
    nomeCurto: 'Vai ficar artificial?',
    title: 'Harmonização natural em Uberlândia: vai ficar artificial?',
    description:
      'O medo de ficar artificial guia o meu trabalho. Quando o resultado é bem feito, as pessoas não percebem o que foi feito: percebem que você está bem.',
    h1: 'Eu não quero ficar artificial',
    lead:
      'Noventa e nove por cento das minhas pacientes chegam com esse medo. Medo de rosto volumoso demais, de boca exagerada, de virar outra pessoa.',
    secoes: [
      {
        titulo: 'Um medo legítimo',
        paragrafos: ['É um medo legítimo, e ele guia o meu trabalho.'],
      },
      {
        titulo: 'O natural não muda quem você é',
        paragrafos: [
          'Quando o resultado é bem feito, as pessoas ao seu redor não percebem o que foi feito. Elas percebem que você está bem.',
          'A diferença só aparece colocando uma foto de antes e uma de depois lado a lado.',
        ],
      },
      {
        titulo: 'E existe o um por cento',
        paragrafos: [
          'Existe a paciente para quem eu preciso dizer não. Dizer não também é parte do trabalho.',
        ],
      },
    ],
    cta: CTA_AVALIACAO,
    relacionados: ['full-face', 'planejamento', 'mitos'],
  },

  {
    slug: 'mitos',
    rota: '/full-face/mitos',
    nomeCurto: 'Quebra de mitos',
    title: 'Mitos da harmonização facial | Oni Face Uberlândia',
    description:
      'Bioestimulador, bigode chinês, olheira, mandíbula e quantidade de seringas: o que quase toda paciente acredita e que eu preciso corrigir na consulta.',
    h1: 'Mitos da harmonização facial',
    lead: 'O que quase toda paciente acredita, e que eu preciso corrigir na consulta.',
    secoes: [
      {
        titulo: 'O que você quer nem sempre é o que você precisa',
        paragrafos: [
          'Muita paciente chega pedindo um procedimento específico porque nunca foi avaliada de verdade. Por isso, aqui, a avaliação facial completa vem antes de qualquer decisão.',
        ],
      },
    ],
    mitos: [
      {
        crenca: 'Bioestimulador dá volume.',
        resposta: 'Algumas marcas dão, mas não é essa a função dele.',
      },
      {
        crenca: 'Bigode chinês se preenche direto.',
        resposta: 'É o caminho mais rápido para o efeito fofão.',
      },
      {
        crenca: 'Olheira sempre deve ser preenchida.',
        resposta: 'Não. Algumas pioram.',
      },
      {
        crenca: 'Mandíbula marcada fica bem em todo mundo.',
        resposta: 'Não fica. Depende do desenho do rosto.',
      },
      {
        crenca: 'Mais seringa, melhor resultado.',
        resposta:
          'Quantidade não é sustentação. É o planejamento que define o resultado, não o volume de produto.',
      },
    ],
    cta: CTA_AVALIACAO,
    relacionados: ['full-face', 'resultado-natural', 'planejamento'],
  },

  {
    slug: 'planejamento',
    rota: '/full-face/planejamento',
    nomeCurto: 'Como eu planejo o seu rosto',
    title: 'Planejamento facial individual em Uberlândia',
    description:
      'Não existe um protocolo igual para todo mundo. Existe o desenho do seu rosto, e preservar a sua característica é o objetivo do planejamento.',
    h1: 'Como eu planejo o seu rosto',
    lead: 'Não existe um protocolo igual para todo mundo. Existe o desenho do seu rosto.',
    secoes: [
      {
        titulo: 'Primeiro, eu leio o desenho do seu rosto',
        paragrafos: [
          'Quando você senta na minha frente, a primeira coisa que eu faço é ler o desenho do seu rosto. Eu percebo se o natural dali era levemente quadrado ou mais arredondado, e é isso que me diz o que combina com você.',
        ],
      },
      {
        titulo: 'As perguntas que eu me faço antes de qualquer decisão',
        paragrafos: [
          'Preciso afinar? Preciso fazer parecer menor em comprimento? Você é uma pessoa mais delicada ou de presença? Cabe uma boca mais volumosa e sensual, ou algo mais discreto?',
        ],
      },
      {
        titulo: 'É assim que eu evito padronizar rostos',
        paragrafos: [
          'Preservar a sua característica não é uma escolha estética minha. É o objetivo do planejamento.',
        ],
      },
    ],
    cta: CTA_AVALIACAO,
    relacionados: ['full-face', 'mitos', 'resultado-natural'],
  },

  {
    slug: 'aos-30',
    rota: '/full-face/aos-30',
    nomeCurto: 'Full Face aos 30',
    title: 'Full Face aos 30: prevenção em Uberlândia',
    description:
      'Aos 25, 30, a procura é por prevenção. O planejamento é de manutenção, com muito pouco produto, depois de uma avaliação facial completa.',
    h1: 'Full Face aos 30',
    lead: 'Aos 25, 30, a procura é por prevenção.',
    secoes: [
      {
        titulo: 'Chegar antes',
        paragrafos: [
          'É quando a paciente entende que dá para chegar antes, e normalmente pesquisa bioestimulador.',
          'O planejamento aqui é de manutenção, com muito pouco produto.',
        ],
      },
      {
        titulo: 'Bioestimulador dá volume?',
        paragrafos: ['Algumas marcas dão, mas não é essa a função dele.'],
      },
      {
        titulo: 'A avaliação vem antes de qualquer decisão',
        paragrafos: [
          'Muita paciente chega pedindo um procedimento específico porque nunca foi avaliada de verdade. Por isso, aqui, a avaliação facial completa vem antes de qualquer decisão, e isso já é combinado no agendamento.',
        ],
      },
    ],
    cta: CTA_AVALIACAO,
    relacionados: ['aos-40', 'aos-50', 'planejamento'],
  },

  {
    slug: 'aos-40',
    rota: '/full-face/aos-40',
    nomeCurto: 'Harmonização depois dos 35, 40',
    title: 'Harmonização facial depois dos 35, 40 em Uberlândia',
    description:
      'Depois dos 35, 40, o envelhecimento começa a aparecer e as queixas mudam: boca, nariz, contorno, perfil. O rosto planejado como um conjunto.',
    h1: 'Harmonização depois dos 35, 40',
    lead:
      'É quando o envelhecimento começa a aparecer e a paciente já está mais estruturada para cuidar disso.',
    secoes: [
      {
        titulo: 'As queixas mudam',
        paragrafos: ['Boca, nariz, contorno, perfil.'],
      },
      {
        titulo: 'Nenhum ponto é tratado sozinho',
        paragrafos: [
          'Todos os pontos do rosto conversam entre si, e é por isso que não existe harmonia tratando um ponto sozinho. Preencher só o sulco, só a maçã, só a boca não harmoniza nada: só desloca o problema de lugar.',
        ],
      },
      {
        titulo: 'Dentro do desenho do seu rosto',
        paragrafos: [
          'Mandíbula marcada não fica bem em todo mundo. Depende do desenho do rosto. Cabe uma boca mais volumosa e sensual, ou algo mais discreto?',
          'Preservar a sua característica não é uma escolha estética minha. É o objetivo do planejamento.',
        ],
      },
    ],
    cta: CTA_AVALIACAO,
    relacionados: ['aos-30', 'aos-50', 'planejamento'],
  },

  {
    slug: 'aos-50',
    rota: '/full-face/aos-50',
    nomeCurto: 'Rejuvenescimento facial aos 50',
    title: 'Rejuvenescimento facial aos 50 em Uberlândia',
    description:
      'Dos 40 aos 50, entram flacidez e contorno. Depois dos 50, o planejamento é de reconstrução: devolver sustentação antes de refinar qualquer detalhe.',
    h1: 'Rejuvenescimento facial aos 50',
    lead:
      'Dos 40 aos 50, entram flacidez e contorno. Depois dos 50, entra a sensação de derretimento junto.',
    secoes: [
      {
        titulo: 'Um planejamento de reconstrução',
        paragrafos: [
          'Aqui o planejamento é de reconstrução: devolver sustentação antes de refinar qualquer detalhe.',
        ],
      },
      {
        titulo: 'Quantidade não é sustentação',
        paragrafos: [
          'É o planejamento que define o resultado, não o volume de produto.',
          'Eu trabalho a sombra e devolvo a iluminação. Trato volume, sustentação, proporção e qualidade de pele, sempre pensando no rosto como um conjunto.',
        ],
      },
      {
        titulo: 'O natural não muda quem você é',
        paragrafos: [
          'Quando o resultado é bem feito, as pessoas ao seu redor não percebem o que foi feito. Elas percebem que você está bem.',
        ],
      },
    ],
    cta: CTA_AVALIACAO,
    relacionados: ['aos-40', 'aos-30', 'resultado-natural'],
  },

  {
    slug: 'sobre',
    rota: '/sobre',
    nomeCurto: 'Sobre a Dra. Vanessa',
    title: 'Dra. Vanessa Sanabria | Instituto Oni Face Uberlândia',
    description:
      'Dra. Vanessa Sanabria Bevilaqua, cirurgiã-dentista, CRO-76320 MG, no Instituto Oni Face em Uberlândia. Avaliação facial completa antes de qualquer decisão.',
    h1: 'Dra. Vanessa Sanabria',
    lead: 'Cirurgiã-dentista, CRO-76320 MG. Instituto Oni Face, Uberlândia.',
    secoes: [
      {
        titulo: 'O meu jeito de atender',
        paragrafos: [
          'Muita paciente chega pedindo um procedimento porque nunca foi avaliada de verdade. Por isso, aqui, a avaliação facial completa vem antes de qualquer decisão, e já é combinada no agendamento.',
          'Eu não trato pontos isolados. Eu leio o rosto inteiro.',
        ],
      },
    ],
    cta: CTA_AVALIACAO,
    relacionados: ['full-face', 'planejamento', 'resultado-natural'],
  },
];

export const getFullFacePage = (slug: string): FullFacePage | undefined =>
  FULL_FACE_PAGES.find((p) => p.slug === slug);

/** Subpáginas em /full-face/<slug> (exclui o pilar e a página Sobre). */
export const FULL_FACE_SUBPAGES = FULL_FACE_PAGES.filter((p) => p.rota.startsWith('/full-face/'));
