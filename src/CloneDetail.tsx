import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Share2, Menu, X,
  Activity, Network, Lock, Zap,
  Database, Clock, AlertTriangle
} from "lucide-react";
import { CLONES_DETAIL } from "./data/clonesData";

// --- COMPONENTE PRINCIPAL ---
export default function CloneDetail({ cloneId, onBack, onViewCognitiveMap }: { cloneId: string, onBack: () => void, onViewCognitiveMap?: (id: string) => void }) {
  const cloneData = CLONES_DETAIL[cloneId];
  const [activeTab, setActiveTab] = useState("skills");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!cloneData) {
    return (
      <div className="min-h-screen bg-[#030305] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display mb-4">Clone Not Found</h1>
          <button onClick={onBack} className="px-6 py-2 bg-white text-black rounded">
            Back to Grid
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#030305] text-gray-200 font-sans selection:bg-blue-500/30 relative flex flex-col animate-in fade-in duration-500">
      
      {/* BACKGROUND FX */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-20" />
      <div className="scanline" />
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full z-50 glass h-16 flex items-center justify-between px-4 lg:px-8 transition-all duration-300">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white flex items-center gap-2"
          >
            <ArrowLeft size={20} /> <span className="text-xs font-mono uppercase hidden sm:inline">Back to Grid</span>
          </button>
          <div className="h-6 w-px bg-white/10 hidden sm:block" />
          <h1 className="font-display text-sm font-bold tracking-[0.15em] text-blue-500 leading-none">
            ORACLE_OS <span className="text-white/30 text-[10px]">v2.4</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {onViewCognitiveMap && cloneId === 'jobs' && (
            <button
              onClick={() => onViewCognitiveMap(cloneId)}
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-purple-500/30 bg-purple-500/10 text-xs font-mono uppercase hover:bg-purple-500/20 transition text-purple-300"
            >
              <Network size={14} /> Cognitive Map
            </button>
          )}
          <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 text-xs font-mono uppercase hover:bg-white/5 transition">
            <Share2 size={14} /> Share
          </button>
          <button className="px-6 py-2 bg-white text-black text-xs font-bold font-mono uppercase rounded-md hover:bg-gray-200 transition hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Initialize
          </button>
        </div>

        <button 
          className="md:hidden p-2 text-gray-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </header>

      {/* --- MAIN LAYOUT --- */}
      <main className="pt-24 pb-12 px-4 lg:px-8 max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-12">
        
        {/* --- LEFT COLUMN: IDENTITY --- */}
        <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:h-fit z-10">
          
          {/* THE CARD */}
          <div className="relative group w-full max-w-sm mx-auto lg:max-w-none perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-700" />
            
            <div className="relative bg-[#0a0a0c] rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-2xl">
              <div className="relative aspect-square lg:aspect-[3/4] bg-gradient-to-b from-gray-900 to-[#0a0a0c] p-6 flex flex-col items-center justify-center border-b border-white/5">
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
                 
                 <div className="relative w-40 h-40 lg:w-48 lg:h-48 mb-6">
                    <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-2 rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute inset-0 rounded-full bg-blue-900/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                        <span className="text-6xl filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                    </div>
                 </div>

                 <div className="text-center relative z-10">
                   <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 mb-2">
                     <Zap size={10} /> {cloneData.rarity.toUpperCase()} CLASS
                   </div>
                   <h2 className="font-display text-3xl lg:text-4xl font-bold text-white tracking-tighter">{cloneData.name}</h2>
                   <p className="text-gray-400 font-mono text-xs mt-1 uppercase tracking-widest">{cloneData.role}</p>
                 </div>
              </div>

              <div className="p-5 bg-[#050507]">
                <div className="grid grid-cols-3 gap-3 mb-4">
                   <StatBox label="PWR" val={cloneData.stats.pwr} />
                   <StatBox label="INT" val={cloneData.stats.int} />
                   <StatBox label="CRT" val={cloneData.stats.crt} />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-gray-500">
                    <span>SYNC RATE</span>
                    <span className="text-blue-400 animate-pulse">92.4%</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-gradient-to-r from-blue-600 to-purple-500 shadow-[0_0_10px_#3b82f6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cognitive Map Button */}
          {onViewCognitiveMap && cloneId === 'jobs' && (
            <button
              onClick={() => onViewCognitiveMap(cloneId)}
              className="glass rounded-xl p-4 hover:bg-white/5 transition group"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 transition">
                  <Network size={20} className="text-purple-400" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Cognitive Map</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Explore mental topology</p>
                </div>
                <div className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">→</div>
              </div>
            </button>
          )}

          {/* Telemetry */}
          <div className="hidden lg:block glass rounded-xl p-6 space-y-5">
             <div className="flex items-center justify-between border-b border-white/5 pb-3">
               <h3 className="font-display text-xs text-gray-400 uppercase tracking-widest">System Telemetry</h3>
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
             </div>
             <TelemetryRow label="Neural Print" value="9.1" color="bg-blue-500" />
             <TelemetryRow label="Coherence" value="9.4" color="bg-purple-500" />
             <TelemetryRow label="Stability" value="8.9" color="bg-emerald-500" />
          </div>
        </aside>

        {/* --- RIGHT COLUMN: CONTENT --- */}
        <section className="flex flex-col min-w-0">
          
          <div className="sticky top-16 z-20 -mx-4 px-4 lg:mx-0 lg:px-0 bg-[#030305]/80 backdrop-blur-xl border-b border-white/10 mb-8">
            <div className="flex overflow-x-auto no-scrollbar py-4 gap-6 mask-linear-fade">
               <TabBtn id="overview" label="Overview" active={activeTab} set={setActiveTab} />
               <TabBtn id="skills" label="Skills & Knowledge" active={activeTab} set={setActiveTab} />
               <TabBtn id="map" label="Cognitive Map" active={activeTab} set={setActiveTab} />
               <TabBtn id="layers" label="7 Layers" active={activeTab} set={setActiveTab} />
            </div>
          </div>

          <div className="flex-1 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "overview" && <OverviewContent cloneData={cloneData} />}
                {activeTab === "skills" && <SkillsContent cloneData={cloneData} />}
                {activeTab === "map" && <MapContent />}
                {activeTab === "layers" && <LayersContent />}
                
                {/* Fallback */}
                {(!["overview", "skills", "map", "layers"].includes(activeTab)) && (
                  <div className="glass p-16 rounded-2xl flex flex-col items-center justify-center text-center border-dashed border-2 border-white/10">
                    <Lock className="w-12 h-12 text-gray-600 mb-4" />
                    <h3 className="font-display text-lg text-gray-400">Restricted Access</h3>
                    <p className="font-mono text-xs text-gray-600 mt-2">Requires Level 5 Clearance</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
}

// ============================================================================
// --- CONTEÚDO DAS ABAS ---
// ============================================================================

function SkillsContent({ cloneData }: { cloneData: any }) {
  const SKILLS_DATA = cloneData.skills;

  return (
    <div className="space-y-12 pb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">

      {/* SECTION 1: TEMPORAL INVESTMENT & SINGULARITY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Investment Stats */}
        <div className="lg:col-span-4 glass p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xs text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Clock size={14}/> Investimento Temporal
            </h3>
            <div className="text-4xl font-display font-bold text-white mb-1">{SKILLS_DATA.meta.totalHours}</div>
            <div className="text-xs font-mono text-blue-400 mb-6">Deliberate Practice ({SKILLS_DATA.meta.years} Years)</div>

            <div className="space-y-3">
              {SKILLS_DATA.meta.breakdown.map((item: any, i: number) => (
                <div key={i}>
                  <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-1">
                    <span>{item.label}</span>
                    <span>{(item.value / 1000)}k hrs</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} shadow-[0_0_8px_currentColor]`} style={{ width: `${(item.value / 40000) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* THE SINGULARITY CARD (RDF) */}
        <div className="lg:col-span-8 relative group overflow-hidden rounded-2xl border border-purple-500/30 bg-[#1a0b2e] p-8 flex flex-col justify-center">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] animate-pulse" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-purple-500/20 rounded border border-purple-500/50 text-purple-300">
                   <Zap size={20} className="fill-current" />
                 </div>
                 <div>
                   <h3 className="font-display text-2xl font-bold text-white tracking-wide shadow-purple-500 drop-shadow-lg">
                     {SKILLS_DATA.unique.name}
                   </h3>
                   <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider border border-purple-500/30 px-2 py-0.5 rounded">
                     {SKILLS_DATA.unique.level}
                   </span>
                 </div>
              </div>
              <div className="text-right hidden md:block">
                <div className="text-3xl font-display font-bold text-white">10<span className="text-purple-500">/10</span></div>
              </div>
            </div>
            
            <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base max-w-2xl border-l-2 border-purple-500 pl-4">
              {SKILLS_DATA.unique.desc}
            </p>
            
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-gray-400">
              <span className="text-purple-400">IMPACT:</span> {SKILLS_DATA.unique.impact}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: KNOWLEDGE MATRIX */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
             <h3 className="font-display text-sm text-blue-400 uppercase tracking-widest flex items-center gap-2">
               <Database size={14} /> Conhecimento Teórico
             </h3>
             <span className="text-[10px] font-mono text-gray-600">7 DOMÍNIOS</span>
          </div>
          <div className="grid gap-3">
            {SKILLS_DATA.theoretical.map((item: any, i: number) => (
              <div key={i} className="glass p-4 rounded-lg border-l-2 border-l-transparent hover:border-l-blue-500 transition-all group">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-bold text-gray-200 text-sm group-hover:text-white">{item.name}</span>
                  <span className="font-mono text-[10px] text-blue-400 bg-blue-500/10 px-1.5 rounded">{item.level} ({item.score}/10)</span>
                </div>
                <div className="flex gap-1 h-1.5 mb-2">
                   {Array.from({ length: 10 }).map((_, idx) => (
                     <div key={idx} className={`flex-1 rounded-sm transition-colors ${idx < item.score ? 'bg-blue-600' : 'bg-gray-800'}`} />
                   ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.subs.map((sub: string) => (
                    <span key={sub} className="text-[9px] text-gray-500 border border-white/5 px-1.5 rounded uppercase">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
             <h3 className="font-display text-sm text-orange-400 uppercase tracking-widest flex items-center gap-2">
               <Activity size={14} /> Habilidades Práticas
             </h3>
             <span className="text-[10px] font-mono text-gray-600">EXECUÇÃO</span>
          </div>
          <div className="grid gap-3">
            {SKILLS_DATA.practical.map((item: any, i: number) => (
              <div key={i} className="glass p-4 rounded-lg relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-1 h-full bg-orange-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-gray-200 text-sm">{item.name}</span>
                  <div className="text-right">
                     <span className="block font-display font-bold text-orange-400 text-lg leading-none">{item.score}</span>
                     <span className="text-[9px] font-mono text-gray-600">/10</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 mb-2">
                  <span className="text-orange-300">{item.hours}</span> hours practice
                </div>
                <p className="text-xs text-gray-500 italic border-t border-white/5 pt-2 mt-1">
                  "{item.impact}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 3: NEURAL CONNECTIONS & FRAMEWORKS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass p-6 rounded-2xl relative overflow-hidden">
           <div className="absolute inset-0 bg-grid opacity-10" />
           <h3 className="font-display text-sm text-green-400 uppercase tracking-widest mb-6 flex items-center gap-2 relative z-10">
             <Network size={14} /> Conexões Neurais (8 Principais)
           </h3>
           <div className="space-y-4 relative z-10">
             {SKILLS_DATA.connections.map((conn: any, i: number) => (
               <div key={i} className="flex items-center justify-between gap-2 text-xs group">
                 <div className="w-1/3 p-2 bg-white/5 rounded border border-white/5 text-gray-300 text-center truncate">{conn.from}</div>
                 <div className="flex-1 flex flex-col items-center px-2 relative">
                   <span className="text-[9px] font-mono text-green-500 uppercase mb-1 opacity-70 group-hover:opacity-100 transition-opacity">[{conn.type}]</span>
                   <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent relative">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_5px_#22c55e]" />
                   </div>
                 </div>
                 <div className="w-1/3 p-2 bg-white/5 rounded border border-white/5 text-white font-bold text-center truncate shadow-[0_0_10px_rgba(0,0,0,0.5)]">{conn.to}</div>
               </div>
             ))}
           </div>
        </div>

        <div className="space-y-6">
          <div className="glass p-5 rounded-xl">
            <h3 className="font-display text-xs text-gray-500 uppercase tracking-widest mb-4">Top Frameworks</h3>
            <div className="space-y-3">
               {SKILLS_DATA.frameworks.map((fw: any, i: number) => (
                 <div key={i} className="flex justify-between items-center text-xs border-b border-white/5 pb-2 last:border-0">
                   <span className="text-gray-300">{fw.name}</span>
                   <div className="text-right">
                     <div className="text-[8px] text-gray-600 font-mono tracking-tight">{fw.mastery}</div>
                     <div className="text-[9px] text-gray-500 font-mono">Est. {fw.since}</div>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-red-500/5 border border-red-500/20 p-5 rounded-xl">
            <h3 className="font-display text-xs text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
               <AlertTriangle size={12} /> Lacunas Conhecidas
            </h3>
            <div className="space-y-3">
              {SKILLS_DATA.gaps.map((gap: any, i: number) => (
                <div key={i}>
                   <div className="flex justify-between text-xs text-gray-300 mb-1">
                     <span>{gap.name}</span>
                     <span className="text-red-500 font-mono">{gap.score}/10</span>
                   </div>
                   <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden mb-1">
                      <div className="h-full bg-red-500" style={{ width: `${gap.score * 10}%` }} />
                   </div>
                   <p className="text-[9px] text-gray-500 font-mono">Strategy: {gap.strategy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OverviewContent({ cloneData }: { cloneData: any }) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="glass p-6 lg:p-8 rounded-2xl border-l-4 border-l-blue-500 relative overflow-hidden group">
        <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/10 transition-all" />
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/10 rounded border border-blue-500/20 text-blue-400">
            <Activity size={20} />
          </div>
          <h3 className="font-display text-lg font-bold text-white">Neural Synopsis</h3>
        </div>
        <p className="text-gray-300 leading-loose font-light text-sm lg:text-base">
          Clone cognitivo de <strong className="text-white font-bold">{cloneData.name}</strong>. Arquitetura neural baseada em <span className="font-mono text-blue-400 bg-blue-500/10 px-1 rounded">{cloneData.skills.meta.totalHours}</span> horas de material analisado.
          {cloneData.skills.unique.desc}
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
           {cloneData.tags.map((tag: string) => (
             <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase text-gray-400 hover:border-white/30 transition-colors cursor-default">
               #{tag}
             </span>
           ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-2xl">
          <h3 className="font-display text-xs text-gray-500 uppercase tracking-widest mb-5 flex items-center gap-2">
             <Zap size={12} className="text-yellow-500" /> Top Discriminators
          </h3>
          <ul className="space-y-3">
             {cloneData.discriminators.map((item: string, i: number) => (
               <li key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all group cursor-crosshair">
                 <span className="flex h-6 w-6 items-center justify-center rounded bg-blue-500/10 text-xs font-mono text-blue-500 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                   0{i+1}
                 </span>
                 <span className="text-sm text-gray-300 group-hover:text-white font-medium">{item}</span>
               </li>
             ))}
          </ul>
        </div>
        <div className="glass p-6 rounded-2xl flex flex-col justify-between overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50" />
           <div>
             <h3 className="font-display text-xs text-gray-500 uppercase tracking-widest mb-4">Live Stream</h3>
             <div className="space-y-2 font-mono text-[10px] text-green-400/80">
               <p>&gt; LOADING NEURAL_NET...</p>
               <p>&gt; ACCESSING MEMORY BANK [SECTOR 7G]</p>
               <p>&gt; DECRYPTING PATTERNS... <span className="text-white">OK</span></p>
               <p className="animate-pulse">&gt; WAITING FOR INPUT_</p>
             </div>
           </div>
           <button className="mt-6 w-full py-2 border border-white/10 rounded text-[10px] font-mono uppercase hover:bg-white/10 hover:text-white text-gray-400 transition">
             View Full Logs
           </button>
        </div>
      </div>
    </div>
  );
}

function MapContent() {
  return (
    <div className="glass rounded-2xl h-[400px] lg:h-[600px] relative overflow-hidden flex flex-col items-center justify-center bg-[#050507]">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50" />
       <div className="absolute inset-0 bg-grid opacity-20" />
       <div className="relative z-10 flex flex-col items-center gap-4">
         <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20" />
            <Network className="text-blue-500 relative z-10" size={64} strokeWidth={1} />
         </div>
         <h3 className="font-display text-xl text-white tracking-tight">Cognitive Map Visualization</h3>
         <p className="font-mono text-xs text-gray-500 bg-black/50 px-3 py-1 rounded-full border border-white/10">
           Interactive WebGL Module Loading...
         </p>
       </div>
    </div>
  );
}

function LayersContent() {
  const layers = [
    { id: 0, name: "Meta Foundation", desc: "Crenças Fundamentais e Axiomas" },
    { id: 1, name: "Identity Core", desc: "Valores Essenciais e Anti-valores" },
    { id: 2, name: "Personality", desc: "Padrões Emocionais e Relacionais" },
    { id: 3, name: "Cognition", desc: "Modelos Mentais e Heurísticas" },
    { id: 4, name: "Knowledge", desc: "Base Intelectual e Expertise Técnica" },
    { id: 5, name: "Expression", desc: "DNA Linguístico e Retórica" },
    { id: 6, name: "Decision", desc: "Arquitetura de Ação e Escolha" },
  ];
  return (
    <div className="relative pl-6 lg:pl-8 border-l border-white/10 space-y-8 py-2">
      {layers.map((layer) => (
        <div key={layer.id} className="relative group">
          <div className="absolute -left-[31px] lg:-left-[39px] top-2 w-4 h-4 rounded-full bg-[#030305] border-2 border-gray-700 group-hover:border-blue-500 group-hover:scale-125 transition-all shadow-[0_0_0_4px_#030305]" />
          <div className="glass p-5 rounded-xl border border-white/5 group-hover:border-blue-500/30 group-hover:bg-white/[0.02] transition-all cursor-pointer">
             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
               <div className="flex items-center gap-3">
                 <span className="font-mono text-xs text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">L{layer.id}</span>
                 <h4 className="font-display text-lg font-bold text-gray-200 group-hover:text-white">{layer.name}</h4>
               </div>
               <span className="hidden sm:block text-[10px] font-mono text-gray-600 uppercase">Status: Active</span>
             </div>
             <p className="text-sm text-gray-400 font-light">{layer.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// --- HELPER UI COMPONENTS ---
function StatBox({ label, val }: { label: string, val: number }) {
  return (
    <div className="bg-white/[0.03] rounded p-3 border border-white/5 flex flex-col items-center group hover:bg-white/[0.06] transition-colors">
      <span className="text-[10px] font-mono text-gray-500 group-hover:text-blue-400 transition-colors">{label}</span>
      <span className="text-xl font-display font-bold text-white">{val}</span>
    </div>
  );
}
function TelemetryRow({ label, value, color }: { label: string, value: string, color: string }) {
  const width = (parseFloat(value) / 10) * 100;
  return (
    <div>
      <div className="flex justify-between text-[10px] font-mono text-gray-400 uppercase mb-1.5">
        <span>{label}</span>
        <span className="text-white font-bold">{value}</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full ${color} shadow-[0_0_10px_currentColor] transition-all duration-1000 ease-out`} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}
function TabBtn({ id, label, active, set }: any) {
  const isActive = active === id;
  return (
    <button
      onClick={() => set(id)}
      className={`
        whitespace-nowrap px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full border transition-all
        ${isActive 
          ? "bg-blue-500/10 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]" 
          : "bg-transparent border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5"}
      `}
    >
      {label}
    </button>
  );
}