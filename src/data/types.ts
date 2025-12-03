// --- TIPOS ---
export interface CloneStats {
  pwr: number;
  int: number;
  crt: number;
}

export interface CloneBasic {
  id: string;
  name: string;
  role: string;
  rarity: 'Legendary' | 'Epic' | 'Rare';
  avatar: string;
  stats: CloneStats;
  type: string;
}

export interface SkillBreakdown {
  label: string;
  value: number;
  color: string;
}

export interface UniqueSkill {
  name: string;
  level: string;
  score: number;
  desc: string;
  impact: string;
}

export interface TheoreticalSkill {
  name: string;
  score: number;
  level: string;
  subs: string[];
}

export interface PracticalSkill {
  name: string;
  score: number;
  level: string;
  impact: string;
  hours: string;
}

export interface Connection {
  from: string;
  to: string;
  strength: number;
  type: string;
}

export interface Framework {
  name: string;
  mastery: string;
  since: string;
}

export interface Gap {
  name: string;
  score: number;
  strategy: string;
}

export interface CloneDetailData extends CloneBasic {
  tags: string[];
  discriminators: string[];
  skills: {
    meta: {
      totalHours: string;
      years: number;
      breakdown: SkillBreakdown[];
    };
    unique: UniqueSkill;
    theoretical: TheoreticalSkill[];
    practical: PracticalSkill[];
    connections: Connection[];
    frameworks: Framework[];
    gaps: Gap[];
  };
}
