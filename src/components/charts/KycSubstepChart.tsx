import { AlertTriangle } from 'lucide-react'
import type { KycSubStep } from '../../types/metrics'
import { COLORS } from '../../lib/colors'
import InfoTag from '../ui/InfoTag'

interface Props {
  subSteps: KycSubStep[]
}

function TimeBar({ value, max, color }: { value: number; max: number; color: string }) {
  return (
    <div className="h-1.5 bg-stroke rounded-full overflow-hidden w-full">
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${(value / max) * 100}%`, backgroundColor: color }}
      />
    </div>
  )
}

export default function KycSubstepChart({ subSteps }: Props) {
  const maxP95 = Math.max(...subSteps.map(s => s.p95s))

  return (
    <div className="bg-shell border border-stroke rounded-lg px-4 py-3 space-y-3">
      <div className="flex items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-600 mb-1">
        KYC Sub-steps
        <InfoTag term="KYC Completion Rate" />
      </div>
      {subSteps.map(step => (
        <div key={step.name} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {step.bottleneck && (
                <AlertTriangle size={11} className="text-warning flex-shrink-0" />
              )}
              <span
                className={`text-xs ${step.bottleneck ? 'text-warning' : 'text-zinc-400'}`}
              >
                {step.name}
              </span>
              {step.name === 'Aadhaar OTP' && (
                <InfoTag term="Aadhaar OTP P95 Latency" />
              )}
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono">
              <span className="text-zinc-500">P50 {step.p50s}s</span>
              <span
                className={`font-medium ${step.bottleneck ? 'text-warning' : 'text-zinc-400'}`}
              >
                P95 {step.p95s}s
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <TimeBar
              value={step.p50s}
              max={maxP95}
              color={COLORS.accent}
            />
            <TimeBar
              value={step.p95s}
              max={maxP95}
              color={step.bottleneck ? COLORS.warning : COLORS.textMuted}
            />
          </div>
          {step.bottleneck && step.note && (
            <p className="text-[10px] text-warning/70 leading-relaxed">{step.note}</p>
          )}
        </div>
      ))}
      <div className="flex items-center gap-4 pt-1 text-[10px] text-zinc-600">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-1.5 rounded-full bg-accent" />
          <span>P50 (median)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-1.5 rounded-full bg-zinc-500" />
          <span>P95 (tail)</span>
        </div>
      </div>
    </div>
  )
}
