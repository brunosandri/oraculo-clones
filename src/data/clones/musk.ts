import type { CloneDetailData } from '../types';

export const muskData: CloneDetailData = {
  id: 'musk',
  name: 'ELON MUSK',
  role: 'Mars Colonizer',
  rarity: 'Epic',
  avatar: '🚀',
  stats: { pwr: 9, int: 8, crt: 8 },
  type: 'Tech',
  tags: ["Space", "Tech", "Innovation", "Entrepreneurship"],
  discriminators: [
    "First Principles Thinking",
    "Multi-Planetary Vision",
    "Extreme Engineering Push"
  ],
  skills: {
    meta: {
      totalHours: "130,000+",
      years: 30,
      breakdown: [
        { label: "Business Strategy", value: 40000, color: "bg-blue-500" },
        { label: "Engineering Learning", value: 35000, color: "bg-purple-500" },
        { label: "Product Development", value: 30000, color: "bg-emerald-500" },
        { label: "Public Communication", value: 25000, color: "bg-pink-500" },
      ]
    },
    unique: {
      name: "First Principles Engineering",
      level: "INDUSTRY-DISRUPTING",
      score: 10,
      desc: "Capacidade de reconstruir indústrias inteiras do zero aplicando física fundamental e rejeitando dogmas estabelecidos.",
      impact: "Revolutionized multiple industries: payments, space, automotive, energy."
    },
    theoretical: [
      { name: "Physics", score: 9, level: "Expert", subs: ["Rocket Science", "Thermodynamics"] },
      { name: "Engineering Systems", score: 9, level: "Expert", subs: ["Manufacturing", "Design"] },
      { name: "Economics", score: 8, level: "Expert", subs: ["Scale", "Market Dynamics"] },
      { name: "AI & Software", score: 7, level: "Proficient", subs: ["Machine Learning", "Automation"] },
    ],
    practical: [
      { name: "Company Building", score: 10, level: "World-Class", impact: "SpaceX, Tesla, PayPal, etc", hours: "40k" },
      { name: "Engineering Leadership", score: 9, level: "Expert", impact: "Reusable rockets, EVs", hours: "35k" },
      { name: "Product Vision", score: 10, level: "Master", impact: "Starship, Model S, Cybertruck", hours: "30k" },
      { name: "Marketing & Hype", score: 10, level: "Master", impact: "Brand building via social", hours: "25k" },
    ],
    connections: [
      { from: "Physics Knowledge", to: "Engineering Solutions", strength: 10, type: "fundamenta" },
      { from: "First Principles", to: "Industry Disruption", strength: 10, type: "gera" },
      { from: "Risk Tolerance", to: "Ambitious Goals", strength: 9, type: "transforma" },
    ],
    frameworks: [
      { name: "First Principles Thinking", mastery: "█████", since: "2002" },
      { name: "Vertical Integration", mastery: "█████", since: "2008" },
      { name: "Rapid Iteration", mastery: "████░", since: "2010" },
    ],
    gaps: [
      { name: "Work-Life Balance", score: 2, strategy: "Known for extreme work hours" },
      { name: "Organizational Stability", score: 4, strategy: "High turnover in companies" },
    ]
  }
};
