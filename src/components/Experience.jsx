import React from 'react';
import { Briefcase, GraduationCap, Calendar, CheckCircle2, Milestone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 relative bg-slate-950/40 border-y border-slate-900/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
            <Milestone className="w-3.5 h-3.5" />
            <span>CAREER & EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Journey & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Academic training in Computer Science paired with continuous full-stack software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
          {experience.map((item, index) => {
            const isEducation = item.role.toLowerCase().includes('bachelor') || item.role.toLowerCase().includes('student');
            
            return (
              <div key={index} className="relative group">
                
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                  {isEducation ? (
                    <GraduationCap className="w-4 h-4" />
                  ) : (
                    <Briefcase className="w-4 h-4" />
                  )}
                </div>

                {/* Left Period Label (on desktop) */}
                <div className="hidden sm:block absolute -left-36 top-2 text-xs font-mono font-semibold text-cyan-400 text-right w-28">
                  {item.period}
                </div>

                {/* Main Content Card */}
                <div className="ml-6 sm:ml-8 glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all">
                  
                  {/* Mobile period */}
                  <div className="sm:hidden inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-semibold mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {item.role}
                  </h3>
                  <div className="text-xs font-semibold text-indigo-400 mt-1 mb-3">
                    {item.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
