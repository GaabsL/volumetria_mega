/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { FileBarChart2, Calendar, CheckCircle2, RefreshCw, TrendingUp, UtensilsCrossed, PieChart, Award, ChevronRight, Clock } from 'lucide-react';
import { BI_EVOLUTION_DATA, TIMELINE_CRONOGRAMA, TimelineEvent } from '../types';

export default function BiSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'weekly' | 'monthly'>('all');
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(TIMELINE_CRONOGRAMA[0]);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Maximum value for SVG scaling
  const maxValue = 120;

  // Filtered cronograma
  const filteredTimeline = TIMELINE_CRONOGRAMA.filter(
    (ev) => activeTab === 'all' || ev.type === activeTab
  );

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'RefreshCw':
        return <RefreshCw size={16} className="text-blue-500" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed size={16} className="text-rose-500" />;
      case 'TrendingUp':
        return <TrendingUp size={16} className="text-amber-500" />;
      case 'PieChart':
        return <PieChart size={16} className="text-purple-500" />;
      case 'Award':
        return <Award size={16} className="text-emerald-500" />;
      default:
        return <Calendar size={16} className="text-slate-500" />;
    }
  };

  // Color theme mapping based on event type
  const getEventStyle = (type: 'daily' | 'weekly' | 'monthly') => {
    switch (type) {
      case 'daily':
        return 'border-l-blue-500 bg-blue-50/20';
      case 'weekly':
        return 'border-l-amber-500 bg-amber-50/20';
      case 'monthly':
        return 'border-l-purple-500 bg-purple-50/20';
      default:
        return 'border-l-slate-500 bg-slate-50/20';
    }
  };

  return (
    <section id="bi-section" className="w-full bg-white rounded border border-slate-200 shadow-sm p-4 lg:p-5 flex flex-col gap-6 transition-all duration-300">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pb-4 border-b border-slate-200">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-slate-100 text-[#0F172A] rounded">
              <FileBarChart2 size={15} />
            </span>
            <h2 className="text-base font-display font-bold text-[#0F172A] uppercase tracking-tight">
              3. Vertical de BI &amp; Cronograma da Esteira de Dados
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-2xl font-sans">
            Acompanhamento de entregas de inteligência estratégica e cronograma das rotinas periódicas de dados.
          </p>
        </div>
      </div>

      {/* Main Grid: Left (Chart & Narrative), Right (Timeline) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Side: BI Growth Area Chart & Analysis (Col-span 5) */}
        <div className="xl:col-span-5 bg-slate-50 rounded p-4 border border-slate-200 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400 block">Escala Estratégica</span>
              <h3 className="text-sm font-display font-bold text-slate-900 uppercase">Volume de Relatórios Semanais/Mensais</h3>
              <p className="text-[11px] text-slate-500 font-sans mt-0.5">
                Relatórios consolidados entregues por semestre para tomadores de decisão (C-Level).
              </p>
            </div>

            {/* Glowing Custom Area Chart */}
            <div className="relative w-full aspect-[16/9] bg-white rounded border border-slate-200 p-3 shadow-inner flex flex-col justify-between">
              
              {/* Tooltip header */}
              <div className="h-4 text-[10px] font-mono text-center">
                {hoveredPoint !== null ? (
                  <span className="bg-[#0F172A] text-white px-2 py-0.5 rounded font-bold">
                    {BI_EVOLUTION_DATA[hoveredPoint].period}: {BI_EVOLUTION_DATA[hoveredPoint].count} entregas {BI_EVOLUTION_DATA[hoveredPoint].growthLabel ? `(${BI_EVOLUTION_DATA[hoveredPoint].growthLabel})` : ''}
                  </span>
                ) : (
                  <span className="text-slate-400 italic">Passe o mouse nos pontos para ver o crescimento</span>
                )}
              </div>

              {/* Area SVG */}
              <svg viewBox="0 0 400 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Horizontal grid lines */}
                {[0, 50, 100].map((v) => {
                  const y = 150 - (v / maxValue) * 120;
                  return (
                    <line
                      key={v}
                      x1="40"
                      y1={y}
                      x2="360"
                      y2={y}
                      stroke="#f1f5f9"
                      strokeWidth="1.5"
                    />
                  );
                })}

                {/* Shaded Area fill under line */}
                <path
                  d="M 50 150 L 50 123 L 200 85 L 350 43 L 350 150 Z"
                  fill="url(#indigo-grad)"
                  opacity="0.25"
                />

                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="indigo-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>

                {/* Line Path */}
                <path
                  d="M 50 123 L 200 85 L 350 43"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data Points Interactive circles */}
                {[
                  { x: 50, y: 123, val: 27, index: 0 },
                  { x: 200, y: 85, val: 65, index: 1 },
                  { x: 350, y: 43, val: 107, index: 2 },
                ].map((pt) => (
                  <circle
                    key={pt.index}
                    cx={pt.x}
                    cy={pt.y}
                    r={hoveredPoint === pt.index ? "6" : "4"}
                    fill={hoveredPoint === pt.index ? "#f59e0b" : "#4f46e5"}
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredPoint(pt.index)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                ))}

                {/* Data Value labels directly on points */}
                <text x="50" y="110" fill="#4f46e5" fontSize="10" fontWeight="black" textAnchor="middle" className="font-mono">27</text>
                <text x="200" y="72" fill="#4f46e5" fontSize="10" fontWeight="black" textAnchor="middle" className="font-mono">65</text>
                <text x="350" y="30" fill="#4f46e5" fontSize="10" fontWeight="black" textAnchor="middle" className="font-mono">107</text>

                {/* X Axis label periods */}
                <text x="50" y="165" fill="#64748b" fontSize="9" fontWeight="700" textAnchor="middle" className="font-mono">S1 2025</text>
                <text x="200" y="165" fill="#64748b" fontSize="9" fontWeight="700" textAnchor="middle" className="font-mono">S2 2025</text>
                <text x="350" y="165" fill="#64748b" fontSize="9" fontWeight="700" textAnchor="middle" className="font-mono">S1 2026</text>
              </svg>
            </div>

            {/* Explanatory Narrative of nearly 300% growth */}
            <div className="bg-white border border-slate-200 rounded p-3 space-y-1.5">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">Maturidade Analítica</h4>
              <p className="text-[11px] text-slate-600 leading-normal font-sans">
                A entrega de relatórios e insights saltou de <strong>27</strong> em S1 2025 para <strong>107</strong> em S1 2026. Esse avanço de <strong>+296,3%</strong> reflete a estruturação da esteira de dados, migração de planilhas manuais para dashboards de BI e automatização de integrações externas.
              </p>
            </div>
          </div>

          <div className="text-[9px] text-slate-400 font-mono border-t border-slate-200 pt-3 mt-4">
            *Crescimento Interanual validado via Auditoria Operacional de BI.
          </div>
        </div>

        {/* Right Side: Interactive Weekly & Monthly Timeline Schedule (Col-span 7) */}
        <div className="xl:col-span-7 bg-white rounded flex flex-col justify-between">
          <div className="space-y-4">
            
            {/* Header Timeline with Tab controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-1 border-b border-slate-100">
              <div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400 block font-bold">Rotina Periódica Fixa</span>
                <h3 className="text-sm font-display font-bold text-slate-900 uppercase">Cronograma da Esteira de Dados</h3>
              </div>

              {/* Sub tab filters */}
              <div className="flex bg-slate-100 p-0.5 rounded border border-slate-200 text-[10px] font-mono">
                {(['all', 'weekly', 'monthly'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      // Reset selected if not in filtered list
                      const filtered = TIMELINE_CRONOGRAMA.filter(e => tab === 'all' || e.type === tab);
                      if (filtered.length > 0) setSelectedEvent(filtered[0]);
                    }}
                    className={`px-2 py-0.5 rounded transition-all capitalize ${
                      activeTab === tab
                        ? 'bg-[#0F172A] text-white font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab === 'all' ? 'Tudo' : tab === 'weekly' ? 'Semanal' : 'Mensal'}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-500 font-sans">
              Fluxograma estruturado de extrações, processamentos e apresentações executivas. Clique em uma etapa para ver mais detalhes analíticos.
            </p>

            {/* Interactive Timeline Layout split inside */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start pt-1">
              
              {/* Event Stack List (Col-span 7) */}
              <div className="md:col-span-7 space-y-2 max-h-[310px] overflow-y-auto pr-1">
                {filteredTimeline.map((ev) => {
                  const isSelected = selectedEvent?.title === ev.title;
                  return (
                    <div
                      key={ev.title}
                      onClick={() => setSelectedEvent(ev)}
                      className={`border-l-4 p-2.5 rounded-r transition-all cursor-pointer flex justify-between items-center group ${getEventStyle(ev.type)} ${
                        isSelected
                          ? 'ring-1 ring-slate-200 shadow shadow-slate-100 font-bold text-slate-900 translate-x-1'
                          : 'opacity-85 hover:opacity-100 hover:translate-x-0.5'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-white rounded shadow-sm group-hover:scale-105 transition-transform">
                          {getIcon(ev.icon)}
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-[9px] font-mono font-bold uppercase text-slate-500">
                            {ev.day}
                          </span>
                          <h4 className="text-xs font-bold text-slate-800 tracking-tight group-hover:text-slate-900">
                            {ev.title}
                          </h4>
                        </div>
                      </div>
                      <ChevronRight size={13} className={`text-slate-400 group-hover:translate-x-0.5 transition-transform ${isSelected ? 'text-slate-800' : ''}`} />
                    </div>
                  );
                })}
              </div>

              {/* Event Detail Panel Viewer (Col-span 5) */}
              <div className="md:col-span-5 bg-[#0F172A] text-slate-200 rounded p-4 border border-slate-800 space-y-3.5 animate-fade-in relative min-h-[220px] flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                {selectedEvent ? (
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        <Clock size={9} />
                        {selectedEvent.day}
                      </span>
                      <h4 className="text-xs font-display font-bold text-white leading-tight uppercase">
                        {selectedEvent.title}
                      </h4>
                    </div>

                    <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                      {selectedEvent.description}
                    </p>

                    <div className="pt-2 border-t border-slate-800 space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                        <CheckCircle2 size={11} className="text-emerald-500" />
                        <span>Sustentação Operacional Ativa</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                        <CheckCircle2 size={11} className="text-emerald-500" />
                        <span>Notificação no Slack</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-xs text-slate-500 italic">
                    Nenhum evento selecionado.
                  </div>
                )}
                
                <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest pt-1 border-t border-slate-800 mt-2">
                  esteira_de_dados_v4.1
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
