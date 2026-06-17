import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList,
} from 'recharts'
import { aumWaterfall } from '../../data/aum'
import { COLORS } from '../../lib/colors'

const tooltipStyle = {
  backgroundColor: '#141416',
  border: '1px solid #26262A',
  borderRadius: 8,
  fontSize: 12,
}

function barColor(type: string) {
  if (type === 'total')    return COLORS.accent
  if (type === 'positive') return COLORS.positive
  return COLORS.critical
}

export default function NetAumWaterfall() {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-1">
        Net AUM Waterfall · Jun 2026
      </div>
      <div className="text-xs text-zinc-600 mb-4">
        Starting AUM + inflows − exits = Ending AUM
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={aumWaterfall}
          margin={{ top: 16, right: 8, left: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="name"
            tick={{ fill: '#71717A', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            interval={0}
            angle={-30}
            textAnchor="end"
            height={52}
          />
          <YAxis
            tick={{ fill: '#71717A', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 9000]}
            tickFormatter={v => `₹${(v / 1000).toFixed(0)}k`}
            width={40}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#FAFAFA', marginBottom: 4 }}
            formatter={(value: number, name: string) => {
              if (name === 'base') return null
              return [`₹${value.toLocaleString('en-IN')} Cr`, 'Amount']
            }}
          />
          {/* Invisible spacer bar */}
          <Bar dataKey="base" stackId="wf" fill="transparent" />
          {/* Colored value bar */}
          <Bar dataKey="value" stackId="wf" radius={[3, 3, 0, 0]}>
            {aumWaterfall.map((entry, idx) => (
              <Cell key={idx} fill={barColor(entry.type)} />
            ))}
            <LabelList
              dataKey="value"
              position="top"
              style={{ fill: '#A1A1AA', fontSize: 10 }}
              formatter={(v: number) => `₹${(v / 1000).toFixed(2).replace(/\.?0+$/, '')}k`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
