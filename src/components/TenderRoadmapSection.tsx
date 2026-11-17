import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { TENDER_ROADMAP, UI_COPY } from '../data/foundationData';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function TenderRoadmapSection() {
  const { lang } = useLanguage();
  const [activePhaseId, setActivePhaseId] = useState<string>(TENDER_ROADMAP[1].id);
  const [contactInput, setContactInput] = useState('');
  const [submitState, setSubmitState] = useState<'idle' | 'error' | 'success'>('idle');

  const activePhase =
    TENDER_ROADMAP.find((phase) => phase.id === activePhaseId) ?? TENDER_ROADMAP[0];

  const handleEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = contactInput.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned);
    const isValidPhone = /^[+\d\s()-]{7,20}$/.test(cleaned);

    if (!isValidEmail && !isValidPhone) {
      setSubmitState('error');
      return;
    }

    setSubmitState('success');
    setContactInput('');
  };

  return (
    <section
      id="tender-platform"
      className="relative overflow-hidden border-b border-slate-800 bg-[#0B1933] py-16 text-white sm:py-20"
    >
      {/* Subtle Architectural Radial Highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Side: Narrative + Phase Selector */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-medium tracking-wide text-sky-400">
              {UI_COPY.tender.kicker[lang]}
            </p>
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-white sm:text-4xl">
              {UI_COPY.tender.heading[lang]}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              {UI_COPY.tender.description[lang]}
            </p>

            {/* Phase Selector Tabs */}
            <div className="mt-8 space-y-2.5" role="tablist" aria-label="Tender Platform Phases">
              {TENDER_ROADMAP.map((phase) => {
                const isActive = phase.id === activePhaseId;
                return (
                  <button
                    key={phase.id}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setActivePhaseId(phase.id)}
                    className={`relative w-full rounded-xl border p-4 text-start transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                      isActive
                        ? 'border-sky-400 bg-white/10'
                        : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono-tabular text-xs font-semibold text-sky-300">
                        {phase.phaseNumber}. {phase.targetWindow[lang]}
                      </span>
                      <span className="text-xs text-slate-300">{phase.status[lang]}</span>
                    </div>
                    <div className="mt-1.5 text-sm font-semibold text-white">
                      {phase.title[lang]}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Interactive Phase Blueprint + Early Access */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
                className="rounded-xl border border-white/15 bg-slate-950/60 p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <div className="text-xs text-sky-300">
                      {activePhase.targetWindow[lang]} · {activePhase.status[lang]}
                    </div>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      {activePhase.title[lang]}
                    </h3>
                  </div>
                  <span className="font-mono-tabular text-xs text-slate-400">
                    Phase {activePhase.phaseNumber} / 04
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {activePhase.summary[lang]}
                </p>

                {/* Active Modules */}
                <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  {activePhase.modules.map((mod) => (
                    <li
                      key={mod.en}
                      className="rounded-lg border border-white/10 bg-white/[0.04] p-3 text-xs leading-snug text-slate-200"
                    >
                      {mod[lang]}
                    </li>
                  ))}
                </ul>

                {/* Interactive Procurement Board Preview */}
                <div className="mt-6 overflow-hidden rounded-lg border border-white/10 bg-[#071124]">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-[11px] text-slate-400">
                    <span>
                      {lang === 'en'
                        ? 'System Workflow Preview'
                        : 'معاينة سير العمل داخل المنصة'}
                    </span>
                    <span className="font-mono-tabular text-sky-300">
                      {lang === 'en' ? 'Tender Engine Blueprint' : 'نموذج لوحة المناقصات'}
                    </span>
                  </div>
                  <div className="divide-y divide-white/10">
                    {activePhase.previewRows.map((row) => (
                      <div
                        key={row.ref}
                        className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <span className="font-mono-tabular text-sky-300">{row.ref}</span>
                            <span aria-hidden="true">·</span>
                            <span>{row.sector[lang]}</span>
                          </div>
                          <div className="mt-0.5 truncate text-sm font-medium text-white">
                            {row.title[lang]}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 shrink-0 text-xs">
                          <span className="font-mono-tabular text-slate-300">
                            {row.bidsCount} {lang === 'en' ? 'Bids' : 'عروض'}
                          </span>
                          <span className="font-medium text-sky-300">
                            {row.state[lang]}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Early Access Notification Form */}
            <div className="rounded-xl border border-white/15 bg-white/[0.04] p-6">
              <h3 className="text-base font-semibold text-white">
                {UI_COPY.tender.earlyAccessTitle[lang]}
              </h3>

              <form
                onSubmit={handleEarlyAccess}
                noValidate
                className="mt-3 flex flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="tender-early-access" className="sr-only">
                  {UI_COPY.tender.earlyAccessPlaceholder[lang]}
                </label>
                <input
                  id="tender-early-access"
                  type="text"
                  value={contactInput}
                  onChange={(e) => {
                    setContactInput(e.target.value);
                    if (submitState !== 'idle') setSubmitState('idle');
                  }}
                  placeholder={UI_COPY.tender.earlyAccessPlaceholder[lang]}
                  className="h-11 flex-1 rounded-lg border border-white/20 bg-slate-950/70 px-4 text-sm text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                />
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 text-xs font-semibold text-slate-950 whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-sky-400 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{UI_COPY.tender.earlyAccessButton[lang]}</span>
                </button>
              </form>

              {submitState === 'error' && (
                <p role="alert" className="mt-2.5 text-xs text-rose-300">
                  {UI_COPY.tender.earlyAccessError[lang]}
                </p>
              )}

              {submitState === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className="mt-3 flex items-center gap-2 text-xs text-sky-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{UI_COPY.tender.earlyAccessSuccess[lang]}</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
