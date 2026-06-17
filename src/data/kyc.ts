import type { KycSubStep } from '../types/metrics'

export const kycSubSteps: KycSubStep[] = [
  {
    name: 'PAN Entry & Verify',
    p50s: 24,
    p95s: 180,
    bottleneck: false,
    note: 'PAN verification via NSDL — generally reliable.',
  },
  {
    name: 'Aadhaar OTP',
    p50s: 41,
    p95s: 495,
    bottleneck: true,
    note: 'P95 at 495s suggests Aadhaar SMS delivery degradation — diagnose by carrier, by time-of-day.',
  },
  {
    name: 'Selfie Liveness',
    p50s: 12,
    p95s: 95,
    bottleneck: false,
    note: 'ML liveness check — fast under good lighting; P95 elevated by poor ambient light edge cases.',
  },
]
