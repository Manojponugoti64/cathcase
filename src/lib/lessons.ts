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
    slug: "iabp-impella-icu",
    title: "Balloon pump and Impella in the ICU: a 3D lesson",
    subtitle:
      "32 scenes in 3D with a live monitor. Balloon pump: position, inflation and deflation, the five points at 1:2, the four timing errors, triggers, insertion, bedside checklist and weaning. Impella: pump parts, models, pressure–volume loop, insertion, echo position at 3.5 cm, console signals, position and suction alarms, purge, haemolysis and weaning. Then a comparison and six checks for each round.",
    durationLabel: "23 min",
    videoSrc: "/videos/iabp-impella-icu.mp4",
    poster: "/videos/iabp-impella-icu-poster.png",
    sources: [
      "Topol & Griffin, Manual of Cardiovascular Medicine 5e, PDF pp. 736, 738–742, 744–745, 748, 750–752, 754–755",
      "Irwin and Rippe's Intensive Care Medicine 9e, PDF pp. 6096, 6711, 6713–6715, 6729, 6732–6736, 6746",
      "Grossman & Baim's Cardiac Catheterization, Angiography, and Intervention, PDF pp. 1438–1443, 1449",
      "Oh's Intensive Care Manual 9e, PDF pp. 861–864, 876",
      "Marino's The ICU Book 5e, PDF pp. 293, 295–296",
      "Ragosta, Textbook of Clinical Hemodynamics 2e, PDF pp. 240, 243–244",
      "Textbook of Critical Care 8e, PDF pp. 578, 914, 917",
      "Handbook of Cardiac Critical Care and Anaesthesia, PDF pp. 312–313",
      "ESC Textbook of Intensive and Acute Cardiovascular Care 3e, PDF pp. 391–392",
      "Hanna, Practical Cardiovascular Hemodynamics, PDF pp. 193, 196",
      "ASE's Comprehensive Echocardiography 3e, PDF p. 1109",
      "Miller's Anesthesia 10e, PDF p. 1966",
    ],
    disclaimer:
      "The heart, the pressure traces, the console, the X-ray and the echo are original schematic drawings, not patient recordings or device screens. Every clinical statement is cited to book and page on the screen. Educational aid for supervised training — follow the device manual and your unit protocol.",
  },
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
  {
    slug: "bifurcation-pci-3d",
    title: "Bifurcation PCI in 3D: from Medina to the final POT",
    subtitle:
      "17 scenes in 3D. Name the lesion (Medina), size it (Finet), see why the side branch closes (plaque and carina shift), choose one stent or two, then provisional step by step: jailed wire, stent sized to the distal branch, POT, distal-cell recross, kiss and final POT. Then TAP, culotte, DK crush and V/SKS, the traps, two worked cases and a checklist.",
    durationLabel: "8 min",
    videoSrc: "/videos/bifurcation-pci-3d.mp4",
    poster: "/videos/bifurcation-pci-3d-poster.png",
    sources: [
      "Textbook of Interventional Cardiology 8e, Ch 23, PDF pp. 504–519; Table 23.1 p. 519; 5-6-7-8 rule p. 528",
      "Grossman & Baim's Cardiac Catheterization, PDF pp. 799, 1702",
      "Jyotsna et al., Coronary Bifurcation Lesion Management (WINCARS 2020), pp. 138–150",
      "Practical Handbook of Advanced Interventional Cardiology: Tips and Tricks 4e, PDF pp. 217–218, 224–225, 229",
      "Kerala Journal of Cardiology, Sept 2026, Bifurcation Angioplasty – The Editors' Cut, PDF pp. 410–411",
      "Braunwald's Heart Disease, PDF pp. 1003, 1007",
      "IVUS Made Easy 2e, PDF pp. 47, 70",
      "TANCS 2026, LCx ostium – Achilles heel in LM intervention (EAPCI/EBC 2026 consensus)",
    ],
    disclaimer:
      "The vessel, stents, balloons and wires are original 3D schematics, not patient anatomy. Textbook figures are cited, not reproduced. The two cases are teaching examples. Educational aid for supervised training — follow your operator and unit protocol.",
  },
  {
    slug: "culotte-3d",
    title: "Culotte stenting in 3D",
    subtitle:
      "17 scenes. When to choose culotte, sizing for similar branches, then every step in 3D with a tracker for three POTs and one kiss: stent the angulated branch, POT, rewire through the struts, second stent with a 3–5 mm overlap, POT, rewire, kiss and final POT. Why the double layer is stronger, provisional culotte as a bail-out, the trials, the traps, two cases and a checklist.",
    durationLabel: "7 min",
    videoSrc: "/videos/culotte-3d.mp4",
    poster: "/videos/culotte-3d-poster.png",
    sources: [
      "Textbook of Interventional Cardiology 8e, PDF pp. 507, 511, 513–514, 519",
      "Non-Pushing PCI Techniques, PDF pp. 207–208, 240–242, 250",
      "Practical Handbook of Advanced Interventional Cardiology: Tips and Tricks 4e, PDF pp. 228–230, 349",
      "Jyotsna et al., Coronary Bifurcation Lesion Management (WINCARS 2020), pp. 147–149",
      "Grossman & Baim's Cardiac Catheterization, PDF p. 1703",
      "Kerala Journal of Cardiology, Sept 2026, PDF pp. 410–411",
      "Braunwald's Heart Disease, PDF p. 1003",
    ],
    disclaimer:
      "The vessel, stents, balloons and wires are original 3D schematics, not patient anatomy. Textbook figures are cited, not reproduced. The two cases are teaching examples. Educational aid for supervised training — follow your operator and unit protocol.",
  },
  {
    slug: "dk-crush-3d",
    title: "DK crush in 3D",
    subtitle:
      "17 scenes. When to choose double kissing crush, sizing, then every step in 3D with a tracker for two kisses and two POTs: side-branch stent 1–2 mm into the main branch, remove the wire, balloon crush and POT, mid-cell recross and kiss 1, main-branch stent, POT, recross, kiss 2 and final POT. Why DK beats classic crush, imaging targets, DKCRUSH-II, III and V, the traps, two cases and a checklist.",
    durationLabel: "7 min",
    videoSrc: "/videos/dk-crush-3d.mp4",
    poster: "/videos/dk-crush-3d-poster.png",
    sources: [
      "Textbook of Interventional Cardiology 8e, PDF pp. 505, 507, 516, 519, 528, 1336–1337",
      "Practical Handbook of Advanced Interventional Cardiology: Tips and Tricks 4e, PDF pp. 224–225, 358–360",
      "Kerala Journal of Cardiology, Sept 2026, PDF pp. 410–411",
      "Jyotsna et al., Coronary Bifurcation Lesion Management (WINCARS 2020), p. 148",
      "Braunwald's Heart Disease, PDF p. 1003",
      "TANCS 2026, LCx ostium talk (DKCRUSH-V 3-year, EBC MAIN)",
    ],
    disclaimer:
      "The vessel, stents, balloons and wires are original 3D schematics, not patient anatomy. Textbook figures are cited, not reproduced. The two cases are teaching examples. Educational aid for supervised training — follow your operator and unit protocol.",
  },
];

export function getLesson(slug: string) {
  return lessons.find((l) => l.slug === slug);
}
