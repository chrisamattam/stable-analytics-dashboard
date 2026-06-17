interface Props {
  level: 'P0' | 'P1' | 'P2'
}

const styles: Record<Props['level'], string> = {
  P0: 'bg-critical/10 text-critical border-critical/20',
  P1: 'bg-warning/10 text-warning border-warning/20',
  P2: 'bg-zinc-700/30 text-zinc-400 border-zinc-700/40',
}

export default function PriorityBadge({ level }: Props) {
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold border ${styles[level]}`}
    >
      {level}
    </span>
  )
}
