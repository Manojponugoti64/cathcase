export type Lesson = {
  slug: string;
  title: string;
  subtitle: string;
  durationLabel: string;
  videoSrc: string;
  poster: string;
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
];

export function getLesson(slug: string) {
  return lessons.find((l) => l.slug === slug);
}
