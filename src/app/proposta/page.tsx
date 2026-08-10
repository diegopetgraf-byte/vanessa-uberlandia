import type { Metadata } from 'next';
import PropostaClient from './PropostaClient';

export const metadata: Metadata = {
  title: 'Proposta Comercial | Dra. Fabiana Sobral · Quiet Beauty FS',
  description:
    'Proposta exclusiva para criação de site profissional de estética avançada para a Dra. Fabiana Sobral na Oscar Freire, São Paulo.',
  robots: { index: false, follow: false },
};

export default function PropostaPage() {
  return <PropostaClient />;
}
