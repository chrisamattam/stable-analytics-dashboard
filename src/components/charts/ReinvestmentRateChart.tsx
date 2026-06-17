import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, ReferenceLine,
} from 'recharts'
import { reinvestmentSeries } from '../../data/bond'
import { COLORS } from '../../lib/colors'

const tooltipStyle = {
  backgroundColor: '#141416',
  border: '1px solid #26262A',
  borderRadius: 8,
  fontSize: 12,
}
const tooltipItemStyle = { color: '#A1A1AA' }

export default function ReinvestmentRateChart() {
  const current = reinvestmentSeries[reinvestmentSeries.length - 1]
  const prior   = reinvestmentSeries[reinvestmentSeries.length - 2]
  const delta   = current.rate - prior.rate

  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-1">
        Reinvestment at Maturity Rate
      </div>
      <div className="flex items-baseline gap-3 mb-4">
        <div className="font-mono text-3xl font-semibold text-zinc-50">
          {current.rate.toFixed(1)}%
        </div>
        <span
          className={`text-xs font-medium ${delta >= 0 ? 'text-positive' : 'text-critical'}`}
        >
          {delta >= 0 ? '+' : ''}{delta.toFixed(1)}pp MoM
        </span>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={reinvestmentSeries} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#26262A" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: '#71717A', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            dy={6}
          />
          <YAxis
            tickFormatter={v => `${v}%`}
            tick={{ fill: '#71717A', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={[48, 66]}
            width={36}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#FAFAFA', marginBottom: 4 }}
            itemStyle={tooltipItemStyle}
            formatter={(value: number) => [`${value.toFixed(1)}%`, 'Reinvestment Rate']}
          />
          <ReferenceLine
            y={50}
            stroke={COLORS.stroke}
            strokeDasharray="4 3"
            label={{ value: '50%', position: 'right', fill: '#71717A', fontSize: 10 }}
          />
          <Line
            type="monotone"
            dataKey="rate"
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
