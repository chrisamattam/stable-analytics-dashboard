import { bondRepeatRates, currentBond } from '../../data/bond'

export default function BondMetricsPanel() {
  return (
    <div className="space-y-5">
      {/* Bond Repeat Purchase Rate table */}
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-3">
          Bond Repeat Purchase Rate
        </div>
        <div className="space-y-2">
          {bondRepeatRates.map(row => (
            <div key={row.window} className="flex items-center justify-between">
              <span className="text-xs text-zinc-500">{row.window}</span>
              <div className="flex items-center gap-3 flex-1 mx-4">
                <div className="flex-1 h-1.5 bg-stroke rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-purple-500"
                    style={{ width: `${(row.rate / 35) * 100}%` }}
                  />
                </div>
              </div>
              <span className="font-mono text-sm font-medium text-zinc-200">{row.rate}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Avg bond purchases */}
      <div className="border-t border-stroke pt-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-2">
          Avg Bond Purchases / Bond-Active User
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-2xl font-semibold text-zinc-50">
            {currentBond.avgPurchasesPerUser.toFixed(2)}
          </span>
          <span className="text-xs text-zinc-600">per month</span>
        </div>
      </div>

      {/* Time to first bond */}
      <div className="border-t border-stroke pt-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-2">
          Time to First Bond (Median)
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-2xl font-semibold text-zinc-50">
            {currentBond.timeToFirstBond}d
          </span>
          <span className="text-xs text-positive">↓ from 142d (Sep)</span>
        </div>
      </div>
    </div>
  )
}
