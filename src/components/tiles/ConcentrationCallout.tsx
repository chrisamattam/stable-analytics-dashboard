import { top1Pct, top3Pct, concentrationStatus } from '../../data/bankMix'
import InfoTag from '../ui/InfoTag'

export default function ConcentrationCallout() {
  const status = concentrationStatus(top1Pct)

  const dotColor = {
    green: 'bg-positive',
    amber: 'bg-warning',
    red: 'bg-critical',
  }[status]

  const valueColor = {
    green: 'text-positive',
    amber: 'text-warning',
    red: 'text-critical',
  }[status]

  return (
    <div className="bg-card border border-stroke rounded-xl px-5 py-3 flex flex-wrap items-center gap-x-4 gap-y-2">

      {/* Label */}
      <div className="flex items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 flex-shrink-0">
        Partner Concentration
        <InfoTag term="Partner Concentration Risk" />
      </div>

      <div className="w-px h-4 bg-stroke flex-shrink-0" />

      {/* Status dot + top bank */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColor}`} />
        <span className="text-xs text-zinc-400">Top bank:</span>
        <span className="text-xs font-semibold text-zinc-200">Suryoday SFB</span>
        <span className={`font-mono text-sm font-semibold ${valueColor}`}>{top1Pct}%</span>
      </div>

      <span className="text-zinc-700 flex-shrink-0">·</span>

      {/* Top 3 */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <span className="text-xs text-zinc-500">Top 3 combined:</span>
        <span className="font-mono text-sm font-semibold text-zinc-200">{top3Pct}%</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Threshold scale */}
      <div className="flex items-center gap-2.5 flex-shrink-0">
        <span className="text-[10px] text-zinc-600 flex-shrink-0">Top-bank risk:</span>
        <div className="flex h-1.5 w-20 rounded-full overflow-hidden flex-shrink-0">
          <div className="bg-positive/60 flex-[3]" />
          <div className="bg-warning/60 flex-[1]" />
          <div className="bg-critical/60 flex-[1]" />
        </div>
        <div className="flex items-center gap-3 text-[10px]">
          <span className="text-positive flex-shrink-0">&lt;30% safe</span>
          <span className="text-warning flex-shrink-0">30–40% watch</span>
          <span className="text-critical flex-shrink-0">&gt;40% risk</span>
        </div>
      </div>

    </div>
  )
}
