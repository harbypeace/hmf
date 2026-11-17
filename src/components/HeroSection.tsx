import { ArrowDownRight, ArrowUpRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { FOUNDATION_ASSETS, FOUNDATION_INFO, UI_COPY } from '../data/foundationData';

interface HeroSectionProps {
  onStartEstimate: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HeroSection({ onStartEstimate }: HeroSectionProps) {
  const { lang, isRtl } = useLanguage();

  const ecosystemLinks = [
    {
      name: 'lms-yemen.com',
      category: { en: 'Smart Digital School PRO', ar: 'المدرسة الرقمية الذكية PRO' },
      state: { en: 'Production', ar: 'تعمل حالياً' },
      href: 'https://lms-yemen.com',
    },
    {
      name: 'engy-up.vercel.app',
      category: { en: 'Adaptive English Platform (Grades 7–12)', ar: 'منصة إنجليزي تكيفية (صفوف 7–12)' },
      state: { en: 'Live Deployment', ar: 'منشور' },
      href: 'https://engy-up.vercel.app',
    },
    {
      name: 'almontaser.vercel.app',
      category: { en: 'Al-Muta’ahib AI Exam LMS (Grade 9 & 12)', ar: 'المتأهب لاختبارات الصفين 9 و 12' },
      state: { en: 'Live Deployment', ar: 'منشور' },
      href: 'https://almontaser.vercel.app',
    },
    {
      name: lang === 'en' ? 'E-Commerce & Automation' : 'المتاجر الإلكترونية والأتمتة',
      category: { en: 'Published Merchant Stores', ar: 'نشر المتاجر وربط الأتمتة' },
      state: { en: 'Active Delivery', ar: 'تسليم مستمر' },
      href: '#projects',
    },
    {
      name: lang === 'en' ? 'Digital Tender Platform' : 'منصة المناقصات الرقمية',
      category: { en: 'Institutional Procurement', ar: 'مشتريات ومناقصات ذكية' },
      state: { en: 'On the Way', ar: 'قيد التطوير' },
      href: '#tender-platform',
    },
  ];

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200 bg-white"
    >
      {/* Subtle Architectural Dot Grid & Soft Top Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sky-50/70 via-white/40 to-white"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Primary Proposition & Actions */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                className="text-xs font-medium tracking-wide text-sky-700"
              >
                {UI_COPY.hero.kicker[lang]}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.06, ease: EASE_OUT_EXPO }}
                className="mt-4 max-w-2xl text-balance text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.12] tracking-tight text-slate-950"
              >
                {UI_COPY.hero.headline[lang]}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12, ease: EASE_OUT_EXPO }}
                className="mt-5 max-w-[65ch] text-base leading-[1.65] text-slate-600 sm:text-lg"
              >
                {UI_COPY.hero.subheadline[lang]}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18, ease: EASE_OUT_EXPO }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <button
                  type="button"
                  onClick={onStartEstimate}
                  className="inline-flex h-12 items-center gap-2 rounded-lg bg-sky-600 px-6 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-sky-700 hover:shadow-md hover:shadow-sky-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 cursor-pointer"
                >
                  <span>{UI_COPY.hero.primaryCta[lang]}</span>
                  <ArrowDownRight
                    className={`h-4 w-4 ${isRtl ? 'rotate-90' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                <a
                  href="#projects"
                  className="inline-flex h-12 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
                >
                  <span>{UI_COPY.hero.secondaryCta[lang]}</span>
                </a>
              </motion.div>
            </div>

            {/* Proof Strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24, ease: EASE_OUT_EXPO }}
              className="mt-10 grid grid-cols-1 gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3"
            >
              {UI_COPY.hero.proofItems.map((item) => (
                <div key={item.value}>
                  <div className="font-mono-tabular text-lg font-semibold text-slate-950">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">{item.label[lang]}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Official Lockup & Active Ecosystem Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: EASE_OUT_EXPO }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/95 p-5 shadow-xs sm:p-6">
              {/* Official Foundation Banner Image */}
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <img
                  src={FOUNDATION_ASSETS.logoBanner}
                  alt={FOUNDATION_INFO.fullOfficialName[lang]}
                  referrerPolicy="no-referrer"
                  className="mx-auto h-auto max-h-24 w-full object-contain"
                />
              </div>

              {/* Active Deployments Directory */}
              <div className="mt-5 flex-1">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-sm font-semibold text-slate-900">
                    {UI_COPY.hero.matrixTitle[lang]}
                  </h2>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {UI_COPY.hero.matrixSubtitle[lang]}
                  </p>
                </div>

                <ul className="divide-y divide-slate-200">
                  {ecosystemLinks.map((entry) => {
                    const isExternal = entry.href.startsWith('http');
                    return (
                      <li key={entry.name}>
                        <a
                          href={entry.href}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          className="group flex items-center justify-between gap-3 py-3 text-sm transition-all duration-150 hover:text-sky-700"
                        >
                          <div className="min-w-0 transition-transform duration-150 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                            <div className="truncate font-semibold text-slate-900 group-hover:text-sky-700">
                              {entry.name}
                            </div>
                            <div className="mt-0.5 text-xs text-slate-500">
                              {entry.category[lang]} · {entry.state[lang]}
                            </div>
                          </div>
                          <ArrowUpRight
                            className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-150 group-hover:text-sky-600 ${
                              isRtl ? '-scale-x-100' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Direct Founder Contact Footer Row */}
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-200 pt-4 text-xs">
                <span className="truncate text-slate-600 font-medium">
                  {FOUNDATION_INFO.founder[lang]}
                </span>
                <a
                  href={`tel:+967${FOUNDATION_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 font-mono-tabular font-semibold text-sky-700 hover:text-sky-800 whitespace-nowrap shrink-0"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  <span dir="ltr">{FOUNDATION_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
