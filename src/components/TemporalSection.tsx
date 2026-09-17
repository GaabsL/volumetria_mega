/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  PenTool, 
  Palette, 
  Layers, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownRight,
  Sparkles,
  PieChart as PieIcon,
  HelpCircle,
  FileText
} from 'lucide-react';
import { TEMPORAL_PRODUCTION_DATA, TEMPORAL_EXECUTIVE_SUMMARY } from '../types';

export default function TemporalSection() {
  const [chartType, setChartType] = useState<'grouped' | 'stacked'>('grouped');
  const [hoveredMonth, setHoveredMonth] = useState<string | null>(null);
  const [highlightArea, setHighlightArea] = useState<'all' | 'design' | 'writing'>('all');

  const {
    totalDemands,
    totalWriting,
    totalDesign,
    writingPercentage,
    designPercentage,
    averageMonthly,
    semesterGrowth
  } = TEMPORAL_EXECUTIVE_SUMMARY;

  // Chart coordinate constants
  // Max scale: for grouped max single bar is 475 (so 600 max), for stacked max total is 819 (so 1000 max)
  const maxScaleGrouped = 600;
  const maxScaleStacked = 1000;
  const currentMaxScale = chartType === 'grouped' ? maxScaleGrouped : maxScaleStacked;

  const hoveredData = TEMPORAL_PRODUCTION_DATA.find((d) => d.month === hoveredMonth);

  return (
    <section 
      id="temporal-section" 
      className="w-full bg-white rounded border border-slate-200 shadow-sm p-4 lg:p-6 flex flex-col gap-6 transition-all duration-300 scroll-mt-14"
    >
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pb-4 border-b border-slate-200">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">
              <BarChart3 size={16} />
            </span>
            <h2 className="text-base font-display font-bold text-[#0F172A] uppercase tracking-tight">
              4. Visão Temporal &amp; Distribuição Mensal de Produção (1º Semestre 2026)
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-3xl font-sans">
            Acompanhamento temporal consolidado da volumetria entregue mês a mês pela operação, com segregação entre <strong>Visual Design</strong> e <strong>Copywriting (Redação)</strong>.
          </p>
        </div>

        {/* Status badges */}
        <div className="flex items-center gap-2">
          <div className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded text-[10px] font-mono font-bold flex items-center gap-1.5 border border-slate-200">
            <Calendar size={12} className="text-amber-500" />
            <span>1º SEMESTRE 2026</span>
          </div>
          <div className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded text-[10px] font-mono font-bold flex items-center gap-1.5 border border-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>3.660 ENTREGAS</span>
          </div>
        </div>
      </div>

      {/* 1. RESUMO EXECUTIVO DE VOLUMETRIA CONSOLIDADA (2026) */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              1. Resumo Executivo de Volumetria Consolidada (2026)
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            Média Semestral: <strong>{averageMonthly} entregas/mês</strong> | Evolução Jan→Jun: <strong className="text-emerald-600">{semesterGrowth}</strong>
          </span>
        </div>

        {/* 4 Executive KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          
          {/* Card 1: Total Geral de Demandas */}
          <div className="bg-slate-50 rounded p-3.5 border border-slate-200 border-l-4 border-l-[#0F172A] flex flex-col justify-between hover:bg-slate-100/70 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-500">
                Total Geral da Operação
              </span>
              <Layers size={14} className="text-slate-700" />
            </div>
            <div className="mt-2">
              <div className="text-2xl font-display font-black text-[#0F172A] tracking-tight">
                {totalDemands.toLocaleString('pt-BR')}
              </div>
              <p className="text-[11px] text-slate-600 font-sans mt-0.5">
                entregas no semestre (Jan - Jun)
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Média mensal</span>
              <strong className="text-slate-800">{averageMonthly} entregas/mês</strong>
            </div>
          </div>

          {/* Card 2: Volume Total de Redação */}
          <div className="bg-blue-50/40 rounded p-3.5 border border-blue-200 border-l-4 border-l-blue-600 flex flex-col justify-between hover:bg-blue-50/70 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-blue-700">
                Volume Total de Redação
              </span>
              <PenTool size={14} className="text-blue-600" />
            </div>
            <div className="mt-2">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-display font-black text-[#0F172A] tracking-tight">
                  {totalWriting.toLocaleString('pt-BR')}
                </span>
                <span className="text-xs font-mono font-bold text-blue-600 bg-white px-1.5 py-0.5 rounded border border-blue-200">
                  {writingPercentage}% share
                </span>
              </div>
              <p className="text-[11px] text-slate-600 font-sans mt-0.5">
                textos / roteiros / artigos / Blog
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-blue-200/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Média mensal</span>
              <strong className="text-blue-700">354 tarefas/mês</strong>
            </div>
          </div>

          {/* Card 3: Volume Total de Design */}
          <div className="bg-amber-50/40 rounded p-3.5 border border-amber-200 border-l-4 border-l-amber-500 flex flex-col justify-between hover:bg-amber-50/70 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-amber-700">
                Volume Total de Design
              </span>
              <Palette size={14} className="text-amber-600" />
            </div>
            <div className="mt-2">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-display font-black text-[#0F172A] tracking-tight">
                  {totalDesign.toLocaleString('pt-BR')}
                </span>
                <span className="text-xs font-mono font-bold text-amber-600 bg-white px-1.5 py-0.5 rounded border border-amber-200">
                  {designPercentage}% share
                </span>
              </div>
              <p className="text-[11px] text-slate-600 font-sans mt-0.5">
                peças / formatos visuais
              </p>
            </div>
            <div className="mt-2.5 pt-2 border-t border-amber-200/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Média mensal</span>
              <strong className="text-amber-700">256 peças/mês</strong>
            </div>
          </div>

          {/* Card 4: Proporção Operacional */}
          <div className="bg-slate-50 rounded p-3.5 border border-slate-200 border-l-4 border-l-emerald-500 flex flex-col justify-between hover:bg-slate-100/70 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-500">
                Proporção Operacional
              </span>
              <PieIcon size={14} className="text-emerald-600" />
            </div>
            <div className="mt-1.5">
              <div className="flex items-center justify-between text-xs font-mono font-bold mb-1">
                <span className="text-blue-600">{writingPercentage}% Redação</span>
                <span className="text-amber-600">{designPercentage}% Design</span>
              </div>
              
              {/* Proportional Split Bar */}
              <div className="h-3 w-full bg-slate-200 rounded overflow-hidden flex shadow-inner">
                <div 
                  className="bg-blue-600 h-full transition-all duration-300 hover:opacity-90" 
                  style={{ width: `${writingPercentage}%` }}
                  title={`Redação: ${writingPercentage}% (${totalWriting} demandas)`}
                />
                <div 
                  className="bg-amber-500 h-full transition-all duration-300 hover:opacity-90" 
                  style={{ width: `${designPercentage}%` }}
                  title={`Design: ${designPercentage}% (${totalDesign} demandas)`}
                />
              </div>

              <p className="text-[10px] text-slate-500 font-sans mt-1.5 leading-tight">
                Distribuição perfeitamente equilibrada ao longo de todos os meses do semestre.
              </p>
            </div>

            <div className="mt-1 pt-1.5 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Ratio Redação:Design</span>
              <strong className="text-slate-800">1,38 : 1</strong>
            </div>
          </div>

        </div>
      </div>

      {/* 5. DISTRIBUIÇÃO MENSAL E TEMPORAL DE PRODUÇÃO (1º SEMESTRE 2026) */}
      <div className="flex flex-col gap-4 bg-slate-50/60 rounded border border-slate-200 p-4 lg:p-5">
        
        {/* Section Title & View Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                5. Distribuição Mensal e Temporal de Produção (1º Semestre 2026)
              </h3>
            </div>
            <p className="text-[11px] text-slate-500 font-sans mt-0.5">
              Evolução das entregas mês a mês com alternância entre visualização em barras agrupadas (lado a lado) ou empilhadas (composição).
            </p>
          </div>

          {/* Chart Controls (Grouped vs Stacked, & Area Highlight) */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Grouped vs Stacked Switcher */}
            <div className="bg-white p-0.5 rounded border border-slate-200 shadow-sm flex items-center text-[10px] font-mono font-bold">
              <button
                id="btn-chart-grouped"
                onClick={() => setChartType('grouped')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  chartType === 'grouped'
                    ? 'bg-[#0F172A] text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Barras Agrupadas
              </button>
              <button
                id="btn-chart-stacked"
                onClick={() => setChartType('stacked')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  chartType === 'stacked'
                    ? 'bg-[#0F172A] text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Barras Empilhadas
              </button>
            </div>

            {/* Area Filter */}
            <div className="bg-white p-0.5 rounded border border-slate-200 shadow-sm flex items-center text-[10px] font-mono">
              <button
                onClick={() => setHighlightArea('all')}
                className={`px-2 py-1 rounded font-bold transition-colors ${
                  highlightArea === 'all'
                    ? 'bg-slate-200 text-slate-900'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Ambos
              </button>
              <button
                onClick={() => setHighlightArea('design')}
                className={`px-2 py-1 rounded font-bold transition-colors flex items-center gap-1 ${
                  highlightArea === 'design'
                    ? 'bg-amber-500 text-slate-950'
                    : 'text-amber-700 hover:bg-amber-50'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Design
              </button>
              <button
                onClick={() => setHighlightArea('writing')}
                className={`px-2 py-1 rounded font-bold transition-colors flex items-center gap-1 ${
                  highlightArea === 'writing'
                    ? 'bg-blue-600 text-white'
                    : 'text-blue-700 hover:bg-blue-50'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Redação
              </button>
            </div>

          </div>
        </div>

        {/* Interactive Hover Tooltip Status Bar */}
        <div className="h-6 flex items-center justify-between px-2 bg-white rounded border border-slate-200 text-[10px] font-mono">
          {hoveredData ? (
            <div className="flex items-center gap-3 w-full justify-between">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#0F172A] uppercase">{hoveredData.month}:</span>
                <span className="text-amber-600 font-bold">Design ({hoveredData.design})</span>
                <span className="text-slate-300">|</span>
                <span className="text-blue-600 font-bold">Redação ({hoveredData.writing})</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-900 font-black">Total: {hoveredData.total} entregas</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                {hoveredData.momGrowth && (
                  <span className={hoveredData.momGrowth.startsWith('+') ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}>
                    MoM: {hoveredData.momGrowth}
                  </span>
                )}
                {hoveredData.highlight && (
                  <span className="text-[9px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">
                    {hoveredData.highlight}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <span className="text-slate-400 italic">
              Passe o mouse ou toque nas barras para detalhar os dados de cada mês
            </span>
          )}
        </div>

        {/* SVG Responsive Bar Chart Container */}
        <div className="w-full bg-white rounded border border-slate-200 p-3 lg:p-4 shadow-inner overflow-x-auto select-none">
          <div className="min-w-[620px] aspect-[16/7] relative">
            <svg 
              viewBox="0 0 800 350" 
              className="w-full h-full font-sans" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="designBarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="writingBarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Y-Axis Horizontal Grid Lines */}
              {(chartType === 'grouped' 
                ? [0, 150, 300, 450, 600] 
                : [0, 200, 400, 600, 800, 1000]
              ).map((gridVal) => {
                const y = 290 - (gridVal / currentMaxScale) * 240;
                return (
                  <g key={gridVal}>
                    <line
                      x1="65"
                      y1={y}
                      x2="770"
                      y2={y}
                      stroke="#e2e8f0"
                      strokeWidth="1"
                      strokeDasharray={gridVal === 0 ? "0" : "3 3"}
                    />
                    <text
                      x="55"
                      y={y + 4}
                      fill="#64748b"
                      fontSize="10"
                      textAnchor="end"
                      className="font-mono font-medium"
                    >
                      {gridVal}
                    </text>
                  </g>
                );
              })}

              {/* Average reference line */}
              {chartType === 'stacked' && (
                <g>
                  {(() => {
                    const avgY = 290 - (averageMonthly / currentMaxScale) * 240;
                    return (
                      <>
                        <line
                          x1="65"
                          y1={avgY}
                          x2="770"
                          y2={avgY}
                          stroke="#10b981"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                        />
                        <text
                          x="765"
                          y={avgY - 6}
                          fill="#059669"
                          fontSize="9"
                          textAnchor="end"
                          className="font-mono font-bold"
                        >
                          Média: {averageMonthly} entregas/mês
                        </text>
                      </>
                    );
                  })()}
                </g>
              )}

              {/* Monthly Bars */}
              {TEMPORAL_PRODUCTION_DATA.map((item, idx) => {
                const totalMonths = TEMPORAL_PRODUCTION_DATA.length;
                const plotWidth = 700; // from 65 to 765
                const slotWidth = plotWidth / totalMonths;
                const centerX = 65 + slotWidth * idx + slotWidth / 2;
                const isHovered = hoveredMonth === item.month;

                if (chartType === 'grouped') {
                  // Grouped bar chart (Design bar + Writing bar side-by-side)
                  const barWidth = 28;
                  const barGap = 6;
                  const groupStartX = centerX - (barWidth * 2 + barGap) / 2;

                  const designHeight = (item.design / currentMaxScale) * 240;
                  const designY = 290 - designHeight;

                  const writingHeight = (item.writing / currentMaxScale) * 240;
                  const writingY = 290 - writingHeight;

                  const designX = groupStartX;
                  const writingX = groupStartX + barWidth + barGap;

                  return (
                    <g 
                      key={item.month}
                      onMouseEnter={() => setHoveredMonth(item.month)}
                      onMouseLeave={() => setHoveredMonth(null)}
                      className="cursor-pointer transition-all"
                    >
                      {/* Hover column background glow */}
                      {isHovered && (
                        <rect
                          x={centerX - slotWidth / 2 + 5}
                          y="40"
                          width={slotWidth - 10}
                          height="255"
                          fill="#f8fafc"
                          rx="4"
                          stroke="#cbd5e1"
                          strokeWidth="1"
                        />
                      )}

                      {/* Design Bar (Amber) */}
                      {(highlightArea === 'all' || highlightArea === 'design') && (
                        <g>
                          <rect
                            x={designX}
                            y={designY}
                            width={barWidth}
                            height={designHeight}
                            fill="url(#designBarGrad)"
                            rx="3"
                            className="transition-all duration-300"
                            opacity={highlightArea === 'writing' ? 0.2 : isHovered ? 1 : 0.9}
                          />
                          <text
                            x={designX + barWidth / 2}
                            y={designY - 5}
                            fill="#b45309"
                            fontSize="9"
                            fontWeight="bold"
                            textAnchor="middle"
                            className="font-mono"
                          >
                            {item.design}
                          </text>
                        </g>
                      )}

                      {/* Writing Bar (Blue) */}
                      {(highlightArea === 'all' || highlightArea === 'writing') && (
                        <g>
                          <rect
                            x={writingX}
                            y={writingY}
                            width={barWidth}
                            height={writingHeight}
                            fill="url(#writingBarGrad)"
                            rx="3"
                            className="transition-all duration-300"
                            opacity={highlightArea === 'design' ? 0.2 : isHovered ? 1 : 0.9}
                          />
                          <text
                            x={writingX + barWidth / 2}
                            y={writingY - 5}
                            fill="#1d4ed8"
                            fontSize="9"
                            fontWeight="bold"
                            textAnchor="middle"
                            className="font-mono"
                          >
                            {item.writing}
                          </text>
                        </g>
                      )}



                      {/* Month Label on X-axis */}
                      <text
                        x={centerX}
                        y="312"
                        fill={isHovered ? "#0F172A" : "#475569"}
                        fontSize="11"
                        fontWeight={isHovered ? "bold" : "600"}
                        textAnchor="middle"
                      >
                        {item.month}
                      </text>

                      {/* MoM change subtitle */}
                      <text
                        x={centerX}
                        y="327"
                        fill={item.momGrowth?.startsWith('+') ? "#16a34a" : item.momGrowth?.startsWith('-') ? "#e11d48" : "#94a3b8"}
                        fontSize="9"
                        textAnchor="middle"
                        className="font-mono font-medium"
                      >
                        {item.momGrowth || 'Base'}
                      </text>
                    </g>
                  );
                } else {
                  // Stacked bar chart (Design at bottom + Writing at top = Total)
                  const barWidth = 42;
                  const barX = centerX - barWidth / 2;

                  const designHeight = (item.design / currentMaxScale) * 240;
                  const writingHeight = (item.writing / currentMaxScale) * 240;
                  const totalHeight = designHeight + writingHeight;

                  const designY = 290 - designHeight;
                  const writingY = designY - writingHeight;

                  return (
                    <g 
                      key={item.month}
                      onMouseEnter={() => setHoveredMonth(item.month)}
                      onMouseLeave={() => setHoveredMonth(null)}
                      className="cursor-pointer transition-all"
                    >
                      {/* Hover column background glow */}
                      {isHovered && (
                        <rect
                          x={centerX - slotWidth / 2 + 5}
                          y="40"
                          width={slotWidth - 10}
                          height="255"
                          fill="#f8fafc"
                          rx="4"
                          stroke="#cbd5e1"
                          strokeWidth="1"
                        />
                      )}

                      {/* Bottom segment: Design (Amber) */}
                      <rect
                        x={barX}
                        y={designY}
                        width={barWidth}
                        height={designHeight}
                        fill="url(#designBarGrad)"
                        rx="0"
                        opacity={highlightArea === 'writing' ? 0.25 : 1}
                        className="transition-all duration-300"
                      />

                      {/* Top segment: Writing (Blue) */}
                      <rect
                        x={barX}
                        y={writingY}
                        width={barWidth}
                        height={writingHeight}
                        fill="url(#writingBarGrad)"
                        rx="3"
                        opacity={highlightArea === 'design' ? 0.25 : 1}
                        className="transition-all duration-300"
                      />

                      {/* Inner labels if height allows */}
                      {designHeight > 30 && (highlightArea === 'all' || highlightArea === 'design') && (
                        <text
                          x={centerX}
                          y={designY + designHeight / 2 + 3}
                          fill="#ffffff"
                          fontSize="9"
                          fontWeight="bold"
                          textAnchor="middle"
                          className="font-mono drop-shadow-sm"
                        >
                          {item.design}
                        </text>
                      )}

                      {writingHeight > 30 && (highlightArea === 'all' || highlightArea === 'writing') && (
                        <text
                          x={centerX}
                          y={writingY + writingHeight / 2 + 3}
                          fill="#ffffff"
                          fontSize="9"
                          fontWeight="bold"
                          textAnchor="middle"
                          className="font-mono drop-shadow-sm"
                        >
                          {item.writing}
                        </text>
                      )}

                      {/* Total label above stack */}
                      <g>
                        <rect
                          x={centerX - 24}
                          y={writingY - 18}
                          width="48"
                          height="14"
                          rx="3"
                          fill={isHovered ? "#0F172A" : "#f1f5f9"}
                          stroke={isHovered ? "#0F172A" : "#cbd5e1"}
                          strokeWidth="1"
                        />
                        <text
                          x={centerX}
                          y={writingY - 8}
                          fill={isHovered ? "#ffffff" : "#0F172A"}
                          fontSize="9"
                          fontWeight="bold"
                          textAnchor="middle"
                          className="font-mono"
                        >
                          {item.total}
                        </text>
                      </g>

                      {/* Month Label on X-axis */}
                      <text
                        x={centerX}
                        y="312"
                        fill={isHovered ? "#0F172A" : "#475569"}
                        fontSize="11"
                        fontWeight={isHovered ? "bold" : "600"}
                        textAnchor="middle"
                      >
                        {item.month}
                      </text>

                      {/* MoM change subtitle */}
                      <text
                        x={centerX}
                        y="327"
                        fill={item.momGrowth?.startsWith('+') ? "#16a34a" : item.momGrowth?.startsWith('-') ? "#e11d48" : "#94a3b8"}
                        fontSize="9"
                        textAnchor="middle"
                        className="font-mono font-medium"
                      >
                        {item.momGrowth || 'Base'}
                      </text>
                    </g>
                  );
                }
              })}
            </svg>
          </div>
        </div>

        {/* Legend bar with exact values */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-200 pt-3">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-amber-500" />
              <span className="font-mono text-slate-700">
                Visual Design: <strong className="text-slate-900">{totalDesign.toLocaleString('pt-BR')} peças</strong> (42%)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-blue-600" />
              <span className="font-mono text-slate-700">
                Copywriting (Redação): <strong className="text-slate-900">{totalWriting.toLocaleString('pt-BR')} tarefas</strong> (58%)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[#0F172A]" />
              <span className="font-mono text-slate-700">
                Total Geral: <strong className="text-slate-900">{totalDemands.toLocaleString('pt-BR')} entregas</strong> (100%)
              </span>
            </div>
          </div>

          <div className="text-[11px] font-mono text-slate-500">
            Escala máxima exibida: <strong>{currentMaxScale}</strong>
          </div>
        </div>

      </div>

      {/* Detailed Monthly Data Matrix Table */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <FileText size={13} className="text-slate-500" />
            <span>Matriz de Volumetria Mês a Mês (1º Semestre 2026)</span>
          </h4>
          <span className="text-[10px] font-mono text-slate-400">Valores consolidados em base de dados de produção</span>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded">
          <table className="w-full text-left text-xs font-sans border-collapse">
            <thead className="bg-[#0F172A] text-white font-mono text-[10px] uppercase tracking-wider">
              <tr>
                <th className="py-2.5 px-3">Mês</th>
                <th className="py-2.5 px-3 text-right">Design</th>
                <th className="py-2.5 px-3 text-right">Redação</th>
                <th className="py-2.5 px-3 text-right">Total Entregas</th>
                <th className="py-2.5 px-3 text-right">% Share Mensal</th>
                <th className="py-2.5 px-3 text-right">Variação MoM</th>
                <th className="py-2.5 px-3">Contexto Operacional</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-mono text-[11px]">
              {TEMPORAL_PRODUCTION_DATA.map((row) => {
                const monthShare = ((row.total / totalDemands) * 100).toFixed(1);
                return (
                  <tr 
                    key={row.month} 
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="py-2 px-3 font-sans font-bold text-slate-900">
                      {row.month}
                    </td>
                    <td className="py-2 px-3 text-right text-amber-700 font-bold">
                      {row.design} <span className="text-[9px] font-normal text-slate-400">({row.designPct}%)</span>
                    </td>
                    <td className="py-2 px-3 text-right text-blue-700 font-bold">
                      {row.writing} <span className="text-[9px] font-normal text-slate-400">({row.writingPct}%)</span>
                    </td>
                    <td className="py-2 px-3 text-right font-black text-slate-900">
                      {row.total}
                    </td>
                    <td className="py-2 px-3 text-right text-slate-600">
                      {monthShare}%
                    </td>
                    <td className="py-2 px-3 text-right">
                      {row.momGrowth ? (
                        <span className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          row.momGrowth.startsWith('+') 
                            ? 'text-emerald-700 bg-emerald-50 border border-emerald-200' 
                            : 'text-rose-700 bg-rose-50 border border-rose-200'
                        }`}>
                          {row.momGrowth.startsWith('+') ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                          {row.momGrowth}
                        </span>
                      ) : (
                        <span className="text-slate-400 font-normal">Base</span>
                      )}
                    </td>
                    <td className="py-2 px-3 font-sans text-slate-500 text-[10px]">
                      {row.highlight}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-slate-100 font-mono text-[11px] font-bold text-slate-900 border-t-2 border-slate-300">
              <tr>
                <td className="py-2.5 px-3 uppercase tracking-wider">Total Consolidado</td>
                <td className="py-2.5 px-3 text-right text-amber-800">{totalDesign.toLocaleString('pt-BR')} (42%)</td>
                <td className="py-2.5 px-3 text-right text-blue-800">{totalWriting.toLocaleString('pt-BR')} (58%)</td>
                <td className="py-2.5 px-3 text-right text-[#0F172A] font-black">{totalDemands.toLocaleString('pt-BR')}</td>
                <td className="py-2.5 px-3 text-right">100,0%</td>
                <td className="py-2.5 px-3 text-right text-emerald-700 font-black">{semesterGrowth}</td>
                <td className="py-2.5 px-3 font-sans text-[10px] text-slate-600">Soma consolidada do 1º Semestre 2026</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Strategic Observations / Bullet Insights */}
      <div className="bg-slate-900 text-white rounded p-4 border border-slate-800 flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-amber-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
            Direcionamentos &amp; Diagnóstico da Esteira Temporal
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-sans text-slate-300">
          <div className="bg-slate-800/60 p-3 rounded border border-slate-700 space-y-1">
            <span className="font-mono text-[10px] text-amber-400 font-bold block uppercase">
              1. Aceleração no 2º Trimestre
            </span>
            <p className="text-[11px] leading-relaxed text-slate-300">
              Os meses de <strong>Maio (760)</strong> e <strong>Junho (819)</strong> representaram <strong></strong>as maires produções do semestre, demonstrando capacidade de absorção de picos sazonais sem gargalos.
            </p>
          </div>
          <div className="bg-slate-800/60 p-3 rounded border border-slate-700 space-y-1">
            <span className="font-mono text-[10px] text-blue-400 font-bold block uppercase">
              2. Consistência de Proporção
            </span>
            <p className="text-[11px] leading-relaxed text-slate-300">
              A proporção entre Redação e Design manteve-se rigorosamente estável em <strong>58% vs 42%</strong> em todos os 6 meses, comprovando sincronismo entre roteirização/copywriting e finalização visual.
            </p>
          </div>
          <div className="bg-slate-800/60 p-3 rounded border border-slate-700 space-y-1">
            <span className="font-mono text-[10px] text-emerald-400 font-bold block uppercase">
              3. Pico Máximo da Operação
            </span>
            <p className="text-[11px] leading-relaxed text-slate-300">
              Junho consolidou o ápice operacional com <strong>819 entregas</strong> (+82,1% sobre os 498 de Janeiro), sustentado por fluxos otimizados e biblioteca de criativos reaproveitáveis.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
