import type { Metadata } from 'next';
import PropostaClient from './PropostaClient';

export const metadata: Metadata = {
  title: 'Proposta Comercial | Dra. Vanessa Sanabria · Oni Face',
  description:
    'Proposta exclusiva para criação de site profissional e posicionamento digital da Oni Face · Facial Boutique em Uberlândia, MG.',
  robots: { index: false, follow: false },
};

export default function PropostaPage() {
  return <PropostaClient />;
}
