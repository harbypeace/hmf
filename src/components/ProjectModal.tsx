import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, Layers, Monitor, RefreshCw, Smartphone, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_COPY } from '../data/foundationData';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (presetId: string) => void;
}

export function ProjectModal({ project, onClose, onRequestSimilar }: ProjectModalProps) {
  const { lang, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState<'details' | 'screen'>('screen');
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [reloadNonce, setReloadNonce] = useState(0);

  useEffect(() => {
    if (project) {
      setActiveTab(project.liveUrl ? 'screen' : 'details');
      setViewportMode('desktop');
      setReloadNonce(0);
    }
  }, [project]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 px-6 py-4">
          <div className="flex items-center gap-3 min-w-0">
            {project.logoPath && (
              <img
                src={project.logoPath}
                alt={project.title[lang]}
                referrerPolicy="no-referrer"
                className="h-10 w-10 rounded-lg border border-slate-200 bg-white object-contain p-1 shrink-0"
              />
            )}
            <div className="min-w-0">
              <p className="text-xs font-medium text-sky-700 truncate">
                {project.domainLabel} · {project.statusLabel[lang]}
              </p>
              <h3
                id="project-modal-title"
                className="truncate text-lg font-bold tracking-tight text-slate-950 sm:text-xl"
              >
                {project.title[lang]}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {project.liveUrl && (
              <div className="inline-flex items-center rounded-lg bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('screen')}
                  className={`inline-flex h-8 items-center gap-1.5 rounded-md px-3 text-xs font-semibold transition-colors cursor-pointer ${
                    activeTab === 'screen'
                      ? 'bg-white text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{lang === 'en' ? 'Live Screen' : 'الشاشة الحية'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className={`inline-flex h-8 items-center gap-1.5 rounded-md px-3 text-xs font-semibold transition-colors cursor-pointer ${
                    activeTab === 'details'
                      ? 'bg-white text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{lang === 'en' ? 'Architecture' : 'البنية والتفاصيل'}</span>
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-950 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto bg-slate-50">
          {activeTab === 'screen' && project.liveUrl ? (
            <div className="flex h-full flex-col p-4 sm:p-5">
              {/* Interactive Viewport Controls */}
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setViewportMode('desktop')}
                    className={`inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 font-semibold cursor-pointer ${
                      viewportMode === 'desktop'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{lang === 'en' ? 'Desktop' : 'سطح المكتب'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewportMode('mobile')}
                    className={`inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 font-semibold cursor-pointer ${
                      viewportMode === 'mobile'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{lang === 'en' ? 'Mobile' : 'الجوال'}</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span dir="ltr" className="hidden sm:inline font-mono-tabular text-slate-500">
                    {project.liveUrl}
                  </span>
                  <button
                    type="button"
                    onClick={() => setReloadNonce((n) => n + 1)}
                    aria-label="Reload preview"
                    className="inline-flex h-8 items-center gap-1 rounded-md border border-slate-200 px-2.5 font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
                  >
                    <RefreshCw className="h-3 w-3" aria-hidden="true" />
                    <span>{lang === 'en' ? 'Reload' : 'تحديث'}</span>
                  </button>
                </div>
              </div>

              {/* Live Embedded Screen */}
              <div className="flex flex-1 justify-center">
                <div
                  className={`h-[56vh] overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm transition-all duration-200 ${
                    viewportMode === 'mobile' ? 'w-[390px] max-w-full' : 'w-full'
                  }`}
                >
                  <iframe
                    key={`${project.id}-${reloadNonce}`}
                    src={project.liveUrl}
                    title={project.title[lang]}
                    className="h-full w-full border-0 bg-white"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 bg-white p-6 sm:p-8">
              <div>
                <h4 className="text-xs font-semibold text-slate-500">
                  {lang === 'en' ? 'Operational Overview' : 'نظرة عامة على المنظومة'}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {project.summary[lang]}
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h4 className="text-xs font-semibold text-slate-900">
                  {lang === 'en' ? 'Technical Architecture' : 'البنية الهندسية والتقنية'}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {project.architectureNote[lang]}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-500">
                  {lang === 'en' ? 'Verified Live Features & Modules' : 'المزايا والوحدات البرمجية الفعلية'}
                </h4>
                <ul className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {project.deliverables.map((item) => (
                    <li
                      key={item.en}
                      className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-xs font-medium text-slate-800"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-sky-600" aria-hidden="true" />
                      <span>{item[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-white px-6 py-4">
          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestSimilar(project.estimatorPresetId);
            }}
            className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
          >
            {UI_COPY.projects.requestSimilar[lang]}
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-sky-600 px-5 text-xs font-semibold text-white hover:bg-sky-700"
            >
              <span>{UI_COPY.projects.visitLive[lang]}</span>
              <ArrowUpRight
                className={`h-3.5 w-3.5 ${isRtl ? '-scale-x-100' : ''}`}
                aria-hidden="true"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
