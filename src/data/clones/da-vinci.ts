import type { CloneDetailData } from '../types';

export const daVinciData: CloneDetailData = {
  id: 'da-vinci',
  name: 'DA VINCI',
  role: 'Universal Polymath',
  rarity: 'Legendary',
  avatar: '🎨',
  stats: { pwr: 9, int: 10, crt: 10 },
  type: 'Art',
  tags: ["Art", "Science", "Engineering", "Renaissance"],
  discriminators: [
    "Universal Genius",
    "Mirror Writing",
    "Infinite Curiosity"
  ],
  skills: {
    meta: {
      totalHours: "200,000+",
      years: 50,
      breakdown: [
        { label: "Art & Painting", value: 50000, color: "bg-purple-500" },
        { label: "Scientific Study", value: 40000, color: "bg-blue-500" },
        { label: "Engineering", value: 35000, color: "bg-emerald-500" },
        { label: "Anatomy", value: 30000, color: "bg-pink-500" },
      ]
    },
    unique: {
      name: "Universal Polymath Mind",
      level: "RENAISSANCE MASTER",
      score: 10,
      desc: "Capacidade única de integrar arte, ciência e engenharia em uma única visão holística do conhecimento humano.",
      impact: "Created masterpieces across multiple disciplines (Mona Lisa, flying machines, anatomy studies)."
    },
    theoretical: [
      { name: "Anatomy & Biology", score: 10, level: "Master", subs: ["Human Anatomy", "Physiology"] },
      { name: "Physics & Mechanics", score: 9, level: "Expert", subs: ["Fluid Dynamics", "Mechanics"] },
      { name: "Art Theory", score: 10, level: "Master", subs: ["Perspective", "Chiaroscuro"] },
      { name: "Mathematics", score: 8, level: "Expert", subs: ["Geometry", "Proportions"] },
      { name: "Engineering", score: 9, level: "Expert", subs: ["Civil", "Military"] },
    ],
    practical: [
      { name: "Painting", score: 10, level: "World-Class", impact: "Mona Lisa, Last Supper", hours: "50k" },
      { name: "Scientific Illustration", score: 10, level: "Master", impact: "Revolutionary anatomical drawings", hours: "30k" },
      { name: "Engineering Design", score: 9, level: "Expert", impact: "Flying machines, bridges", hours: "35k" },
      { name: "Sculpture", score: 8, level: "Expert", impact: "Multiple commissioned works", hours: "15k" },
    ],
    connections: [
      { from: "Anatomy Knowledge", to: "Art Mastery", strength: 10, type: "fundamenta" },
      { from: "Mathematics", to: "Perspective Drawing", strength: 10, type: "gera" },
      { from: "Physics", to: "Engineering Design", strength: 9, type: "transforma" },
    ],
    frameworks: [
      { name: "Scientific Method (Proto)", mastery: "████░", since: "1480" },
      { name: "Renaissance Humanism", mastery: "█████", since: "1475" },
      { name: "Golden Ratio", mastery: "█████", since: "1485" },
    ],
    gaps: [
      { name: "Modern Physics", score: 0, strategy: "Pre-Newtonian era limitation" },
      { name: "Completion Rate", score: 4, strategy: "Known for leaving works unfinished" },
    ]
  }
};
