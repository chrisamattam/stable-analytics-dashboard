import type { BondDataPoint } from '../types/metrics'

export const bondSeries: BondDataPoint[] = [
  { month: 'Sep 25', upgradeRate90d: 6.2,  upgradeRate180d: 11.5, avgPurchasesPerUser: 0.22, aumPct: 4.0, timeToFirstBond: 142 },
  { month: 'Oct 25', upgradeRate90d: 6.6,  upgradeRate180d: 12.0, avgPurchasesPerUser: 0.23, aumPct: 4.3, timeToFirstBond: 138 },
  { month: 'Nov 25', upgradeRate90d: 7.0,  upgradeRate180d: 12.6, avgPurchasesPerUser: 0.24, aumPct: 4.6, timeToFirstBond: 134 },
  { month: 'Dec 25', upgradeRate90d: 7.4,  upgradeRate180d: 13.2, avgPurchasesPerUser: 0.25, aumPct: 5.0, timeToFirstBond: 130 },
  { month: 'Jan 26', upgradeRate90d: 7.8,  upgradeRate180d: 13.8, avgPurchasesPerUser: 0.27, aumPct: 5.5, timeToFirstBond: 124 },
  { month: 'Feb 26', upgradeRate90d: 7.5,  upgradeRate180d: 13.5, avgPurchasesPerUser: 0.26, aumPct: 5.8, timeToFirstBond: 126 },
  { month: 'Mar 26', upgradeRate90d: 8.2,  upgradeRate180d: 14.2, avgPurchasesPerUser: 0.28, aumPct: 6.2, timeToFirstBond: 118 },
  { month: 'Apr 26', upgradeRate90d: 8.8,  upgradeRate180d: 14.9, avgPurchasesPerUser: 0.30, aumPct: 6.8, timeToFirstBond: 112 },
  { month: 'May 26', upgradeRate90d: 9.3,  upgradeRate180d: 15.4, avgPurchasesPerUser: 0.32, aumPct: 7.4, timeToFirstBond: 105 },
  { month: 'Jun 26', upgradeRate90d: 9.8,  upgradeRate180d: 15.8, avgPurchasesPerUser: 0.34, aumPct: 8.0, timeToFirstBond:  98 },
]

export const bondRepeatRates = [
  { window: '90 day',  rate: 8  },
  { window: '180 day', rate: 17 },
  { window: '365 day', rate: 31 },
]

export const currentBond = bondSeries[bondSeries.length - 1]
export const priorBond   = bondSeries[bondSeries.length - 2]

export const reinvestmentSeries = [
  { month: 'Sep 25', rate: 51.0 },
  { month: 'Oct 25', rate: 52.4 },
  { month: 'Nov 25', rate: 53.8 },
  { month: 'Dec 25', rate: 55.2 },
  { month: 'Jan 26', rate: 56.9 },
  { month: 'Feb 26', rate: 54.8 },
  { month: 'Mar 26', rate: 57.6 },
  { month: 'Apr 26', rate: 59.1 },
  { month: 'May 26', rate: 60.7 },
  { month: 'Jun 26', rate: 62.0 },
]
