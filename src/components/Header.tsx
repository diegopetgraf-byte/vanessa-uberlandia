"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { FULL_FACE_SUBPAGES } from '@/data/fullFace';
import { getWhatsAppUrl } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

const fullFaceChildren = [
  { label: 'Visão geral: escultura facial', href: '/full-face' },
  ...FULL_FACE_SUBPAGES.map((p) => ({ label: p.nomeCurto, href: p.rota })),
];

const navItems: NavItem[] = [
  { label: 'Oni Face', href: '/#oni-face' },
  { label: 'Full Face', href: '/full-face', children: fullFaceChildren },
  { label: 'Tratamentos', href: '/tratamentos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Mentoria', href: '/#mentoria' },
  { label: 'Contato', href: '/contato' },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopSubOpen, setDesktopSubOpen] = useState(false);
  const subRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [mobileSubOpen, setMobileSubOpen] = useState(() => pathname.startsWith('/full-face'));
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

  // Fecha menus ao trocar de página (ajuste de estado durante a renderização, sem efeito).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setIsMobileMenuOpen(false);
    setDesktopSubOpen(false);
    if (pathname.startsWith('/full-face')) setMobileSubOpen(true);
  }

  useEffect(() => {
    if (!desktopSubOpen && !isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setDesktopSubOpen(false);
      setIsMobileMenuOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (subRef.current && !subRef.current.contains(e.target as Node)) setDesktopSubOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [desktopSubOpen, isMobileMenuOpen]);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-[color,background-color,border-color,box-shadow,transform,opacity,gap] duration-300 ${
          scrolled
            ? 'bg-[#F7F3EC]/96 backdrop-blur-sm shadow-[0_1px_0_0_#D9D2C4]'
            : 'bg-[#F7F3EC]/92 backdrop-blur-sm'
        }`}
      >
        <div className="container-uniq">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo: SVG wordmark */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex-shrink-0 cursor-pointer flex items-center min-h-11"
              aria-label="Oni Face · Facial Boutique, página inicial"
            >
              <img
                src="/marca/logo-oniface.svg"
                alt="Oni Face Facial Boutique"
                width={3411}
                height={1024}
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navegação principal">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.href}
                    ref={subRef}
                    className="relative flex items-center"
                    onMouseEnter={() => setDesktopSubOpen(true)}
                    onMouseLeave={() => setDesktopSubOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`nav-link pl-2.5 pr-1 py-2 rounded-md transition-colors text-[0.78rem] font-medium tracking-wide focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B3A6B] ${
                        isActive(item.href) ? 'text-[#1B3A6B]' : 'text-[#3C3831] hover:text-[#1B3A6B]'
                      }`}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setDesktopSubOpen((v) => !v)}
                      className="flex items-center justify-center w-7 h-11 rounded-md text-[#3C3831] hover:text-[#1B3A6B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B3A6B]"
                      aria-expanded={desktopSubOpen}
                      aria-controls="submenu-full-face"
                      aria-label="Abrir páginas de Full Face"
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopSubOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      id="submenu-full-face"
                      hidden={!desktopSubOpen}
                      className="absolute left-0 top-full pt-2 w-72"
                    >
                      <ul className="rounded-xl border border-[#D9D2C4] bg-[#F7F3EC] shadow-[0_16px_40px_-16px_rgba(27,58,107,0.25)] p-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setDesktopSubOpen(false)}
                              className={`flex items-center min-h-11 px-3 rounded-lg text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1B3A6B] ${
                                pathname === child.href
                                  ? 'bg-[rgba(27,58,107,0.07)] text-[#1B3A6B] font-medium'
                                  : 'text-[#3C3831] hover:bg-[rgba(27,58,107,0.05)] hover:text-[#1B3A6B]'
                              }`}
                              aria-current={pathname === child.href ? 'page' : undefined}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link px-2.5 py-2 rounded-md transition-colors text-[0.78rem] font-medium tracking-wide focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B3A6B] ${
                      isActive(item.href)
                        ? 'text-[#1B3A6B]'
                        : 'text-[#3C3831] hover:text-[#1B3A6B]'
                    }`}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ),
              )}
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
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full border border-[#D9D2C4] text-[#3C3831] transition-colors hover:border-[#1B3A6B] hover:text-[#1B3A6B]"
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
                  <img src="/marca/logo-oniface.svg" alt="Oni Face Facial Boutique" width={3411} height={1024} className="h-10 w-auto" />
                </Link>
                <button
                  onClick={closeMenu}
                  className="flex items-center justify-center w-11 h-11 rounded-full border border-[#D9D2C4] text-[#3C3831] hover:border-[#1B3A6B]"
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
                    {item.children ? (
                      <div>
                        <div className="flex items-center gap-1">
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className={`flex-1 flex items-center min-h-11 py-3 px-4 rounded-lg font-sans text-sm font-medium tracking-wide transition-colors ${
                              pathname === item.href
                                ? 'bg-[rgba(27,58,107,0.07)] text-[#1B3A6B]'
                                : 'text-[#3C3831] hover:text-[#1B3A6B] hover:bg-[rgba(27,58,107,0.04)]'
                            }`}
                            aria-current={pathname === item.href ? 'page' : undefined}
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setMobileSubOpen((v) => !v)}
                            className="flex items-center justify-center w-11 h-11 rounded-lg text-[#3C3831] hover:text-[#1B3A6B] hover:bg-[rgba(27,58,107,0.04)]"
                            aria-expanded={mobileSubOpen}
                            aria-controls="sanfona-full-face"
                            aria-label={mobileSubOpen ? 'Fechar páginas de Full Face' : 'Abrir páginas de Full Face'}
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${mobileSubOpen ? 'rotate-180' : ''}`}
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                        <ul
                          id="sanfona-full-face"
                          hidden={!mobileSubOpen}
                          className="ml-4 mt-1 mb-2 border-l border-[#D9D2C4] pl-2"
                        >
                          {item.children.slice(1).map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={closeMenu}
                                className={`flex items-center min-h-11 px-3 rounded-lg text-[0.875rem] transition-colors ${
                                  pathname === child.href
                                    ? 'text-[#1B3A6B] font-medium bg-[rgba(27,58,107,0.07)]'
                                    : 'text-[#3C3831] hover:text-[#1B3A6B]'
                                }`}
                                aria-current={pathname === child.href ? 'page' : undefined}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`flex items-center min-h-11 py-3 px-4 rounded-lg font-sans text-sm font-medium tracking-wide transition-colors ${
                          isActive(item.href)
                            ? 'bg-[rgba(27,58,107,0.07)] text-[#1B3A6B]'
                            : 'text-[#3C3831] hover:text-[#1B3A6B] hover:bg-[rgba(27,58,107,0.04)]'
                        }`}
                        aria-current={isActive(item.href) ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
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
                <p className="text-center text-[0.75rem] text-[#6B645A] mt-3 tracking-wide uppercase">
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
