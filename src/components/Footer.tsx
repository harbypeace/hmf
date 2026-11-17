import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FOUNDATION_ASSETS, FOUNDATION_INFO, UI_COPY } from '../data/foundationData';

export function Footer() {
  const { lang, isRtl } = useLanguage();

  const liveProjects = [
    { label: 'lms-yemen.com', href: 'https://lms-yemen.com' },
    { label: 'engy-up.vercel.app', href: 'https://engy-up.vercel.app' },
    { label: 'almontaser.vercel.app', href: 'https://almontaser.vercel.app' },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="inline-block rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
              <img
                src={FOUNDATION_ASSETS.logoBanner}
                alt={FOUNDATION_INFO.fullOfficialName[lang]}
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-slate-600">
              {UI_COPY.footer.tagline[lang]}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold text-slate-900">
              {UI_COPY.footer.liveHeading[lang]}
            </h3>
            <ul className="mt-3 space-y-2.5 text-xs text-slate-600">
              {liveProjects.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-sky-700"
                  >
                    <span dir="ltr">{link.label}</span>
                    <ArrowUpRight
                      className={`h-3 w-3 ${isRtl ? '-scale-x-100' : ''}`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
              <li>
                <a href="#tender-platform" className="hover:text-sky-700">
                  {lang === 'en' ? 'Tender Platform Roadmap' : 'خارطة منصة المناقصات'}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold text-slate-900">
              {UI_COPY.footer.contactHeading[lang]}
            </h3>
            <ul className="mt-3 space-y-2.5 text-xs text-slate-600">
              <li>
                <a
                  href={`tel:+967${FOUNDATION_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 hover:text-sky-700"
                >
                  <Phone className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
                  <span dir="ltr" className="font-mono-tabular">
                    {FOUNDATION_INFO.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${FOUNDATION_INFO.email}`}
                  className="inline-flex items-center gap-2 hover:text-sky-700"
                >
                  <Mail className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
                  <span dir="ltr">{FOUNDATION_INFO.email}</span>
                </a>
              </li>
              <li className="text-slate-500">
                {FOUNDATION_INFO.founder[lang]} · {FOUNDATION_INFO.location[lang]}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {UI_COPY.footer.rights[lang]}</p>
          <p>{FOUNDATION_INFO.location[lang]}</p>
        </div>
      </div>
    </footer>
  );
}
