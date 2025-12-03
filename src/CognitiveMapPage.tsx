import CognitiveMap from './components/CognitiveMap';
import { jobsCognitiveMap } from './data/cognitiveMaps/jobs';

interface CognitiveMapPageProps {
  cloneId: string;
  onBack: () => void;
}

export default function CognitiveMapPage({ cloneId, onBack }: CognitiveMapPageProps) {
  // Por enquanto, apenas temos o mapa do Steve Jobs
  const cognitiveMapData = cloneId === 'jobs' ? jobsCognitiveMap : null;

  if (!cognitiveMapData) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Mapa Cognitivo Não Encontrado</h1>
          <p className="text-gray-400 mb-8">O mapa cognitivo para este clone ainda não está disponível.</p>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Back button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-lg transition flex items-center gap-2"
      >
        <span>←</span>
        <span>Back to Clone Details</span>
      </button>

      <CognitiveMap data={cognitiveMapData} />
    </div>
  );
}
