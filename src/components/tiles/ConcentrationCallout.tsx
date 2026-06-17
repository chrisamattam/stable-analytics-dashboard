import { top1Pct, top3Pct, concentrationStatus } from '../../data/bankMix'
import InfoTag from '../ui/InfoTag'

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
      <div className="flex items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 flex-shrink-0">
        Partner Concentration
        <InfoTag term="Partner Concentration Risk" />
      </div>
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
      <div className="flex items-center gap-2 text-[10px] text-zinc-600 flex-shrink-0">
        <span>Top bank share:</span>
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-positive inline-block" /> &lt;30% safe</span>
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-warning inline-block" /> 30–40% watch</span>
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-critical inline-block" /> &gt;40% risk</span>
      </div>
    </div>
  )
}
