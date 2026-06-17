interface Option {
  label: string
  value: string
}

interface PeriodToggleProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
}

export default function PeriodToggle({ options, value, onChange }: PeriodToggleProps) {
  return (
    <div className="flex items-center bg-shell border border-stroke rounded-md p-0.5 gap-0.5">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-3 py-1 rounded text-xs font-medium transition-all ${
            value === opt.value
              ? 'bg-card text-zinc-50 shadow-sm'
              : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
