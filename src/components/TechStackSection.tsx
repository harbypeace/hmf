import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { TECH_STACK_ITEMS, UI_COPY } from '../data/foundationData';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function TechStackSection() {
  const { lang } = useLanguage();

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium text-sky-700">
            {UI_COPY.techStack.kicker[lang]}
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {UI_COPY.techStack.heading[lang]}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {UI_COPY.techStack.description[lang]}
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK_ITEMS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.35,
                delay: idx * 0.05,
                ease: EASE_OUT_EXPO,
              }}
              whileHover={{ y: -2 }}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-colors duration-150 hover:border-sky-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-slate-500">
                    {item.category[lang]}
                  </span>
                  <span className="font-mono-tabular text-[10px] font-semibold text-sky-700">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-bold text-slate-900">
                  {item.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {item.description[lang]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
