import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Terminal, Code2, Database, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, socials } = portfolioData;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Decorative gradient meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-500/10 blur-[110px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                {personal.status}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="text-sm font-mono tracking-widest uppercase text-cyan-400 font-semibold">
                Hello world, my name is
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                <span className="block">{personal.name}</span>
                <span className="gradient-text block text-3xl sm:text-5xl lg:text-6xl mt-2 font-bold">
                  {personal.role}
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {personal.tagline}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:via-indigo-400 hover:to-purple-500 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-semibold text-slate-300 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-200"
                title="GitHub Repositories"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>

            {/* Quick Tech Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <span className="font-mono text-slate-500 mr-1">Stack:</span>
              {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'].map((tech) => (
                <span 
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/60 font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-lg glass-card rounded-2xl overflow-hidden shadow-2xl shadow-cyan-950/40 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
              
              {/* Terminal Title Bar */}
              <div className="bg-slate-900/95 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    poovarasan.dev: ~
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-cyan-400/90 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded">
                    ready
                  </span>
                </div>
              </div>

              {/* Code Snippet Content */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-2.5 bg-slate-950/90 overflow-x-auto">
                <div className="text-slate-400">
                  <span className="text-purple-400 font-semibold">const</span>{' '}
                  <span className="text-cyan-300">engineer</span> = &#123;
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-indigo-400">name</span>: <span className="text-emerald-300">'{personal.name}'</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-indigo-400">role</span>: <span className="text-emerald-300">'{personal.role}'</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-indigo-400">location</span>: <span className="text-emerald-300">'{personal.location}'</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-indigo-400">focusAreas</span>: [
                  <span className="text-emerald-300">'Full-Stack Architecture'</span>,{' '}
                  <span className="text-emerald-300">'Microservices'</span>,{' '}
                  <span className="text-emerald-300">'Modern UI'</span>
                  ],
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-indigo-400">hardSkills</span>: &#123;
                </div>
                <div className="pl-8 text-slate-300">
                  <span className="text-cyan-400">frontend</span>: [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'TypeScript'</span>, <span className="text-emerald-300">'Tailwind'</span>],
                </div>
                <div className="pl-8 text-slate-300">
                  <span className="text-cyan-400">backend</span>: [<span className="text-emerald-300">'Node.js'</span>, <span className="text-emerald-300">'Express'</span>, <span className="text-emerald-300">'Python'</span>],
                </div>
                <div className="pl-8 text-slate-300">
                  <span className="text-cyan-400">storage</span>: [<span className="text-emerald-300">'PostgreSQL'</span>, <span className="text-emerald-300">'MongoDB'</span>, <span className="text-emerald-300">'Redis'</span>]
                </div>
                <div className="pl-4 text-slate-300">&#125;,</div>
                <div className="pl-4 text-slate-300">
                  <span className="text-indigo-400">status</span>: <span className="text-emerald-400">'{personal.status}'</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-indigo-400">buildFuture</span>: () =&gt; <span className="text-yellow-300">"Ship reliable, elegant code 🚀"</span>
                </div>
                <div className="text-slate-400">&#125;;</div>
                
                <div className="pt-2 text-slate-500 flex items-center gap-2">
                  <span className="text-emerald-400">$</span>
                  <span>engineer.buildFuture()</span>
                </div>
                <div className="text-yellow-300/90 font-medium pl-3">
                  =&gt; "Ship reliable, elegant code 🚀"
                </div>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="bg-slate-900/80 px-4 py-3 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <div className="text-cyan-400 font-bold">End-to-End</div>
                  <div className="text-[10px] text-slate-400">Full-Stack</div>
                </div>
                <div className="border-x border-slate-800">
                  <div className="text-indigo-400 font-bold">Scalable</div>
                  <div className="text-[10px] text-slate-400">Architecture</div>
                </div>
                <div>
                  <div className="text-emerald-400 font-bold">Fast & Lean</div>
                  <div className="text-[10px] text-slate-400">Modern DX</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
