import type { CloneDetailData } from '../types';

export const socratesData: CloneDetailData = {
  id: 'socrates',
  name: 'SOCRATES',
  role: 'Questioning Sage',
  rarity: 'Rare',
  avatar: '🏛️',
  stats: { pwr: 6, int: 10, crt: 5 },
  type: 'Philosophy',
  tags: ["Philosophy", "Logic", "Ethics", "Dialectic"],
  discriminators: [
    "Socratic Method",
    "Know Nothing Wisdom",
    "Dialectical Reasoning"
  ],
  skills: {
    meta: {
      totalHours: "100,000+",
      years: 40,
      breakdown: [
        { label: "Dialectic Practice", value: 45000, color: "bg-blue-500" },
        { label: "Ethical Reasoning", value: 30000, color: "bg-purple-500" },
        { label: "Logic Development", value: 20000, color: "bg-emerald-500" },
        { label: "Teaching", value: 5000, color: "bg-pink-500" },
      ]
    },
    unique: {
      name: "Socratic Method",
      level: "FOUNDATIONAL TECHNIQUE",
      score: 10,
      desc: "Método dialético de questionamento sistemático para revelar contradições e alcançar verdades mais profundas.",
      impact: "Created Western philosophy's fundamental questioning method. Influenced all subsequent philosophy."
    },
    theoretical: [
      { name: "Ethics", score: 10, level: "Master", subs: ["Virtue", "Justice"] },
      { name: "Logic", score: 10, level: "Master", subs: ["Dialectic", "Reasoning"] },
      { name: "Epistemology", score: 10, level: "Master", subs: ["Knowledge Theory", "Ignorance"] },
      { name: "Political Philosophy", score: 8, level: "Expert", subs: ["Governance", "Justice"] },
    ],
    practical: [
      { name: "Dialectical Questioning", score: 10, level: "World-Class", impact: "Socratic Method creation", hours: "45k" },
      { name: "Teaching Through Dialogue", score: 10, level: "Master", impact: "Influenced Plato, Xenophon", hours: "30k" },
      { name: "Ethical Living", score: 10, level: "Master", impact: "Died for principles", hours: "life" },
    ],
    connections: [
      { from: "Logic Mastery", to: "Dialectic Method", strength: 10, type: "fundamenta" },
      { from: "Self-Knowledge", to: "Questioning", strength: 10, type: "gera" },
      { from: "Ethical Commitment", to: "Life Example", strength: 10, type: "transforma" },
    ],
    frameworks: [
      { name: "Socratic Method", mastery: "█████", since: "440 BC" },
      { name: "Virtue Ethics", mastery: "█████", since: "445 BC" },
      { name: "Dialectical Reasoning", mastery: "█████", since: "435 BC" },
    ],
    gaps: [
      { name: "Written Communication", score: 0, strategy: "Refused to write, relied on oral tradition" },
      { name: "Natural Philosophy", score: 3, strategy: "Focused on ethics over physics" },
    ]
  }
};
