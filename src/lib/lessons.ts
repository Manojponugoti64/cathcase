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
    videoSrc: "/videos/svt-ecg-ep-masterclass-2026-08-15-animated.mp4",
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
