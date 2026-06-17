import Card from '../ui/Card'
import PmCommentary from '../shared/PmCommentary'
import MetricTile from '../tiles/MetricTile'
import ReinvestmentRateChart from '../charts/ReinvestmentRateChart'
import CohortRepeatCurves from '../charts/CohortRepeatCurves'
import FdToBondsUpgradeChart from '../charts/FdToBondsUpgradeChart'
import KFactorTrendChart from '../charts/KFactorTrendChart'
import BondMetricsPanel from '../charts/BondMetricsPanel'
import { referralSeries, currentReferral, priorReferral } from '../../data/referral'
import { formatPct } from '../../lib/formatters'

const refRateSeries   = referralSeries.map(d => d.referralRate)
const pctRefSeries    = referralSeries.map(d => d.pctFromReferrals)

const refRateDelta    = currentReferral.referralRate - priorReferral.referralRate
const pctRefDelta     = currentReferral.pctFromReferrals - priorReferral.pctFromReferrals
const ttfrDelta       = currentReferral.ttfrMedianDays - priorReferral.ttfrMedianDays

function SectionHeader({ label, description }: { label: string; description: string }) {
  return (
    <div className="flex items-baseline gap-3 pt-2">
      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-600 bg-zinc-800/60 border border-stroke rounded px-2.5 py-1">
        {label}
      </span>
      <span className="text-xs text-zinc-600 italic">{description}</span>
    </div>
  )
}

export default function TrustCompoundingTab() {
  return (
    <div className="space-y-6">
      {/* ── STAY ── */}
      <SectionHeader
        label="STAY"
        description="Users who reinvest at maturity = compounding AUM without new CAC"
      />

      <PmCommentary
        text="Every +1pp in reinvestment rate at current AUM scale (~₹7,950 Cr) = ~₹80 Cr staying on-platform per maturity cycle instead of exiting. At 3% annualised average maturity yield, that's ~₹2.4 Cr saved CAC equivalence. The trend line here is the trust thesis made quantitative."
        severity="positive"
      />

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <ReinvestmentRateChart />
        </Card>
        <Card>
          <CohortRepeatCurves />
        </Card>
      </div>

      {/* ── EXPAND ── */}
      <SectionHeader
        label="EXPAND"
        description="Users who cross from FDs into bonds = deeper product engagement and higher LTV"
      />

      <PmCommentary
        text="FD→Bond upgrade rate at 9.8% (90d window) with time-to-first-bond compressing from 142d → 98d across cohorts. The product surface for bond discovery (rate comparison, portfolio view) is working. Next threshold: if 90d upgrade rate crosses 12%, bond AUM crosses 10% of total — a key LTV signal."
        severity="insight"
      />

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <FdToBondsUpgradeChart />
        </Card>
        <Card className="col-span-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-4">
            Bond Depth Metrics
          </div>
          <BondMetricsPanel />
        </Card>
      </div>

      {/* ── ADVOCATE ── */}
      <SectionHeader
        label="ADVOCATE"
        description="Users who refer others = trust converted to acquisition, compounding both AUM and user base"
      />

      <PmCommentary
        text="K-Factor at 0.16 and climbing — not viral, but structurally meaningful. At current MAI of 3.2L, each 0.01 increase in K-Factor = ~3,200 additional activations per 90-day referral cycle without incremental media spend. The TTFR compression (62d → 38d) suggests users are reaching trust threshold faster in newer cohorts."
        severity="positive"
      />

      <div className="grid grid-cols-3 gap-4">
        <Card className="col-span-2">
          <KFactorTrendChart />
        </Card>

        <div className="space-y-3">
          <MetricTile
            title="% New Users from Referrals"
            value={`${currentReferral.pctFromReferrals}%`}
            delta={`${pctRefDelta >= 0 ? '+' : ''}${pctRefDelta.toFixed(0)}pp MoM`}
            deltaPositive={pctRefDelta >= 0}
            sparklineData={pctRefSeries}
            sparklineColor="#10B981"
          />
          <MetricTile
            title="Referral Rate (MAI)"
            value={formatPct(currentReferral.referralRate)}
            delta={`${refRateDelta >= 0 ? '+' : ''}${refRateDelta.toFixed(1)}pp MoM`}
            deltaPositive={refRateDelta >= 0}
            sparklineData={refRateSeries}
            sparklineColor="#10B981"
            glossaryTerm="Referral Rate"
          />
          <MetricTile
            title="TTFR (Median)"
            value={`${currentReferral.ttfrMedianDays}d`}
            delta={`${ttfrDelta}d MoM`}
            deltaPositive={ttfrDelta < 0}
            sparklineData={referralSeries.map(d => d.ttfrMedianDays)}
            sparklineColor="#A855F7"
            glossaryTerm="TTFR (Time to First Referral)"
          />
        </div>
      </div>
    </div>
  )
}
