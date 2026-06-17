import type { AumDataPoint, WaterfallItem, TicketBucket } from '../types/metrics'

export const aumTimeSeries: AumDataPoint[] = [
  { month: 'Sep 25', aum: 3200, glidePath: null,  mai: 180000, avgFdBookings: 0.35, avgTicketSize: 132000 },
  { month: 'Oct 25', aum: 3500, glidePath: null,  mai: 195000, avgFdBookings: 0.36, avgTicketSize: 134000 },
  { month: 'Nov 25', aum: 3750, glidePath: null,  mai: 210000, avgFdBookings: 0.37, avgTicketSize: 136000 },
  { month: 'Dec 25', aum: 4000, glidePath: null,  mai: 225000, avgFdBookings: 0.38, avgTicketSize: 138000 },
  { month: 'Jan 26', aum: 4500, glidePath: null,  mai: 240000, avgFdBookings: 0.40, avgTicketSize: 140000 },
  { month: 'Feb 26', aum: 5000, glidePath: 5000,  mai: 228000, avgFdBookings: 0.37, avgTicketSize: 139000 },
  { month: 'Mar 26', aum: 5650, glidePath: 5700,  mai: 255000, avgFdBookings: 0.42, avgTicketSize: 142000 },
  { month: 'Apr 26', aum: 6400, glidePath: 6400,  mai: 278000, avgFdBookings: 0.44, avgTicketSize: 144000 },
  { month: 'May 26', aum: 7150, glidePath: 7100,  mai: 300000, avgFdBookings: 0.46, avgTicketSize: 146000 },
  { month: 'Jun 26', aum: 7950, glidePath: 7800,  mai: 320000, avgFdBookings: 0.48, avgTicketSize: 148000 },
]

// Net AUM waterfall for Jun 2026 (May ending → Jun ending)
export const aumWaterfall: WaterfallItem[] = [
  { name: 'Starting AUM',              base: 0,    value: 7150, type: 'total'    },
  { name: 'New Deposits',              base: 7150, value: 1200, type: 'positive' },
  { name: 'Mat. Not Reinvested',        base: 8050, value: 300,  type: 'negative' },
  { name: 'Premature Withdrawals',      base: 7950, value: 100,  type: 'negative' },
  { name: 'Ending AUM',               base: 0,    value: 7950, type: 'total'    },
]

export const ticketDistribution: TicketBucket[] = [
  { label: '₹1K–10K',  pct: 18, isAboveDicgc: false },
  { label: '₹10K–50K', pct: 32, isAboveDicgc: false },
  { label: '₹50K–1L',  pct: 24, isAboveDicgc: false },
  { label: '₹1L–5L',   pct: 21, isAboveDicgc: false },
  { label: '₹5L+',     pct: 5,  isAboveDicgc: true  },
]

export const currentAum = aumTimeSeries[aumTimeSeries.length - 1]
export const priorAum   = aumTimeSeries[aumTimeSeries.length - 2]
