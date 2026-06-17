import type { ReferralDataPoint } from '../types/metrics'

export const referralSeries: ReferralDataPoint[] = [
  { month: 'Sep 25', kFactor: 0.08, pctFromReferrals: 14, referralRate: 5.0, ttfrMedianDays: 62 },
  { month: 'Oct 25', kFactor: 0.09, pctFromReferrals: 15, referralRate: 5.4, ttfrMedianDays: 59 },
  { month: 'Nov 25', kFactor: 0.10, pctFromReferrals: 16, referralRate: 5.8, ttfrMedianDays: 57 },
  { month: 'Dec 25', kFactor: 0.11, pctFromReferrals: 17, referralRate: 6.2, ttfrMedianDays: 54 },
  { month: 'Jan 26', kFactor: 0.12, pctFromReferrals: 18, referralRate: 6.8, ttfrMedianDays: 51 },
  { month: 'Feb 26', kFactor: 0.11, pctFromReferrals: 17, referralRate: 6.5, ttfrMedianDays: 52 },
  { month: 'Mar 26', kFactor: 0.13, pctFromReferrals: 19, referralRate: 7.2, ttfrMedianDays: 48 },
  { month: 'Apr 26', kFactor: 0.14, pctFromReferrals: 20, referralRate: 7.8, ttfrMedianDays: 44 },
  { month: 'May 26', kFactor: 0.15, pctFromReferrals: 21, referralRate: 8.4, ttfrMedianDays: 41 },
  { month: 'Jun 26', kFactor: 0.16, pctFromReferrals: 22, referralRate: 9.0, ttfrMedianDays: 38 },
]

export const currentReferral = referralSeries[referralSeries.length - 1]
export const priorReferral   = referralSeries[referralSeries.length - 2]
