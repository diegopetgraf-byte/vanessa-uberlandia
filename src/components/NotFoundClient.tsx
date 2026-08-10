'use client';

import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const NotFoundClient = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FAFAF8' }}>
      <Header />
      <main className="flex-1 flex items-center justify-center section">
        <div className="container-uniq">
          <div className="max-w-lg mx-auto text-center flex flex-col items-center gap-8">
            <p className="font-heading text-9xl text-[#EAE7E0] leading-none">404</p>
            <div className="space-y-3">
              <h1 className="text-headline">Página não encontrada</h1>
              <p className="text-sm text-[#9A9188] leading-relaxed">
                A página que você está procurando não existe ou foi movida.
              </p>
            </div>
            <Link href="/" className="btn btn-wine">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Voltar ao início
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundClient;
