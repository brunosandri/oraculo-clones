import { useState } from 'react';
import { Search, Cpu, Zap, Box } from 'lucide-react';
import HomeCard from './components/HomeCard';
import { CLONES_LIST } from './data/clonesData';

export default function Home({ onSelectClone }: { onSelectClone: (id: string) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredClones = CLONES_LIST.filter(clone => {
    const matchesSearch = clone.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || clone.rarity === activeFilter || clone.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#030305] text-white font-sans relative overflow-x-hidden">
      {/* Background FX */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="scanline" />

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-6 text-center border-b border-white/5 bg-gradient-to-b from-[#050507] to-[#030305]">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          NEURAL MARKETPLACE V2.0
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6 tracking-tight">
          UNLOCK GREAT MINDS
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 font-light text-lg">
          Acesse clones cognitivos de elite. Arquiteturas neurais mapeadas com fidelidade histórica e prontas para integração.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="sticky top-0 z-40 bg-[#030305]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">

          {/* Search */}
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search neural patterns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all font-mono placeholder:text-gray-600"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            {['All', 'Legendary', 'Epic', 'Business', 'Tech'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-4 py-1.5 rounded text-xs font-mono uppercase tracking-wide border transition-all whitespace-nowrap
                  ${activeFilter === filter
                    ? 'bg-white text-black border-white font-bold'
                    : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white'}
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
           <div className="text-xs font-mono text-gray-500">
             SHOWING {filteredClones.length} UNITS
           </div>
           <div className="flex gap-4 text-xs font-mono text-gray-600">
             <span className="flex items-center gap-1"><Zap size={10}/> POWER RANKED</span>
             <span className="flex items-center gap-1"><Cpu size={10}/> CPU AVAILABLE</span>
           </div>
        </div>

        {filteredClones.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredClones.map(clone => (
              <HomeCard
                key={clone.id}
                data={clone}
                onClick={() => onSelectClone(clone.id)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-gray-600">
            <Box size={48} className="mb-4 opacity-20" />
            <p className="font-mono text-sm">NO NEURAL PATTERNS FOUND</p>
          </div>
        )}
      </main>

    </div>
  );
}
