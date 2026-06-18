import { useState } from 'react'
import Card from '../ui/Card'
import PeriodToggle from '../ui/PeriodToggle'
import FunnelStepChart from '../charts/FunnelStepChart'
import MetricTile from '../tiles/MetricTile'
import PmCommentary from '../shared/PmCommentary'
import { currentFunnel, priorFunnel, conversionBySource, ttffdSeries } from '../../data/funnel'
import { cacByChannel } from '../../data/cac'
import { formatPct } from '../../lib/formatters'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import InfoTag from '../ui/InfoTag'

const periodOptions = [
  { label: 'Last 30d',  value: 'current'    },
  { label: '+ Prior 30d', value: 'comparison' },
]

function TrendIcon({ trend }: { trend: 'up' | 'down' | 'flat' }) {
  if (trend === 'up')   return <TrendingUp  size={11} className="text-positive" />
  if (trend === 'down') return <TrendingDown size={11} className="text-critical"  />
  return <Minus size={11} className="text-zinc-500" />
}

const currentInstall = currentFunnel[0].count
const currentDeposit = currentFunnel[currentFunnel.length - 1].count
const e2eConv        = (currentDeposit / currentInstall * 100).toFixed(2)

const priorInstall  = priorFunnel[0].count
const priorDeposit  = priorFunnel[priorFunnel.length - 1].count
const priorE2eConv  = (priorDeposit / priorInstall * 100).toFixed(2)
const e2eDelta      = (parseFloat(e2eConv) - parseFloat(priorE2eConv)).toFixed(2)

const e2eSeries     = ttffdSeries.map(d => 1 / d.days) // proxy sparkline shape
const ttffdCurrent  = ttffdSeries[ttffdSeries.length - 1].days
const ttffdPrior    = ttffdSeries[ttffdSeries.length - 2].days
const ttffdDelta    = ttffdCurrent - ttffdPrior

export default function ActivationFunnelTab() {
  const [period, setPeriod] = useState('current')

  return (
    <div className="space-y-4">
      <PmCommentary
        text="Referral converts at 6.8% — 2.2× paid search. Priority fix: Aadhaar OTP P95 at 495s is the single most diagnosable blocker in the KYC step."
        severity="insight"
      />

      {/* Funnel hero */}
      <Card>
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="flex items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-1">
              Activation Funnel
              <InfoTag term="Activation" />
            </div>
            <div className="text-xs text-zinc-600">
              Install → First Deposit · End-to-end{' '}
              <span className="font-mono font-medium text-zinc-300">{e2eConv}%</span>
            </div>
          </div>
          <PeriodToggle
            options={periodOptions}
            value={period}
            onChange={setPeriod}
          />
        </div>

        <FunnelStepChart
          steps={currentFunnel}
          priorSteps={priorFunnel}
          showComparison={period === 'comparison'}
        />
      </Card>

      {/* KYC commentary */}
      <PmCommentary
        text="Aadhaar OTP P95 = 495s. Segment by carrier and time-of-day to find the drop-off pattern. Fix: exponential backoff retry + DigiLocker fallback."
        severity="warning"
      />

      {/* Supporting metric tiles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricTile
          title="End-to-End Conversion"
          value={`${e2eConv}%`}
          delta={`${parseFloat(e2eDelta) >= 0 ? '+' : ''}${e2eDelta}pp MoM`}
          deltaPositive={parseFloat(e2eDelta) >= 0}
          sparklineData={e2eSeries}
          glossaryTerm="End-to-End Funnel Conversion"
        />
        <MetricTile
          title="TTFFD (Median)"
          value={`${ttffdCurrent.toFixed(1)}d`}
          delta={`${ttffdDelta.toFixed(1)}d MoM`}
          deltaPositive={ttffdDelta < 0}
          sparklineData={ttffdSeries.map(d => d.days)}
          sparklineColor="#10B981"
          glossaryTerm="TTFFD (Time to First Fixed Deposit)"
        />

        {/* Conversion by source */}
        <Card noPad className="col-span-1 p-4">
          <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-3">
            Conv. by Source
          </div>
          <div className="space-y-2">
            {conversionBySource.map(row => (
              <div key={row.source} className="flex items-center justify-between gap-2">
                <span className="text-xs text-zinc-500 truncate">{row.source}</span>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <TrendIcon trend={row.trend} />
                  <span className="font-mono text-xs text-zinc-200">{formatPct(row.convPct)}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* CAC by channel */}
        <Card noPad className="col-span-1 p-4">
          <div className="flex items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-3">
            CAC by Channel
            <InfoTag term="CAC (Customer Acquisition Cost)" />
          </div>
          <div className="space-y-2">
            {cacByChannel.map(row => (
              <div key={row.channel} className="flex items-center justify-between gap-2">
                <span className="text-xs text-zinc-500 truncate">{row.channel}</span>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <TrendIcon trend={row.trend === 'up' ? 'down' : row.trend === 'down' ? 'up' : 'flat'} />
                  {row.cac === 0
                    ? <span className="text-xs text-zinc-500">— *</span>
                    : <span className="font-mono text-xs text-zinc-200">₹{row.cac}</span>
                  }
                </div>
              </div>
            ))}
          <div className="mt-3 text-[10px] text-zinc-600">* Organic excludes SEO/content costs</div>
          </div>
        </Card>
      </div>
    </div>
  )
}
