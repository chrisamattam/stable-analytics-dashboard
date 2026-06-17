import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, ReferenceLine,
} from 'recharts'
import { referralSeries, currentReferral, priorReferral } from '../../data/referral'
import { COLORS } from '../../lib/colors'

const tooltipStyle = {
  backgroundColor: '#141416',
  border: '1px solid #26262A',
  borderRadius: 8,
  color: '#E4E4E7',
  fontSize: 12,
}
const tooltipItemStyle = { color: '#A1A1AA' }

export default function KFactorTrendChart() {
  const delta = currentReferral.kFactor - priorReferral.kFactor

  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-1">
        K-Factor (Viral Coefficient)
      </div>
      <div className="flex items-baseline gap-3 mb-1">
        <div className="font-mono text-3xl font-semibold text-zinc-50">
          {currentReferral.kFactor.toFixed(2)}
        </div>
        <span
          className={`text-xs font-medium ${delta >= 0 ? 'text-positive' : 'text-critical'}`}
        >
          {delta >= 0 ? '+' : ''}{delta.toFixed(2)} MoM
        </span>
      </div>
      <div className="text-xs text-zinc-600 mb-4">
        K &lt; 1.0 = sub-viral growth · referrals still meaningfully reduce blended CAC
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={referralSeries} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#26262A" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: '#71717A', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            dy={6}
          />
          <YAxis
            tickFormatter={v => v.toFixed(2)}
            tick={{ fill: '#71717A', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 1.2]}
            width={36}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#FAFAFA', marginBottom: 4 }}
            itemStyle={tooltipItemStyle}
            formatter={(value: number) => [value.toFixed(2), 'K-Factor']}
          />
          <ReferenceLine
            y={1.0}
            stroke={COLORS.critical}
            strokeDasharray="5 3"
            strokeWidth={1.5}
            label={{
              value: 'K = 1.0 · viral threshold',
              position: 'insideTopRight',
              fill: COLORS.critical,
              fontSize: 10,
            }}
          />
          <Line
            type="monotone"
            dataKey="kFactor"
            stroke={COLORS.positive}
            strokeWidth={2}
            dot={{ r: 3, fill: COLORS.positive }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
