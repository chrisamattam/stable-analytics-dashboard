# Stable Money PM Analytics Dashboard

A Product Manager portfolio dashboard demonstrating metric-led thinking about [Stable Money](https://stablemoney.in) — an Indian fixed-income fintech that lets retail investors book FDs across multiple bank partners without opening separate accounts.

**This is a PM portfolio exercise. All data is illustrative mock data calibrated against public numbers. No real user data is used.**

## What this is

Built as part of a reconsideration request after a PM intern interview at Stable Money. The dashboard demonstrates:

- **AUM & Growth Engine** — AUM trajectory vs glide path, waterfall decomposition, ticket size distribution, partner concentration risk
- **Activation Funnel** — Step-by-step funnel with time data, KYC sub-step drill-down, period comparison
- **Trust Compounding** — Reinvestment rates, cohort repeat curves, FD→Bonds upgrade, K-factor / referral mechanics

## Tech stack

- Vite + React 18 + TypeScript
- Tailwind CSS
- Recharts (all charts)
- Lucide React (icons)
- React Router v6

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## Data sources

Mock data is calibrated against:
- AUM: ₹4,000 Cr (Dec 2025), ₹5,000 Cr (Feb 2026), targeting ₹12,000 Cr Dec 2026
- ~30 lakh registered users (Feb 2026)
- ~1.25 lakh cumulative deposits (Dec 2025)
- Partner banks: Suryoday SFB, Utkarsh SFB, Shivalik SFB, Unity SFB, slice SFB (public)

Built by Chris Mattam · [chrisamattam@gmail.com](mailto:chrisamattam@gmail.com)
