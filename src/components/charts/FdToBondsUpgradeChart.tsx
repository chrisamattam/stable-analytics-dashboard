import { useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid,
} from 'recharts'
import { bondSeries, currentBond, priorBond } from '../../data/bond'
import { COLORS } from '../../lib/colors'
import PeriodToggle from '../ui/PeriodToggle'
import InfoTag from '../ui/InfoTag'

const tooltipStyle = {
  backgroundColor: '#141416',
  border: '1px solid #26262A',
  borderRadius: 8,
  color: '#E4E4E7',
  fontSize: 12,
}
const tooltipItemStyle = { color: '#A1A1AA' }

const windowOptions = [
  { label: '90d',  value: '90d'  },
  { label: '180d', value: '180d' },
]

export default function FdToBondsUpgradeChart() {
  const [window, setWindow] = useState<'90d' | '180d'>('90d')

  const dataKey   = window === '90d' ? 'upgradeRate90d' : 'upgradeRate180d'
  const current   = window === '90d' ? currentBond.upgradeRate90d : currentBond.upgradeRate180d
  const prior     = window === '90d' ? priorBond.upgradeRate90d   : priorBond.upgradeRate180d
  const delta     = current - prior

  return (
    <div>
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
          FD → Bonds Upgrade Rate
          <InfoTag term="FD → Bonds Upgrade Rate" />
        </div>
        <PeriodToggle
          options={windowOptions}
          value={window}
          onChange={v => setWindow(v as '90d' | '180d')}
        />
      </div>
      <div className="flex items-baseline gap-3 mb-4">
        <div className="font-mono text-2xl font-semibold text-zinc-50">
          {current.toFixed(1)}%
        </div>
        <span
          className={`text-xs font-medium ${delta >= 0 ? 'text-positive' : 'text-critical'}`}
        >
          {delta >= 0 ? '+' : ''}{delta.toFixed(1)}pp MoM
        </span>
        <span className="text-xs text-zinc-600">{window} window</span>
      </div>
      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={bondSeries} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#26262A" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: '#71717A', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            dy={6}
          />
          <YAxis
            tickFormatter={v => `${v}%`}
            tick={{ fill: '#71717A', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            width={32}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#FAFAFA', marginBottom: 4 }}
            itemStyle={tooltipItemStyle}
            formatter={(value: number) => [`${value.toFixed(1)}%`, `Upgrade Rate (${window})`]}
          />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={COLORS.purple}
            strokeWidth={2}
            dot={{ r: 2.5, fill: COLORS.purple }}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
