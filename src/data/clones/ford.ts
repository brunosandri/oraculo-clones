import type { CloneDetailData } from '../types';

export const fordData: CloneDetailData = {
  id: 'ford',
  name: 'HENRY FORD',
  role: 'Industrial Titan',
  rarity: 'Rare',
  avatar: '🚗',
  stats: { pwr: 8, int: 7, crt: 6 },
  type: 'Business',
  tags: ["Industry", "Manufacturing", "Innovation", "Assembly Line"],
  discriminators: [
    "Assembly Line Pioneer",
    "Mass Production Master",
    "Worker Welfare Innovator"
  ],
  skills: {
    meta: {
      totalHours: "110,000+",
      years: 45,
      breakdown: [
        { label: "Manufacturing", value: 45000, color: "bg-blue-500" },
        { label: "Business Management", value: 30000, color: "bg-purple-500" },
        { label: "Engineering", value: 25000, color: "bg-emerald-500" },
        { label: "Labor Relations", value: 10000, color: "bg-pink-500" },
      ]
    },
    unique: {
      name: "Assembly Line Revolution",
      level: "INDUSTRY-DEFINING",
      score: 10,
      desc: "Revolucionou a manufatura moderna com a linha de montagem, tornando produtos complexos acessíveis às massas.",
      impact: "Made automobiles affordable. Created modern mass production."
    },
    theoretical: [
      { name: "Production Theory", score: 9, level: "Expert", subs: ["Efficiency", "Scale Economy"] },
      { name: "Mechanical Engineering", score: 8, level: "Expert", subs: ["Automotive", "Manufacturing"] },
      { name: "Business Strategy", score: 8, level: "Expert", subs: ["Vertical Integration", "Cost Reduction"] },
      { name: "Labor Management", score: 7, level: "Proficient", subs: ["Wages", "Efficiency"] },
    ],
    practical: [
      { name: "Manufacturing Systems", score: 10, level: "World-Class", impact: "Assembly line creation", hours: "45k" },
      { name: "Product Development", score: 9, level: "Expert", impact: "Model T design", hours: "25k" },
      { name: "Business Scaling", score: 9, level: "Expert", impact: "Ford Motor Company", hours: "30k" },
    ],
    connections: [
      { from: "Engineering Knowledge", to: "Production Design", strength: 9, type: "fundamenta" },
      { from: "Efficiency Theory", to: "Assembly Line", strength: 10, type: "gera" },
      { from: "Scale Economics", to: "Cost Reduction", strength: 9, type: "transforma" },
    ],
    frameworks: [
      { name: "Scientific Management", mastery: "████░", since: "1908" },
      { name: "Vertical Integration", mastery: "█████", since: "1910" },
      { name: "Mass Production", mastery: "█████", since: "1913" },
    ],
    gaps: [
      { name: "Modern Labor Relations", score: 4, strategy: "Authoritarian approach" },
      { name: "Product Diversification", score: 3, strategy: "Over-focused on Model T" },
    ]
  }
};
