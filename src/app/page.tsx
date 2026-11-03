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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://institutooniface.com.br';

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
  openGraph: { url: SITE_URL, type: 'website' },
};

const faqItems = [
  {
    question: 'Como funciona a avaliação na Oni Face?',
    answer: 'A avaliação é uma consulta individualizada onde analisamos minuciosamente a estrutura facial, a dinâmica muscular, o histórico e os objetivos de cada paciente. A partir dessa análise profunda, estruturamos um plano personalizado para que você se reconheça e se sinta ainda mais confiante.',
  },
  {
    question: 'Qual é o carro-chefe da Oni Face?',
    answer: 'Nosso grande diferencial são os Protocolos Faciais Completos (Full Face). Em vez de focar em rugas isoladas, tratamos a face de forma integrada para devolver sustentação, contorno e equilíbrio com total naturalidade.',
  },
  {
    question: 'Como saber qual procedimento é indicado para mim?',
    answer: 'A indicação é feita exclusivamente após a avaliação presencial na Oni Face. Analisamos suas características anatômicas únicas e seus objetivos estéticos para recomendar o planejamento ideal.',
  },
  {
    question: 'O resultado dos procedimentos fica natural?',
    answer: 'A naturalidade e a elegância são nossos pilares absolutos. Acreditamos que a transformação certa não deve descaracterizar sua identidade, mas sim revelar a melhor versão de você mesma.',
  },
  {
    question: 'A Oni Face realiza tratamentos corporais?',
    answer: 'Não. A Oni Face é uma boutique dedicada exclusivamente a procedimentos e estética facial, garantindo máxima especialização e foco absoluto no rejuvenescimento e contorno da face.',
  },
  {
    question: 'Onde está localizada a Oni Face?',
    answer: 'A Oni Face está localizada em Uberlândia, MG. O atendimento é feito de forma exclusiva e com hora marcada em um ambiente boutique acolhedor.',
  },
  {
    question: 'Dra. Vanessa Sanabria oferece cursos para profissionais?',
    answer: 'Sim. Dra. Vanessa ministra aulas, cursos práticos e mentorias individuais para profissionais habilitados que desejam dominar o raciocínio clínico de tratamentos faciais completos.',
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
