import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  FileSpreadsheet,
  Layers,
  Monitor,
  Send,
  Sparkles,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import {
  FOUNDATION_ASSETS,
  TENDER_ROADMAP,
  TENDER_SIMULATION_BIDS,
  UI_COPY,
} from '../data/foundationData';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function TenderRoadmapSection() {
  const { lang, isRtl } = useLanguage();
  const [activePhaseId, setActivePhaseId] = useState<string>(TENDER_ROADMAP[1].id);
  const [activeViewMode, setActiveViewMode] = useState<'roadmap' | 'simulator' | 'interface'>('roadmap');
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
        {/* Section Header with View Mode Toggle */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between border-b border-white/10 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
            className="max-w-2xl"
          >
            <p className="text-xs font-medium tracking-wide text-sky-400">
              {UI_COPY.tender.kicker[lang]}
            </p>
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-white sm:text-4xl">
              {UI_COPY.tender.heading[lang]}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              {UI_COPY.tender.description[lang]}
            </p>
          </motion.div>

          {/* Interactive Mode Switcher with 3 Distinct Views */}
          <div className="inline-flex flex-wrap items-center rounded-lg border border-white/15 bg-white/5 p-1 self-start lg:self-auto shrink-0 gap-1">
            <button
              type="button"
              onClick={() => setActiveViewMode('roadmap')}
              className={`inline-flex h-9 items-center gap-1.5 rounded-md px-3.5 text-xs font-semibold transition-all cursor-pointer ${
                activeViewMode === 'roadmap'
                  ? 'bg-sky-500 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Layers className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{UI_COPY.tender.tabs?.roadmap[lang] ?? (lang === 'en' ? 'Roadmap Phases' : 'مراحل الإطلاق')}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveViewMode('simulator')}
              className={`inline-flex h-9 items-center gap-1.5 rounded-md px-3.5 text-xs font-semibold transition-all cursor-pointer ${
                activeViewMode === 'simulator'
                  ? 'bg-sky-500 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{UI_COPY.tender.tabs?.simulator[lang] ?? (lang === 'en' ? 'AI Bid Normalization Demo' : 'محاكي تقييم العروض')}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveViewMode('interface')}
              className={`inline-flex h-9 items-center gap-1.5 rounded-md px-3.5 text-xs font-semibold transition-all cursor-pointer ${
                activeViewMode === 'interface'
                  ? 'bg-sky-500 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{UI_COPY.tender.tabs?.interface[lang] ?? (lang === 'en' ? 'Platform Interface' : 'معاينة الواجهة')}</span>
            </button>
          </div>
        </div>

        {/* Content Body Based on View Mode */}
        {activeViewMode === 'roadmap' && (
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left Side: Phase Selector */}
            <div className="lg:col-span-5 space-y-2.5" role="tablist" aria-label="Tender Platform Phases">
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

            {/* Right Side: Interactive Phase Blueprint */}
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
            </div>
          </div>
        )}

        {/* Simulator Mode: AI Bid Normalization Engine Preview */}
        {activeViewMode === 'simulator' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
            className="mt-10 rounded-xl border border-white/15 bg-slate-950/70 p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <div className="text-xs text-sky-300">
                  {lang === 'en' ? 'Active Tender Simulation' : 'محاكاة مناقصة حية'}
                </div>
                <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                  {lang === 'en'
                    ? 'BOQ-2026-092: Unified Server & Campus Networking Hardware'
                    : 'مناقصة رقم 2026-092: تجهيز الخوادم وشبكات الحرم الجامعي'}
                </h3>
              </div>
              <span className="font-mono-tabular text-xs text-sky-400 border border-sky-400/30 bg-sky-500/10 px-2.5 py-1 rounded">
                {lang === 'en' ? 'AI Normalization: Complete' : 'اكتمل التحليل الآلي'}
              </span>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-start text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400">
                    <th className="pb-3 text-start">{lang === 'en' ? 'Supplier Name' : 'اسم المورد'}</th>
                    <th className="pb-3 text-start">{lang === 'en' ? 'Unit Price Analysis' : 'تحليل أسعار الوحدات'}</th>
                    <th className="pb-3 text-start">{lang === 'en' ? 'Technical Match' : 'المطابقة الفنية'}</th>
                    <th className="pb-3 text-start">{lang === 'en' ? 'Warranty' : 'شروط الضمان'}</th>
                    <th className="pb-3 text-end">{lang === 'en' ? 'AI Recommendation' : 'توصية الذكاء الاصطناعي'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {TENDER_SIMULATION_BIDS.map((bid) => (
                    <tr key={bid.id} className="hover:bg-white/[0.02]">
                      <td className="py-4 font-semibold text-white">
                        {bid.vendorName[lang]}
                      </td>
                      <td className="py-4 font-mono-tabular text-slate-300">
                        {bid.unitPricing[lang]}
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono-tabular font-bold text-sky-300">{bid.specCompliance}</span>
                          <span className="text-xs text-slate-400">({bid.complianceLabel[lang]})</span>
                        </div>
                      </td>
                      <td className="py-4 text-xs text-slate-300">
                        {bid.warrantyTerms[lang]}
                      </td>
                      <td className="py-4 text-end">
                        <span
                          className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded ${
                            bid.badgeColor === 'emerald'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : bid.badgeColor === 'sky'
                              ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}
                        >
                          {bid.badgeColor === 'amber' && <AlertCircle className="h-3 w-3" />}
                          {bid.badgeColor === 'emerald' && <CheckCircle2 className="h-3 w-3" />}
                          <span>{bid.aiRank}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-xs leading-relaxed text-slate-300 flex items-start gap-3">
              <FileSpreadsheet className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
              <p>
                {lang === 'en'
                  ? 'Our AI Normalization model parses multi-format vendor proposals (PDF, Excel, scanned tables) to identify hidden unit discrepancies, delivery exemptions, and spec deviations before presentation to the procurement committee.'
                  : 'يقوم نموذج تحليل العروض باستخراج الجداول والمواصفات من عروض الموردين (PDF، إكسل، مستندات ممسوحة) للكشف الآلي عن أي بنود ناقصة أو فروقات في الأسعار قبل عرضها على لجنة البت.'}
              </p>
            </div>
          </motion.div>
        )}

        {/* Interface Mode: High-Resolution Tendering Platform Dashboard Showcase */}
        {activeViewMode === 'interface' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
            className="mt-10 overflow-hidden rounded-xl border border-white/15 bg-slate-950/80 shadow-2xl"
          >
            {/* Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#071124] px-6 py-4">
              <div>
                <span className="font-mono-tabular text-xs font-semibold text-sky-400">
                  {UI_COPY.tender.interfacePreview?.badge[lang]}
                </span>
                <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                  {UI_COPY.tender.interfacePreview?.title[lang]}
                </h3>
              </div>
              <span className="rounded bg-sky-500/10 border border-sky-400/30 px-3 py-1 font-mono-tabular text-xs text-sky-300">
                {lang === 'en' ? 'Flagship Staging Preview' : 'معاينة تجريبية للمنصة'}
              </span>
            </div>

            {/* Generated Photorealistic Visual Showcase */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
              <img
                src={FOUNDATION_ASSETS.tenderVisual}
                alt="Electronic Tender & Procurement Platform Interface"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Architectural Callouts on the image overlay */}
              <div className="absolute inset-x-6 bottom-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-white/15 bg-slate-950/85 p-3.5 backdrop-blur-md">
                  <div className="font-semibold text-sky-300 text-xs">
                    {lang === 'en' ? '01 · Itemized BOQ Parsing' : '01 · تفريغ جداول الكميات'}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-300">
                    {lang === 'en'
                      ? 'Automated line-by-line normalization across vendor bids'
                      : 'مطابقة آلية للبنود والأسعار عبر عروض الموردين'}
                  </div>
                </div>
                <div className="rounded-lg border border-white/15 bg-slate-950/85 p-3.5 backdrop-blur-md">
                  <div className="font-semibold text-sky-300 text-xs">
                    {lang === 'en' ? '02 · AI Scoring Matrix' : '02 · مصفوفة التقييم بالذكاء'}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-300">
                    {lang === 'en'
                      ? 'Automated technical & financial ranking with compliance flags'
                      : 'تصنيف فني ومالي فوري مع رصد أي استثناءات في الشروط'}
                  </div>
                </div>
                <div className="rounded-lg border border-white/15 bg-slate-950/85 p-3.5 backdrop-blur-md">
                  <div className="font-semibold text-sky-300 text-xs">
                    {lang === 'en' ? '03 · Sealed Encryption' : '03 · مظاريف مشفرة ومقفلة'}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-300">
                    {lang === 'en'
                      ? 'Time-locked cryptographic opening at official deadline'
                      : 'فتح مظاريف مشفرة زمنياً عند موعد الجلسة الرسمية'}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 bg-[#071124] px-6 py-4 text-xs leading-relaxed text-slate-300">
              {UI_COPY.tender.interfacePreview?.subtitle[lang]}
            </div>
          </motion.div>
        )}

        {/* Early Access Notification Form Bar */}
        <div className="mt-10 rounded-xl border border-white/15 bg-white/[0.04] p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-base font-semibold text-white">
                {UI_COPY.tender.earlyAccessTitle[lang]}
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                {lang === 'en'
                  ? 'Founding institutional and enterprise cohort invitations dispatched ahead of public release.'
                  : 'أولوية تسجيل خاصة للجهات والمؤسسات الشريكة قبل موعد التدشين العام.'}
              </p>
            </div>

            <form
              onSubmit={handleEarlyAccess}
              noValidate
              className="flex flex-col gap-2.5 sm:flex-row w-full lg:w-auto"
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
                className="h-11 w-full sm:w-72 rounded-lg border border-white/20 bg-slate-950/70 px-4 text-sm text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
              />
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 text-xs font-bold text-slate-950 whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-sky-400 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                <Send className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{UI_COPY.tender.earlyAccessButton[lang]}</span>
              </button>
            </form>
          </div>

          {submitState === 'error' && (
            <p role="alert" className="mt-3 text-xs text-rose-300">
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
    </section>
  );
}
