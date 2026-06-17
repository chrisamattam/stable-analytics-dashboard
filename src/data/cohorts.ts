import type { CohortDataPoint } from '../types/metrics'

// X = days since first deposit; Y = % with at least one repeat booking
export const cohortRepeatCurves: CohortDataPoint[] = [
  { days: 30,  jan2025: 0.12, jul2025: 0.16, jan2026: 0.19, jan2026Proj: null },
  { days: 60,  jan2025: 0.18, jul2025: 0.24, jan2026: 0.28, jan2026Proj: null },
  { days: 90,  jan2025: 0.23, jul2025: 0.30, jan2026: 0.35, jan2026Proj: 0.35 },
  { days: 180, jan2025: 0.31, jul2025: 0.38, jan2026: null,  jan2026Proj: 0.44 },
]
