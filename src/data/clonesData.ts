// --- IMPORTS DOS DADOS INDIVIDUAIS DOS CLONES ---
import { jobsData } from './clones/jobs';
import { daVinciData } from './clones/da-vinci';
import { curieData } from './clones/curie';
import { einsteinData } from './clones/einstein';
import { fordData } from './clones/ford';
import { lovelaceData } from './clones/lovelace';
import { muskData } from './clones/musk';
import { socratesData } from './clones/socrates';

// --- RE-EXPORTAR TIPOS ---
export type {
  CloneStats,
  CloneBasic,
  SkillBreakdown,
  UniqueSkill,
  TheoreticalSkill,
  PracticalSkill,
  Connection,
  Framework,
  Gap,
  CloneDetailData
} from './types';
import type { CloneBasic, CloneDetailData } from './types';

// --- DADOS BASE DOS CLONES (LISTA) ---
export const CLONES_LIST: CloneBasic[] = [
  { id: 'jobs', name: 'STEVE JOBS', role: 'Visionary Architect', rarity: 'Legendary', avatar: '🍎', stats: { pwr: 10, int: 9, crt: 10 }, type: 'Business' },
  { id: 'da-vinci', name: 'DA VINCI', role: 'Universal Polymath', rarity: 'Legendary', avatar: '🎨', stats: { pwr: 9, int: 10, crt: 10 }, type: 'Art' },
  { id: 'curie', name: 'MARIE CURIE', role: 'Radiant Scientist', rarity: 'Epic', avatar: '⚛️', stats: { pwr: 8, int: 10, crt: 7 }, type: 'Science' },
  { id: 'einstein', name: 'EINSTEIN', role: 'Physics Theorist', rarity: 'Legendary', avatar: '👅', stats: { pwr: 9, int: 10, crt: 9 }, type: 'Science' },
  { id: 'ford', name: 'HENRY FORD', role: 'Industrial Titan', rarity: 'Rare', avatar: '🚗', stats: { pwr: 8, int: 7, crt: 6 }, type: 'Business' },
  { id: 'lovelace', name: 'ADA LOVELACE', role: 'First Programmer', rarity: 'Epic', avatar: '💻', stats: { pwr: 7, int: 9, crt: 8 }, type: 'Tech' },
  { id: 'musk', name: 'ELON MUSK', role: 'Mars Colonizer', rarity: 'Epic', avatar: '🚀', stats: { pwr: 9, int: 8, crt: 8 }, type: 'Tech' },
  { id: 'socrates', name: 'SOCRATES', role: 'Questioning Sage', rarity: 'Rare', avatar: '🏛️', stats: { pwr: 6, int: 10, crt: 5 }, type: 'Philosophy' },
];

// --- DADOS DETALHADOS DOS CLONES ---
export const CLONES_DETAIL: Record<string, CloneDetailData> = {
  jobs: jobsData,
  'da-vinci': daVinciData,
  curie: curieData,
  einstein: einsteinData,
  ford: fordData,
  lovelace: lovelaceData,
  musk: muskData,
  socrates: socratesData
};
