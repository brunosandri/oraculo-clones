import { useCallback, useMemo, useState } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  Position,
} from 'reactflow';
import type { Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';
import type { CognitiveMapData, PlaceCell, GridCell } from '../data/cognitiveMapTypes';

interface CognitiveMapProps {
  data: CognitiveMapData;
}

const connectionTypeColors = {
  fundamenta: '#3b82f6', // blue
  gera: '#10b981', // green
  requer: '#f59e0b', // amber
  manifesta: '#8b5cf6', // purple
  paradoxo: '#ef4444', // red
  complementary: '#06b6d4', // cyan
  compositional: '#ec4899', // pink
};

const levelColors = {
  1: '#dc2626', // red-600 - Axioms
  2: '#f97316', // orange-500 - Core Principles
  3: '#eab308', // yellow-500 - Strategic Concepts
};

export default function CognitiveMap({ data }: CognitiveMapProps) {
  const [selectedNode, setSelectedNode] = useState<PlaceCell | null>(null);
  const [selectedEdge, setSelectedEdge] = useState<GridCell | null>(null);

  // Convert PlaceCells to ReactFlow nodes
  const initialNodes: Node[] = useMemo(() => {
    const radius = 400;
    const centerX = 500;
    const centerY = 400;

    return data.placeCells.map((cell, index) => {
      const angle = (index / data.placeCells.length) * 2 * Math.PI;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      return {
        id: cell.id,
        type: 'default',
        position: { x, y },
        data: {
          label: (
            <div className="text-center p-2">
              <div className="font-bold text-xs">{cell.code}</div>
              <div className="text-[10px] mt-1">{cell.name}</div>
              <div className="text-[9px] text-gray-500 mt-1">★ {cell.centrality}/10</div>
            </div>
          ),
        },
        style: {
          background: levelColors[cell.level as keyof typeof levelColors],
          color: '#fff',
          border: cell.role.includes('HUB') ? '3px solid #fff' : '1px solid #fff',
          borderRadius: '50%',
          width: 80 + cell.centrality * 8,
          height: 80 + cell.centrality * 8,
          fontSize: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: cell.role.includes('SUPER-HUB') ? '0 0 30px rgba(255,255,255,0.8)' : '0 4px 6px rgba(0,0,0,0.3)',
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
      };
    });
  }, [data.placeCells]);

  // Convert GridCells to ReactFlow edges
  const initialEdges: Edge[] = useMemo(() => {
    return data.gridCells.map((cell) => ({
      id: cell.id,
      source: cell.from,
      target: cell.to,
      type: 'smoothstep',
      animated: cell.tier === 1,
      style: {
        stroke: connectionTypeColors[cell.type],
        strokeWidth: cell.strength / 2,
        opacity: 0.7,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: connectionTypeColors[cell.type],
        width: 20,
        height: 20,
      },
      label: cell.bidirectional ? '⇄' : '',
      labelStyle: { fill: connectionTypeColors[cell.type], fontWeight: 'bold' },
    }));
  }, [data.gridCells]);

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = useCallback((_event: React.MouseEvent, node: Node) => {
    const placeCell = data.placeCells.find(pc => pc.id === node.id);
    setSelectedNode(placeCell || null);
    setSelectedEdge(null);
  }, [data.placeCells]);

  const onEdgeClick = useCallback((_event: React.MouseEvent, edge: Edge) => {
    const gridCell = data.gridCells.find(gc => gc.id === edge.id);
    setSelectedEdge(gridCell || null);
    setSelectedNode(null);
  }, [data.gridCells]);

  return (
    <div className="h-screen w-full bg-gray-900 flex">
      {/* Main visualization */}
      <div className="flex-1 relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onEdgeClick={onEdgeClick}
          fitView
        >
          <Background color="#374151" gap={16} />
          <Controls />
        </ReactFlow>

        {/* Legend */}
        <div className="absolute top-4 left-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-xs">
          <h3 className="font-bold text-sm mb-2">Cognitive Map: {data.cloneName}</h3>
          <div className="text-xs space-y-1 mb-3">
            <div>Confidence: {data.confidence}%</div>
            <div>Completeness: {data.completeness}%</div>
          </div>

          <div className="space-y-2">
            <div>
              <div className="font-semibold text-xs mb-1">Levels:</div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-4 h-4 rounded-full bg-red-600"></div>
                <span>Axioms</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                <span>Core Principles</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <span>Strategic</span>
              </div>
            </div>

            <div>
              <div className="font-semibold text-xs mb-1">Connections:</div>
              {Object.entries(connectionTypeColors).map(([type, color]) => (
                <div key={type} className="flex items-center gap-2 text-xs">
                  <div className="w-8 h-0.5" style={{ backgroundColor: color }}></div>
                  <span className="capitalize">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute top-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg text-xs max-w-xs">
          <h3 className="font-bold mb-2">Structural Properties</h3>
          <div className="space-y-1">
            <div>Small-World Index: <span className="text-green-400">{data.structuralProperties.smallWorldIndex}</span></div>
            <div>Clustering: <span className="text-green-400">{data.structuralProperties.clusteringCoefficient.toFixed(2)}</span></div>
            <div>Avg Path Length: <span className="text-green-400">{data.structuralProperties.averagePathLength.toFixed(1)}</span></div>
            <div>Hub Dominance: <span className="text-green-400">{(data.structuralProperties.hubDominance * 100).toFixed(0)}%</span></div>
          </div>
        </div>
      </div>

      {/* Side panel */}
      <div className="w-96 bg-gray-800 text-white p-6 overflow-y-auto">
        {selectedNode && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: levelColors[selectedNode.level as keyof typeof levelColors] }}
              ></div>
              <div>
                <h2 className="text-xl font-bold">{selectedNode.code}</h2>
                <p className="text-sm text-gray-400">{selectedNode.name}</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <span className="font-semibold">Type:</span> {selectedNode.type}
              </div>
              <div>
                <span className="font-semibold">Role:</span> {selectedNode.role}
              </div>
              <div>
                <span className="font-semibold">Centrality:</span> {selectedNode.centrality}/10
              </div>
              <div>
                <span className="font-semibold">Stability:</span> {selectedNode.stability.toFixed(2)}
              </div>
              <div>
                <span className="font-semibold">Connections:</span> {selectedNode.connections}
              </div>

              <div className="border-t border-gray-700 pt-3">
                <p className="text-xs italic text-gray-300">{selectedNode.definition}</p>
              </div>

              {selectedNode.quote && (
                <div className="bg-gray-700 p-3 rounded text-xs italic">
                  "{selectedNode.quote}"
                </div>
              )}

              <div>
                <span className="font-semibold">Status:</span>
                <p className="text-xs text-gray-300 mt-1">{selectedNode.status}</p>
              </div>

              {selectedNode.neuralBasis && (
                <div>
                  <span className="font-semibold">Neural Basis:</span>
                  <p className="text-xs text-gray-300 mt-1">{selectedNode.neuralBasis}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {selectedEdge && (
          <div>
            <h2 className="text-xl font-bold mb-4">{selectedEdge.code}</h2>

            <div className="space-y-3 text-sm">
              <div>
                <span className="font-semibold">From:</span> {data.placeCells.find(pc => pc.id === selectedEdge.from)?.name}
              </div>
              <div>
                <span className="font-semibold">To:</span> {data.placeCells.find(pc => pc.id === selectedEdge.to)?.name}
              </div>
              <div>
                <span className="font-semibold">Type:</span> <span className="capitalize">{selectedEdge.type}</span>
              </div>
              <div>
                <span className="font-semibold">Strength:</span> {selectedEdge.strength}/10
              </div>
              <div>
                <span className="font-semibold">Distance:</span> {selectedEdge.distance}/10
              </div>
              <div>
                <span className="font-semibold">Bidirectional:</span> {selectedEdge.bidirectional ? 'Yes' : 'No'}
              </div>

              <div className="border-t border-gray-700 pt-3">
                <span className="font-semibold">Mechanism:</span>
                <p className="text-xs text-gray-300 mt-1">{selectedEdge.mechanism}</p>
              </div>

              {selectedEdge.evidence && (
                <div>
                  <span className="font-semibold">Evidence:</span>
                  <p className="text-xs text-gray-300 mt-1">{selectedEdge.evidence}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {!selectedNode && !selectedEdge && (
          <div className="text-center text-gray-400 mt-20">
            <p className="text-lg mb-2">Click on a node or connection</p>
            <p className="text-sm">to see details</p>
          </div>
        )}
      </div>
    </div>
  );
}
