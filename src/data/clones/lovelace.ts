import type { CloneDetailData } from '../types';

export const lovelaceData: CloneDetailData = {
  id: 'lovelace',
  name: 'ADA LOVELACE',
  role: 'First Programmer',
  rarity: 'Epic',
  avatar: '💻',
  stats: { pwr: 7, int: 9, crt: 8 },
  type: 'Tech',
  tags: ["Computing", "Mathematics", "Programming", "Pioneer"],
  discriminators: [
    "First Computer Programmer",
    "Algorithm Visionary",
    "Computing Prophet"
  ],
  skills: {
    meta: {
      totalHours: "80,000+",
      years: 25,
      breakdown: [
        { label: "Mathematics", value: 35000, color: "bg-blue-500" },
        { label: "Algorithm Design", value: 25000, color: "bg-purple-500" },
        { label: "Theoretical Computing", value: 15000, color: "bg-emerald-500" },
        { label: "Scientific Writing", value: 5000, color: "bg-pink-500" },
      ]
    },
    unique: {
      name: "Algorithm Invention",
      level: "WORLD'S FIRST",
      score: 10,
      desc: "Criou o primeiro algoritmo destinado a ser processado por uma máquina, prevendo o potencial dos computadores além de cálculos.",
      impact: "First computer program. Predicted AI and creative computing a century early."
    },
    theoretical: [
      { name: "Mathematics", score: 9, level: "Expert", subs: ["Calculus", "Number Theory"] },
      { name: "Logic", score: 10, level: "Master", subs: ["Formal Logic", "Algorithm Design"] },
      { name: "Computing Theory", score: 10, level: "Master", subs: ["Analytical Engine", "Programming Concepts"] },
      { name: "Scientific Method", score: 8, level: "Expert", subs: ["Documentation", "Notation"] },
    ],
    practical: [
      { name: "Algorithm Writing", score: 10, level: "World-Class", impact: "First computer program", hours: "25k" },
      { name: "Mathematical Analysis", score: 9, level: "Expert", impact: "Bernoulli numbers calculation", hours: "35k" },
      { name: "Technical Documentation", score: 9, level: "Expert", impact: "Analytical Engine notes", hours: "5k" },
    ],
    connections: [
      { from: "Mathematical Foundation", to: "Algorithm Design", strength: 10, type: "fundamenta" },
      { from: "Logic Theory", to: "Programming Concepts", strength: 10, type: "gera" },
      { from: "Analytical Engine Study", to: "Computing Vision", strength: 10, type: "transforma" },
    ],
    frameworks: [
      { name: "Formal Logic", mastery: "████░", since: "1835" },
      { name: "Analytical Engine Model", mastery: "█████", since: "1842" },
      { name: "Algorithm Notation", mastery: "█████", since: "1843" },
    ],
    gaps: [
      { name: "Physical Implementation", score: 2, strategy: "No working computer existed" },
      { name: "Modern Programming Languages", score: 0, strategy: "Pre-dated by 100+ years" },
    ]
  }
};
