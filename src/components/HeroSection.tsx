import { ArrowDownRight, ArrowUpRight, Phone, Sparkles } from 'lucide-react';
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
      className="relative overflow-hidden border-b border-slate-200 bg-slate-950 text-white"
    >
      {/* Background Hero Generated Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={FOUNDATION_ASSETS.heroBanner}
          alt="Harbi Al-Muntasir Foundation Technology Headquarters"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-40 scale-105 filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Primary Proposition & Actions */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md"
              >
                <Sparkles className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                <span>{UI_COPY.hero.kicker[lang]}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.06, ease: EASE_OUT_EXPO }}
                className="mt-6 max-w-2xl text-balance text-[clamp(2.5rem,4.5vw,4rem)] font-extrabold leading-[1.08] tracking-tight text-white"
              >
                {UI_COPY.hero.headline[lang]}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12, ease: EASE_OUT_EXPO }}
                className="mt-6 max-w-[65ch] text-base leading-[1.7] text-slate-300 sm:text-lg"
              >
                {UI_COPY.hero.subheadline[lang]}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18, ease: EASE_OUT_EXPO }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <button
                  type="button"
                  onClick={onStartEstimate}
                  className="inline-flex h-13 items-center gap-2.5 rounded-xl bg-sky-500 px-7 text-sm font-bold text-slate-950 whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 cursor-pointer"
                >
                  <span>{UI_COPY.hero.primaryCta[lang]}</span>
                  <ArrowDownRight
                    className={`h-4 w-4 ${isRtl ? 'rotate-90' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                <a
                  href="#projects"
                  className="inline-flex h-13 items-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white whitespace-nowrap shrink-0 backdrop-blur-sm transition-all duration-150 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <span>{UI_COPY.hero.secondaryCta[lang]}</span>
                </a>
              </motion.div>
            </div>

            {/* Proof Strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24, ease: EASE_OUT_EXPO }}
              className="mt-12 grid grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3"
            >
              {UI_COPY.hero.proofItems.map((item) => (
                <div key={item.value}>
                  <div className="font-mono-tabular text-xl font-bold text-sky-400">
                    {item.value}
                  </div>
                  <div className="mt-1.5 text-xs text-slate-300">{item.label[lang]}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Official Lockup & Active Ecosystem Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: EASE_OUT_EXPO }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/15 bg-slate-900/80 p-6 backdrop-blur-xl shadow-2xl">
              {/* Official Foundation Registered Brand Card */}
              <div className="rounded-xl border border-white/10 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                <img
                  src={FOUNDATION_ASSETS.logoBanner}
                  alt={FOUNDATION_INFO.fullOfficialName[lang]}
                  referrerPolicy="no-referrer"
                  className="mx-auto h-auto max-h-20 w-full object-contain"
                />
                <div className="mt-2 text-center text-[11px] font-medium text-slate-500">
                  {lang === 'en'
                    ? 'Registered Foundation for IT & Artificial Intelligence'
                    : 'كيان رسمي معتمد لتقنية المعلومات والذكاء الاصطناعي'}
                </div>
              </div>

              {/* Active Deployments Directory */}
              <div className="mt-6 flex-1">
                <div className="border-b border-white/10 pb-3">
                  <h2 className="text-sm font-bold tracking-wide text-white">
                    {UI_COPY.hero.matrixTitle[lang]}
                  </h2>
                  <p className="mt-0.5 text-xs text-slate-400">
                    {UI_COPY.hero.matrixSubtitle[lang]}
                  </p>
                </div>

                <ul className="divide-y divide-white/10">
                  {ecosystemLinks.map((entry) => {
                    const isExternal = entry.href.startsWith('http');
                    return (
                      <li key={entry.name}>
                        <a
                          href={entry.href}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          className="group flex items-center justify-between gap-3 py-3.5 text-sm transition-all duration-150 hover:text-sky-300"
                        >
                          <div className="min-w-0 transition-transform duration-150 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                            <div className="truncate font-semibold text-white group-hover:text-sky-300">
                              {entry.name}
                            </div>
                            <div className="mt-0.5 text-xs text-slate-400">
                              {entry.category[lang]} · {entry.state[lang]}
                            </div>
                          </div>
                          <ArrowUpRight
                            className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-150 group-hover:text-sky-400 ${
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
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs">
                <span className="truncate text-slate-300 font-medium">
                  {FOUNDATION_INFO.founder[lang]}
                </span>
                <a
                  href={`tel:+967${FOUNDATION_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 font-mono-tabular font-semibold text-sky-400 hover:text-sky-300 whitespace-nowrap shrink-0"
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
