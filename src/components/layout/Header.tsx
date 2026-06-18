import { useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'

interface Props {
  onMenuClick?: () => void
}

const routeNames: Record<string, string> = {
  '/aum-growth':        'AUM & Growth Engine',
  '/activation-funnel': 'Activation Funnel',
  '/trust-compounding': 'Trust Compounding',
}

export default function Header({ onMenuClick }: Props) {
  const { pathname } = useLocation()
  const title = routeNames[pathname] ?? 'Dashboard'

  return (
    <header className="h-12 flex items-center justify-between px-4 md:px-6 border-b border-stroke flex-shrink-0">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-zinc-50 text-sm font-medium tracking-wide">{title}</h1>
      </div>
      <div className="flex items-center gap-3 text-xs text-zinc-500">
        <span className="bg-card border border-stroke rounded px-2 py-0.5 font-mono text-zinc-400 hidden sm:inline">
          As of Jun 2026
        </span>
        <span className="text-zinc-600 hidden sm:inline">·</span>
        <span className="hidden sm:inline">Mock data</span>
      </div>
    </header>
  )
}
