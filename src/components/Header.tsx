"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Oni Face', href: '/#oni-face' },
  { label: 'Tratamentos', href: '/tratamentos' },
  { label: 'Resultados', href: '/resultados' },
  { label: 'Dra. Vanessa', href: '/#dra-vanessa' },
  { label: 'Mentoria', href: '/#mentoria' },
  { label: 'Contato', href: '/contato' },
];

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
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    closeMenu();
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
            ? 'bg-[#F7F3EC]/96 backdrop-blur-sm shadow-[0_1px_0_0_#D9D2C4]'
            : 'bg-[#F7F3EC]/92 backdrop-blur-sm'
        }`}
      >
        <div className="container-uniq">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo — uses the real SVG wordmark */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex-shrink-0 cursor-pointer"
              aria-label="Oni Face · Facial Boutique — Página Inicial"
            >
              <img
                src="/header-logo.svg"
                alt="Oni Face · Vanessa Sanabria"
                className="h-8 md:h-10 w-auto"
                style={{ maxWidth: 220 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link px-3 py-2 rounded-md transition-colors text-sm font-medium tracking-wide ${
                    isActive(item.href)
                      ? 'text-[#1B3A6B]'
                      : 'text-[#3C3831] hover:text-[#1B3A6B]'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/proposta"
                className="ml-3 inline-flex items-center gap-1.5 border-l border-[#D9D2C4] pl-4 text-xs font-semibold tracking-wider text-[#1B3A6B] hover:text-[#B8965A] transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#B8965A]" aria-hidden="true" />
                PROPOSTA
              </Link>
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
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[#D9D2C4] text-[#3C3831] transition-colors hover:border-[#1B3A6B] hover:text-[#1B3A6B]"
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
              className="fixed inset-0 z-[100] bg-[#1A1714]/40 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[101] w-80 max-w-[90vw] bg-[#F7F3EC] lg:hidden flex flex-col"
              aria-modal="true"
              role="dialog"
              aria-label="Menu de navegação"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#D9D2C4]">
                <Link href="/" onClick={handleLogoClick} className="cursor-pointer">
                  <img src="/header-logo.svg" alt="Oni Face" className="h-8 w-auto" />
                </Link>
                <button
                  onClick={closeMenu}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-[#D9D2C4] text-[#3C3831] hover:border-[#1B3A6B]"
                  aria-label="Fechar menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

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
                          ? 'bg-[rgba(27,58,107,0.07)] text-[#1B3A6B]'
                          : 'text-[#3C3831] hover:text-[#1B3A6B] hover:bg-[rgba(27,58,107,0.04)]'
                      }`}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.03 + 0.05 }}
                  className="border-t border-[#D9D2C4] mt-2 pt-2"
                >
                  <Link
                    href="/proposta"
                    onClick={closeMenu}
                    className="flex items-center gap-2 py-3 px-4 rounded-lg font-sans text-sm font-semibold tracking-wide text-[#1B3A6B] hover:bg-[rgba(27,58,107,0.04)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B8965A]" aria-hidden="true" />
                    Proposta Estratégica
                  </Link>
                </motion.div>
              </nav>

              <div className="p-6 border-t border-[#D9D2C4] bg-[#EDE7D9]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="btn btn-wine w-full justify-center"
                >
                  Agendar Avaliação
                </a>
                <p className="text-center text-[0.65rem] text-[#8A8278] mt-3 tracking-wide uppercase">
                  Uberlândia, MG
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
