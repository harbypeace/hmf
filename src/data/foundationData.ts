import {
  CapabilityItem,
  EstimatorAddon,
  EstimatorProjectType,
  ProjectItem,
  RoadmapPhase,
} from '../types';

export const FOUNDATION_ASSETS = {
  logoBanner: '/assets/aistudio/HM_187742a3.png',
};

export const FOUNDATION_INFO = {
  name: {
    en: 'Harbi Al-Muntasir Foundation',
    ar: 'مؤسسة حربي المنتصر',
  },
  fullOfficialName: {
    en: 'Harbi Al-Muntasir Foundation for Information Technology & Artificial Intelligence',
    ar: 'مؤسسة حربي المنتصر لتقنية المعلومات والذكاء الاصطناعي',
  },
  founder: {
    en: 'Harbi Al-Muntasir',
    ar: 'حربي المنتصر',
  },
  phoneDisplay: '+967 774 295 971',
  phoneRaw: '774295971',
  whatsappBase: 'https://wa.me/967774295971',
  email: 'halmontaser1@gmail.com',
  location: {
    en: 'Republic of Yemen',
    ar: 'الجمهورية اليمنية',
  },
};

export const UI_COPY = {
  nav: {
    brandShort: { en: 'Harbi Al-Muntasir', ar: 'حربي المنتصر' },
    capabilities: { en: 'Capabilities', ar: 'الخدمات' },
    projects: { en: 'Projects', ar: 'المشاريع' },
    tenderPlatform: { en: 'Tender Platform', ar: 'منصة المناقصات' },
    process: { en: 'Approach', ar: 'آلية العمل' },
    cta: { en: 'Start Project', ar: 'ابدأ مشروعك' },
    langSwitch: { en: 'العربية', ar: 'EN' },
  },
  hero: {
    kicker: {
      en: 'Information Technology · Custom Software · Applied Artificial Intelligence',
      ar: 'تقنية المعلومات · تطوير البرمجيات · حلول الذكاء الاصطناعي التطبيقي',
    },
    headline: {
      en: 'Production software, commercial storefronts, and applied AI systems.',
      ar: 'برمجيات إنتاجية، متاجر إلكترونية متكاملة، وأنظمة ذكاء اصطناعي تطبيقية.',
    },
    subheadline: {
      en: 'Harbi Al-Muntasir Foundation engineers custom web platforms, educational systems, automated workflows, and online commerce stores—backed by live deployments and a national tender platform currently in development.',
      ar: 'تعمل مؤسسة حربي المنتصر على هندسة المنصات الرقمية، وأنظمة التعليم الإلكتروني، وأتمتة العمليات التجارية، وإطلاق المتاجر الإلكترونية، مدعومةً بمشاريع قائمة ومنصة مناقصات وطنية قيد التطوير.',
    },
    primaryCta: {
      en: 'Configure Project Scope',
      ar: 'صمّم نطاق مشروعك',
    },
    secondaryCta: {
      en: 'Explore Live Deployments',
      ar: 'استعرض المشاريع القائمة',
    },
    proofItems: [
      {
        value: '3+ Live Apps',
        label: { en: 'Production Web & LMS Platforms', ar: 'منصات وتطبيقات منشورة فعلياً' },
      },
      {
        value: '5 Core Tracks',
        label: { en: 'Software, Commerce, Automation & AI', ar: 'البرمجيات والمتاجر والأتمتة والذكاء' },
      },
      {
        value: 'On the Way',
        label: { en: 'Digital Tender & Procurement Portal', ar: 'منصة المناقصات الرقمية قيد التطوير' },
      },
    ],
    matrixTitle: {
      en: 'Active Foundation Ecosystem',
      ar: 'منظومة المشاريع والعمليات النشطة',
    },
    matrixSubtitle: {
      en: 'Live web deployments, commerce infrastructure, and upcoming procurement software',
      ar: 'منصات منشورة، حلول تجارة إلكترونية، وبنية مناقصات رقمية قيد الإعداد',
    },
  },
  capabilities: {
    kicker: {
      en: 'Engineering Capabilities & Core Practice',
      ar: 'القدرات الهندسية ومجالات التخصص',
    },
    heading: {
      en: 'Five specialized disciplines engineered for measurable business output.',
      ar: 'خمسة مسارات تقنية متخصصة مصممة لتحقيق نتائج تشغيلية ملموسة.',
    },
    description: {
      en: 'From workflow automation and ready-to-launch e-commerce stores to custom educational platforms and applied artificial intelligence, every solution is architected for reliability and scale.',
      ar: 'بدءاً من أتمتة سير العمل وإطلاق المتاجر الإلكترونية، وصولاً إلى المنصات التعليمية المخصصة وتقنيات الذكاء الاصطناعي، نطوّر حلولاً برمجية عملية ومستقرة.',
    },
    configureLabel: {
      en: 'Configure this service',
      ar: 'صمّم نطاق هذه الخدمة',
    },
  },
  projects: {
    kicker: {
      en: 'Verified Live Work & Production Deployments',
      ar: 'نماذج أعمال حية ومنصات منشورة فعلياً',
    },
    heading: {
      en: 'Software already operating in production.',
      ar: 'مشاريع برمجية تعمل حالياً على أرض الواقع.',
    },
    description: {
      en: 'Inspect our live web applications, learning systems, and commercial store deployments. Open any deployment directly or preview its live screen and technical architecture.',
      ar: 'تصفح المنصات التعليمية وتطبيقات الويب والمتاجر الإلكترونية المنشورة عبر مؤسستنا، مع إمكانية معاينة الشاشة الحية أو استعراض البنية التقنية لكل مشروع.',
    },
    filters: [
      { id: 'all', label: { en: 'All Deployments', ar: 'جميع المشاريع' } },
      { id: 'platforms', label: { en: 'Platforms & LMS', ar: 'المنصات والتعليم' } },
      { id: 'ecommerce', label: { en: 'E-Commerce & Automation', ar: 'المتاجر والأتمتة' } },
      { id: 'web', label: { en: 'Web Applications', ar: 'تطبيقات الويب' } },
    ] as const,
    visitLive: { en: 'Open Live Site', ar: 'زيارة الموقع الحي' },
    inspectArchitecture: { en: 'Screen & Details', ar: 'الشاشة والتفاصيل' },
    requestSimilar: { en: 'Request Similar Build', ar: 'اطلب مشروعاً مشابهاً' },
  },
  tender: {
    kicker: {
      en: 'Flagship Infrastructure In Development · On The Way',
      ar: 'منصة استراتيجية قيد التطوير · إطلاق مرتقب',
    },
    heading: {
      en: 'Digital Tender & Procurement Platform',
      ar: 'منصة المناقصات والمشتريات الرقمية',
    },
    description: {
      en: 'A structured electronic tendering portal engineered to connect institutional buyers, suppliers, and contracting teams—automating RFQ distribution, vendor verification, and AI-assisted bid comparison.',
      ar: 'منصة مناقصات إلكترونية متكاملة قيد التطوير لربط الجهات الطالبة للمناقصات بالموردين والمقاولين، مع أتمتة طرح كراسات الشروط، والتحقق من الوثائق، ومقارنة العروض بالذكاء الاصطناعي.',
    },
    earlyAccessTitle: {
      en: 'Request Early Institutional Access',
      ar: 'سجّل للحصول على إشعار الإطلاق المبكر',
    },
    earlyAccessPlaceholder: {
      en: 'Work email or WhatsApp number',
      ar: 'البريد الإلكتروني أو رقم الواتساب',
    },
    earlyAccessButton: {
      en: 'Notify Me on Launch',
      ar: 'أشعرني عند الإطلاق',
    },
    earlyAccessSuccess: {
      en: 'Registered for the Tender Platform beta briefing. We will reach out ahead of public release.',
      ar: 'تم تسجيلك في قائمة الوصول المبكر لمنصة المناقصات بنجاح، وسنتواصل معك قبل الإطلاق الرسمي.',
    },
    earlyAccessError: {
      en: 'Please enter a valid email address or phone number.',
      ar: 'يرجى إدخال بريد إلكتروني صحيح أو رقم هاتف للتواصل.',
    },
  },
  process: {
    kicker: {
      en: 'Engineering Workflow & Execution',
      ar: 'منهجية الهندسة والتنفيذ',
    },
    heading: {
      en: 'How we take platforms from concept to live production.',
      ar: 'كيف نحوّل فكرة المشروع إلى منصة تعمل في الإنتاج.',
    },
    description: {
      en: 'A disciplined four-stage engineering cycle focused on clarity, bilingual precision, automated reliability, and ongoing support after launch.',
      ar: 'دورة عمل هندسية واضحة من أربع مراحل تضمن جودة الواجهة العربية والإنجليزية، واستقرار الأتمتة، واستمرارية الدعم بعد الإطلاق.',
    },
  },
  estimator: {
    kicker: {
      en: 'Project Scope Configurator & Direct Inquiry',
      ar: 'مُصمّم نطاق المشروع وطلب عرض السعر',
    },
    heading: {
      en: 'Configure your project scope and connect directly with our team.',
      ar: 'حدّد متطلبات مشروعك واحصل على خطة تنفيذ وتواصل مباشر.',
    },
    description: {
      en: 'Select your primary solution, choose technical modules such as bilingual RTL engineering, payment workflows, or AI automation, and dispatch your structured brief via the form or WhatsApp.',
      ar: 'اختر نوع المشروع والوحدات التقنية المطلوبة مثل الدعم ثنائي اللغة، بوابات الدفع، أو الأتمتة بالذكاء الاصطناعي، ثم أرسل الملخص عبر النموذج أو الواتساب للحصول على خطة وتفاصيل التنفيذ.',
    },
    step1: { en: '1. Primary Solution', ar: '1. نوع الحل البرمجي' },
    step2: { en: '2. Technical Modules', ar: '2. الوحدات والإضافات التقنية' },
    step3: { en: '3. Delivery Schedule', ar: '3. الجدول الزمني للتنفيذ' },
    paceStandard: { en: 'Standard Pace', ar: 'تنفيذ قياسي' },
    paceFast: { en: 'Priority Track (-25% time)', ar: 'مسار سريع (-25% مدة)' },
    estimatedTimeline: { en: 'Estimated Delivery', ar: 'المدة التقديرية للتسليم' },
    scopeTierLabel: { en: 'Configured Scope Tier', ar: 'مستوى نطاق المشروع' },
    weeksUnit: { en: 'Weeks', ar: 'أسابيع' },
    applyScopeBtn: { en: 'Attach Scope to Inquiry Form', ar: 'إرفاق الملخص بنموذج الطلب' },
    form: {
      title: { en: 'Send Project Inquiry', ar: 'أرسل طلب المشروع' },
      subtitle: {
        en: 'Direct review by founder Harbi Al-Muntasir within one business day.',
        ar: 'مراجعة مباشرة من المؤسس حربي المنتصر خلال يوم عمل واحد.',
      },
      nameLabel: { en: 'Full Name', ar: 'الاسم الكامل' },
      namePlaceholder: { en: 'e.g. Tariq Al-Haddad', ar: 'مثال: طارق الحداد' },
      orgLabel: { en: 'Organization / Store Name', ar: 'اسم المؤسسة أو المتجر' },
      orgPlaceholder: { en: 'Company, school, or brand name', ar: 'اسم الشركة أو الجهة أو المشروع' },
      phoneLabel: { en: 'Phone / WhatsApp', ar: 'رقم الهاتف / الواتساب' },
      phonePlaceholder: { en: '+967 7XX XXX XXX', ar: '+967 7XX XXX XXX' },
      emailLabel: { en: 'Email Address', ar: 'البريد الإلكتروني' },
      emailPlaceholder: { en: 'name@company.com', ar: 'name@company.com' },
      briefLabel: { en: 'Project Scope & Requirements', ar: 'تفاصيل المشروع والهدف المطلوب' },
      submitBtn: { en: 'Submit Inquiry Brief', ar: 'إرسال طلب المشروع' },
      whatsappBtn: { en: 'Send Brief via WhatsApp', ar: 'إرسال الملخص عبر واتساب' },
      callBtn: { en: 'Call +967 774 295 971', ar: 'اتصال مباشر: 774295971' },
      successTitle: {
        en: 'Project brief prepared and recorded.',
        ar: 'تم تجهيز وتسجيل طلب المشروع بنجاح.',
      },
      successBody: {
        en: 'Your structured scope has been logged. For immediate scheduling, open the prefilled WhatsApp dispatch or call +967 774 295 971 directly.',
        ar: 'تم حفظ تفاصيل مشروعك بنجاح. للتنسيق الفوري، يمكنك إرسال الملخص المعبأ تلقائياً عبر الواتساب أو الاتصال المباشر على 774295971.',
      },
    },
  },
  footer: {
    tagline: {
      en: 'Information Technology, Custom Software, E-Commerce Publishing & Applied Artificial Intelligence.',
      ar: 'تقنية المعلومات، تطوير البرمجيات الخاصة، نشر المتاجر الإلكترونية، وحلول الذكاء الاصطناعي.',
    },
    liveHeading: { en: 'Live Deployments', ar: 'المشاريع القائمة' },
    contactHeading: { en: 'Direct Channels', ar: 'قنوات التواصل' },
    rights: {
      en: 'Harbi Al-Muntasir Foundation for Information Technology & Artificial Intelligence.',
      ar: 'مؤسسة حربي المنتصر لتقنية المعلومات والذكاء الاصطناعي.',
    },
  },
};

export const PROCESS_STEPS = [
  {
    step: '01',
    title: {
      en: 'Discovery & Architecture',
      ar: 'تحليل المتطلبات والهيكلة',
    },
    description: {
      en: 'We map your operational workflows, user roles, bilingual structure, and integration points before writing a single line of production code.',
      ar: 'نرسم تدفقات العمل وصلاحيات المستخدمين والهيكل العربي والإنجليزي ونقاط التكامل قبل بدء البرمجة الفعلية.',
    },
    output: {
      en: 'System Blueprint & Scope Plan',
      ar: 'مخطط النظام وخطة التنفيذ',
    },
  },
  {
    step: '02',
    title: {
      en: 'Bilingual UI & Core Engineering',
      ar: 'تصميم الواجهات والبرمجة الأساسية',
    },
    description: {
      en: 'Responsive RTL/LTR interfaces, database schemas, and modular React or Next.js components built for clarity across desktop and mobile devices.',
      ar: 'بناء واجهات متجاوبة باللغتين وقواعد بيانات ومكونات برمجية حديثة تضمن سرعة الاستجابة على الجوال وسطح المكتب.',
    },
    output: {
      en: 'Interactive Staging Preview',
      ar: 'نسخة تجريبية تفاعلية للمعاينة',
    },
  },
  {
    step: '03',
    title: {
      en: 'Automation & AI Integration',
      ar: 'الأتمتة ودمج الذكاء الاصطناعي',
    },
    description: {
      en: 'Connect automated WhatsApp notifications, invoice generation, inventory triggers, and practical AI modules tailored to your daily operations.',
      ar: 'ربط تنبيهات الواتساب الآلية وإصدار الفواتير ومزامنة المخزون ووحدات الذكاء الاصطناعي العملية داخل بيئة عملك.',
    },
    output: {
      en: 'Automated End-to-End Flows',
      ar: 'مسارات تشغيلية مؤتمتة بالكامل',
    },
  },
  {
    step: '04',
    title: {
      en: 'Cloud Deployment & Support',
      ar: 'النشر السحابي والدعم المستمر',
    },
    description: {
      en: 'Production launch on fast edge or cloud infrastructure with domain setup, performance checks, team onboarding, and continuous maintenance.',
      ar: 'إطلاق المنصة على بنية سحابية سريعة مع ربط النطاق، وفحوصات الأداء، وتدريب الفريق، والمتابعة الفنية المستمرة.',
    },
    output: {
      en: 'Live Production Launch',
      ar: 'إطلاق رسمي مستقر في الإنتاج',
    },
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    index: '01.',
    title: {
      en: 'Emerging Digital Technologies & Automation',
      ar: 'التقنيات الرقمية الناشئة وأتمتة الأعمال',
    },
    subtitle: {
      en: 'Workflow Orchestration · API Pipelines · Cloud Integration',
      ar: 'أتمتة سير العمل · تكامل الأنظمة · الربط السحابي',
    },
    description: {
      en: 'Eliminate repetitive manual coordination across sales, invoicing, notifications, and reporting. We engineer automated operational pipelines connecting storefronts, WhatsApp dispatch, ERP databases, and cloud webhooks.',
      ar: 'نقلل العمل اليدوي المتكرر عبر ربط المبيعات والفوترة والتنبيهات والتقارير تلقائياً، وبناء مسارات تشغيلية ذكية تربط المتاجر الإلكترونية برسائل الواتساب وقواعد البيانات السحابية.',
    },
    practiceTag: { en: 'Automation Practice', ar: 'مسار الأتمتة' },
    deliverables: [
      { en: 'Order & invoice automation', ar: 'أتمتة الطلبات والفواتير' },
      { en: 'WhatsApp & email alert engines', ar: 'محركات تنبيه واتساب وبريد آلية' },
      { en: 'Cross-system API synchronization', ar: 'مزامنة البيانات بين الأنظمة' },
    ],
    featured: true,
    estimatorPresetId: 'automation',
  },
  {
    index: '02.',
    title: {
      en: 'Ready-Made Software & E-Commerce Publishing',
      ar: 'نشر البرامج الجاهزة والمتاجر الإلكترونية',
    },
    subtitle: {
      en: 'Turnkey Storefronts · SaaS Publishing · Merchant Tools',
      ar: 'إطلاق متاجر إلكترونية · نشر البرمجيات · أدوات التجار',
    },
    description: {
      en: 'We build, localize, and publish conversion-ready e-commerce stores and commercial software packages tailored for local retail operations and mobile-first checkout.',
      ar: 'نصمم وننشر متاجر إلكترونية جاهزة للبيع وحلول برمجية تجارية مهيأة للأسواق المحلية، مع إدارة المخزون وتجربة شراء سريعة عبر الجوال.',
    },
    practiceTag: { en: 'Commerce Publishing', ar: 'نشر المتاجر' },
    deliverables: [
      { en: 'Published Arabic/English storefronts', ar: 'نشر متاجر عربية وإنجليزية' },
      { en: 'Inventory & merchant dashboards', ar: 'لوحات تحكم للمخزون والتجار' },
    ],
    estimatorPresetId: 'ecommerce',
  },
  {
    index: '03.',
    title: {
      en: 'Custom Software Design & Programming',
      ar: 'تصميم وبرمجة البرمجيات الخاصة',
    },
    subtitle: {
      en: 'LMS · Institutional Portals · Scalable Databases',
      ar: 'أنظمة إدارة التعليم · بوابات مؤسسية · قواعد بيانات',
    },
    description: {
      en: 'Full-cycle architecture and coding for specialized institutional platforms—demonstrated in production through Smart Digital School PRO and adaptive learning tools built for long-term reliability.',
      ar: 'هندسة وبرمجة أنظمة مخصصة للمؤسسات التعليمية والشركات، مثبتة في بيئات الإنتاج عبر المدرسة الرقمية الذكية ومنصات التعلم التكيفية عالية الاعتمادية.',
    },
    practiceTag: { en: 'Custom Engineering', ar: 'برمجيات خاصة' },
    deliverables: [
      { en: 'Role-based institutional systems', ar: 'أنظمة متعددة الصلاحيات' },
      { en: 'Database & cloud architecture', ar: 'هيكلة قواعد البيانات والسحابة' },
    ],
    estimatorPresetId: 'custom_platform',
  },
  {
    index: '04.',
    title: {
      en: 'Website & Web Application Engineering',
      ar: 'تصميم المواقع والتطبيقات الإلكترونية',
    },
    subtitle: {
      en: 'Bilingual RTL/LTR Interfaces · Edge Hosting',
      ar: 'واجهات عربية وإنجليزية · استضافة سحابية سريعة',
    },
    description: {
      en: 'Fast, responsive corporate websites and interactive web portals deployed on modern edge infrastructure with clean bilingual typography and search-ready structure.',
      ar: 'بناء مواقع شركات وبوابات تفاعلية فائقة السرعة ومتوافقة مع جميع الشاشات، مع عناية دقيقة بالخط العربي والإنجليزي وبنية مهيأة لمحركات البحث.',
    },
    practiceTag: { en: 'Web Systems', ar: 'تطبيقات الويب' },
    deliverables: [
      { en: 'Corporate & product portals', ar: 'بوابات الشركات والمنتجات' },
      { en: 'High-speed Vercel/cloud delivery', ar: 'نشر سحابي عالي السرعة' },
    ],
    estimatorPresetId: 'web_portal',
  },
  {
    index: '05.',
    title: {
      en: 'Artificial Intelligence Technologies',
      ar: 'تقنيات الذكاء الاصطناعي التطبيقية',
    },
    subtitle: {
      en: 'Document Intelligence · Smart Bid Scoring · Adaptive Learning',
      ar: 'تحليل المستندات · تقييم العروض الذكي · التعلم التكيفي',
    },
    description: {
      en: 'Practical AI integration embedded directly into business and educational workflows—powering adaptive study paths, automated document parsing, and upcoming tender evaluation.',
      ar: 'دمج عملي لنماذج الذكاء الاصطناعي داخل أنظمة العمل والتعليم لتحليل المستندات، وتخصيص مسارات التعلم، ودعم التقييم الآلي للمناقصات والعروض.',
    },
    practiceTag: { en: 'Applied AI', ar: 'ذكاء اصطناعي' },
    deliverables: [
      { en: 'Arabic/English document extraction', ar: 'استخلاص بيانات المستندات ثنائي اللغة' },
      { en: 'AI procurement & analytics tools', ar: 'أدوات ذكاء اصطناعي للمشتريات والتحليل' },
    ],
    estimatorPresetId: 'ai_system',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'lms-yemen',
    category: 'platforms',
    visualTheme: 'lms',
    logoPath: '/assets/projects/lms-yemen-logo.png',
    title: {
      en: 'Smart Digital School PRO (lms-yemen.com)',
      ar: 'المدرسة الرقمية الذكية PRO (lms-yemen.com)',
    },
    subtitle: {
      en: 'Smart Interactive School LMS · Live Production',
      ar: 'منصة تعليمية ذكية وتفاعلية متكاملة · إنتاج فعلي',
    },
    domainLabel: 'lms-yemen.com',
    liveUrl: 'https://lms-yemen.com',
    statusLabel: {
      en: 'Live Production',
      ar: 'منشور ويعمل',
    },
    summary: {
      en: 'An integrated smart digital school platform built for Yemeni curricula—featuring grade and curriculum taxonomy, interactive lesson activities, real-time battle quizzes, public school and teacher profiles, teacher booking, and offline lesson support with automatic sync.',
      ar: 'منصة المدرسة الرقمية الذكية المتكاملة للمناهج اليمنية، تضم تصنيف المراحل والصفوف، أنشطة الدروس التفاعلية، اختبارات التحدي المباشرة، صفحات المدارس والمعلمين وحجز الدروس، مع وضع عدم الاتصال والمزامنة التلقائية.',
    },
    architectureNote: {
      en: 'Built as a high-speed React application backed by cloud database services with guest student sessions, school administrator dashboards, teacher directories, and offline-first caching that syncs saved progress automatically upon reconnection.',
      ar: 'مبنية بتقنية React السريعة مع قاعدة بيانات سحابية، وتدعم جلسات الطلاب الزوار، ولوحات إدارة المدارس، ودليل المعلمين، وتخزيناً محلياً للعمل بدون إنترنت مع مزامنة فورية عند عودة الاتصال.',
    },
    metrics: [
      { label: { en: 'Domain', ar: 'النطاق الرسمي' }, value: { en: 'lms-yemen.com', ar: 'lms-yemen.com' } },
      { label: { en: 'Core Modules', ar: 'الوحدات' }, value: { en: 'School + Battle Quiz', ar: 'مدارس + تحديات' } },
      { label: { en: 'Offline Sync', ar: 'العمل دون اتصال' }, value: { en: 'Supported', ar: 'مدعوم تلقائياً' } },
    ],
    deliverables: [
      { en: 'Interactive lessons & battle quiz mode', ar: 'أنشطة دروس تفاعلية واختبارات تنافسية' },
      { en: 'Public school portals & admin controls', ar: 'صفحات المدارس ولوحة إدارة المدرسة' },
      { en: 'Teachers directory & session booking', ar: 'دليل المعلمين وحجز الحصص التعليمية' },
      { en: 'Offline study mode with auto-sync', ar: 'متابعة الدروس دون إنترنت مع مزامنة تلقائية' },
    ],
    estimatorPresetId: 'custom_platform',
  },
  {
    id: 'engy-up',
    category: 'platforms',
    visualTheme: 'engyup',
    logoPath: '/assets/projects/engy-up-logo.png',
    title: {
      en: 'Engy Up — Adaptive English Learning Platform',
      ar: 'Engy Up — منصة تعلم اللغة الإنجليزية التكيفية',
    },
    subtitle: {
      en: 'Adaptive Engine · 21 Activity Types · Grades 7–12',
      ar: 'محرك تعليم تكيفي · 21 نوع نشاط · للصفوف 7–12',
    },
    domainLabel: 'engy-up.vercel.app',
    liveUrl: 'https://engy-up.vercel.app',
    statusLabel: {
      en: 'Live Deployment',
      ar: 'منشور على Vercel',
    },
    summary: {
      en: 'Interactive English language learning platform powered by an adaptive learning engine, gamification, and 21 distinct activity types for Grades 7–12—including audio pronunciation flashcards, pair matching, and bilingual parent progress tracking.',
      ar: 'منصة تفاعلية لتعلم اللغة الإنجليزية لطلاب الصفوف من السابع حتى الثاني عشر، تعتمد على محرك تعلم تكيفي وأسلوب التلعيب عبر 21 نوعاً من الأنشطة التفاعلية مثل البطاقات الصوتية والمطابقة ومتابعة أولياء الأمور.',
    },
    architectureNote: {
      en: 'Multi-tenant React web architecture supporting school tenants, parent-only progress alert feeds, audio-enabled vocabulary flashcards in Arabic and English, and real-time activity status tracking.',
      ar: 'معمارية ويب متعددة المدارس تدعم تنبيهات التقدم المخصصة لأولياء الأمور، وبطاقات مفردات ناطقة باللغتين العربية والإنجليزية، وتتبعاً لحظياً لحالة إتمام الأنشطة.',
    },
    metrics: [
      { label: { en: 'Target Grades', ar: 'الفئة المستهدفة' }, value: { en: 'Grades 7–12', ar: 'الصفوف 7–12' } },
      { label: { en: 'Activity Formats', ar: 'أنواع الأنشطة' }, value: { en: '21 Types', ar: '21 نشاطاً تفاعلياً' } },
      { label: { en: 'Engine', ar: 'المحرك' }, value: { en: 'Adaptive + Audio', ar: 'تكيفي + نطق صوتي' } },
    ],
    deliverables: [
      { en: '21 interactive learning & matching activities', ar: '21 نشاطاً تفاعلياً للمفردات والقواعد' },
      { en: 'Adaptive learning engine & gamification', ar: 'محرك تعلم تكيفي ونظام تحفيز' },
      { en: 'Arabic/English bilingual pronunciation cards', ar: 'بطاقات تعلم ناطقة بالعربية والإنجليزية' },
      { en: 'Multi-school tenant & parent progress alerts', ar: 'إدارة مدارس متعددة وتنبيهات لأولياء الأمور' },
    ],
    estimatorPresetId: 'custom_platform',
  },
  {
    id: 'almontaser',
    category: 'web',
    visualTheme: 'almontaser',
    logoPath: '/assets/projects/almontaser-logo.png',
    title: {
      en: 'Al-Muta’ahib (المتأهب) — Almontaser LMS',
      ar: 'المتأهب — منصة المنتصر للتفوق في الصفين 9 و 12',
    },
    subtitle: {
      en: 'AI Exam Mastery · Grade 9 & Grade 12 · Next.js',
      ar: 'إتقان الاختبارات بالذكاء الاصطناعي · التاسع والثالث ثانوي',
    },
    domainLabel: 'almontaser.vercel.app',
    liveUrl: 'https://almontaser.vercel.app',
    statusLabel: {
      en: 'Live Deployment',
      ar: 'منشور على Vercel',
    },
    summary: {
      en: 'A comprehensive exam-mastery LMS built specifically for Grade 9 and Grade 12 final-year students—combining past national exam practice, AI-personalized study paths, a global leaderboard, skill badges, and real-time progress sync.',
      ar: 'منصة تدريبية متخصصة لطلاب الصف التاسع والصف الثالث ثانوي، تدمج التدريب على أسئلة الامتحانات الوزارية السابقة مع مسارات ذكاء اصطناعي مخصصة، ولوحة متصدرين عالمية، وأوسمة مهارات، ومزامنة فورية للتقدم.',
    },
    architectureNote: {
      en: 'Engineered with Next.js App Router, full Arabic/English bilingual switching, experimental beta-features toggle, live student dashboard, interactive quiz runner, and persistent profile analytics.',
      ar: 'مطورة بإطار Next.js الحديث مع تبديل فوري بين العربية والإنجليزية، ومفتاح للميزات التجريبية، ولوحة تحكم للطالب، ومحرك اختبارات تفاعلي مرتبط بالتحليلات اللحظية.',
    },
    metrics: [
      { label: { en: 'Focus Cohorts', ar: 'الصفوف المستهدفة' }, value: { en: 'Grade 9 & 12', ar: 'التاسع و 12' } },
      { label: { en: 'Intelligence', ar: 'الذكاء الاصطناعي' }, value: { en: 'AI Study Paths', ar: 'مسارات تعلم ذكية' } },
      { label: { en: 'Engagement', ar: 'التفاعل' }, value: { en: 'Leaderboard + Badges', ar: 'متصدرون وأوسمة' } },
    ],
    deliverables: [
      { en: 'Past-exam practice & performance analytics', ar: 'تدريب على نماذج الامتحانات وتحليل الأداء' },
      { en: 'AI-driven personalized growth paths', ar: 'مسارات تعليمية مخصصة بالذكاء الاصطناعي' },
      { en: 'Global leaderboard & skill streak badges', ar: 'لوحة متصدرين عالمية وأوسمة التميز' },
      { en: 'Bilingual AR/EN interface & student dashboard', ar: 'واجهة ثنائية اللغة ولوحة تحكم متكاملة' },
    ],
    estimatorPresetId: 'ai_system',
  },
  {
    id: 'ecommerce-suite',
    category: 'ecommerce',
    visualTheme: 'ecommerce',
    title: {
      en: 'Published E-Commerce Stores & Order Automation',
      ar: 'نشر المتاجر الإلكترونية وأتمتة الطلبات',
    },
    subtitle: {
      en: 'Commercial Storefronts · Automation Pipelines',
      ar: 'متاجر تجارية منشورة · أتمتة المبيعات والمخزون',
    },
    domainLabel: 'Commerce & Automation Practice',
    statusLabel: {
      en: 'Active Client Delivery',
      ar: 'تنفيذ مستمر للعملاء',
    },
    summary: {
      en: 'Turnkey e-commerce storefronts published for retail merchants—paired with automated WhatsApp order confirmations, dynamic catalog management, and real-time inventory synchronization.',
      ar: 'تصميم وإطلاق متاجر إلكترونية متكاملة للتجار والشركات، مقترنة بأتمتة تأكيد الطلبات عبر الواتساب، وإدارة الكتالوج والمخزون والتقارير المالية آلياً.',
    },
    architectureNote: {
      en: 'Combines storefront UX, local checkout workflows, and automated webhook pipelines that route new orders directly to fulfillment teams and accounting sheets.',
      ar: 'يجمع بين واجهات تسوق سريعة بالعربية والإنجليزية ومسارات أتمتة ذكية توجه كل طلب جديد مباشرة إلى فريق التجهيز وسجلات المحاسبة.',
    },
    metrics: [
      { label: { en: 'Offering', ar: 'الخدمة' }, value: { en: 'Turnkey Stores', ar: 'متاجر متكاملة' } },
      { label: { en: 'Automation', ar: 'الأتمتة' }, value: { en: 'Order + WhatsApp', ar: 'طلبات + واتساب' } },
      { label: { en: 'Status', ar: 'الحالة' }, value: { en: 'Publishing Now', ar: 'متاح للإطلاق' } },
    ],
    deliverables: [
      { en: 'Mobile-first bilingual product catalog', ar: 'كتالوج منتجات متجاوب ثنائي اللغة' },
      { en: 'Automated WhatsApp & invoice dispatch', ar: 'إرسال آلي للفواتير وتأكيدات واتساب' },
      { en: 'Merchant stock & sales dashboard', ar: 'لوحة تحكم للتاجر والمخزون' },
    ],
    estimatorPresetId: 'ecommerce',
  },
];

export const TENDER_ROADMAP: RoadmapPhase[] = [
  {
    id: 'phase-1',
    phaseNumber: '01',
    title: {
      en: 'Vendor Registry & Document Verification',
      ar: 'تسجيل الموردين والتحقق من الوثائق',
    },
    status: { en: 'Architecture Completed', ar: 'اكتمل التصميم الأساسي' },
    targetWindow: { en: 'Milestone 1', ar: 'المرحلة الأولى' },
    summary: {
      en: 'Structured onboarding for suppliers and contractors with digital registration archiving, license expiry tracking, and role-based institutional workspaces.',
      ar: 'تسجيل منظم للموردين والمقاولين مع أرشفة إلكترونية للوثائق، وتتبع صلاحية التراخيص، وصلاحيات مخصصة لكل جهة.',
    },
    modules: [
      { en: 'Verified supplier profile directory', ar: 'دليل موردين موثق ومصنف' },
      { en: 'Encrypted compliance document vault', ar: 'خزينة مشفرة لوثائق التأهيل' },
      { en: 'Multi-department buyer permissions', ar: 'صلاحيات متعددة لإدارات المشتريات' },
    ],
    previewRows: [
      {
        ref: 'TND-2026-041',
        title: { en: 'Enterprise Network & Server Infrastructure', ar: 'توريد وتركيب بنية شبكات وخوادم مؤسسية' },
        sector: { en: 'IT Hardware', ar: 'البنية التقنية' },
        bidsCount: '14',
        state: { en: 'Prequalification', ar: 'تأهيل الموردين' },
      },
      {
        ref: 'TND-2026-042',
        title: { en: 'Solar Power Backup Systems Supply', ar: 'توريد منظومات طاقة شمسية احتياطية' },
        sector: { en: 'Energy', ar: 'الطاقة' },
        bidsCount: '09',
        state: { en: 'Verified Pool', ar: 'قائمة مؤهلة' },
      },
    ],
  },
  {
    id: 'phase-2',
    phaseNumber: '02',
    title: {
      en: 'RFQ Publishing & Sealed Bid Submission',
      ar: 'طرح كراسات الشروط وتقديم العروض المشفرة',
    },
    status: { en: 'In Active Engineering', ar: 'قيد التطوير البرمجي حالياً' },
    targetWindow: { en: 'Milestone 2', ar: 'المرحلة الثانية' },
    summary: {
      en: 'Standardized tender creation wizard with itemized Bill of Quantities (BOQ), automated supplier invitations, Q&A clarification logs, and timestamped sealed submission.',
      ar: 'معالج موحد لنشر المناقصات وجداول الكميات، مع دعوات آلية للموردين المؤهلين، وسجل استفسارات شفاف، وإغلاق زمني مشفر للعروض.',
    },
    modules: [
      { en: 'Structured BOQ line-item builder', ar: 'منشئ جداول الكميات والمواصفات' },
      { en: 'Time-locked sealed technical & financial envelopes', ar: 'مظاريف فنية ومالية مقفلة زمنياً' },
      { en: 'Automated WhatsApp & email deadline alerts', ar: 'تنبيهات آلية بمواعيد الإغلاق' },
    ],
    previewRows: [
      {
        ref: 'RFQ-2026-108',
        title: { en: 'Multi-Branch POS & Inventory Software Rollout', ar: 'تجهيز نظام نقاط بيع ومخزون لعدة فروع' },
        sector: { en: 'Software', ar: 'البرمجيات' },
        bidsCount: '11',
        state: { en: 'Open for Bids', ar: 'مفتوح لتقديم العروض' },
      },
      {
        ref: 'RFQ-2026-112',
        title: { en: 'Medical Supplies Annual Framework Contract', ar: 'اتفاقية إطارية سنوية للمستلزمات الطبية' },
        sector: { en: 'Healthcare', ar: 'القطاع الصحي' },
        bidsCount: '18',
        state: { en: 'Clarifications', ar: 'مرحلة الاستفسارات' },
      },
    ],
  },
  {
    id: 'phase-3',
    phaseNumber: '03',
    title: {
      en: 'AI Bid Normalization & Evaluation Matrix',
      ar: 'تحليل ومقارنة العروض بالذكاء الاصطناعي',
    },
    status: { en: 'In Testing Pipeline', ar: 'قيد الاختبار والتكامل' },
    targetWindow: { en: 'Milestone 3', ar: 'المرحلة الثالثة' },
    summary: {
      en: 'AI-assisted comparison engine that extracts specifications and unit structures from supplier attachments, flags gaps, and generates committee-ready weighted scoring sheets.',
      ar: 'محرك ذكي يستخلص الجداول والمواصفات من ملفات الموردين، ويرصد البنود الناقصة، ويصدر مصفوفة تقييم فنية ومالية جاهزة للجان البت.',
    },
    modules: [
      { en: 'Automated line-by-line bid normalization', ar: 'مطابقة ومقارنة آلية لبنود العروض' },
      { en: 'Specification compliance gap detection', ar: 'كشف الفروقات في المواصفات الفنية' },
      { en: 'Exportable audit & committee decision logs', ar: 'تقارير تدقيق وتوصيات جاهزة للتصدير' },
    ],
    previewRows: [
      {
        ref: 'EVL-2026-077',
        title: { en: 'University Campus Fiber Backbone Tender', ar: 'مناقصة شبكة الألياف الضوئية للحرم الجامعي' },
        sector: { en: 'Telecom', ar: 'الاتصالات' },
        bidsCount: '07',
        state: { en: 'AI Scored · 98% Match', ar: 'تحليل ذكي · مطابقة 98%' },
      },
      {
        ref: 'EVL-2026-079',
        title: { en: 'Logistics Fleet Tracking Hardware', ar: 'توريد أجهزة تتبع أسطول النقل اللوجستي' },
        sector: { en: 'Logistics', ar: 'اللوجستيات' },
        bidsCount: '12',
        state: { en: 'Committee Review', ar: 'مراجعة اللجنة' },
      },
    ],
  },
  {
    id: 'phase-4',
    phaseNumber: '04',
    title: {
      en: 'Public Release & Institutional Onboarding',
      ar: 'الإطلاق العام وانضمام المؤسسات',
    },
    status: { en: 'Upcoming Release', ar: 'الإطلاق المرتقب' },
    targetWindow: { en: 'Launch Phase', ar: 'مرحلة الإطلاق' },
    summary: {
      en: 'Controlled rollout to founding institutional partners, enterprise procurement teams, and regional supplier networks.',
      ar: 'إطلاق تشغيلي للمؤسسات الشريكة وإدارات المشتريات في الشركات والمنظمات، مع دعم فني مخصص لتدريب اللجان والموردين.',
    },
    modules: [
      { en: 'Dedicated institutional onboarding', ar: 'تأهيل وتدريب الجهات المشاركة' },
      { en: 'Contract award & PO automation', ar: 'إصدار أوامر الشراء والترسية آلياً' },
      { en: 'SLA-backed enterprise support', ar: 'دعم فني مؤسسي مستمر' },
    ],
    previewRows: [
      {
        ref: 'PUB-2026-001',
        title: { en: 'Founding Partner Onboarding Cohort', ar: 'دفعة الشركاء المؤسسين للإطلاق المبكر' },
        sector: { en: 'Enterprise', ar: 'القطاع المؤسسي' },
        bidsCount: 'Open',
        state: { en: 'Waitlist Active', ar: 'التسجيل المبكر متاح' },
      },
    ],
  },
];

export const ESTIMATOR_TYPES: EstimatorProjectType[] = [
  {
    id: 'ecommerce',
    label: { en: 'E-Commerce Storefront', ar: 'متجر إلكتروني متكامل' },
    description: {
      en: 'Catalog, cart, local checkout, and merchant order management',
      ar: 'كتالوج منتجات، سلة تسوق، وإدارة طلبات ومخزون',
    },
    baseWeeks: 3,
    complexityWeight: 2,
    recommendedStack: 'React · Commerce Engine · WhatsApp Sync',
  },
  {
    id: 'web_portal',
    label: { en: 'Corporate Web Platform', ar: 'موقع شركة أو بوابة ويب' },
    description: {
      en: 'High-speed bilingual brand site or interactive web application',
      ar: 'موقع احترافي ثنائي اللغة أو تطبيق ويب تفاعلي',
    },
    baseWeeks: 2,
    complexityWeight: 1,
    recommendedStack: 'React / Next.js · Edge CDN · RTL/LTR',
  },
  {
    id: 'custom_platform',
    label: { en: 'Custom LMS / SaaS System', ar: 'منصة مخصصة أو نظام تعليمي' },
    description: {
      en: 'Multi-role portals, academic systems, or custom business software',
      ar: 'منصات متعددة الصلاحيات، أنظمة تعليمية، أو برمجيات خاصة',
    },
    baseWeeks: 6,
    complexityWeight: 4,
    recommendedStack: 'Full-Stack React · Cloud DB · Multi-Role Auth',
  },
  {
    id: 'automation',
    label: { en: 'Business Workflow Automation', ar: 'أتمتة العمليات والربط البرمجي' },
    description: {
      en: 'Automated order flows, invoicing, CRM sync, and WhatsApp bots',
      ar: 'أتمتة الطلبات والفواتير والربط البرمجي وتنبيهات الواتساب',
    },
    baseWeeks: 2,
    complexityWeight: 2,
    recommendedStack: 'Webhooks · Automated Dispatch · ERP Sync',
  },
  {
    id: 'ai_system',
    label: { en: 'Applied AI Solution', ar: 'حلول الذكاء الاصطناعي التطبيقي' },
    description: {
      en: 'Document parsing, smart search, or automated bid evaluation',
      ar: 'تحليل المستندات، البحث الذكي، أو تقييم العروض آلياً',
    },
    baseWeeks: 4,
    complexityWeight: 3,
    recommendedStack: 'LLM Pipelines · Structured Parsing · Analytics',
  },
];

export const ESTIMATOR_ADDONS: EstimatorAddon[] = [
  {
    id: 'bilingual',
    label: { en: 'Full Bilingual Arabic (RTL) + English (LTR)', ar: 'دعم ثنائي اللغة (عربي RTL + إنجليزي LTR)' },
    weeks: 1,
    complexityWeight: 1,
  },
  {
    id: 'whatsapp_auto',
    label: { en: 'Automated WhatsApp Order & Alert Dispatch', ar: 'ربط وإرسال تنبيهات الواتساب تلقائياً' },
    weeks: 1,
    complexityWeight: 1,
  },
  {
    id: 'payment_inv',
    label: { en: 'Checkout Workflows & PDF Invoicing', ar: 'تدفقات الدفع وإصدار فواتير PDF آلياً' },
    weeks: 1,
    complexityWeight: 1,
  },
  {
    id: 'ai_triage',
    label: { en: 'AI Assistant / Document Extraction Module', ar: 'وحدة ذكاء اصطناعي لتحليل البيانات والردود' },
    weeks: 2,
    complexityWeight: 2,
  },
  {
    id: 'analytics',
    label: { en: 'Executive Analytics & Exportable Reports', ar: 'لوحة تقارير تنفيذية وتصدير البيانات' },
    weeks: 1,
    complexityWeight: 1,
  },
];
