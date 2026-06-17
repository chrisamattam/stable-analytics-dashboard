import type { FunnelStep, ConversionBySource } from '../types/metrics'

// Install base = 100,000 for index calculation; end-to-end conv = 3.29%
export const currentFunnel: FunnelStep[] = [
  { step: 'Install',            count: 100000, convToNext: 0.32, p50s: null, p95s: null   },
  { step: 'Signup',             count:  32000, convToNext: 0.64, p50s: 28,   p95s: 95     },
  { step: 'KYC Start',          count:  20480, convToNext: 0.67, p50s: 18,   p95s: 62,    isKyc: true },
  { step: 'KYC Complete',       count:  13722, convToNext: 0.88, p50s: 77,   p95s: 495    },
  { step: 'Browse FDs',         count:  12075, convToNext: 0.41, p50s: 95,   p95s: 480    },
  { step: 'Select FD',          count:   4951, convToNext: 0.84, p50s: 38,   p95s: 120    },
  { step: 'Nominee Added',      count:   4159, convToNext: 0.91, p50s: null, p95s: null   },
  { step: 'Payment Initiated',  count:   3785, convToNext: 0.87, p50s: 14,   p95s: 65     },
  { step: 'First Deposit',      count:   3292, convToNext: null, p50s: null, p95s: null   },
]

// Prior period — KYC Complete 65% (vs 67%), others ~1pp lower
export const priorFunnel: FunnelStep[] = [
  { step: 'Install',            count:  95000, convToNext: 0.31, p50s: null, p95s: null  },
  { step: 'Signup',             count:  29450, convToNext: 0.64, p50s: 30,   p95s: 102   },
  { step: 'KYC Start',          count:  18848, convToNext: 0.65, p50s: 19,   p95s: 68    },
  { step: 'KYC Complete',       count:  12251, convToNext: 0.87, p50s: 82,   p95s: 520   },
  { step: 'Browse FDs',         count:  10658, convToNext: 0.40, p50s: 101,  p95s: 495   },
  { step: 'Select FD',          count:   4263, convToNext: 0.84, p50s: 41,   p95s: 128   },
  { step: 'Nominee Added',      count:   3581, convToNext: 0.91, p50s: null, p95s: null  },
  { step: 'Payment Initiated',  count:   3259, convToNext: 0.86, p50s: 15,   p95s: 72    },
  { step: 'First Deposit',      count:   2802, convToNext: null, p50s: null, p95s: null  },
]

export const conversionBySource: ConversionBySource[] = [
  { source: 'Referral',       convPct: 6.8,  trend: 'up'   },
  { source: 'Organic Search', convPct: 4.2,  trend: 'up'   },
  { source: 'Google Ads',     convPct: 3.1,  trend: 'flat' },
  { source: 'Meta Ads',       convPct: 2.4,  trend: 'down' },
  { source: 'Partnerships',   convPct: 4.9,  trend: 'up'   },
]

// Median days from install to first deposit (TTFFD)
export const ttffdSeries = [
  { month: 'Sep 25', days: 9.2 },
  { month: 'Oct 25', days: 8.8 },
  { month: 'Nov 25', days: 8.5 },
  { month: 'Dec 25', days: 8.1 },
  { month: 'Jan 26', days: 7.6 },
  { month: 'Feb 26', days: 7.9 },
  { month: 'Mar 26', days: 7.3 },
  { month: 'Apr 26', days: 6.9 },
  { month: 'May 26', days: 6.5 },
  { month: 'Jun 26', days: 6.1 },
]
