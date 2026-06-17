import { Lightbulb, AlertTriangle, TrendingUp } from 'lucide-react'

type Severity = 'insight' | 'warning' | 'positive'

interface Props {
  text: string
  severity?: Severity
}

const config: Record<Severity, { icon: typeof Lightbulb; bg: string; border: string; text: string; iconColor: string }> = {
  insight: {
    icon: Lightbulb,
    bg: 'bg-accent/5',
    border: 'border-accent/20',
    text: 'text-zinc-300',
    iconColor: 'text-accent',
  },
  warning: {
    icon: AlertTriangle,
    bg: 'bg-warning/5',
    border: 'border-warning/20',
    text: 'text-zinc-300',
    iconColor: 'text-warning',
  },
  positive: {
    icon: TrendingUp,
    bg: 'bg-positive/5',
    border: 'border-positive/20',
    text: 'text-zinc-300',
    iconColor: 'text-positive',
  },
}

export default function PmCommentary({ text, severity = 'insight' }: Props) {
  const { icon: Icon, bg, border, text: textColor, iconColor } = config[severity]

  return (
    <div className={`flex items-start gap-3 rounded-lg border px-4 py-3 ${bg} ${border}`}>
      <Icon size={14} className={`${iconColor} flex-shrink-0 mt-0.5`} />
      <p className={`text-xs leading-relaxed ${textColor}`}>{text}</p>
    </div>
  )
}
