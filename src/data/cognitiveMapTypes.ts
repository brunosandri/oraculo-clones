// Tipos para o Cognitive Map baseado no framework Behrens et al. (2018)

export type ConnectionType = 'fundamenta' | 'gera' | 'requer' | 'manifesta' | 'paradoxo' | 'complementary' | 'compositional';

export interface PlaceCell {
  id: string;
  code: string; // Ex: "PC-1"
  name: string;
  centrality: number; // 1-10
  stability: number; // 0-1
  connections: number;
  type: string; // Ex: "Meta-axiom (Layer 0 + 3)"
  role: string; // Ex: "SUPER-HUB + ANCHOR"
  level: number; // 1, 2, ou 3
  definition: string;
  quote?: string;
  status: string;
  neuralBasis?: string;
}

export interface GridCell {
  id: string;
  code: string; // Ex: "GC-1"
  from: string; // ID do PlaceCell de origem
  to: string; // ID do PlaceCell de destino
  strength: number; // 1-10
  type: ConnectionType;
  distance: number; // 1-10
  mechanism: string;
  evidence?: string;
  bidirectional: boolean;
  tier: number; // 1, 2, ou 3
}

export interface BorderCell {
  id: string;
  code: string; // Ex: "BC-1"
  name: string;
  boundary: string;
  type: 'HARD' | 'SOFT';
  violationCost: number; // 1-10
  description: string;
  violations?: string[];
  examples?: string[];
  quote?: string;
  status: string;
  neuralBasis?: string;
}

export interface VectorCell {
  id: string;
  code: string; // Ex: "VC-1"
  name: string;
  direction: string;
  trajectory: string;
  goals: string[];
  obstacles: string[];
  evidence: string[];
  velocity: string;
  quote?: string;
  neuralBasis?: string;
}

export interface CognitiveModule {
  id: string;
  name: string;
  concepts: string[]; // IDs dos PlaceCells
  density: number; // 0-1
  centrality: number; // 1-10
  function: string;
  keyProperties: string[];
  neuralBasis: string;
}

export interface CognitiveSpace {
  dimensionality: number;
  topology: string;
  primaryDimensions: string[];
}

export interface StructuralProperties {
  clusteringCoefficient: number;
  averagePathLength: number;
  smallWorldIndex: number;
  modularity: number;
  hierarchyDepth: number;
  hubDominance: number;
}

export interface CognitiveMapData {
  cloneId: string;
  cloneName: string;
  extractedBy: string;
  framework: string;
  date: string;
  confidence: number; // 0-100
  completeness: number; // 0-100

  cognitiveSpace: CognitiveSpace;
  structuralProperties: StructuralProperties;

  placeCells: PlaceCell[];
  gridCells: GridCell[];
  borderCells: BorderCell[];
  vectorCells: VectorCell[];
  modules: CognitiveModule[];
}
