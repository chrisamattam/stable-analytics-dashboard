import { top1Pct, top3Pct, concentrationStatus } from '../../data/bankMix'

export default function ConcentrationCallout() {
  const status = concentrationStatus(top1Pct)

  const statusColor = {
    green: 'text-positive',
    amber: 'text-warning',
    red: 'text-critical',
  }[status]

  const statusBg = {
    green: 'bg-positive/10',
    amber: 'bg-warning/10',
    red: 'bg-critical/10',
  }[status]

  const statusLabel = {
    green: 'GREEN',
    amber: 'AMBER',
    red: 'RED',
  }[status]

  return (
    <div className="bg-card border border-stroke rounded-xl px-5 py-3 flex items-center gap-6 text-sm">
      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 flex-shrink-0">
        Partner Concentration
      </span>
      <div className="flex items-center gap-6 flex-1 flex-wrap">
        <span className="text-zinc-400">
          Top partner bank:{' '}
          <span className="text-zinc-200 font-medium">Suryoday SFB</span>{' '}
          at{' '}
          <span className="text-zinc-200 font-mono font-medium">{top1Pct}%</span>
        </span>
        <span className="text-zinc-600">·</span>
        <span className="text-zinc-400">
          Top 3 combined:{' '}
          <span className="text-zinc-200 font-mono font-medium">{top3Pct}%</span>
        </span>
        <span className="text-zinc-600">·</span>
        <span className="text-zinc-400">
          Status:{' '}
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${statusColor} ${statusBg}`}>
            {statusLabel}
          </span>
        </span>
      </div>
      <span className="text-[10px] text-zinc-600 flex-shrink-0">Threshold: &gt;40% = RED</span>
    </div>
  )
}
