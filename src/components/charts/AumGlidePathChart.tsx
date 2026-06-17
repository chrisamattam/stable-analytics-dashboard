import {
  ComposedChart, Area, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, Legend,
} from 'recharts'
import { aumTimeSeries, currentAum } from '../../data/aum'
import { COLORS } from '../../lib/colors'

const tooltipStyle = {
  backgroundColor: '#141416',
  border: '1px solid #26262A',
  borderRadius: 8,
  fontSize: 12,
}
const tooltipItemStyle = { color: '#A1A1AA' }

function formatY(v: number) {
  return `₹${(v / 1000).toFixed(0)}k`
}

export default function AumGlidePathChart() {
  const latestGlide = aumTimeSeries[aumTimeSeries.length - 1].glidePath
  const delta = latestGlide !== null ? currentAum.aum - latestGlide : 0
  const ahead = delta >= 0

  return (
    <div>
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-1">
            AUM vs Glide Path
          </div>
          <div className="font-mono text-3xl font-semibold text-zinc-50">
            ₹{currentAum.aum.toLocaleString('en-IN')} Cr
          </div>
          <div className="text-zinc-500 text-xs mt-1">Total AUM · Jun 2026</div>
        </div>
        {latestGlide !== null && (
          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
              ahead
                ? 'bg-positive/10 text-positive border border-positive/20'
                : 'bg-warning/10 text-warning border border-warning/20'
            }`}
          >
            <span>
              {ahead ? '+' : '−'}₹{Math.abs(delta).toLocaleString('en-IN')} Cr
            </span>
            <span className="font-normal opacity-70">vs glide path</span>
          </div>
        )}
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart data={aumTimeSeries} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="aumFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor={COLORS.accent} stopOpacity={0.22} />
              <stop offset="95%" stopColor={COLORS.accent} stopOpacity={0}    />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#26262A" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: '#71717A', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            dy={6}
          />
          <YAxis
            tickFormatter={formatY}
            tick={{ fill: '#71717A', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={[2500, 9000]}
            width={44}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            labelStyle={{ color: '#FAFAFA', marginBottom: 4 }}
            itemStyle={tooltipItemStyle}
            formatter={(value: number, name: string) => [
              `₹${value.toLocaleString('en-IN')} Cr`,
              name === 'aum' ? 'Actual AUM' : 'Glide Path Target',
            ]}
          />
          <Legend
            wrapperStyle={{ fontSize: 11, paddingTop: 12 }}
            formatter={(value: string) =>
              value === 'aum' ? 'Actual AUM' : 'Glide Path'
            }
          />
          <Area
            type="monotone"
            dataKey="aum"
            stroke={COLORS.accent}
            strokeWidth={2}
            fill="url(#aumFill)"
            dot={false}
            activeDot={{ r: 4, fill: COLORS.accent }}
          />
          <Line
            type="monotone"
            dataKey="glidePath"
            stroke={COLORS.warning}
            strokeWidth={1.5}
            strokeDasharray="5 4"
            dot={false}
            activeDot={{ r: 3, fill: COLORS.warning }}
            connectNulls={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
