import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_COPY } from '../data/foundationData';

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
  ];

  const handleMobileLink = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-md"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 36 36"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M4 8L12 3V31L4 27V8Z" fill="#0B1933" />
            <path d="M12 17L24 10V17L12 24V17Z" fill="#0284C7" />
            <path d="M24 10L32 15V31L24 27V10Z" fill="#0EA5E9" />
            <rect x="23" y="2" width="3.5" height="3.5" fill="#0EA5E9" />
            <rect x="28.5" y="2" width="3.5" height="3.5" fill="#0284C7" />
            <rect x="28.5" y="7.5" width="3.5" height="3.5" fill="#0EA5E9" />
          </svg>
          <span className="text-base sm:text-lg font-bold tracking-tight">
            {UI_COPY.nav.brandShort[lang]}
          </span>
        </a>

        {/* Zone 2: 4 Clean Single-Line Text Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-slate-950 hover:underline hover:underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-sm"
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
            className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 text-xs font-semibold text-slate-700 whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 cursor-pointer"
          >
            <Globe className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
            <span>{UI_COPY.nav.langSwitch[lang]}</span>
          </button>

          <button
            type="button"
            onClick={onRequestQuote}
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-lg bg-sky-600 px-4 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 cursor-pointer"
          >
            {UI_COPY.nav.cta[lang]}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle Menu"
            className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleMobileLink}
                className="flex h-11 items-center rounded-lg px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950"
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
              className="mt-2 flex h-11 w-full items-center justify-center rounded-lg bg-sky-600 px-4 text-sm font-semibold text-white hover:bg-sky-700 cursor-pointer"
            >
              {UI_COPY.nav.cta[lang]}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
