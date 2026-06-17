import type { CacChannel } from '../types/metrics'

export const cacByChannel: CacChannel[] = [
  { channel: 'Google Search', cac: 420, trend: 'down' },
  { channel: 'Meta Ads',      cac: 680, trend: 'up'   },
  { channel: 'Referral',      cac: 85,  trend: 'down' },
  { channel: 'Organic',       cac: 0,   trend: 'flat' },
  { channel: 'Partnerships',  cac: 240, trend: 'down' },
]
