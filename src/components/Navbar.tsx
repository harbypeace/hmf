import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FOUNDATION_ASSETS, UI_COPY } from '../data/foundationData';

interface NavbarProps {
  onRequestQuote: () => void;
}

export function Navbar({ onRequestQuote }: NavbarProps) {
  const { lang, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: '#capabilities', label: UI_COPY.nav.capabilities[lang] },
    { href: '#projects', label: UI_COPY.nav.projects[lang] },
    { href: '#tender-platform', label: UI_COPY.nav.tenderPlatform[lang] },
    { href: '#process', label: UI_COPY.nav.process[lang] },
    { href: '#faq', label: UI_COPY.nav.faq[lang] },
  ];

  const handleMobileLink = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-md text-white transition-colors">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark with Official HM Monogram */}
        <a
          href="#top"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md group"
        >
          <img
            src={FOUNDATION_ASSETS.logoEmblem}
            alt="Harbi Al-Muntasir Monogram"
            className="h-8 w-auto object-contain shrink-0 transition-transform duration-150 group-hover:scale-105"
          />
          <span className="text-base sm:text-lg font-bold tracking-tight text-white">
            {UI_COPY.nav.brandShort[lang]}
          </span>
        </a>

        {/* Zone 2: Clean Single-Line Text Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-white hover:underline hover:underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Switcher & Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 text-xs font-semibold text-slate-200 whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
          >
            <Globe className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
            <span>{UI_COPY.nav.langSwitch[lang]}</span>
          </button>

          <button
            type="button"
            onClick={onRequestQuote}
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-lg bg-sky-500 px-4 text-xs font-bold text-slate-950 whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-sky-400 hover:shadow-md hover:shadow-sky-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 cursor-pointer"
          >
            {UI_COPY.nav.cta[lang]}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle Menu"
            className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950 px-4 py-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleMobileLink}
                className="flex h-11 items-center rounded-lg px-3 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onRequestQuote();
              }}
              className="mt-2 flex h-11 w-full items-center justify-center rounded-lg bg-sky-500 px-4 text-sm font-bold text-slate-950 hover:bg-sky-400 cursor-pointer"
            >
              {UI_COPY.nav.cta[lang]}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
