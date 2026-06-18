import { useState } from 'react'
import { ChevronDown, ChevronRight, Clock } from 'lucide-react'
import type { FunnelStep } from '../../types/metrics'
import { kycSubSteps } from '../../data/kyc'
import KycSubstepChart from './KycSubstepChart'

interface Props {
  steps: FunnelStep[]
  priorSteps?: FunnelStep[]
  showComparison: boolean
}

function formatTime(seconds: number | null): string {
  if (seconds === null) return '—'
  if (seconds >= 60) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`
  return `${seconds}s`
}

export default function FunnelStepChart({ steps, priorSteps, showComparison }: Props) {
  const [kycExpanded, setKycExpanded] = useState(true)

  const base = steps[0].count

  return (
    <div className="space-y-0">
      {steps.map((step, idx) => {
        const widthPct  = (step.count / base) * 100
        const priorStep = priorSteps?.[idx]
        const priorWidthPct = priorStep ? (priorStep.count / base) * 100 : null
        const isKycStart = step.isKyc
        const isLast = idx === steps.length - 1

        return (
          <div key={step.step}>
            {/* Step row */}
            <div className="flex items-center gap-3 py-1.5">
              {/* Step name */}
              <div
                className={`w-24 sm:w-36 flex-shrink-0 flex items-center gap-1.5 text-xs text-zinc-400 ${isKycStart ? 'cursor-pointer hover:text-zinc-200' : ''}`}
                onClick={isKycStart ? () => setKycExpanded(v => !v) : undefined}
              >
                {isKycStart && (
                  <span className="text-zinc-500">
                    {kycExpanded ? <ChevronDown size={11} /> : <ChevronRight size={11} />}
                  </span>
                )}
                <span>{step.step}</span>
              </div>

              {/* Bar + count + time */}
              <div className="flex items-center gap-2 flex-1">
                <div className="flex-1 relative h-8">
                  {/* Prior period ghost bar */}
                  {showComparison && priorWidthPct !== null && (
                    <div
                      className="absolute top-0 left-0 h-full rounded bg-zinc-700/30 border border-zinc-600/30 transition-all"
                      style={{ width: `${priorWidthPct}%` }}
                    />
                  )}
                  {/* Current period bar — no text inside */}
                  <div
                    className="absolute top-0 left-0 h-full rounded bg-accent/80 transition-all"
                    style={{ width: `${widthPct}%`, minWidth: 8 }}
                  />
                </div>

                {/* Count — always outside the bar */}
                <span className="text-[11px] font-mono text-zinc-300 w-16 flex-shrink-0">
                  {step.count.toLocaleString('en-IN')}
                </span>

                {/* P50 time badge */}
                {step.p50s !== null && (
                  <div className="flex items-center gap-1 text-[10px] text-zinc-500 flex-shrink-0">
                    <Clock size={9} />
                    <span>{formatTime(step.p50s)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* KYC sub-step drill-down */}
            {isKycStart && kycExpanded && (
              <div className="ml-[102px] sm:ml-[154px] mb-1 mt-1">
                <KycSubstepChart subSteps={kycSubSteps} />
              </div>
            )}

            {/* Conversion arrow */}
            {!isLast && step.convToNext !== null && (
              <div className="flex items-center gap-3 py-0.5">
                <div className="w-24 sm:w-36 flex-shrink-0" />
                <div className="flex items-center gap-2 text-[10px]">
                  <div className="w-0.5 h-3 bg-stroke ml-3" />
                  <span
                    className={`font-mono font-medium ${
                      step.convToNext >= 0.8
                        ? 'text-positive'
                        : step.convToNext >= 0.5
                          ? 'text-zinc-400'
                          : 'text-warning'
                    }`}
                  >
                    {(step.convToNext * 100).toFixed(0)}%
                  </span>
                  {showComparison && priorSteps?.[idx]?.convToNext != null && (
                    <span className="text-zinc-600">
                      (prev {(priorSteps[idx].convToNext! * 100).toFixed(0)}%)
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
