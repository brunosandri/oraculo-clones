import type { CloneDetailData } from '../types';

export const curieData: CloneDetailData = {
  id: 'curie',
  name: 'MARIE CURIE',
  role: 'Radiant Scientist',
  rarity: 'Epic',
  avatar: '⚛️',
  stats: { pwr: 8, int: 10, crt: 7 },
  type: 'Science',
  tags: ["Physics", "Chemistry", "Nobel Prize", "Radioactivity"],
  discriminators: [
    "First Woman Nobel Prize",
    "Radioactivity Pioneer",
    "Relentless Dedication"
  ],
  skills: {
    meta: {
      totalHours: "120,000+",
      years: 35,
      breakdown: [
        { label: "Research", value: 50000, color: "bg-blue-500" },
        { label: "Experimentation", value: 40000, color: "bg-purple-500" },
        { label: "Theory Development", value: 20000, color: "bg-emerald-500" },
        { label: "Teaching", value: 10000, color: "bg-pink-500" },
      ]
    },
    unique: {
      name: "Radioactivity Mastery",
      level: "NOBEL-LEVEL PIONEER",
      score: 10,
      desc: "Descobriu e isolou elementos radioativos, estabelecendo as bases da física nuclear moderna.",
      impact: "Discovered Polonium and Radium. Won 2 Nobel Prizes in different sciences."
    },
    theoretical: [
      { name: "Nuclear Physics", score: 10, level: "Master", subs: ["Radioactivity", "Nuclear Decay"] },
      { name: "Chemistry", score: 10, level: "Master", subs: ["Element Isolation", "Chemical Analysis"] },
      { name: "Mathematics", score: 9, level: "Expert", subs: ["Statistics", "Calculus"] },
      { name: "Experimental Design", score: 10, level: "Master", subs: ["Methodology", "Precision Measurement"] },
    ],
    practical: [
      { name: "Laboratory Research", score: 10, level: "World-Class", impact: "Isolated radium and polonium", hours: "50k" },
      { name: "Scientific Writing", score: 9, level: "Expert", impact: "Groundbreaking papers", hours: "10k" },
      { name: "Element Isolation", score: 10, level: "Master", impact: "New chemical techniques", hours: "40k" },
    ],
    connections: [
      { from: "Chemistry Expertise", to: "Element Discovery", strength: 10, type: "fundamenta" },
      { from: "Physics Theory", to: "Radioactivity Understanding", strength: 10, type: "gera" },
      { from: "Experimental Method", to: "Laboratory Mastery", strength: 10, type: "transforma" },
    ],
    frameworks: [
      { name: "Scientific Method", mastery: "█████", since: "1891" },
      { name: "Precision Measurement", mastery: "█████", since: "1895" },
      { name: "Peer Review", mastery: "████░", since: "1898" },
    ],
    gaps: [
      { name: "Radiation Safety", score: 2, strategy: "Pre-safety protocols era" },
      { name: "Modern Equipment", score: 3, strategy: "Worked with primitive tools" },
    ]
  }
};
