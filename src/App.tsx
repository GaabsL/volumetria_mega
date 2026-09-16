/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import SocialSection from './components/SocialSection';
import OperationalSection from './components/OperationalSection';
import BiSection from './components/BiSection';
import TemporalSection from './components/TemporalSection';
import Footer from './components/Footer';
import { Layers, Sliders, FileBarChart2, BarChart3, ArrowUpCircle } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<'social' | 'operational' | 'bi' | 'temporal'>('social');
  const [tabMode, setTabMode] = useState<'continuous' | 'single'>('continuous');

  // Scroll smooth helper / tab switcher
  const scrollTo = (id: string, sectionName: 'social' | 'operational' | 'bi' | 'temporal') => {
    setActiveSection(sectionName);
    if (tabMode === 'continuous') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-amber-500 selection:text-slate-900">
      
      {/* 1. Header Component with Core Metrics */}
      <Header />

      {/* 2. Floating Quick Navigation Bar */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
          
          {/* Internal Quick Links / Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 font-sans text-xs">
            <span className="text-slate-400 font-mono text-[9px] uppercase font-bold tracking-wider hidden md:inline">
              Navegar:
            </span>
            
            <button
              id="btn-nav-social"
              onClick={() => scrollTo('social-media-perf', 'social')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded transition-all font-bold ${
                activeSection === 'social'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Layers size={12} />
              <span>1. Redes Sociais</span>
            </button>

            <button
              id="btn-nav-operational"
              onClick={() => scrollTo('operational-eff', 'operational')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded transition-all font-bold ${
                activeSection === 'operational'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Sliders size={12} />
              <span>2. Eficiência &amp; Refações</span>
            </button>

            <button
              id="btn-nav-bi"
              onClick={() => scrollTo('bi-section', 'bi')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded transition-all font-bold ${
                activeSection === 'bi'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FileBarChart2 size={12} />
              <span>3. BI &amp; Cronogramas</span>
            </button>

            <button
              id="btn-nav-temporal"
              onClick={() => scrollTo('temporal-section', 'temporal')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded transition-all font-bold ${
                activeSection === 'temporal'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BarChart3 size={12} />
              <span>4. Visão Temporal</span>
            </button>
          </div>

          {/* Right Mode Switcher & Support Badge */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded border border-slate-200 text-[10px] font-mono">
              <button
                onClick={() => setTabMode('continuous')}
                className={`px-2 py-0.5 rounded transition-all font-bold ${
                  tabMode === 'continuous'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Exibir todas as seções em página contínua"
              >
                Todas
              </button>
              <button
                onClick={() => setTabMode('single')}
                className={`px-2 py-0.5 rounded transition-all font-bold ${
                  tabMode === 'single'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Exibir apenas a aba ativa"
              >
                Por Aba
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="font-bold">MegaMídia BI</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Main Dashboard Workspace Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-6 py-6 flex flex-col gap-6 w-full">
        
        {/* Section 1: Social Media Performance (S1 25, S2 25, S1 26) */}
        {(tabMode === 'continuous' || activeSection === 'social') && (
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <SocialSection />
          </div>
        )}

        {/* Section 2: Operational Effort & Rework Control */}
        {(tabMode === 'continuous' || activeSection === 'operational') && (
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <OperationalSection />
          </div>
        )}

        {/* Section 3: Data Analytics Reports & Calendar Scheduler */}
        {(tabMode === 'continuous' || activeSection === 'bi') && (
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <BiSection />
          </div>
        )}

        {/* Section 4: Temporal Production Distribution (S1 2026) */}
        {(tabMode === 'continuous' || activeSection === 'temporal') && (
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <TemporalSection />
          </div>
        )}

        {/* Back to top button for long executive reports */}
        <div className="flex justify-center pt-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0F172A] text-white hover:bg-slate-800 transition-colors rounded text-xs font-mono font-bold tracking-wider shadow-sm uppercase border border-slate-700"
          >
            <ArrowUpCircle size={12} className="text-amber-500" />
            <span>Voltar ao Topo</span>
          </button>
        </div>

      </main>

      {/* 4. Professional Footer */}
      <Footer />

    </div>
  );
}
