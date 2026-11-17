import { useState } from 'react';
import { Monitor } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FOUNDATION_ASSETS } from '../data/foundationData';
import { ProjectVisualTheme } from '../types';

interface ProjectVisualFrameProps {
  theme: ProjectVisualTheme;
  domainLabel: string;
  title: string;
  liveUrl?: string;
  logoPath?: string;
  onOpenScreen?: () => void;
}

export function ProjectVisualFrame({
  theme,
  domainLabel,
  title,
  liveUrl,
  logoPath,
  onOpenScreen,
}: ProjectVisualFrameProps) {
  const { lang } = useLanguage();
  const [frameLoaded, setFrameLoaded] = useState(false);

  if (liveUrl) {
    return (
      <div className="group relative h-56 w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
        {/* Top Browser Bar */}
        <div className="relative z-20 flex h-8 items-center justify-between border-b border-slate-200 bg-white px-3 text-[11px]">
          <div className="flex items-center gap-2 min-w-0">
            {logoPath && (
              <img
                src={logoPath}
                alt={title}
                referrerPolicy="no-referrer"
                className="h-4 w-4 rounded object-contain shrink-0"
              />
            )}
            <span dir="ltr" className="truncate font-mono-tabular font-medium text-slate-700">
              {domainLabel}
            </span>
          </div>
          {onOpenScreen && (
            <button
              type="button"
              onClick={onOpenScreen}
              className="inline-flex items-center gap-1 font-semibold text-sky-700 hover:text-sky-900 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Monitor className="h-3 w-3" aria-hidden="true" />
              <span>{lang === 'en' ? 'Interactive Screen' : 'شاشة تفاعلية'}</span>
            </button>
          )}
        </div>

        {/* Fallback Brand Layer (visible while iframe loads or if blocked) */}
        <div className="absolute inset-x-0 bottom-0 top-8 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-6 text-center">
          {logoPath && (
            <img
              src={logoPath}
              alt={title}
              referrerPolicy="no-referrer"
              className="h-14 w-14 rounded-xl border border-slate-200 bg-white object-contain p-1.5 shadow-xs"
            />
          )}
          <div className="mt-3 text-sm font-bold text-slate-900 line-clamp-1">{title}</div>
          <div className="mt-1 font-mono-tabular text-xs text-slate-500">{domainLabel}</div>
        </div>

        {/* Live Scaled Website Screen Preview */}
        <div
          dir="ltr"
          className={`absolute inset-x-0 bottom-0 top-8 overflow-hidden transition-opacity duration-300 ${
            frameLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <iframe
            src={liveUrl}
            title={title}
            loading="lazy"
            onLoad={() => setFrameLoaded(true)}
            tabIndex={-1}
            className="pointer-events-none absolute left-0 top-0 h-[760px] w-[1280px] origin-top-left border-0 bg-white"
            style={{
              transform: 'scale(0.42)',
            }}
          />
          {onOpenScreen && (
            <button
              type="button"
              onClick={onOpenScreen}
              aria-label={lang === 'en' ? `Open interactive screen for ${title}` : `فتح الشاشة التفاعلية لـ ${title}`}
              className="absolute inset-0 z-10 flex items-end justify-end bg-gradient-to-t from-slate-950/35 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-150 group-hover:opacity-100 cursor-pointer"
            >
              <span className="inline-flex h-8 items-center gap-1.5 rounded-md bg-white px-3 text-xs font-semibold text-slate-900 shadow-sm">
                <Monitor className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
                <span>{lang === 'en' ? 'Expand Live Screen' : 'تكبير الشاشة الحية'}</span>
              </span>
            </button>
          )}
        </div>
      </div>
    );
  }

  // Dedicated Architectural Preview for E-Commerce & Order Automation Practice
  if (theme === 'ecommerce') {
    return (
      <div className="group relative h-56 w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-950">
        {/* Top Browser Bar */}
        <div className="relative z-20 flex h-8 items-center justify-between border-b border-white/10 bg-slate-900/90 px-3 text-[11px] text-white backdrop-blur-md">
          <div className="flex items-center gap-2 min-w-0">
            <span dir="ltr" className="truncate font-mono-tabular font-semibold text-sky-400">
              {domainLabel}
            </span>
          </div>
          {onOpenScreen && (
            <button
              type="button"
              onClick={onOpenScreen}
              className="inline-flex items-center gap-1 font-semibold text-sky-300 hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Monitor className="h-3 w-3" aria-hidden="true" />
              <span>{lang === 'en' ? 'Architecture' : 'البنية والمكونات'}</span>
            </button>
          )}
        </div>

        {/* High-Resolution Photographic Visual Asset */}
        <img
          src={FOUNDATION_ASSETS.ecommerceVisual}
          alt={title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center filter brightness-90 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

        {/* Floating Capability Highlights */}
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between text-[11px] text-white">
          <div className="flex items-center gap-2">
            <span className="rounded bg-black/60 px-2 py-0.5 backdrop-blur-md font-medium text-slate-200">
              {lang === 'en' ? 'Storefront + WhatsApp Sync' : 'متجر + مزامنة واتساب'}
            </span>
          </div>
          {onOpenScreen && (
            <button
              type="button"
              onClick={onOpenScreen}
              className="rounded bg-sky-500 px-2.5 py-1 text-xs font-bold text-slate-950 shadow-sm transition-colors hover:bg-sky-400 cursor-pointer"
            >
              {lang === 'en' ? 'Inspect Details' : 'عرض التفاصيل'}
            </button>
          )}
        </div>
      </div>
    );
  }

  return null;
}
