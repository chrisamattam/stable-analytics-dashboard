export function formatCrore(value: number): string {
  return `₹${value.toLocaleString('en-IN')} Cr`
}

export function formatLakh(value: number): string {
  const inLakh = value / 100000
  if (inLakh >= 100) return `₹${(value / 10000000).toFixed(1)} Cr`
  if (inLakh >= 1) return `₹${inLakh.toFixed(1)}L`
  return `₹${value.toLocaleString('en-IN')}`
}

export function formatRupees(value: number): string {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)} Cr`
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`
  if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`
  return `₹${value}`
}

export function formatPct(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`
}

export function formatDeltaPct(value: number): string {
  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(1)}pp`
}

export function formatDeltaCrore(value: number): string {
  const sign = value >= 0 ? '+' : '−'
  return `${sign}₹${Math.abs(value).toLocaleString('en-IN')} Cr`
}

export function formatMAI(value: number): string {
  const inLakh = value / 100000
  return `${inLakh.toFixed(1)}L`
}

export function formatDays(value: number): string {
  return `${Math.round(value)}d`
}

export function formatSeconds(value: number): string {
  if (value >= 60) return `${Math.round(value / 60)}m ${value % 60}s`
  return `${value}s`
}

export function formatAxisCrore(value: number): string {
  if (value >= 1000) return `${(value / 1000).toFixed(0)}k`
  return `${value}`
}
