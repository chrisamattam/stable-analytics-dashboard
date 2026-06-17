import { X, Github, Mail } from 'lucide-react'

interface Props {
  open: boolean
  onClose: () => void
}

export default function AboutModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-card border border-stroke rounded-xl w-[520px] flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-stroke">
          <h2 className="text-zinc-50 font-semibold text-sm">About this Dashboard</h2>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-5 space-y-4">
          <div className="text-sm text-zinc-400 leading-relaxed space-y-3">
            <p>
              This is a <span className="text-zinc-200 font-medium">PM portfolio exercise</span>.
              It demonstrates product metric thinking about Stable Money — an Indian fixed-income
              fintech that lets retail investors book FDs across multiple bank partners.
            </p>
            <p>
              <span className="text-warning font-medium">All data is illustrative mock data</span>,
              calibrated against Stable Money's publicly disclosed numbers (AUM milestones,
              registered user count, partner bank names). No real user data is used or implied.
            </p>
            <p>
              The dashboard was built as part of a reconsideration request following a PM intern
              interview, to demonstrate metric-led product thinking — specifically the "Trust
              Compounding" thesis articulated by Stable Money's founders.
            </p>
          </div>

          <div className="border-t border-stroke pt-4">
            <div className="text-xs text-zinc-600 uppercase tracking-widest font-medium mb-3">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts', 'React Router v6'].map(t => (
                <span key={t} className="bg-shell border border-stroke rounded px-2 py-0.5 text-xs text-zinc-400">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-stroke pt-4 flex items-center gap-5">
            <div className="text-sm text-zinc-50 font-medium">Chris Mattam</div>
            <a
              href="mailto:chrisamattam@gmail.com"
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-accent transition-colors"
            >
              <Mail size={13} />
              chrisamattam@gmail.com
            </a>
            <a
              href="https://github.com/chrismattam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-accent transition-colors"
            >
              <Github size={13} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
