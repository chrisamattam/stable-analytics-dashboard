import type { GlossaryTerm } from '../types/metrics'

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'AUM (Assets Under Management)',
    definition: 'Total principal value of FDs and bonds held by all users on the platform, measured at a point in time. Unlike equity AUM, this declines as deposits mature unless reinvested.',
    precision: 'Must exclude interest accrued but not yet credited, and must net out any same-day maturities. Do not conflate with "total deposits ever booked."',
  },
  {
    term: 'MAI (Monthly Active Investors)',
    definition: 'Unique users who completed at least one FD booking, bond purchase, or portfolio view action in a calendar month. "Active" means investment intent, not merely app login.',
    precision: 'Exclude users who only contacted support or only viewed marketing pages. The denominator for most engagement rates.',
  },
  {
    term: 'Glide Path',
    definition: 'The monthly AUM milestone derived from linear interpolation between Feb 2026 (₹5,000 Cr anchor) and Dec 2026 (₹12,000 Cr target). Adds ~₹700 Cr per month.',
    precision: 'Any shortfall vs glide path compresses marketing and growth budget available before the next funding event. Track delta weekly, not monthly.',
  },
  {
    term: 'Reinvestment at Maturity Rate',
    definition: '% of FDs whose principal is reinvested on Stable Money within 7 days of maturity date, rather than withdrawn to the user\'s source bank account.',
    precision: 'The 7-day window captures users who briefly withdraw then reinvest. A narrower window would undercount reinvestment and punish normal payment settlement delays.',
  },
  {
    term: 'K-Factor (Viral Coefficient)',
    definition: 'Average number of new activated users (first deposit completed) generated per existing activated user through the referral program, measured over a rolling 90-day window.',
    precision: 'Must count only activations, not signups or referral link clicks. K < 1 means growth is sub-viral but referrals still meaningfully reduce paid CAC.',
  },
  {
    term: 'TTFFD (Time to First Fixed Deposit)',
    definition: 'Median elapsed time from a user\'s first app install to their first successful payment (FD booked). Measures the efficiency of the entire purchase funnel.',
    precision: 'Long TTFFD indicates checkout friction or trust deficit, not just awareness problems. Segment by acquisition channel — paid users typically close faster than organic.',
  },
  {
    term: 'FD → Bonds Upgrade Rate',
    definition: '% of FD-active users who complete their first bond purchase within N days (90d or 180d window) of their first FD booking. Measures product cross-sell velocity.',
    precision: 'Window matters: 90d captures early adopters; 180d captures users who need a trust-building period. Report both. Don\'t blend into a single number.',
  },
  {
    term: 'Time to First Bond (TTFB)',
    definition: 'Median days from a user\'s first FD booking to their first bond purchase. A leading indicator of product breadth expansion and cross-sell funnel health.',
    precision: 'Calculated only on users who eventually bought bonds (right-censored for non-converters). Declining TTFB means the bond discovery surface is improving.',
  },
  {
    term: 'TTFR (Time to First Referral)',
    definition: 'Median days from a user\'s first deposit to their first outgoing referral invite sent. Measures when users become confident enough to advocate.',
    precision: 'Uses first invite sent, not first accepted referral. Acceptance depends on the referee\'s behavior; the sending moment is the pure trust signal.',
  },
  {
    term: 'Referral Rate',
    definition: '% of MAI who sent at least one referral invite in a calendar month. Measures the breadth of word-of-mouth across the active user base.',
    precision: '"At least one" (binary per user) is more meaningful than referrals per user (continuous) for measuring how widely the advocacy behavior has spread.',
  },
  {
    term: 'End-to-End Funnel Conversion',
    definition: '% of app installs (organic + paid, excluding re-installs of existing users) that result in a first completed deposit, measured over a rolling 30-day cohort window.',
    precision: 'Must exclude re-installs of existing users to avoid deflating the denominator. ~3–5% is typical for Indian investment fintech.',
  },
  {
    term: 'KYC Completion Rate',
    definition: '% of users who started the KYC flow (PAN entry initiated) and completed all three sub-steps: PAN verification → Aadhaar OTP → Selfie liveness check.',
    precision: 'PAN entry is the start gate. Users who bounced before entering PAN are already captured in the Signup→KYC Start step conversion.',
  },
  {
    term: 'Aadhaar OTP P95 Latency',
    definition: '95th-percentile elapsed seconds between Aadhaar OTP request sent and user-entered OTP received. A key KYC pipeline health metric.',
    precision: 'P95, not median, because SMS delivery failures create a bimodal distribution — fast for most users, extremely slow for BSNL / Jio edge cases. Segment by telecom carrier.',
  },
  {
    term: 'CAC (Customer Acquisition Cost)',
    definition: 'Total channel spend in a period divided by activated users (first deposit completed) acquired through that same channel. Fully-loaded: includes agency fees, creative, and incentive budgets.',
    precision: 'Organic CAC is not zero — SEO, content creation, and referral rewards have real costs. "Free channel" thinking understates true blended CAC.',
  },
  {
    term: 'Avg Ticket Size',
    definition: 'Mean principal amount of a single FD booking in ₹. Tracked alongside median to surface distribution skew from large depositors.',
    precision: 'Mean is skewed by ₹5L+ deposits. Use median alongside mean. A rising mean without a rising median indicates concentration in top depositors, not broad deepening.',
  },
  {
    term: 'DICGC Cap',
    definition: '₹5,00,000 (five lakh rupees) per depositor per bank, under the Deposit Insurance and Credit Guarantee Corporation of India mandate. Covers principal + interest up to this limit.',
    precision: 'The cap is per bank, not per platform. Users can hold ₹5L each across all Stable Money partner banks for full coverage. A key trust and differentiation message.',
  },
  {
    term: 'Partner Concentration Risk',
    definition: '% of new deposit volume (in ₹ terms) flowing to a single bank or NBFC partner in a given month. Above 40% for any single partner is a systemic risk flag.',
    precision: 'Volume concentration, not user count concentration. A single large corporate depositor at one bank can create a concentration signal without representing broad user dependence.',
  },
  {
    term: 'Bond Repeat Purchase Rate',
    definition: '% of bond-active users who made a second bond purchase within N days of their first bond transaction. Tracked at 90d, 180d, and 365d windows.',
    precision: 'Longer windows capture seasonal investors (e.g., annual post-bonus bond buyers). 365d window is the most meaningful for a product with inherent long reinvestment cycles.',
  },
  {
    term: 'Avg Bond Purchases per Bond-Active User',
    definition: 'Monthly count of bond transactions divided by users with at least one bond purchase in that month. Measures engagement depth within the bond sub-segment.',
    precision: 'Denominator is bond-active users, not all MAI. This isolates the behavior of users who have already crossed into the bond product.',
  },
  {
    term: 'Bond AUM % of Total AUM',
    definition: 'AUM attributable to Stable Bonds and debt mutual funds as a share of total platform AUM. A product diversification health metric.',
    precision: 'A rising bond AUM % is positive, but should be watched against total AUM growth — it\'s possible for bond % to rise while bond absolute AUM shrinks if FD AUM grows faster.',
  },
  {
    term: 'Net AUM Growth',
    definition: 'Change in total AUM over a period: New Deposits − (Maturities Not Reinvested + Premature Withdrawals). The true measure of compounding, not gross inflows.',
    precision: 'Gross deposit inflows alone overstate growth. A platform with 60% reinvestment vs 40% reinvestment at similar inflow volumes will show dramatically different sustainable AUM trajectories.',
  },
  {
    term: 'Cohort Repeat Rate',
    definition: '% of users in a signup cohort who made a second deposit within N days of their first. Tracked at 30d, 60d, 90d, and 180d per cohort.',
    precision: 'Cohort-based (not period-based) to isolate product quality improvements from acquisition mix changes. A rising repeat rate across newer cohorts proves the product is getting better.',
  },
  {
    term: 'Activation',
    definition: 'A user who has completed KYC verification and made at least one successful FD booking. The standard definition of a converted user on Stable Money.',
    precision: 'KYC alone is not activation — users who KYC but never book are stuck in an incomplete purchase journey. Activation = money moved.',
  },
]
