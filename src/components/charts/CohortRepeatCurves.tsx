import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, Legend,
} from 'recharts'
import { cohortRepeatCurves } from '../../data/cohorts'
import { COLORS } from '../../lib/colors'

const tooltipStyle = {
  backgroundColor: '#141416',
  border: '1px solid #26262A',
  borderRadius: 8,
  fontSize: 12,
}

export default function CohortRepeatCurves() {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-1">
        Cohort Repeat-Booking Curves
      </div>
      <div className="text-xs text-zinc-600 mb-4">
        % users with ≥2 bookings · by days since first deposit
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={cohortRepeatCurves} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#26262A" vertical={false} />
          <XAxis
            dataKey="days"
            tick={{ fill: '#71717A', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={v => `Day ${v}`}
            dy={6}
          />
          <YAxis
            tickFormatter={v => `${(v * 100).toFixed(0)}%`}
            tick={{ fill: '#71717A', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 0.5]}
            width={36}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#FAFAFA', marginBottom: 4 }}
            labelFormatter={(label: number) => `Day ${label}`}
            formatter={(value: unknown, name: string) => {
              if (value == null || typeof value !== 'number') return ['—', name]
              return [`${(value * 100).toFixed(0)}%`, name]
            }}
          />
          <Legend
            wrapperStyle={{ fontSize: 11, paddingTop: 12 }}
          />
          <Line
            type="monotone"
            dataKey="jan2025"
            name="Jan 2025"
            stroke={COLORS.chart[0]}
            strokeWidth={2}
            dot={{ r: 3, fill: COLORS.chart[0] }}
            activeDot={{ r: 5 }}
            connectNulls={false}
          />
          <Line
            type="monotone"
            dataKey="jul2025"
            name="Jul 2025"
            stroke={COLORS.chart[1]}
            strokeWidth={2}
            dot={{ r: 3, fill: COLORS.chart[1] }}
            activeDot={{ r: 5 }}
            connectNulls={false}
          />
          {/* Jan 2026 — actual points (solid) */}
          <Line
            type="monotone"
            dataKey="jan2026"
            name="Jan 2026"
            stroke={COLORS.chart[2]}
            strokeWidth={2}
            dot={{ r: 3, fill: COLORS.chart[2] }}
            activeDot={{ r: 5 }}
            connectNulls={false}
          />
          {/* Jan 2026 — projected Day 90→180 (dashed) */}
          <Line
            type="monotone"
            dataKey="jan2026Proj"
            name="Jan 2026 (proj.)"
            stroke={COLORS.chart[2]}
            strokeWidth={2}
            strokeDasharray="5 4"
            dot={{ r: 3, fill: COLORS.chart[2], strokeDasharray: '0' }}
            activeDot={{ r: 5 }}
            connectNulls={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
