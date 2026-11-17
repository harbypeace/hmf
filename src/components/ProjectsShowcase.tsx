import { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS, UI_COPY } from '../data/foundationData';
import { ProjectCategory, ProjectItem } from '../types';
import { ProjectVisualFrame } from './ProjectVisualFrame';

interface ProjectsShowcaseProps {
  onInspectProject: (project: ProjectItem) => void;
  onRequestSimilar: (presetId: string) => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ProjectsShowcase({
  onInspectProject,
  onRequestSimilar,
}: ProjectsShowcaseProps) {
  const { lang, isRtl } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-sky-700">
              {UI_COPY.projects.kicker[lang]}
            </p>
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {UI_COPY.projects.heading[lang]}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {UI_COPY.projects.description[lang]}
            </p>
          </div>

          {/* Interactive Filter Tabs with Shared Motion Indicator */}
          <div
            role="tablist"
            aria-label="Filter Foundation Projects"
            className="inline-flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 p-1 self-start lg:self-auto"
          >
            {UI_COPY.projects.filters.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative h-9 rounded-md px-3.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${
                    isActive ? 'text-slate-950' : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="projects-active-filter"
                      transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
                      className="absolute inset-0 rounded-md bg-white shadow-xs"
                    />
                  )}
                  <span className="relative z-10">{tab.label[lang]}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.05,
                  ease: EASE_OUT_EXPO,
                }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-sky-300"
              >
                <div>
                  <ProjectVisualFrame
                    theme={project.visualTheme}
                    domainLabel={project.domainLabel}
                    title={project.title[lang]}
                    liveUrl={project.liveUrl}
                    logoPath={project.logoPath}
                    onOpenScreen={
                      project.liveUrl ? () => onInspectProject(project) : undefined
                    }
                  />

                  <div className="mt-5 text-xs text-slate-500">
                    <span>{project.subtitle[lang]}</span>
                    <span className="mx-2" aria-hidden="true">
                      ·
                    </span>
                    <span className="font-medium text-sky-700">
                      {project.statusLabel[lang]}
                    </span>
                  </div>

                  <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950">
                    {project.title[lang]}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {project.summary[lang]}
                  </p>

                  {/* Metrics Strip */}
                  <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label.en} className="min-w-0">
                        <dt className="truncate text-[11px] text-slate-500">
                          {metric.label[lang]}
                        </dt>
                        <dd className="mt-0.5 truncate font-mono-tabular text-xs font-semibold text-slate-900">
                          {metric.value[lang]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Card Actions */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={() => onInspectProject(project)}
                    className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-4 text-xs font-semibold text-slate-800 whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-slate-100 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
                  >
                    <Layers className="h-3.5 w-3.5 text-sky-700" aria-hidden="true" />
                    <span>{UI_COPY.projects.inspectArchitecture[lang]}</span>
                  </button>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-sky-600 px-4 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
                    >
                      <span>{UI_COPY.projects.visitLive[lang]}</span>
                      <ArrowUpRight
                        className={`h-3.5 w-3.5 ${isRtl ? '-scale-x-100' : ''}`}
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onRequestSimilar(project.estimatorPresetId)}
                      className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-sky-600 px-4 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-sky-700 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
                    >
                      <span>{UI_COPY.projects.requestSimilar[lang]}</span>
                    </button>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
