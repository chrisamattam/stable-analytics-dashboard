export interface AumDataPoint {
  month: string
  aum: number
  glidePath: number | null
  mai: number
  avgFdBookings: number
  avgTicketSize: number
}

export interface WaterfallItem {
  name: string
  base: number
  value: number
  type: 'total' | 'positive' | 'negative'
}

export interface TicketBucket {
  label: string
  pct: number
  isAboveDicgc: boolean
}

export interface FunnelStep {
  step: string
  count: number
  convToNext: number | null
  p50s: number | null
  p95s: number | null
  isKyc?: boolean
}

export interface KycSubStep {
  name: string
  p50s: number
  p95s: number
  bottleneck: boolean
  note?: string
}

export interface CohortDataPoint {
  days: number
  jan2025: number
  jul2025: number
  jan2026: number | null
  jan2026Proj: number | null
}

export interface BankShare {
  bank: string
  pct: number
}

export interface ReinvestmentDataPoint {
  month: string
  rate: number
}

export interface BondDataPoint {
  month: string
  upgradeRate90d: number
  upgradeRate180d: number
  avgPurchasesPerUser: number
  aumPct: number
  timeToFirstBond: number
}

export interface ReferralDataPoint {
  month: string
  kFactor: number
  pctFromReferrals: number
  referralRate: number
  ttfrMedianDays: number
}

export interface CacChannel {
  channel: string
  cac: number
  trend: 'up' | 'down' | 'flat'
}

export interface ConversionBySource {
  source: string
  convPct: number
  trend: 'up' | 'down' | 'flat'
}

export interface GlossaryTerm {
  term: string
  definition: string
  precision?: string
}
