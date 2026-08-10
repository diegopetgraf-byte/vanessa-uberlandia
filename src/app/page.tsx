import { Metadata } from 'next';
import { HomeClient } from '@/components/HomeClient';
import {
  JsonLd,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
  generatePersonSchema,
  generateFAQSchema,
} from '@/lib/seo/schemas';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080';

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
  openGraph: { url: SITE_URL, type: 'website' },
};

const faqItems = [
  {
    question: 'Como funciona a avaliação?',
    answer: 'A avaliação é uma consulta individualizada onde analisamos a estrutura facial, o histórico, os objetivos e as expectativas de cada paciente. É a partir dessa escuta e análise que o planejamento de tratamento é construído.',
  },
  {
    question: 'Os tratamentos são definidos na primeira consulta?',
    answer: 'Nem sempre. Em alguns casos, o planejamento é apresentado na avaliação inicial. Em outros, pode ser necessário um acompanhamento mais detalhado antes de definir a melhor estratégia para cada paciente.',
  },
  {
    question: 'Como saber qual procedimento é indicado para mim?',
    answer: 'A indicação é feita exclusivamente após avaliação presencial, com análise individual das suas características, objetivos e momento. Não existe protocolo padrão — cada tratamento é planejado para cada pessoa.',
  },
  {
    question: 'O resultado fica natural?',
    answer: 'A naturalidade é um princípio central do método Quiet Beauty FS. O objetivo não é criar um novo rosto, mas compreender, valorizar e reestruturar o que já existe — de forma elegante, progressiva e respeitosa à identidade de cada paciente.',
  },
  {
    question: 'É possível combinar diferentes tratamentos?',
    answer: 'Sim. A combinação de procedimentos é frequentemente parte do planejamento estratégico individualizado, sempre definida com base na avaliação e nos objetivos de cada paciente.',
  },
  {
    question: 'Como funciona o planejamento de rejuvenescimento?',
    answer: 'O planejamento parte de uma avaliação da estrutura facial, identificando o que mudou com o tempo e qual estratégia é mais adequada para recuperar equilíbrio, sustentação e vitalidade — de forma progressiva e natural.',
  },
  {
    question: 'A Clínica FS realiza tratamentos corporais?',
    answer: 'Sim. Além dos tratamentos faciais, a Clínica FS oferece protocolos corporais para firmeza, flacidez, celulite e gordura localizada, sempre mediante avaliação e indicação profissional.',
  },
  {
    question: 'Onde fica a Clínica FS?',
    answer: 'A Clínica FS está localizada no bairro Jardins, em São Paulo, SP. Entre em contato pelo WhatsApp para confirmar o endereço e os horários disponíveis.',
  },
  {
    question: 'Como agendar uma avaliação?',
    answer: 'O agendamento é feito pelo WhatsApp. Entre em contato e retornaremos para confirmar o melhor horário para você.',
  },
  {
    question: 'A Fabiana Sobral oferece cursos para profissionais?',
    answer: 'Sim. Através do Instituto FS, Fabiana ministra cursos, imersões e treinamentos voltados para médicos, biomédicos, dentistas e profissionais habilitados na área da estética.',
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={[
        generateOrganizationSchema(),
        generateWebSiteSchema(),
        generateLocalBusinessSchema(),
        generatePersonSchema(),
        generateFAQSchema(faqItems),
      ]} />
      <HomeClient />
    </>
  );
}
