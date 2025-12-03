import type { CloneDetailData } from '../types';

export const einsteinData: CloneDetailData = {
  id: 'einstein',
  name: 'EINSTEIN',
  role: 'Physics Theorist',
  rarity: 'Legendary',
  avatar: '👅',
  stats: { pwr: 9, int: 10, crt: 9 },
  type: 'Science',
  tags: ["Physics", "Relativity", "Nobel Prize", "Theoretical"],
  discriminators: [
    "Thought Experiments Master",
    "Spacetime Revolutionary",
    "E=mc² Creator"
  ],
  skills: {
    meta: {
      totalHours: "140,000+",
      years: 50,
      breakdown: [
        { label: "Theoretical Physics", value: 60000, color: "bg-blue-500" },
        { label: "Mathematical Development", value: 40000, color: "bg-purple-500" },
        { label: "Philosophy of Science", value: 25000, color: "bg-emerald-500" },
        { label: "Public Speaking", value: 15000, color: "bg-pink-500" },
      ]
    },
    unique: {
      name: "Thought Experiment Mastery",
      level: "PARADIGM-SHIFTING",
      score: 10,
      desc: "Capacidade única de visualizar e resolver problemas físicos complexos através de experimentos mentais.",
      impact: "Special & General Relativity revolutionized physics. E=mc² changed world history."
    },
    theoretical: [
      { name: "Theoretical Physics", score: 10, level: "Master", subs: ["Relativity", "Quantum Theory"] },
      { name: "Mathematics", score: 10, level: "Master", subs: ["Tensor Calculus", "Differential Geometry"] },
      { name: "Philosophy", score: 8, level: "Expert", subs: ["Epistemology", "Determinism"] },
      { name: "Cosmology", score: 9, level: "Expert", subs: ["Universe Structure", "Spacetime"] },
    ],
    practical: [
      { name: "Theory Development", score: 10, level: "World-Class", impact: "Special & General Relativity", hours: "60k" },
      { name: "Mathematical Proof", score: 10, level: "Master", impact: "Revolutionary equations", hours: "40k" },
      { name: "Scientific Communication", score: 9, level: "Expert", impact: "Made physics accessible", hours: "15k" },
    ],
    connections: [
      { from: "Mathematical Foundation", to: "Theory Creation", strength: 10, type: "fundamenta" },
      { from: "Thought Experiments", to: "Physical Insights", strength: 10, type: "gera" },
      { from: "Philosophy", to: "Scientific Method", strength: 8, type: "transforma" },
    ],
    frameworks: [
      { name: "Special Relativity", mastery: "█████", since: "1905" },
      { name: "General Relativity", mastery: "█████", since: "1915" },
      { name: "Statistical Mechanics", mastery: "████░", since: "1905" },
    ],
    gaps: [
      { name: "Quantum Mechanics Acceptance", score: 4, strategy: "Philosophical disagreement with uncertainty" },
      { name: "Experimental Work", score: 3, strategy: "Primarily theoretical focus" },
    ]
  }
};
