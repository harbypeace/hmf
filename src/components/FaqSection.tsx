import { useState } from 'react';
import { ChevronDown, MessageCircle, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { FAQ_ITEMS, FOUNDATION_INFO, UI_COPY } from '../data/foundationData';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function FaqSection() {
  const { lang, isRtl } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const whatsappHref = `${FOUNDATION_INFO.whatsappBase}?text=${encodeURIComponent(
    lang === 'ar'
      ? 'مرحباً مؤسسة حربي المنتصر، لدي استفسار تقني بخصوص تطوير نظام مخصص:'
      : 'Hello Harbi Al-Muntasir Foundation, I have an inquiry regarding custom platform architecture:'
  )}`;

  return (
    <section id="faq" className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Heading & Quick Advisory Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-medium text-sky-700">
              {UI_COPY.faq.kicker[lang]}
            </p>
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {UI_COPY.faq.heading[lang]}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {UI_COPY.faq.description[lang]}
            </p>

            {/* Direct Consultation Box */}
            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                <Sparkles className="h-4 w-4 text-sky-600" aria-hidden="true" />
                <span>{lang === 'en' ? 'Direct Technical Advisory' : 'استشارة برمجية مباشرة'}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {UI_COPY.faq.chatPrompt[lang]}
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 text-xs font-semibold text-white transition-colors duration-150 hover:bg-slate-800"
              >
                <MessageCircle className="h-4 w-4 text-sky-400" aria-hidden="true" />
                <span>{UI_COPY.faq.chatBtn[lang]}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Animated Accordion */}
          <div className="lg:col-span-7 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="transition-colors duration-150">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-4 p-5 text-start cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-lg"
                  >
                    <div className="min-w-0 pr-2">
                      <span className="font-mono-tabular text-xs font-medium text-sky-700">
                        0{idx + 1}. {item.category[lang]}
                      </span>
                      <h3 className="mt-1 text-base font-bold text-slate-900 sm:text-lg">
                        {item.question[lang]}
                      </h3>
                    </div>
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-sky-50 text-sky-700 border-sky-200' : ''
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-sm leading-relaxed text-slate-600">
                          <p>{item.answer[lang]}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
