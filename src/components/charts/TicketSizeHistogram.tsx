import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  Cell, ReferenceLine, LabelList,
} from 'recharts'
import { ticketDistribution } from '../../data/aum'
import { COLORS } from '../../lib/colors'

const tooltipStyle = {
  backgroundColor: '#141416',
  border: '1px solid #26262A',
  borderRadius: 8,
  fontSize: 12,
}

// DICGC cap falls at the ₹5L+ bucket — we mark it at the boundary
const DICGC_BUCKET_IDX = 4 // index of ₹5L+ bucket

export default function TicketSizeHistogram() {
  return (
    <div>
      <div className="flex items-start justify-between mb-1">
        <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
          Ticket Size Distribution
        </div>
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="text-xs text-zinc-500">
          Mean <span className="font-mono text-zinc-300 ml-1">₹1.4L</span>
        </div>
        <span className="text-zinc-700">·</span>
        <div className="text-xs text-zinc-500">
          Median <span className="font-mono text-zinc-300 ml-1">₹65K</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={ticketDistribution}
          margin={{ top: 16, right: 16, left: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="label"
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
            domain={[0, 40]}
            width={32}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#FAFAFA', marginBottom: 4 }}
            formatter={(value: number) => [`${value}%`, 'Share of bookings']}
          />
          <Bar dataKey="pct" radius={[3, 3, 0, 0]}>
            {ticketDistribution.map((entry, idx) => (
              <Cell
                key={idx}
                fill={idx === DICGC_BUCKET_IDX ? COLORS.warning : COLORS.accent}
                fillOpacity={idx === DICGC_BUCKET_IDX ? 0.7 : 0.85}
              />
            ))}
            <LabelList
              dataKey="pct"
              position="top"
              style={{ fill: '#71717A', fontSize: 10 }}
              formatter={(v: number) => `${v}%`}
            />
          </Bar>
          {/* DICGC cap reference line between bucket 4 and 5 */}
          <ReferenceLine
            x="₹5L+"
            stroke={COLORS.warning}
            strokeDasharray="4 3"
            strokeWidth={1.5}
            label={{
              value: 'DICGC cap',
              position: 'insideTopLeft',
              fill: COLORS.warning,
              fontSize: 10,
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
