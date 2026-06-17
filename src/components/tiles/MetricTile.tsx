import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import InfoTag from '../ui/InfoTag'

interface SparklineProps {
  data: number[]
  color?: string
}

function Sparkline({ data, color = '#3B82F6' }: SparklineProps) {
  if (data.length < 2) return null
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const W = 80
  const H = 24
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * W
      const y = H - ((v - min) / range) * (H - 2) - 1
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')

  return (
    <svg width={W} height={H} className="opacity-70">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

interface MetricTileProps {
  title: string
  value: string
  delta?: string
  deltaPositive?: boolean | null
  sparklineData?: number[]
  sparklineColor?: string
  subtitle?: string
  mono?: boolean
  glossaryTerm?: string
}

export default function MetricTile({
  title,
  value,
  delta,
  deltaPositive,
  sparklineData,
  sparklineColor = '#3B82F6',
  subtitle,
  mono = true,
  glossaryTerm,
}: MetricTileProps) {
  const deltaColor =
    deltaPositive === true
      ? 'text-positive'
      : deltaPositive === false
        ? 'text-critical'
        : 'text-zinc-500'

  const DeltaIcon =
    deltaPositive === true
      ? TrendingUp
      : deltaPositive === false
        ? TrendingDown
        : Minus

  return (
    <div className="bg-card border border-stroke rounded-xl p-5 flex flex-col gap-3">
      <div className="flex items-center">
        <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
          {title}
        </div>
        {glossaryTerm && <InfoTag term={glossaryTerm} />}
      </div>
      <div className={`text-2xl font-semibold leading-none ${mono ? 'font-mono' : ''} text-zinc-50`}>
        {value}
      </div>
      {(delta || subtitle) && (
        <div className="flex items-center gap-1.5">
          {delta && (
            <>
              <DeltaIcon size={12} className={deltaColor} />
              <span className={`text-xs font-medium ${deltaColor}`}>{delta}</span>
            </>
          )}
          {subtitle && (
            <span className="text-xs text-zinc-600">{subtitle}</span>
          )}
        </div>
      )}
      {sparklineData && sparklineData.length > 1 && (
        <div className="mt-auto pt-1">
          <Sparkline data={sparklineData} color={sparklineColor} />
        </div>
      )}
    </div>
  )
}
