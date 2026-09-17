/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PlatformData {
  name: string;
  s1_25: number;
  s2_25: number;
  s1_26: number;
  growth: string;
  growthType: 'positive' | 'negative' | 'explosive' | 'reduction';
}

export interface OperationalMetric {
  title: string;
  value: number;
  unit?: string;
  icon: string;
}

export interface BiReportEvolution {
  period: string;
  count: number;
  growthLabel?: string;
}

export interface TimelineEvent {
  day: string;
  title: string;
  description: string;
  type: 'daily' | 'weekly' | 'monthly';
  icon: string;
}

// Global real data constant
export const SOCIAL_VOLUME_DATA: PlatformData[] = [
  {
    name: "Facebook",
    s1_25: 268,
    s2_25: 177,
    s1_26: 824,
    growth: "+207,5%",
    growthType: "explosive"
  },
  {
    name: "Instagram Feed",
    s1_25: 350,
    s2_25: 190,
    s1_26: 879,
    growth: "+151,1%",
    growthType: "explosive"
  },
  {
    name: "Instagram Stories",
    s1_25: 462,
    s2_25: 184,
    s1_26: 1092,
    growth: "+136,4%",
    growthType: "explosive"
  },
  {
    name: "TikTok",
    s1_25: 194,
    s2_25: 185,
    s1_26: 652,
    growth: "+236,1%",
    growthType: "explosive"
  }
];

export const OPERATIONAL_EFFORT = {
  fixedMonthlyVolume: 3660, // demandas desduplicadas (Jan 2026)
  writing: 2124, // peças de redação
  design: 1536, // peças de design
  formats: [
    { name: "Posts Estáticos", value: 2102, color: "bg-blue-600" },
    { name: "Vídeos/Reels/TikTok", value: 1488, color: "bg-amber-500" },
    { name: "Blog e Artigos", value: 119, color: "bg-slate-400" }
  ],
  refitting: {
    total: 104, // média mensal
    design: 65,
    writing: 39
  }
};

export const BI_EVOLUTION_DATA: BiReportEvolution[] = [
  { period: "1º Semestre 2025", count: 27 },
  { period: "2º Semestre 2025", count: 65, growthLabel: "+140,7%" },
  { period: "1º Semestre 2026", count: 107, growthLabel: "+296,3% vs S1 25" }
];

export const TIMELINE_CRONOGRAMA: TimelineEvent[] = [
  {
    day: "Segunda-feira",
    title: "Atualizar as Bases de BI",
    description: "Sustentação dos Dashboards e verificação de integridade de dados operacionais.",
    type: "daily",
    icon: "RefreshCw"
  },
  {
    day: "Terça-feira",
    title: "Relatório do iFood",
    description: "Análise analítica profunda de performance e conversão de delivery.",
    type: "daily",
    icon: "UtensilsCrossed"
  },
  {
    day: "Quarta-feira",
    title: "Semanal de Resultado + Semanal de Patrocínios",
    description: "Pico analítico com diagnósticos de Mídia, Parcerias Estratégicas e criativos patrocinados.",
    type: "weekly",
    icon: "TrendingUp"
  },
  {
    day: "Primeira Semana do Mês",
    title: "Mensal de iFood",
    description: "Relatório com visão macro de delivery, faturamento, conversão de funil e benchmarks operacionais.",
    type: "monthly",
    icon: "PieChart"
  },
  {
    day: "Primeira Sexta-feira do Mês",
    title: "Mensal de Resultados",
    description: "Apresentação estratégica executiva, cruzamento de canais e direcionamento estratégico de conteúdo.",
    type: "monthly",
    icon: "Award"
  },
  {
    day: "Demanda Semanal",
    title: "Relatórios Extras",
    description: "Relatórios semanais extras com média de 5 por semana.",
    type: "weekly",
    icon: "Calendar"
  }
];

export interface MonthlyTemporalData {
  month: string;
  shortMonth: string;
  design: number;
  writing: number;
  total: number;
  momGrowth?: string;
  designPct: number;
  writingPct: number;
  highlight?: string;
}

export const TEMPORAL_PRODUCTION_DATA: MonthlyTemporalData[] = [
  {
    month: "Janeiro",
    shortMonth: "Jan",
    design: 209,
    writing: 289,
    total: 498,
    designPct: 42.0,
    writingPct: 58.0,
    highlight: "Início do Semestre"
  },
  {
    month: "Fevereiro",
    shortMonth: "Fev",
    design: 194,
    writing: 268,
    total: 462,
    momGrowth: "-7,2%",
    designPct: 42.0,
    writingPct: 58.0,
    highlight: "Sazonalidade Fevereiro"
  },
  {
    month: "Março",
    shortMonth: "Mar",
    design: 252,
    writing: 349,
    total: 601,
    momGrowth: "+30,1%",
    designPct: 41.9,
    writingPct: 58.1,
    highlight: "Retomada de Campanhas"
  },
  {
    month: "Abril",
    shortMonth: "Abr",
    design: 218,
    writing: 302,
    total: 520,
    momGrowth: "-13,5%",
    designPct: 41.9,
    writingPct: 58.1,
    highlight: "Transição Trimestral"
  },
  {
    month: "Maio",
    shortMonth: "Mai",
    design: 319,
    writing: 441,
    total: 760,
    momGrowth: "+46,2%",
    designPct: 42.0,
    writingPct: 58.0,
    highlight: "Aceleração Sazonal (Mães/Promo)"
  },
  {
    month: "Junho",
    shortMonth: "Jun",
    design: 344,
    writing: 475,
    total: 819,
    momGrowth: "+7,8%",
    designPct: 42.0,
    writingPct: 58.0,
    highlight: "Pico Máximo do Semestre"
  }
];

export const TEMPORAL_EXECUTIVE_SUMMARY = {
  totalDemands: 3660,
  totalWriting: 2124,
  totalDesign: 1536,
  writingPercentage: 58,
  designPercentage: 42,
  averageMonthly: 610,
  semesterGrowth: "+82,1%",
  weightedMomAverage: "+15,6%"
};
