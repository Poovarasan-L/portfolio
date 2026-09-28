import React from 'react';
import { CheckCircle2, Award, Zap, Code, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, metrics, coreValues } = portfolioData;

  const valueIcons = [
    Code,
    Zap,
    ShieldCheck,
    HeartHandshake
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering with <span className="gradient-text">Purpose & Precision</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Crafting software that balances architectural strength with fluid, human-centric design.
          </p>
        </div>

        {/* Narrative & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Bio narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-indigo-500 rounded-full inline-block"></span>
                My Story & Approach
              </h3>
              
              {personal.bio.map((paragraph, index) => (
                <p key={index} className="text-slate-300">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Based in {personal.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Open to Remote & Global Work</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className="glass-card p-4 rounded-xl text-center border border-slate-800 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-extrabold gradient-text">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Core Engineering Values */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-400" />
              Core Engineering Values
            </h3>
            
            <div className="space-y-3.5">
              {coreValues.map((value, idx) => {
                const IconComponent = valueIcons[idx % valueIcons.length];
                return (
                  <div 
                    key={idx}
                    className="glass-panel p-4 rounded-xl border border-slate-800/80 hover:border-indigo-500/30 transition-all flex gap-3.5 items-start"
                  >
                    <div className="p-2 rounded-lg bg-indigo-950/70 border border-indigo-800/50 text-indigo-400 flex-shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {value.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
