import React, { useEffect, useMemo, useState } from 'react';
import { Check, CheckCircle2, Copy, MessageCircle, Phone, RotateCcw, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import {
  ESTIMATOR_ADDONS,
  ESTIMATOR_TYPES,
  FOUNDATION_INFO,
  UI_COPY,
} from '../data/foundationData';

interface EstimatorInquirySectionProps {
  selectedPresetId: string;
  onPresetChange: (presetId: string) => void;
}

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotate: number;
  color: string;
  width: number;
  height: number;
  delay: number;
}

const CONFETTI_COLORS = ['#0284C7', '#0EA5E9', '#0B1933', '#10B981', '#F59E0B', '#38BDF8'];

const CONFETTI_PIECES: ConfettiPiece[] = Array.from({ length: 28 }, (_, i) => {
  const angle = (i / 28) * Math.PI * 2;
  const distance = 65 + (i % 5) * 28;
  return {
    id: i,
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance - 24,
    rotate: (i % 2 === 0 ? 1 : -1) * (120 + i * 25),
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    width: i % 3 === 0 ? 8 : 6,
    height: i % 2 === 0 ? 5 : 8,
    delay: (i % 4) * 0.03,
  };
});

export function EstimatorInquirySection({
  selectedPresetId,
  onPresetChange,
}: EstimatorInquirySectionProps) {
  const { lang } = useLanguage();

  const [selectedAddons, setSelectedAddons] = useState<string[]>(['bilingual']);
  const [pace, setPace] = useState<'standard' | 'fast'>('standard');

  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [celebrateKey, setCelebrateKey] = useState(0);
  const [copiedToast, setCopiedToast] = useState(false);

  const activeType = useMemo(
    () => ESTIMATOR_TYPES.find((t) => t.id === selectedPresetId) ?? ESTIMATOR_TYPES[0],
    [selectedPresetId]
  );

  const calculation = useMemo(() => {
    const addonRecords = ESTIMATOR_ADDONS.filter((a) => selectedAddons.includes(a.id));
    const extraWeeks = addonRecords.reduce((acc, item) => acc + item.weeks, 0);
    const totalWeight =
      activeType.complexityWeight +
      addonRecords.reduce((acc, item) => acc + item.complexityWeight, 0);

    const rawWeeks = activeType.baseWeeks + extraWeeks;
    const finalWeeks =
      pace === 'fast' ? Math.max(2, Math.ceil(rawWeeks * 0.75)) : rawWeeks;

    const scopeTier =
      totalWeight >= 6
        ? { en: 'Enterprise Architecture', ar: 'منظومة مؤسسية متكاملة' }
        : totalWeight >= 3
        ? { en: 'Growth Platform', ar: 'منصة نمو متكاملة' }
        : { en: 'Core Launch Build', ar: 'إطلاق أساسي سريع' };

    return {
      weeks: finalWeeks,
      scopeTier,
      addonRecords,
    };
  }, [activeType, selectedAddons, pace]);

  const buildScopeSummaryText = () => {
    const modulesText =
      calculation.addonRecords.length > 0
        ? calculation.addonRecords.map((m) => m.label[lang]).join(' + ')
        : lang === 'en'
        ? 'Core configuration only'
        : 'النطاق الأساسي فقط';

    if (lang === 'ar') {
      return `نوع المشروع: ${activeType.label.ar}\nالوحدات المضافة: ${modulesText}\nالجدول الزمني: ${
        pace === 'fast' ? 'مسار سريع' : 'تنفيذ قياسي'
      } (${calculation.weeks} أسابيع تقريباً)\nمستوى النطاق: ${calculation.scopeTier.ar}`;
    }

    return `Solution: ${activeType.label.en}\nModules: ${modulesText}\nSchedule: ${
      pace === 'fast' ? 'Priority Track' : 'Standard Pace'
    } (~${calculation.weeks} weeks)\nScope Tier: ${calculation.scopeTier.en}`;
  };

  useEffect(() => {
    if (!brief.trim()) {
      setBrief(buildScopeSummaryText());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPresetId]);

  const handleToggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const handleAttachScope = () => {
    setBrief(buildScopeSummaryText());
    setSubmitted(false);
  };

  const handleCopyScope = async () => {
    const textToCopy = buildScopeSummaryText();
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2600);
    } catch {
      // fallback
    }
  };

  const whatsappHref = useMemo(() => {
    const scopeBlock = buildScopeSummaryText();
    const clientLine =
      fullName.trim() || organization.trim()
        ? `${lang === 'ar' ? 'الاسم' : 'Name'}: ${fullName || '-'}\n${
            lang === 'ar' ? 'الجهة' : 'Organization'
          }: ${organization || '-'}\n${lang === 'ar' ? 'الهاتف' : 'Phone'}: ${phone || '-'}\n`
        : '';
    const notesLine = brief.trim() ? `\n${brief.trim()}` : `\n${scopeBlock}`;
    const header =
      lang === 'ar'
        ? 'مرحباً مؤسسة حربي المنتصر، أرغب في مناقشة طلب مشروع جديد:'
        : 'Hello Harbi Al-Muntasir Foundation, I would like to discuss a project inquiry:';

    return `${FOUNDATION_INFO.whatsappBase}?text=${encodeURIComponent(
      `${header}\n\n${clientLine}${notesLine}`
    )}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullName, organization, phone, brief, lang, calculation, pace]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      nextErrors.fullName =
        lang === 'en' ? 'Please enter your full name.' : 'يرجى إدخال الاسم الكامل.';
    }

    const phoneCleaned = phone.trim();
    if (!/^[+\d\s()-]{7,20}$/.test(phoneCleaned)) {
      nextErrors.phone =
        lang === 'en'
          ? 'Please enter a valid phone or WhatsApp number.'
          : 'يرجى إدخال رقم هاتف أو واتساب صحيح.';
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email =
        lang === 'en'
          ? 'Please enter a valid email address.'
          : 'يرجى إدخال بريد إلكتروني صحيح.';
    }

    if (!brief.trim() || brief.trim().length < 10) {
      nextErrors.brief =
        lang === 'en'
          ? 'Please include a short description of your project.'
          : 'يرجى كتابة نبذة مختصرة عن المشروع المطلوب.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitted(true);
    setCelebrateKey((k) => k + 1);
  };

  const handleResetSubmission = () => {
    setSubmitted(false);
  };

  return (
    <section id="estimator" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium text-sky-700">
            {UI_COPY.estimator.kicker[lang]}
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {UI_COPY.estimator.heading[lang]}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {UI_COPY.estimator.description[lang]}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Interactive Project Scope Configurator (Zero Money Figures) */}
          <div className="lg:col-span-7 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            {/* Step 1: Primary Solution */}
            <div>
              <h3 className="text-sm font-bold text-slate-950">
                {UI_COPY.estimator.step1[lang]}
              </h3>
              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {ESTIMATOR_TYPES.map((type) => {
                  const isSelected = type.id === activeType.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => onPresetChange(type.id)}
                      className={`rounded-xl border p-4 text-start transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${
                        isSelected
                          ? 'border-sky-600 bg-white ring-1 ring-sky-600'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-slate-950">
                          {type.label[lang]}
                        </span>
                        <span className="font-mono-tabular text-xs font-medium text-sky-700">
                          ~{type.baseWeeks} {UI_COPY.estimator.weeksUnit[lang]}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {type.description[lang]}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Technical Modules */}
            <div className="mt-7 border-t border-slate-200 pt-6">
              <h3 className="text-sm font-bold text-slate-950">
                {UI_COPY.estimator.step2[lang]}
              </h3>
              <div className="mt-3 space-y-2">
                {ESTIMATOR_ADDONS.map((addon) => {
                  const checked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      role="checkbox"
                      aria-checked={checked}
                      onClick={() => handleToggleAddon(addon.id)}
                      className={`flex w-full items-center justify-between gap-3 rounded-lg border px-4 py-3 text-start transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${
                        checked
                          ? 'border-sky-600 bg-white text-slate-950'
                          : 'border-slate-200 bg-white/70 text-slate-700 hover:bg-white'
                      }`}
                    >
                      <span className="flex items-center gap-3 text-xs font-medium sm:text-sm">
                        <span
                          className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                            checked
                              ? 'border-sky-600 bg-sky-600 text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {checked && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                        </span>
                        <span>{addon.label[lang]}</span>
                      </span>
                      <span className="font-mono-tabular text-xs font-medium text-slate-500 shrink-0">
                        +{addon.weeks} {lang === 'en' ? 'wk' : 'أسبوع'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Delivery Schedule */}
            <div className="mt-7 border-t border-slate-200 pt-6">
              <h3 className="text-sm font-bold text-slate-950">
                {UI_COPY.estimator.step3[lang]}
              </h3>
              <div className="mt-3 grid grid-cols-2 gap-2 rounded-lg bg-slate-200/70 p-1">
                <button
                  type="button"
                  onClick={() => setPace('standard')}
                  className={`h-10 rounded-md px-3 text-xs font-semibold transition-colors cursor-pointer ${
                    pace === 'standard'
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {UI_COPY.estimator.paceStandard[lang]}
                </button>
                <button
                  type="button"
                  onClick={() => setPace('fast')}
                  className={`h-10 rounded-md px-3 text-xs font-semibold transition-colors cursor-pointer ${
                    pace === 'fast'
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {UI_COPY.estimator.paceFast[lang]}
                </button>
              </div>
            </div>

            {/* Calculated Output Strip (Timeline & Scope Tier) */}
            <div className="mt-7 rounded-xl border border-slate-800 bg-[#0B1933] p-5 text-white">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-xs text-slate-400">
                    {UI_COPY.estimator.estimatedTimeline[lang]}
                  </div>
                  <div className="mt-1 font-mono-tabular text-2xl font-bold text-white">
                    ~{calculation.weeks} {UI_COPY.estimator.weeksUnit[lang]}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">
                    {UI_COPY.estimator.scopeTierLabel[lang]}
                  </div>
                  <div className="mt-1 text-xl font-bold text-sky-400">
                    {calculation.scopeTier[lang]}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                <span dir="ltr" className="font-mono-tabular text-[11px] text-slate-300">
                  {activeType.recommendedStack}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyScope}
                    className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-white/20 cursor-pointer"
                  >
                    {copiedToast ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                        <span className="text-emerald-300">{UI_COPY.estimator.form.copiedBrief[lang]}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                        <span>{UI_COPY.estimator.form.copyBriefBtn[lang]}</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleAttachScope}
                    className="inline-flex h-9 items-center rounded-lg bg-sky-500 px-3.5 text-xs font-bold text-slate-950 whitespace-nowrap shrink-0 transition-colors hover:bg-sky-400 cursor-pointer"
                  >
                    {UI_COPY.estimator.applyScopeBtn[lang]}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Inquiry Form, Confetti Success State & Direct Channels */}
          <div className="relative lg:col-span-5 rounded-xl border border-slate-200 bg-white p-6 sm:p-8 overflow-hidden">
            <h3 className="text-xl font-bold tracking-tight text-slate-950">
              {UI_COPY.estimator.form.title[lang]}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
              {UI_COPY.estimator.form.subtitle[lang]}
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key={`success-${celebrateKey}`}
                  initial={{ opacity: 0, scale: 0.96, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  role="status"
                  className="relative mt-6 rounded-xl border border-sky-200 bg-sky-50/70 p-6 text-center"
                >
                  {/* Confetti Particle Burst */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-12 z-10 -translate-x-1/2 -translate-y-1/2"
                  >
                    {CONFETTI_PIECES.map((piece) => (
                      <motion.span
                        key={`${celebrateKey}-${piece.id}`}
                        initial={{ opacity: 1, x: 0, y: 0, scale: 0.5, rotate: 0 }}
                        animate={{
                          opacity: [1, 1, 0],
                          x: piece.x,
                          y: piece.y,
                          scale: [0.8, 1.15, 0.7],
                          rotate: piece.rotate,
                        }}
                        transition={{
                          duration: 0.95,
                          delay: piece.delay,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{
                          position: 'absolute',
                          width: `${piece.width}px`,
                          height: `${piece.height}px`,
                          backgroundColor: piece.color,
                          borderRadius: '2px',
                        }}
                      />
                    ))}
                  </div>

                  {/* Animated Checkmark */}
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                    className="relative z-20 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-600 text-white shadow-sm"
                  >
                    <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                  </motion.div>

                  <h4 className="mt-4 text-base font-bold text-slate-950">
                    {UI_COPY.estimator.form.successTitle[lang]}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {UI_COPY.estimator.form.successBody[lang]}
                  </p>

                  <div className="mt-5 rounded-lg border border-sky-200/80 bg-white p-3 text-start text-xs text-slate-700">
                    <div className="font-semibold text-slate-900">
                      {fullName} {organization ? `· ${organization}` : ''}
                    </div>
                    <div className="mt-1 font-mono-tabular text-[11px] text-sky-700">
                      {activeType.label[lang]} · ~{calculation.weeks}{' '}
                      {UI_COPY.estimator.weeksUnit[lang]}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetSubmission}
                    className="mt-5 inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 cursor-pointer"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>
                      {lang === 'en' ? 'Edit or Submit Another Inquiry' : 'تعديل أو إرسال طلب آخر'}
                    </span>
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="inquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-6 space-y-4"
                >
                  <div>
                    <label
                      htmlFor="inquiry-name"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      {UI_COPY.estimator.form.nameLabel[lang]} *
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        setErrors((prev) => ({ ...prev, fullName: '' }));
                      }}
                      placeholder={UI_COPY.estimator.form.namePlaceholder[lang]}
                      className="mt-1.5 h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-600">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-org"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      {UI_COPY.estimator.form.orgLabel[lang]}
                    </label>
                    <input
                      id="inquiry-org"
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder={UI_COPY.estimator.form.orgPlaceholder[lang]}
                      className="mt-1.5 h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="inquiry-phone"
                        className="block text-xs font-semibold text-slate-700"
                      >
                        {UI_COPY.estimator.form.phoneLabel[lang]} *
                      </label>
                      <input
                        id="inquiry-phone"
                        type="tel"
                        dir="ltr"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setErrors((prev) => ({ ...prev, phone: '' }));
                        }}
                        placeholder={UI_COPY.estimator.form.phonePlaceholder[lang]}
                        className="mt-1.5 h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-email"
                        className="block text-xs font-semibold text-slate-700"
                      >
                        {UI_COPY.estimator.form.emailLabel[lang]}
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        dir="ltr"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrors((prev) => ({ ...prev, email: '' }));
                        }}
                        placeholder={UI_COPY.estimator.form.emailPlaceholder[lang]}
                        className="mt-1.5 h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-brief"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      {UI_COPY.estimator.form.briefLabel[lang]} *
                    </label>
                    <textarea
                      id="inquiry-brief"
                      rows={5}
                      value={brief}
                      onChange={(e) => {
                        setBrief(e.target.value);
                        setErrors((prev) => ({ ...prev, brief: '' }));
                      }}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white p-3.5 text-xs leading-relaxed text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/20"
                    />
                    {errors.brief && (
                      <p className="mt-1 text-xs text-rose-600">{errors.brief}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-sky-600 px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-sky-700 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>{UI_COPY.estimator.form.submitBtn[lang]}</span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Direct WhatsApp & Phone Dispatch */}
            <div className="mt-6 space-y-2.5 border-t border-slate-200 pt-5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-900 bg-slate-900 px-4 text-xs font-semibold text-white transition-colors duration-150 hover:bg-slate-800"
              >
                <MessageCircle className="h-4 w-4 text-sky-400" aria-hidden="true" />
                <span>{UI_COPY.estimator.form.whatsappBtn[lang]}</span>
              </a>

              <a
                href={`tel:+967${FOUNDATION_INFO.phoneRaw}`}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 text-xs font-semibold text-slate-800 transition-colors duration-150 hover:bg-slate-100"
              >
                <Phone className="h-4 w-4 text-sky-600" aria-hidden="true" />
                <span dir="ltr">{UI_COPY.estimator.form.callBtn[lang]}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
