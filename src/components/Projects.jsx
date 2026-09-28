import React, { useState } from 'react';
import { ExternalLink, Github, FolderGit2, Lock, Globe, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'backend', label: 'Backend & Cloud' },
    { id: 'frontend', label: 'Frontend & SPAs' },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Engineering Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Enterprise multi-tier systems, cloud services, and single-page web applications built for performance and scale.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 scale-[1.02]'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Card Top: Icon & Privacy Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-colors">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  
                  {project.isPrivate ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-[11px] font-mono text-slate-400">
                      <Lock className="w-3 h-3 text-amber-400/90" />
                      <span>Enterprise Repo</span>
                    </span>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800 text-[11px] font-mono text-cyan-400 hover:border-cyan-600 transition-colors"
                    >
                      <Globe className="w-3 h-3" />
                      <span>Public</span>
                    </a>
                  )}
                </div>

                {/* Subtitle / Category Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-medium">
                    {project.category}
                  </span>
                  {project.stats && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50">
                      {project.stats.metric}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 mb-3 font-medium">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Bottom: Tech Stack Pills & CTA */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.isPrivate ? (
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all duration-200"
                  >
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Private Repo (Details on Request)</span>
                  </a>
                ) : (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Explore Repository</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 p-4 rounded-2xl glass-panel border border-slate-800">
            <Lock className="w-4 h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm text-slate-300">
              Need more architectural details or a live walkthrough of enterprise systems?
            </span>
            <a
              href="#contact"
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1"
            >
              <span>Contact Me</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
