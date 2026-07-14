/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TrendingUp, Layers, FileBarChart2, Award, Calendar, User, RefreshCw } from 'lucide-react';
import { SOCIAL_VOLUME_DATA, BI_EVOLUTION_DATA, OPERATIONAL_EFFORT } from '../types';

export default function Header() {
  // Calculations based on exact data
  const totalSocial2025 = 1274 + 736; // 2010
  const totalSocialS1_26 = 1587;
  const growthS1 = "+24,6%"; // +24.6% vs S1 25 (1587 vs 1274)
  const totalBiS1_26 = 107;
  const biGrowth = "+296,3%"; // +296.3% vs S1 25 (107 vs 27)

  return (
    <header className="w-full bg-[#0F172A] text-white py-5 px-6 lg:px-12 border-b-4 border-amber-500 shadow-sm relative overflow-hidden shrink-0">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 relative z-10">
        {/* Upper Brand Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="bg-white p-1.5 rounded shadow-sm inline-flex items-center justify-center h-10 shrink-0">
              <img 
                src="https://i.imgur.com/lAyMWKF.png" 
                alt="MegaMídia Group Logo" 
                className="h-full w-auto object-contain" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div>
              <span className="font-display font-bold text-base tracking-tight text-white block">
                MEGAMÍDIA GROUP
              </span>
              <span className="text-[10px] text-slate-400 block -mt-1 font-mono uppercase tracking-widest">
                Inteligência de Dados &amp; Operações Criativas
              </span>
            </div>
          </div>

          {/* Metadata info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-slate-400 font-mono">
            <div className="flex items-center gap-1">
              <User size={12} className="text-amber-500" />
              <span> <span className="text-slate-200"></span></span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={12} className="text-amber-500" />
              <span>Período: <span className="text-slate-200">2025 - 2026</span></span>
            </div>
            <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-[9px] uppercase font-bold tracking-wider text-emerald-400">ATIVO</span>
            </div>
          </div>
        </div>

        {/* Main Title Block */}
        <div className="space-y-1 max-w-4xl">
          <span className="text-[10px] font-bold tracking-wider text-amber-500 uppercase font-mono block">
            Relatório Executivo de Volumetria e Performance Operacional
          </span>
          <h1 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight uppercase">
            Performance da Agência (2025-2026)
          </h1>
          <p className="text-xs text-slate-400 max-w-3xl font-sans">
            Ciclo Estratégico de BI &amp; Operações. Dados unificados reais consolidados do fluxo operacional criativo de redes sociais, refações e evolução da maturidade analítica.
          </p>
        </div>

        {/* Top level KPI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-2">
          
          {/* Card 1: Total Social 2025 */}
          <div className="bg-slate-800/40 border border-slate-800 rounded p-3.5 hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div className="flex justify-between items-start mb-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Total Social 2025</span>
              <div className="p-1.5 bg-slate-800 text-slate-300 rounded group-hover:text-amber-500 transition-colors">
                <Layers size={14} />
              </div>
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-display font-black text-white tracking-tight">
                {totalSocial2025.toLocaleString('pt-BR')} <span className="text-xs font-normal text-slate-400 italic">peças</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1.5 font-mono">
                <span>S1: <strong className="text-slate-200">1.274</strong></span>
                <span className="text-slate-600">|</span>
                <span>S2: <strong className="text-slate-200">736</strong></span>
              </div>
            </div>
          </div>

          {/* Card 2: Reações Redação & Criação */}
          <div className="bg-slate-800/40 border border-slate-800 rounded p-3.5 hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div className="flex justify-between items-start mb-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Refações Redação &amp; Criação</span>
              <div className="p-1.5 bg-slate-800 text-rose-400 rounded transition-colors">
                <RefreshCw size={14} />
              </div>
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-display font-black text-white tracking-tight flex items-baseline gap-1.5">
                125
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 font-mono">
                  Média de refações
                </span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1 font-sans">
                Retrabalhos mensais consolidados 2026
              </p>
            </div>
          </div>

          {/* Card 3: Unificado Redação & Criação */}
          <div className="bg-slate-800/40 border border-slate-800 rounded p-3.5 hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div className="flex justify-between items-start mb-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Total Social Jan-Jun 2026</span>
              <div className="p-1.5 bg-slate-800 text-emerald-400 rounded transition-colors">
                <Award size={14} />
              </div>
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-display font-black text-white tracking-tight flex items-baseline gap-1.5">
                3.660
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  +82,1%
                </span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1 font-sans">
                Total de Jan~Jun 26 (Consolidado)
              </p>
            </div>
          </div>

          {/* Card 4: Entregas de BI */}
          <div className="bg-slate-800/40 border border-slate-800 rounded p-3.5 hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div className="flex justify-between items-start mb-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Entregas de BI</span>
              <div className="p-1.5 bg-slate-800 text-amber-400 rounded transition-colors">
                <FileBarChart2 size={14} />
              </div>
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-display font-black text-white tracking-tight flex items-baseline gap-1.5">
                {totalBiS1_26}
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono">
                  {biGrowth}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1 font-sans">
                Total de Jan~Jun 26 (Consolidado)
              </p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
