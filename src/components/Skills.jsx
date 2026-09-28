import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  Layers, 
  Boxes, 
  HardDrive, 
  GitBranch, 
  Cloud, 
  Zap, 
  Smartphone, 
  Key, 
  Flame, 
  Send,
  Search,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon string names to actual Lucide components
const iconMap = {
  Code2,
  Server,
  Database,
  Terminal,
  Cpu,
  Layers,
  Boxes,
  HardDrive,
  GitBranch,
  Cloud,
  Zap,
  Smartphone,
  Key,
  Flame,
  Send
};

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = skillCategories.map(cat => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) {
      return null;
    }

    const filteredSkills = cat.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.level.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery && filteredSkills.length === 0) {
      return null;
    }

    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(Boolean);

  const getLevelBadgeClass = (level) => {
    switch (level.toLowerCase()) {
      case 'expert':
        return 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60';
      case 'advanced':
        return 'text-cyan-400 bg-cyan-950/60 border-cyan-800/60';
      default:
        return 'text-indigo-400 bg-indigo-950/60 border-indigo-800/60';
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40 border-y border-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-400 text-xs font-mono font-medium">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorized <span className="gradient-text">Skills Matrix</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive overview of frameworks, languages, databases, and DevOps tools in my daily stack.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800/90 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              All Stacks
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. React, Docker)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/70 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
            />
          </div>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div 
              key={category.id}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60">
                    {category.skills.length} tools
                  </span>
                </div>

                {/* Skills Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  {category.skills.map((skill, sIdx) => {
                    const IconComp = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={sIdx}
                        className="glass-card p-3 rounded-xl border border-slate-800/70 hover:border-cyan-500/30 transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-slate-800/90 text-slate-300 group-hover:text-cyan-400 transition-colors">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-medium text-slate-200 group-hover:text-white">
                            {skill.name}
                          </span>
                        </div>

                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getLevelBadgeClass(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Production Tested</span>
                <span className="text-cyan-400/80 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Ready
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 text-slate-400 space-y-2">
            <p className="text-sm">No skills found matching "{searchQuery}".</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="text-xs text-cyan-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
