import { useState } from 'react'
import { Info } from 'lucide-react'
import { glossaryTerms } from '../../lib/glossary'

interface Props {
  term: string
}

export default function InfoTag({ term }: Props) {
  const [rect, setRect] = useState<DOMRect | null>(null)
  const entry = glossaryTerms.find(t => t.term === term)
  if (!entry) return null

  const tooltipLeft = rect
    ? Math.min(Math.max(rect.left + rect.width / 2 - 128, 8), window.innerWidth - 272)
    : 0
  const showBelow = rect ? rect.top < 220 : false

  return (
    <span
      className="inline-flex items-center cursor-help ml-1 flex-shrink-0"
      onMouseEnter={e => setRect(e.currentTarget.getBoundingClientRect())}
      onMouseLeave={() => setRect(null)}
    >
      <Info
        size={11}
        className={`transition-colors ${rect ? 'text-accent' : 'text-zinc-600'}`}
      />
      {rect && (
        <div
          className="fixed z-[999] w-64 pointer-events-none"
          style={{
            left: tooltipLeft,
            top: showBelow ? rect.bottom + 8 : rect.top - 8,
            transform: showBelow ? 'none' : 'translateY(-100%)',
          }}
        >
          <div className="bg-[#1C1C1F] border border-[#26262A] rounded-lg px-3 py-3 shadow-2xl">
            <div className="text-zinc-100 text-xs font-semibold mb-1.5">{entry.term}</div>
            <div className="text-zinc-400 text-[11px] leading-relaxed">{entry.definition}</div>
            {entry.precision && (
              <div className="text-zinc-500 text-[10px] mt-2 pt-2 border-t border-[#26262A] leading-relaxed">
                <span className="font-medium text-zinc-600">Precision: </span>
                {entry.precision}
              </div>
            )}
          </div>
        </div>
      )}
    </span>
  )
}
