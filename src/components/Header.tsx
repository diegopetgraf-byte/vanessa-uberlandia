"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Quiet Beauty', href: '/#quiet-beauty' },
  { label: 'Tratamentos', href: '/tratamentos' },
  { label: 'Resultados', href: '/resultados' },
  { label: 'Fabiana Sobral', href: '/#fabiana' },
  { label: 'Instituto FS', href: '/#instituto-fs' },
  { label: 'Contato', href: '/contato' },
];

const Logo = () => (
  <div className="flex items-center">
    <img
      src="/logo-fabi.svg"
      alt="Dra. Fabiana Sobral — Quiet Beauty FS"
      className="h-8 md:h-10 w-auto object-contain"
    />
  </div>
);

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const whatsappUrl = getWhatsAppUrl();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAFAF8]/95 backdrop-blur-sm shadow-[0_1px_0_0_#EAE7E0]'
            : 'bg-[#FAFAF8]/90 backdrop-blur-sm'
        }`}
      >
        <div className="container-uniq">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex-shrink-0"
              aria-label="Clínica FS Fabiana Sobral — Página Inicial"
            >
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link px-3 py-2 rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-[#6B1E2E]'
                      : 'text-[#3C3833] hover:text-[#6B1E2E]'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wine hidden sm:inline-flex py-2.5 px-5 text-[0.7rem]"
                aria-label="Agendar avaliação pelo WhatsApp"
              >
                Agendar Avaliação
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[#EAE7E0] text-[#3C3833] transition-colors hover:border-[#6B1E2E] hover:text-[#6B1E2E]"
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Header spacer */}
      <div className="h-16 md:h-20" aria-hidden="true" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] bg-[#1E1B18]/40 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[101] w-80 max-w-[90vw] bg-[#FAFAF8] lg:hidden flex flex-col"
              aria-modal="true"
              role="dialog"
              aria-label="Menu de navegação"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#EAE7E0]">
                <Link href="/" onClick={closeMenu}>
                  <Logo />
                </Link>
                <button
                  onClick={closeMenu}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-[#EAE7E0] text-[#3C3833] hover:border-[#6B1E2E]"
                  aria-label="Fechar menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 flex flex-col p-6 gap-1 overflow-y-auto" aria-label="Navegação mobile">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 + 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`block py-3 px-4 rounded-lg font-sans text-sm font-medium tracking-wide transition-colors ${
                        isActive(item.href)
                          ? 'bg-[rgba(107,30,46,0.06)] text-[#6B1E2E]'
                          : 'text-[#3C3833] hover:text-[#6B1E2E] hover:bg-[rgba(107,30,46,0.04)]'
                      }`}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-[#EAE7E0] bg-[#F5F3EF]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="btn btn-wine w-full justify-center"
                >
                  Agendar Avaliação
                </a>
                <p className="text-center text-[0.65rem] text-[#9A9188] mt-3 tracking-wide uppercase">
                  R. Oscar Freire, 2249 · São Paulo, SP
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
