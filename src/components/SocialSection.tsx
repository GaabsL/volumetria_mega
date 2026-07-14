/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Layers, ArrowUpRight, ArrowDownRight, Info, CheckCircle2, Zap } from 'lucide-react';
import { SOCIAL_VOLUME_DATA } from '../types';

export default function SocialSection() {
  const [selectedSemester, setSelectedSemester] = useState<'all' | 's1_25' | 's2_25' | 's1_26'>('all');
  const [hoveredBar, setHoveredBar] = useState<{ platform: string; semester: string; value: number } | null>(null);

  // Maximum value for SVG scaling
  const maxValue = 1200;

  // Total volumetrics for reference cards
  const totalS1_25 = 1274;
  const totalS2_25 = 736;
  const totalS1_26 = 3660;

  // Custom colors for semesters
  const colors = {
    s1_25: '#3b82f6', // Cobalt blue
    s2_25: '#94a3b8', // Slate grey
    s1_26: '#f59e0b', // Amber orange
  };

  return (
    <section id="social-media-perf" className="w-full bg-white rounded border border-slate-200 shadow-sm p-4 lg:p-5 flex flex-col gap-6 transition-all duration-300">
      
      {/* Header and Filter Control */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 pb-4 border-b border-slate-200">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="p-1.5 bg-slate-100 text-[#0F172A] rounded">
              <Layers size={15} />
            </span>
            <h2 className="text-base font-display font-bold text-slate-900 uppercase tracking-tight">
              1. Desempenho e Volumetria de Redes Sociais
            </h2>
            <span className="bg-amber-100 text-amber-700 text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-2xl font-sans">
            Visão detalhada de peças produzidas por plataforma e análise da transição estratégica de formatos entre 2025 e 2026.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-100 p-1 rounded border border-slate-200 font-mono text-[11px] text-slate-600">
          <button
            onClick={() => setSelectedSemester('all')}
            className={`px-2.5 py-1 rounded transition-all font-semibold ${
              selectedSemester === 'all'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'hover:text-slate-900'
            }`}
          >
            Todos Períodos
          </button>
          <button
            onClick={() => setSelectedSemester('s1_25')}
            className={`px-2.5 py-1 rounded transition-all font-semibold flex items-center gap-1 ${
              selectedSemester === 's1_25'
                ? 'bg-[#0F172A] text-white shadow-sm'
                : 'hover:text-slate-900'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            S1 25
          </button>
          <button
            onClick={() => setSelectedSemester('s2_25')}
            className={`px-2.5 py-1 rounded transition-all font-semibold flex items-center gap-1 ${
              selectedSemester === 's2_25'
                ? 'bg-slate-500 text-white shadow-sm'
                : 'hover:text-slate-900'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            S2 25
          </button>
          <button
            onClick={() => setSelectedSemester('s1_26')}
            className={`px-2.5 py-1 rounded transition-all font-semibold flex items-center gap-1 ${
              selectedSemester === 's1_26'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'hover:text-slate-900'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            S1 26
          </button>
        </div>
      </div>

      {/* Top Total volume timeline cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        
        {/* Card S1 2025 */}
        <div className="bg-slate-50 rounded p-4 border border-slate-200 border-l-4 border-l-blue-600 flex flex-col justify-between hover:shadow-sm transition-shadow">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono font-bold block">Volume Inicial</span>
            <h3 className="text-sm font-display font-bold text-[#0F172A] uppercase">1º Semestre 2025</h3>
          </div>
          <div className="mt-2.5">
            <span className="text-2xl font-display font-black text-[#0F172A]">{totalS1_25}</span>
            <span className="text-[11px] text-slate-500 italic ml-1">peças produzidas</span>
          </div>
          <div className="text-[11px] text-slate-500 mt-2 flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-100">
            <Info size={11} className="text-blue-500 shrink-0" />
            <span>Média de ~212 peças/mês no semestre.</span>
          </div>
        </div>

        {/* Card S2 2025 */}
        <div className="bg-slate-50 rounded p-4 border border-slate-200 border-l-4 border-l-slate-400 flex flex-col justify-between hover:shadow-sm transition-shadow relative overflow-hidden">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono font-bold block">Transição de Formatos</span>
            <h3 className="text-sm font-display font-bold text-[#0F172A] uppercase">2º Semestre 2025</h3>
          </div>
          <div className="mt-2.5">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-display font-black text-[#0F172A]">{totalS2_25}</span>
              <span className="text-[10px] font-bold text-rose-600 flex items-center gap-0.5 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-100 font-mono">
                <ArrowDownRight size={11} />
                -42,2%
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono block mt-0.5">Queda estratégica vs S1 2025</span>
          </div>
          <div className="text-[10px] text-slate-600 mt-2 bg-white p-1.5 rounded border border-slate-100">
            <p className="font-sans leading-snug">
              <strong>Motivo:</strong> Grandes campanhas já tinham os materiais produzidos pela Star como o Aniversario e Black Friday.
            </p>
          </div>
        </div>

        {/* Card S1 2026 */}
        <div className="bg-slate-50 rounded p-4 border border-slate-200 border-l-4 border-l-amber-500 flex flex-col justify-between hover:shadow-sm transition-shadow relative overflow-hidden">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono font-bold block">Retomada e Escala</span>
            <h3 className="text-sm font-display font-bold text-[#0F172A] uppercase">1º Semestre 2026</h3>
          </div>
          <div className="mt-2.5">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-display font-black text-[#0F172A]">{totalS1_26.toLocaleString('pt-BR')}</span>
              <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 font-mono">
                <ArrowUpRight size={11} />
                +82,1%
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono block mt-0.5">Crescimento de Jan~Jun 26</span>
          </div>
          <div className="text-[10px] text-emerald-800 mt-2 bg-emerald-50/50 px-2 py-0.5 rounded border border-emerald-100 flex items-center gap-1">
            <Zap size={11} className="text-emerald-600 shrink-0" />
            <span className="font-sans font-medium">Máxima histórica de produção consolidada.</span>
          </div>
        </div>

      </div>

      {/* Main Interactive SVG Bar Chart & Info Panel */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-stretch">
        
        {/* Interactive Chart (Col-span 8) */}
        <div className="xl:col-span-8 bg-slate-50 rounded p-4 border border-slate-200 flex flex-col gap-3 relative">
          
          <div className="flex justify-between items-center pb-2 border-b border-slate-200">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Volumetria Social por Plataforma
            </h4>
            
            {/* Legend Indicators */}
            <div className="hidden sm:flex items-center gap-3 font-mono text-[9px] font-bold text-slate-500">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded" style={{ backgroundColor: colors.s1_25 }} />
                <span>S1 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded" style={{ backgroundColor: colors.s2_25 }} />
                <span>S2 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded" style={{ backgroundColor: colors.s1_26 }} />
                <span>S1 2026</span>
              </div>
            </div>
          </div>

          {/* Interactive Tooltip Display if hovered */}
          <div className="h-5 flex items-center justify-center">
            {hoveredBar ? (
              <span className="text-[10px] bg-slate-900 text-white px-2.5 py-0.5 rounded font-mono flex items-center gap-1.5 shadow-sm">
                <span className="font-bold text-amber-400">{hoveredBar.platform}</span>
                <span className="text-slate-400">|</span>
                <span>{hoveredBar.semester.toUpperCase() === 'S1_25' ? 'S1 25' : hoveredBar.semester.toUpperCase() === 'S2_25' ? 'S2 25' : 'S1 26'}:</span>
                <strong className="text-white">{hoveredBar.value} peças</strong>
              </span>
            ) : (
              <span className="text-[10px] text-slate-400 italic">Passe o mouse sobre as barras para ver os números exatos</span>
            )}
          </div>

          {/* SVG Comparative Chart Workspace */}
          <div className="relative w-full overflow-x-auto select-none">
            <div className="min-w-[500px] aspect-[16/7] relative">
              <svg viewBox="0 0 800 350" className="w-full h-full font-sans" xmlns="http://www.w3.org/2000/svg">
                
                {/* Horizontal Grid lines */}
                {[0, 300, 600, 900, 1200].map((gridVal) => {
                  const y = 300 - (gridVal / maxValue) * 250;
                  return (
                    <g key={gridVal}>
                      <line
                        x1="80"
                        y1={y}
                        x2="760"
                        y2={y}
                        stroke="#e2e8f0"
                        strokeWidth="1"
                        strokeDasharray={gridVal === 0 ? "0" : "3 3"}
                      />
                      <text
                        x="65"
                        y={y + 4}
                        fill="#64748b"
                        fontSize="11"
                        textAnchor="end"
                        className="font-mono"
                      >
                        {gridVal}
                      </text>
                    </g>
                  );
                })}

                {/* Platform Bar Groups */}
                {SOCIAL_VOLUME_DATA.map((platform, idx) => {
                  const groupWidth = 140;
                  const groupGap = 25;
                  const startX = 100 + idx * (groupWidth + groupGap);
                  const barWidth = 24;
                  const subGap = 4;

                  return (
                    <g key={platform.name}>
                      {/* Vertical separator line */}
                      {idx > 0 && (
                        <line
                          x1={startX - groupGap / 2}
                          y1="30"
                          x2={startX - groupGap / 2}
                          y2="305"
                          stroke="#e2e8f0"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                        />
                      )}

                      {/* Bar 1: S1 2025 */}
                      {(selectedSemester === 'all' || selectedSemester === 's1_25') && (
                        <rect
                          x={startX}
                          y={300 - (platform.s1_25 / maxValue) * 250}
                          width={barWidth}
                          height={(platform.s1_25 / maxValue) * 250}
                          fill={colors.s1_25}
                          rx="1"
                          className="transition-all duration-200 hover:opacity-95 cursor-pointer"
                          onMouseEnter={() => setHoveredBar({ platform: platform.name, semester: 's1_25', value: platform.s1_25 })}
                          onMouseLeave={() => setHoveredBar(null)}
                        />
                      )}

                      {/* Bar 2: S2 2025 */}
                      {(selectedSemester === 'all' || selectedSemester === 's2_25') && (
                        <rect
                          x={startX + barWidth + subGap}
                          y={300 - (platform.s2_25 / maxValue) * 250}
                          width={barWidth}
                          height={(platform.s2_25 / maxValue) * 250}
                          fill={colors.s2_25}
                          rx="1"
                          className="transition-all duration-200 hover:opacity-95 cursor-pointer"
                          onMouseEnter={() => setHoveredBar({ platform: platform.name, semester: 's2_25', value: platform.s2_25 })}
                          onMouseLeave={() => setHoveredBar(null)}
                        />
                      )}

                      {/* Bar 3: S1 2026 */}
                      {(selectedSemester === 'all' || selectedSemester === 's1_26') && (
                        <rect
                          x={startX + (barWidth + subGap) * 2}
                          y={300 - (platform.s1_26 / maxValue) * 250}
                          width={barWidth}
                          height={(platform.s1_26 / maxValue) * 250}
                          fill={colors.s1_26}
                          rx="1"
                          className="transition-all duration-200 hover:opacity-95 cursor-pointer"
                          onMouseEnter={() => setHoveredBar({ platform: platform.name, semester: 's1_26', value: platform.s1_26 })}
                          onMouseLeave={() => setHoveredBar(null)}
                        />
                      )}

                      {/* Axis Label */}
                      <text
                        x={startX + barWidth + subGap}
                        y="322"
                        fill="#0F172A"
                        fontSize="11"
                        fontWeight="700"
                        textAnchor="middle"
                        className="font-sans uppercase"
                      >
                        {platform.name === 'Instagram Feed' ? 'Insta Feed' : platform.name === 'Instagram Stories' ? 'Insta Stories' : platform.name}
                      </text>

                      {/* Value labels over active bars */}
                      {selectedSemester !== 'all' && (
                        <text
                          x={
                            selectedSemester === 's1_25'
                              ? startX + barWidth / 2
                              : selectedSemester === 's2_25'
                              ? startX + barWidth + subGap + barWidth / 2
                              : startX + (barWidth + subGap) * 2 + barWidth / 2
                          }
                          y={
                            300 -
                            ((selectedSemester === 's1_25'
                              ? platform.s1_25
                              : selectedSemester === 's2_25'
                              ? platform.s2_25
                              : platform.s1_26) /
                              maxValue) *
                              250 -
                            6
                          }
                          fill="#0F172A"
                          fontSize="11"
                          fontWeight="800"
                          textAnchor="middle"
                          className="font-mono"
                        >
                          {selectedSemester === 's1_25'
                            ? platform.s1_25
                            : selectedSemester === 's2_25'
                            ? platform.s2_25
                            : platform.s1_26}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* Narrative & Strategic Analysis (Col-span 4) */}
        <div className="xl:col-span-4 bg-[#0F172A] text-white rounded p-4 border border-slate-800 flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-3.5 relative z-10">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-500">
              Análise Estratégica do Diretor
            </h4>
            <h3 className="text-base font-display font-bold tracking-tight text-white uppercase">
              A Virada Estratégica dos Formatos
            </h3>
            
            <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
              A aparente contração de volumetria total registrada no <strong>2º Semestre de 2025 (-42,2%)</strong> não representou um declínio operacional, mas sim uma <strong>mudança de rota criativa</strong> executada pelo comitê de operações.
            </p>

            <div className="space-y-2 text-[11px]">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shrink-0" />
                <p className="text-slate-300 leading-tight">
                  O Instagram Stories cresceu <strong>+136,4%</strong> devido as mudanças estratégicas identificada para os conteúdos produzidos, com foco na interações em vez do volume.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 shrink-0" />
                <p className="text-slate-300 leading-tight">
                  O foco migrou pesadamente para o <strong>TikTok (+236,1%)</strong> com produções de vídeos curtos e inclusão de <strong>colaboradores</strong> que são mais carismaticos, e assim performando melhor na rede.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1 shrink-0" />
                <p className="text-slate-300 leading-tight">
                  Constante desenvolvimento estratégico para aumentar a performance <strong>Facebook (+207,5%)</strong> e no <strong>Instagram Feed (+151,1%)</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-400 relative z-10 font-mono">
            <span>Métrica Integrada de Escala: </span>
            <strong className="text-white">Jan-Jun 2026 em aceleração contínua.</strong>
          </div>
        </div>

      </div>

      {/* Structured Metrics Table */}
      <div className="w-full overflow-hidden rounded border border-slate-200">
        <table className="w-full text-left border-collapse font-sans text-xs">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 font-mono text-[9px] text-slate-500 uppercase tracking-wider">
              <th className="py-2.5 px-3 font-bold">Plataforma</th>
              <th className="py-2.5 px-3 text-center font-bold">S1 2025</th>
              <th className="py-2.5 px-3 text-center font-bold">S2 2025</th>
              <th className="py-2.5 px-3 text-center font-bold">S1 2026</th>
              <th className="py-2.5 px-3 text-right font-bold">Crescimento Interanual (S1 25 vs S1 26)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {SOCIAL_VOLUME_DATA.map((row) => (
              <tr key={row.name} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-2.5 px-3 font-bold text-slate-900 uppercase tracking-tight text-[11px]">{row.name}</td>
                <td className="py-2.5 px-3 text-center font-mono font-medium">{row.s1_25}</td>
                <td className="py-2.5 px-3 text-center font-mono font-medium text-slate-500">{row.s2_25}</td>
                <td className="py-2.5 px-3 text-center font-mono font-bold text-[#0F172A]">{row.s1_26}</td>
                <td className="py-2.5 px-3 text-right">
                  <span className={`inline-flex items-center gap-1 font-mono font-bold text-[10px] px-2 py-0.5 rounded ${
                    row.growthType === 'reduction'
                      ? 'bg-rose-50 text-rose-600 border border-rose-100'
                      : row.growthType === 'explosive'
                      ? 'bg-amber-50 text-amber-700 border border-amber-100'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                  }`}>
                    {row.growthType === 'reduction' ? (
                      <ArrowDownRight size={11} />
                    ) : (
                      <ArrowUpRight size={11} />
                    )}
                    {row.growth}
                    <span className="text-[8px] font-normal text-slate-400">
                      {row.growthType === 'reduction' ? 'REDUÇÃO' : row.growthType === 'explosive' ? '' : 'ALTA'}
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  );
}
