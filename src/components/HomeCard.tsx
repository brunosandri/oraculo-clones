import { motion } from 'framer-motion';

export default function HomeCard({ data, onClick }: any) {
  const rarityColors: Record<string, string> = {
    Legendary: "from-yellow-500 to-amber-600 border-yellow-500/50 text-yellow-500",
    Epic: "from-purple-500 to-pink-600 border-purple-500/50 text-purple-400",
    Rare: "from-blue-500 to-cyan-600 border-blue-500/50 text-blue-400",
  };

  const rarityColor = rarityColors[data.rarity] || "from-gray-500 to-gray-700";

  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group cursor-pointer perspective-1000"
      onClick={onClick}
    >
      {/* Glow Effect on Hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-b ${rarityColor.split(' ')[0]} rounded-xl blur opacity-0 group-hover:opacity-40 transition duration-500`} />
      
      <div className="relative bg-[#0a0a0c] rounded-xl border border-white/10 overflow-hidden flex flex-col h-full hover:border-white/20 transition-colors">
        
        {/* Image Area */}
        <div className="relative aspect-[4/5] bg-gradient-to-b from-gray-900 to-[#0a0a0c] p-4 flex flex-col items-center justify-center border-b border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
          
          {/* Avatar Placeholder */}
          <div className="relative w-24 h-24 mb-4 group-hover:scale-110 transition-transform duration-500">
            <div className={`absolute inset-0 rounded-full border border-white/10 ${data.rarity === 'Legendary' ? 'animate-[spin_10s_linear_infinite]' : ''}`} />
            <div className="absolute inset-0 rounded-full bg-white/5 flex items-center justify-center text-4xl grayscale group-hover:grayscale-0 transition-all duration-500">
               {data.avatar}
            </div>
          </div>

          <div className="relative z-10 text-center">
            <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/50 border ${rarityColor.split(' ')[2]} ${rarityColor.split(' ')[3]}`}>
              {data.rarity}
            </span>
            <h3 className="font-display text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors">{data.name}</h3>
            <p className="font-mono text-[10px] text-gray-500 uppercase">{data.role}</p>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="p-4 mt-auto bg-[#050507]">
           <div className="grid grid-cols-3 gap-2 mb-3">
             <div className="text-center p-1 bg-white/5 rounded">
               <div className="text-[9px] text-gray-500 font-mono">PWR</div>
               <div className="text-xs font-bold text-white">{data.stats.pwr}</div>
             </div>
             <div className="text-center p-1 bg-white/5 rounded">
               <div className="text-[9px] text-gray-500 font-mono">INT</div>
               <div className="text-xs font-bold text-white">{data.stats.int}</div>
             </div>
             <div className="text-center p-1 bg-white/5 rounded">
               <div className="text-[9px] text-gray-500 font-mono">CRT</div>
               <div className="text-xs font-bold text-white">{data.stats.crt}</div>
             </div>
           </div>
           
           <button className="w-full py-2 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 rounded text-[10px] font-mono uppercase font-bold transition-all">
             Inspect Neural Net
           </button>
        </div>

      </div>
    </motion.div>
  );
}