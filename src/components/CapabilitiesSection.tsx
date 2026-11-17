import { ArrowRight, BrainCircuit, Code2, Globe, ShoppingBag, Workflow } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { CAPABILITIES, UI_COPY } from '../data/foundationData';

interface CapabilitiesSectionProps {
  onSelectCapability: (presetId: string) => void;
}

const CAPABILITY_ICONS = [Workflow, ShoppingBag, Code2, Globe, BrainCircuit];
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function CapabilitiesSection({ onSelectCapability }: CapabilitiesSectionProps) {
  const { lang, isRtl } = useLanguage();

  return (
    <section id="capabilities" className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium text-sky-700">
            {UI_COPY.capabilities.kicker[lang]}
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {UI_COPY.capabilities.heading[lang]}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {UI_COPY.capabilities.description[lang]}
          </p>
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-6">
          {CAPABILITIES.map((item, idx) => {
            const spanClass =
              idx === 0
                ? 'md:col-span-4 bg-[#0B1933] text-white border-slate-800'
                : 'md:col-span-2 bg-white text-slate-900 border-slate-200 hover:border-sky-300';

            const isDark = idx === 0;
            const Icon = CAPABILITY_ICONS[idx % CAPABILITY_ICONS.length];

            return (
              <motion.article
                key={item.index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.06,
                  ease: EASE_OUT_EXPO,
                }}
                whileHover={{ y: -3 }}
                className={`flex flex-col justify-between rounded-xl border p-6 transition-colors duration-150 ${spanClass}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border ${
                          isDark
                            ? 'border-white/15 bg-white/5 text-sky-400'
                            : 'border-slate-200 bg-slate-50 text-sky-700'
                        }`}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span
                        className={`font-mono-tabular text-sm font-semibold ${
                          isDark ? 'text-sky-400' : 'text-sky-700'
                        }`}
                      >
                        {item.index}
                      </span>
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        isDark ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      {item.practiceTag[lang]}
                    </span>
                  </div>

                  <h3
                    className={`mt-4 text-xl font-bold tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-950'
                    }`}
                  >
                    {item.title[lang]}
                  </h3>

                  <p
                    className={`mt-1.5 text-xs ${
                      isDark ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {item.subtitle[lang]}
                  </p>

                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      isDark ? 'text-slate-200' : 'text-slate-600'
                    }`}
                  >
                    {item.description[lang]}
                  </p>

                  <ul
                    className={`mt-5 space-y-2 border-t pt-4 text-xs ${
                      isDark
                        ? 'border-white/10 text-slate-200'
                        : 'border-slate-100 text-slate-700'
                    }`}
                  >
                    {item.deliverables.map((del) => (
                      <li key={del.en} className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className={isDark ? 'text-sky-400' : 'text-sky-600'}
                        >
                          —
                        </span>
                        <span>{del[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectCapability(item.estimatorPresetId)}
                    className={`group inline-flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer ${
                      isDark
                        ? 'text-sky-300 hover:text-white'
                        : 'text-sky-700 hover:text-sky-900'
                    }`}
                  >
                    <span>{UI_COPY.capabilities.configureLabel[lang]}</span>
                    <ArrowRight
                      className={`h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 ${
                        isRtl ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
