import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TenderRoadmapSection } from './components/TenderRoadmapSection';
import { ProcessSection } from './components/ProcessSection';
import { TechStackSection } from './components/TechStackSection';
import { FaqSection } from './components/FaqSection';
import { EstimatorInquirySection } from './components/EstimatorInquirySection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProjectItem } from './types';

function FoundationPortal() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('ecommerce');
  const [inspectedProject, setInspectedProject] = useState<ProjectItem | null>(null);

  const scrollToEstimator = (presetId?: string) => {
    if (presetId) {
      setSelectedPresetId(presetId);
    }
    const target = document.getElementById('estimator');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-600 selection:text-white">
      <Navbar onRequestQuote={() => scrollToEstimator()} />

      <main>
        <HeroSection onStartEstimate={() => scrollToEstimator()} />

        <CapabilitiesSection
          onSelectCapability={(presetId) => scrollToEstimator(presetId)}
        />

        <ProjectsShowcase
          onInspectProject={(project) => setInspectedProject(project)}
          onRequestSimilar={(presetId) => scrollToEstimator(presetId)}
        />

        <TenderRoadmapSection />

        <ProcessSection />

        <TechStackSection />

        <FaqSection />

        <EstimatorInquirySection
          selectedPresetId={selectedPresetId}
          onPresetChange={setSelectedPresetId}
        />
      </main>

      <Footer />

      <FloatingWhatsApp />

      <ProjectModal
        project={inspectedProject}
        onClose={() => setInspectedProject(null)}
        onRequestSimilar={(presetId) => scrollToEstimator(presetId)}
      />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <FoundationPortal />
      </LanguageProvider>
    </MotionConfig>
  );
}
