export const COLORS = {
  accent: '#3B82F6',
  positive: '#10B981',
  warning: '#F59E0B',
  critical: '#EF4444',
  purple: '#A855F7',
  pink: '#EC4899',
  shell: '#0A0A0B',
  card: '#141416',
  stroke: '#26262A',
  textPrimary: '#FAFAFA',
  textSecondary: '#A1A1AA',
  textMuted: '#71717A',
  chart: ['#3B82F6', '#10B981', '#F59E0B', '#A855F7', '#EC4899'] as const,
} as const

export type ChartColor = typeof COLORS.chart[number]
