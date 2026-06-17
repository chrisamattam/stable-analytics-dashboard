import type { BankShare } from '../types/metrics'

export const bankConcentration: BankShare[] = [
  { bank: 'Suryoday SFB',  pct: 24 },
  { bank: 'Utkarsh SFB',   pct: 18 },
  { bank: 'Shivalik SFB',  pct: 11 },
  { bank: 'Unity SFB',     pct: 9  },
  { bank: 'slice SFB',     pct: 8  },
  { bank: 'Others (4)',    pct: 30 },
]

export const top1Pct = 24      // Suryoday SFB
export const top3Pct = 53      // Suryoday + Utkarsh + Shivalik

// Thresholds: green < 30%, amber 30-40%, red > 40%
export function concentrationStatus(pct: number): 'green' | 'amber' | 'red' {
  if (pct < 30) return 'green'
  if (pct <= 40) return 'amber'
  return 'red'
}
