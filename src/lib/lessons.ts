export type Lesson = {
  slug: string;
  title: string;
  subtitle: string;
  durationLabel: string;
  videoSrc: string;
  poster: string;
  subtitleSrc?: string;
  relatedCaseSlug?: string;
  sources: string[];
  disclaimer: string;
};

export const lessons: Lesson[] = [
  {
    slug: "asd-2d-echo",
    title: "Atrial septal defect on 2D echo",
    subtitle:
      "17 scenes. The four types, RV volume overload, the apical four-chamber trap, the subcostal and bicaval views, secundum, primum, sinus venosus and coronary sinus defects, Doppler and saline contrast, PFO versus ASD, significance, and rims for device closure.",
    durationLabel: "7 min",
    videoSrc: "/videos/asd-2d-echo.mp4",
    poster: "/videos/asd-2d-echo-poster.png",
    sources: [
      "Feigenbaum's Echocardiography, PDF pp. 2011–2029",
      "ASE's Comprehensive Echocardiography 3e, PDF pp. 895, 900–902, 1061–1063",
      "The Echo Manual (Oh), PDF pp. 1019–1026",
      "Park's Pediatric Cardiology 7e, PDF pp. 120–123",
      "Moss and Adams' Heart Disease, PDF pp. 2338–2354",
      "Braunwald's Heart Disease, PDF pp. 335–338",
      "Hurst's the Heart, PDF p. 453",
      "Topol-Griffin Manual 5e, PDF pp. 358–359",
      "Harrison's Principles of Internal Medicine, PDF p. 2052",
      "Atlas of Echocardiography in Pediatrics, PDF pp. 11, 14",
      "Hanna, Practical Cardiovascular Hemodynamics, PDF p. 66",
    ],
    disclaimer:
      "The echo images are original drawings, not patient recordings. Every clinical statement is cited to book and page on the slide. Educational aid for supervised training — not a substitute for a complete echo study.",
  },
  {
    slug: "mitral-stenosis-2d-echo",
    title: "Mitral stenosis on 2D echo: diagnosis, gradients, grades",
    subtitle:
      "20 scenes. Hockey-stick leaflet and fish-mouth orifice, planimetry at the tips, M-mode, mean versus peak gradient, pressure half-time with a worked example, heart rate and atrial fibrillation, AHA/ACC stages A–D, consequences, exercise echo, and the Wilkins score.",
    durationLabel: "6 min",
    videoSrc: "/videos/mitral-stenosis-2d-echo.mp4",
    poster: "/videos/mitral-stenosis-2d-echo-poster.png",
    sources: [
      "ASE's Comprehensive Echocardiography 3e, ch. 90, 91, 93 (pp. 501–515) and Fig. 127.1 (p. 686)",
      "The Echo Manual (Oh), PDF pp. 625–626",
      "Feigenbaum's Echocardiography, Fig. 11.32",
      "Kern's Cardiac Catheterization Handbook 7e, Fig. 4.40",
      "Braunwald's Heart Disease, p. 1961",
    ],
    disclaimer:
      "The echo images are original drawings, not patient recordings. Every clinical statement is cited to book and page on the slide. Educational aid for supervised training — not a substitute for a complete echo study.",
  },
  {
    slug: "bifurcation-pci",
    title: "Branch-vessel / bifurcation PCI",
    subtitle:
      "How to approach and perform provisional PTCA/PCI — Medina, strategy, wiring, POT, distal-cell rewire, kissing, and two-stent bailout.",
    durationLabel: "6 min",
    videoSrc: "/videos/bifurcation-pci-lesson.mp4",
    poster: "/videos/bifurcation-pci-poster.png",
    relatedCaseSlug: "lad-om1-bifurcation",
    sources: [
      "Interventional Cardiology 8e, Ch 23–24",
      "Kern's Cardiac Catheterization Handbook 7e",
      "Hurst's the Heart, Ch 42",
      "Jang Cardiovascular OCT Imaging",
    ],
    disclaimer:
      "Educational training aid. Not a procedure order or a substitute for supervised cath-lab training.",
  },
  {
    slug: "svt-masterclass-local-sources",
    title: "Supraventricular tachycardia: mechanisms to ablation",
    subtitle:
      "A source-bounded cardiologist walkthrough of SVT anatomy, reentry, AVNRT, AVRT/WPW, atrial tachycardia, ECG localization, acute treatment, pre-excited AF, EPS, and ablation.",
    durationLabel: "14 min",
    videoSrc: "/videos/svt-masterclass-local-sources.mp4",
    poster: "/videos/svt-masterclass-local-sources-poster.png",
    subtitleSrc: "/videos/svt-masterclass-local-sources.vtt",
    sources: [
      "Braunwald, Supraventricular Tachycardias, PDF pp. 1350–1375",
      "Hurst's the Heart, Ch. 84, PDF pp. 2008–2014",
      "Chou's Electrocardiography, PDF pp. 399, 403–405",
      "Topol-Griffin, PDF pp. 249, 255–258, 261",
      "Grossman & Baim, PDF pp. 2150, 2153",
      "Kern's Cardiac Catheterisation Handbook, PDF p. 495",
      "Park Pediatric Cardiology, PDF pp. 315–316",
    ],
    disclaimer:
      "Local textbook teaching aid with page references. Not an independent emergency protocol or substitute for supervised electrophysiology training.",
  },
  {
    slug: "svt-ecg-ep-masterclass-2026-08-15",
    title: "SVT ECG-to-EPS masterclass",
    subtitle:
      "A 25-scene electrophysiology walkthrough of reentry, AVNRT, AVRT/WPW, focal atrial tachycardia, ECG localization, wide-complex differentials, acute treatment, EPS maneuvers, and ablation endpoints.",
    durationLabel: "22 min",
    videoSrc: "/videos/svt-ecg-ep-masterclass-2026-08-15-animated-web.mp4",
    poster: "/videos/svt-ecg-ep-masterclass-2026-08-15-poster.png",
    subtitleSrc: "/videos/svt-ecg-ep-masterclass-2026-08-15-animated.vtt",
    sources: [
      "Braunwald, Supraventricular Tachycardias, PDF pp. 1224, 1350–1377, 1384",
      "Hurst's the Heart, Ch. 84, PDF pp. 2008–2014",
      "Chou's Electrocardiography, PDF pp. 399, 403–405",
      "Topol-Griffin, PDF pp. 249–261",
      "Grossman & Baim, PDF pp. 2150, 2153",
      "Kern's Cardiac Catheterisation Handbook, PDF p. 495",
      "Park Pediatric Cardiology, PDF pp. 315–316",
      "Supplied SVT screenshot pack in the Cardiology Assistant folder",
    ],
    disclaimer:
      "Local textbook teaching aid with page-linked source panels. Not an independent emergency protocol or substitute for supervised electrophysiology training.",
  },
];

export function getLesson(slug: string) {
  return lessons.find((l) => l.slug === slug);
}
