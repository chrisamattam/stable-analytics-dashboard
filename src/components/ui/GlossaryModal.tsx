import { useState, useMemo } from 'react'
import { X, Search } from 'lucide-react'
import { glossaryTerms } from '../../lib/glossary'

interface Props {
  open: boolean
  onClose: () => void
}

export default function GlossaryModal({ open, onClose }: Props) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return glossaryTerms
    const q = query.toLowerCase()
    return glossaryTerms.filter(
      t =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q),
    )
  }, [query])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-card border border-stroke rounded-xl w-[680px] max-h-[80vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stroke">
          <div>
            <h2 className="text-zinc-50 font-semibold text-sm">Metrics Glossary</h2>
            <p className="text-zinc-500 text-xs mt-0.5">
              {filtered.length} of {glossaryTerms.length} terms
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Search */}
        <div className="px-6 py-3 border-b border-stroke">
          <div className="flex items-center gap-2.5 bg-shell border border-stroke rounded-md px-3 py-2">
            <Search size={13} className="text-zinc-500 flex-shrink-0" />
            <input
              className="bg-transparent text-zinc-50 text-sm outline-none flex-1 placeholder:text-zinc-600"
              placeholder="Search terms or definitions…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              autoFocus
            />
          </div>
        </div>

        {/* Terms list */}
        <div className="overflow-y-auto flex-1 px-6 py-4 space-y-5">
          {filtered.length === 0 && (
            <p className="text-zinc-500 text-sm text-center py-8">No matching terms.</p>
          )}
          {filtered.map(t => (
            <div key={t.term} className="pb-4 border-b border-stroke last:border-0 last:pb-0">
              <div className="text-zinc-50 font-medium text-sm">{t.term}</div>
              <div className="text-zinc-400 text-sm mt-1.5 leading-relaxed">
                {t.definition}
              </div>
              {t.precision && (
                <div className="mt-2 text-zinc-500 text-xs leading-relaxed">
                  <span className="text-zinc-600 font-medium">Precision: </span>
                  {t.precision}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
