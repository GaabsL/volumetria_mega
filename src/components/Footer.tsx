/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileBarChart2, ShieldCheck, Mail, Globe, Database } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0F172A] text-white mt-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:px-6 flex flex-col gap-6">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-slate-800 text-sm">
          
          {/* Logo & Agency description */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
            <div className="bg-white p-1 rounded shadow-sm inline-flex items-center justify-center h-8 shrink-0">
              <img 
                src="https://i.imgur.com/lAyMWKF.png" 
                alt="MegaMídia Group Logo" 
                className="h-full w-auto object-contain" 
                referrerPolicy="no-referrer" 
              />
            </div>
              <span className="font-display font-bold tracking-wider text-white text-sm">
                MEGAMÍDIA GROUP
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Liderança criativa e analítica integrando tecnologia, dados avançados e design para conectar marcas e pessoas em escala global.
            </p>
          </div>

          {/* Standards & Auditing */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-500">
              Auditoria de Dados
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400 font-sans">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-emerald-500 shrink-0" />
                <span>Base de Dados Auditada (Jan 2025 - Jun 2026)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Database size={13} className="text-blue-400 shrink-0" />
                <span className="leading-tight">Conexão via API Facebook Graph, Instagram API, iFood Merchant API e TikTok Business.</span>
              </div>
            </div>
          </div>

          {/* Quick contact / Support */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-500">
              Canais Corporativos
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400 font-sans">
              <a
                href="mailto:gabriel.lima@megamidia.com.br"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail size={13} className="text-slate-500" />
                <span>gabriel.lima@megamidia.com.br</span>
              </a>
              <div className="flex items-center gap-1.5">
                <Globe size={13} className="text-slate-500" />
                <span>www.megamidia.com.br</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-mono text-slate-500">
          <div>
            <span>&copy; {currentYear} MegaMídia. Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900 px-3 py-1 rounded border border-slate-800 text-slate-300">
            <FileBarChart2 size={12} className="text-amber-500" />
            <span className="font-bold">
              Relatório gerado automaticamente via BI &amp; Operações
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
