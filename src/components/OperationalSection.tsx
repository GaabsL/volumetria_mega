/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, Sliders, AlertTriangle, PenTool, Layout, FileText, RefreshCw } from 'lucide-react';
import { OPERATIONAL_EFFORT } from '../types';

export default function OperationalSection() {
  const { fixedMonthlyVolume, writing, design, formats } = OPERATIONAL_EFFORT;

  // Percentages calculation
  const writingPct = ((writing / fixedMonthlyVolume) * 100).toFixed(1);
  const designPct = ((design / fixedMonthlyVolume) * 100).toFixed(1);

  // Updated rework values and rates calculation
  const totalRework = 749;
  const designRework = 504;
  const designTotal = 1536;
  const writingRework = 245;
  const writingTotal = 2124;

  const designReworkRate = ((designRework / designTotal) * 100).toFixed(1);
  const writingReworkRate = ((writingRework / writingTotal) * 100).toFixed(1);

  return (
    <section id="operational-eff" className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
      
      {/* Block 1: Volume e Divisão de Esforço */}
      <div className="bg-white rounded border border-slate-200 shadow-sm p-4 lg:p-5 flex flex-col justify-between transition-all hover:shadow-md duration-300">
        <div className="space-y-4">
          
          {/* Header */}
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-slate-100 text-[#0F172A] rounded">
                <Sliders size={15} />
              </span>
              <h2 className="text-sm font-display font-bold text-[#0F172A] uppercase tracking-tight">
                2. Operação Unificada e Capacidade Mensal
              </h2>
            </div>
            <p className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider">
              MÉDIA MENSAL BASE: JANEIRO 2026
            </p>
          </div>

          {/* Core Volume Hero */}
          <div className="bg-slate-50 rounded p-4 border border-slate-200 border-l-4 border-l-amber-500 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400 block">Demandas</span>
              <div className="text-xl font-display font-black text-[#0F172A] mt-0.5">
                {fixedMonthlyVolume.toLocaleString('pt-BR')} <span className="text-xs font-normal text-slate-500 italic">demandas</span>
              </div>
            </div>
          </div>

          {/* Effort Division: Writing vs Design */}
          <div className="space-y-2">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
              Distribuição e Esforço por Especialidade
            </h3>
            
            {/* Visual Progress Bar */}
            <div className="h-3 w-full rounded bg-slate-100 overflow-hidden flex border border-slate-200">
              <div
                className="bg-blue-600 h-full transition-all duration-500 hover:opacity-90"
                style={{ width: `${writingPct}%` }}
                title={`Redação: ${writingPct.replace('.', ',')}%`}
              />
              <div
                className="bg-amber-500 h-full transition-all duration-500 hover:opacity-90"
                style={{ width: `${designPct}%` }}
                title={`Design: ${designPct.replace('.', ',')}%`}
              />
            </div>

            {/* Labels and Figures */}
            <div className="grid grid-cols-2 gap-3">
              {/* Copywriting */}
              <div className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                <div className="p-1 bg-blue-50 text-blue-600 rounded shrink-0">
                  <PenTool size={12} />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-mono font-bold text-slate-900">{writing.toLocaleString('pt-BR')}</span>
                    <span className="text-[10px] font-bold text-blue-600 font-mono">({writingPct.replace('.', ',')}%)</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-sans block">Tarefas Copywriting (Redação)</span>
                </div>
              </div>

              {/* Design */}
              <div className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                <div className="p-1 bg-amber-50 text-amber-500 rounded shrink-0">
                  <Layout size={12} />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-mono font-bold text-slate-900">{design.toLocaleString('pt-BR')}</span>
                    <span className="text-[10px] font-bold text-amber-600 font-mono">({designPct.replace('.', ',')}%)</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-sans block">peças do Visual Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formats Distribution Breakdown */}
          <div className="space-y-2 pt-1">
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
              Distribuição por Formatos Criativos
            </h3>
            <div className="space-y-2">
              {formats.map((fmt) => {
                const totalFormats = formats.reduce((acc, f) => acc + f.value, 0);
                const pct = ((fmt.value / totalFormats) * 100).toFixed(2);
                return (
                  <div key={fmt.name} className="space-y-0.5">
                    <div className="flex justify-between items-center text-[11px] font-sans">
                      <span className="font-bold text-slate-700 flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${fmt.color}`} />
                        {fmt.name}
                      </span>
                      <span className="font-mono text-slate-500">
                        {fmt.value.toLocaleString('pt-BR')} posts <strong className="text-slate-800">({pct.replace('.', ',')}%)</strong>
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded overflow-hidden border border-slate-200">
                      <div className={`h-full ${fmt.color}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        <div className="text-[9px] text-slate-400 font-mono border-t border-slate-200 pt-3 mt-4">
          *Volume desduplicado impede inflação artificial de KPIs operacionais.
        </div>
      </div>

      {/* Block 2: Controle de Refações e Retrabalho */}
      <div className="bg-white rounded border border-slate-200 shadow-sm p-4 lg:p-5 flex flex-col justify-between transition-all hover:shadow-md duration-300">
        <div className="space-y-4">
          
          {/* Header */}
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-slate-100 text-rose-600 rounded">
                <RefreshCw size={15} />
              </span>
              <h2 className="text-sm font-display font-bold text-[#0F172A] uppercase tracking-tight">
                Índice de Refações &amp; Rework
              </h2>
            </div>
            <p className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider">
              ANÁLISE DE QUALIDADE E RETRABALHO
            </p>
          </div>

          {/* Rework Ratio Hero */}
          <div className="bg-slate-50 rounded p-4 border border-slate-200 border-l-4 border-l-rose-500 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400 block">Total de Refações</span>
              <div className="text-xl font-display font-black text-[#0F172A] mt-0.5">
                {totalRework} <span className="text-xs font-normal text-slate-500 italic">125 retrabalhos/mês</span>
              </div>
            </div>
          </div>

          {/* Rework Breakdown Indicators */}
          <div className="grid grid-cols-2 gap-3">
            
            {/* Design Rework card */}
            <div className="bg-amber-50/50 border border-amber-200 rounded p-3 space-y-1">
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-amber-700 block">Retrabalho de Design</span>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-mono font-bold text-slate-900">{designRework}</span>
                <span className="text-[10px] font-bold text-amber-600 font-mono bg-white px-1.5 py-0.5 rounded border border-amber-200">
                  {designReworkRate}%
                </span>
              </div>
              <p className="text-[10px] text-slate-600 leading-tight font-sans">
                {designRework} refações de {designTotal.toLocaleString('pt-BR')} peças.
              </p>
            </div>

            {/* Writing Rework card */}
            <div className="bg-blue-50/50 border border-blue-200 rounded p-3 space-y-1">
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-blue-700 block">Retrabalho de Redação</span>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-mono font-bold text-slate-900">{writingRework}</span>
                <span className="text-[10px] font-bold text-blue-600 font-mono bg-white px-1.5 py-0.5 rounded border border-blue-200">
                  {writingReworkRate}%
                </span>
              </div>
              <p className="text-[10px] text-slate-600 leading-tight font-sans">
                {writingRework} refações de {writingTotal.toLocaleString('pt-BR')} Tarefas.
              </p>
            </div>

          </div>

          {/* Executive Alert & Operational Mitigation */}
          <div className="bg-[#0F172A] text-slate-300 rounded p-3 border border-slate-850 space-y-2.5">
            <div className="flex items-center gap-1.5 text-amber-500">
              <AlertTriangle size={14} />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                Mitigação de Retrabalho
              </span>
            </div>
            
            <p className="text-[11px] text-slate-300 leading-tight font-sans">
              A taxa de refações em design de <strong>{designReworkRate}%</strong> exige a aplicação de briefings no QP e aprovações dinâmicas estruturadas.
            </p>

            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[9px] font-mono text-slate-400 border-t border-slate-800 pt-2">
              <div className="flex items-center gap-1">
                <span className="h-1 w-1 bg-amber-500 rounded-full shrink-0" />
                <span>Briefing único e completo</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1 w-1 bg-amber-500 rounded-full shrink-0" />
                <span>Checklist antes da produção</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1 w-1 bg-amber-500 rounded-full shrink-0" />
                <span>Banco de aprendizados</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1 w-1 bg-amber-500 rounded-full shrink-0" />
                <span>Aprovação estratégica antes da redação</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1 w-1 bg-amber-500 rounded-full shrink-0" />
                <span>Biblioteca de copies aprovadas</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1 w-1 bg-amber-500 rounded-full shrink-0" />
                <span>Guia de campanhas</span>
              </div>
              <div className="flex items-center gap-1 col-span-2">
                <span className="h-1 w-1 bg-amber-500 rounded-full shrink-0" />
                <span>Manual de marca de cada categoria e negócio</span>
              </div>
            </div>
          </div>

        </div>

        <div className="text-[9px] text-slate-400 font-mono border-t border-slate-200 pt-3 mt-4">
          *Objetivo: Reduzir retrabalho global para &lt;10% no Semestre.
        </div>
      </div>

    </section>
  );
}
