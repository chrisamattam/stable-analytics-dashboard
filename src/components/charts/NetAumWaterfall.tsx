import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList,
} from 'recharts'
import { aumWaterfall } from '../../data/aum'
import { COLORS } from '../../lib/colors'
import InfoTag from '../ui/InfoTag'

const tooltipStyle = {
  backgroundColor: '#141416',
  border: '1px solid #26262A',
  borderRadius: 8,
  color: '#E4E4E7',
  fontSize: 12,
}
const tooltipItemStyle = { color: '#A1A1AA' }

function barColor(type: string) {
  if (type === 'total')    return COLORS.accent
  if (type === 'positive') return COLORS.positive
  return COLORS.critical
}

export default function NetAumWaterfall() {
  return (
    <div>
      <div className="flex items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-1">
        Net AUM Waterfall · Jun 2026
        <InfoTag term="Net AUM Growth" />
      </div>
      <div className="text-xs text-zinc-600 mb-4">
        Starting AUM + inflows − exits = Ending AUM <span className="text-zinc-700">· values in ₹ Crore</span>
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
            angle={-20}
            textAnchor="end"
            height={44}
          />
          <YAxis
            tick={{ fill: '#71717A', fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 9000]}
            tickFormatter={(v: number) => `₹${v.toLocaleString('en-IN')} Cr`}
            width={72}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#FAFAFA', marginBottom: 4 }}
            itemStyle={tooltipItemStyle}
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
