import type { CloneDetailData } from '../types';

export const jobsData: CloneDetailData = {
  id: 'jobs',
  name: 'STEVE JOBS',
  role: 'Visionary Architect',
  rarity: 'Legendary',
  avatar: '🍎',
  stats: { pwr: 10, int: 9, crt: 10 },
  type: 'Business',
  tags: ["Business", "Design", "Tech", "Zen"],
  discriminators: [
    "Reality Distortion Field",
    "Zen Minimalism",
    "Binary Quality Standards"
  ],
  skills: {
    meta: {
      totalHours: "150,000+",
      years: 40,
      breakdown: [
        { label: "Product Vision", value: 40000, color: "bg-blue-500" },
        { label: "Quality Control", value: 30000, color: "bg-purple-500" },
        { label: "Business Strategy", value: 30000, color: "bg-emerald-500" },
        { label: "Design & Aesthetic", value: 25000, color: "bg-pink-500" },
      ]
    },
    unique: {
      name: "Reality Distortion Field",
      level: "WORLD-CLASS / ÚNICO",
      score: 10,
      desc: "Capacidade de alterar a percepção da realidade de todos ao redor através de pura força de vontade e visão.",
      impact: "Enabled every 'impossible' achievement (Mac, iPhone, iPad)."
    },
    theoretical: [
      { name: "Marketing & Storytelling", score: 10, level: "Master", subs: ["Brand Narrative", "Emotional Marketing"] },
      { name: "Design Industrial", score: 9, level: "Expert", subs: ["Bauhaus Philosophy", "Minimalismo"] },
      { name: "Human-Computer Interaction", score: 9, level: "Expert", subs: ["UI/UX Principles", "Cognitive Ergonomics"] },
      { name: "Business Strategy", score: 9, level: "Expert", subs: ["Vertical Integration", "Ecosystem"] },
      { name: "Philosophy (Zen)", score: 7, level: "Proficient", subs: ["Aesthetics", "Ethics"] },
      { name: "Tecnologia (Conceitual)", score: 7, level: "Proficient", subs: ["Architecture", "System Design"] },
    ],
    practical: [
      { name: "Product Vision", score: 10, level: "World-Class", impact: "4 category-defining products", hours: "40k" },
      { name: "Presentation", score: 10, level: "World-Class", impact: "iPhone keynote 2007", hours: "10k" },
      { name: "Quality Control", score: 10, level: "World-Class", impact: "Industry benchmark", hours: "30k" },
      { name: "Simplification", score: 10, level: "Master", impact: "Saved Apple 1997", hours: "20k" },
      { name: "Negotiation", score: 9, level: "Expert", impact: "Disney-Pixar Deal", hours: "5k" },
    ],
    connections: [
      { from: "Design Knowledge", to: "Product Vision", strength: 10, type: "fundamenta" },
      { from: "Zen Philosophy", to: "Simplification", strength: 10, type: "gera" },
      { from: "Bauhaus Principles", to: "Quality Control", strength: 10, type: "fundamenta" },
      { from: "Marketing Knowledge", to: "Presentation", strength: 10, type: "fundamenta + gera" },
      { from: "Technical Knowledge", to: "Reality Distort.", strength: 9, type: "transforma" },
    ],
    frameworks: [
      { name: "Bauhaus Philosophy", mastery: "████░", since: "1981" },
      { name: "Dieter Rams' 10 Principles", mastery: "█████", since: "1982" },
      { name: "Zen Philosophy", mastery: "████░", since: "1974" },
      { name: "Vertical Integration", mastery: "█████", since: "1997" },
    ],
    gaps: [
      { name: "Programming/Coding", score: 1, strategy: "Delegated to engineers" },
      { name: "Hardware Engineering", score: 3, strategy: "Hire experts" },
    ]
  }
};
