import { CheckCircle2, Cpu, Layers, Rocket, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { PROCESS_STEPS, UI_COPY } from '../data/foundationData';

const STEP_ICONS = [Search, Layers, Cpu, Rocket];
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ProcessSection() {
  const { lang } = useLanguage();

  return (
    <section id="process" className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium text-sky-700">
            {UI_COPY.process.kicker[lang]}
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {UI_COPY.process.heading[lang]}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {UI_COPY.process.description[lang]}
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx % STEP_ICONS.length];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.06,
                  ease: EASE_OUT_EXPO,
                }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-sky-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-sky-700">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="font-mono-tabular text-xs font-semibold text-slate-400">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-950">
                    {step.title[lang]}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description[lang]}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-medium text-sky-700">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{step.output[lang]}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
