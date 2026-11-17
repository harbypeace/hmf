import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { FOUNDATION_INFO } from '../data/foundationData';

export function FloatingWhatsApp() {
  const { lang, isRtl } = useLanguage();

  const message =
    lang === 'ar'
      ? 'مرحباً أستاذ حربي المنتصر، أود الاستفسار عن إمكانية بدء مشروع برمجي جديد مع المؤسسة.'
      : 'Hello Harbi Al-Muntasir, I would like to inquire about initiating a new platform engineering project with the foundation.';

  const href = `${FOUNDATION_INFO.whatsappBase}?text=${encodeURIComponent(message)}`;

  return (
    <aside
      aria-label="Direct WhatsApp Consultation"
      className={`fixed bottom-6 z-40 ${
        isRtl ? 'left-6' : 'right-6'
      }`}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-emerald-950/20 backdrop-blur-md transition-all hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      >
        <span className="relative flex h-2 w-2">
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline whitespace-nowrap">
          {lang === 'en' ? 'Direct WhatsApp Advisory' : 'استشارة مباشرة عبر واتساب'}
        </span>
      </motion.a>
    </aside>
  );
}
