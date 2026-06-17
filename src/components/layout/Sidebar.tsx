import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BarChart2, Activity, TrendingUp, BookOpen, Info } from 'lucide-react'
import GlossaryModal from '../ui/GlossaryModal'
import AboutModal from '../ui/AboutModal'

const navItems = [
  { to: '/aum-growth',        label: 'AUM & Growth',       icon: BarChart2   },
  { to: '/activation-funnel', label: 'Activation Funnel',  icon: Activity    },
  { to: '/trust-compounding', label: 'Trust Compounding',  icon: TrendingUp  },
]

export default function Sidebar() {
  const [glossaryOpen, setGlossaryOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <>
      <aside className="w-[220px] flex-shrink-0 bg-card border-r border-stroke flex flex-col">
        <div className="px-5 py-5 border-b border-stroke">
          <div className="text-zinc-50 font-semibold text-base tracking-tight">Stable Money</div>
          <div className="text-zinc-600 text-xs mt-0.5 font-medium uppercase tracking-widest">PM Dashboard</div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to}>
              {({ isActive }) => (
                <span
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-150 ${
                    isActive
                      ? 'bg-accent/10 text-accent font-medium'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                  }`}
                >
                  <Icon size={15} strokeWidth={isActive ? 2 : 1.5} />
                  {label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-stroke space-y-0.5">
          <button
            onClick={() => setGlossaryOpen(true)}
            className="flex items-center gap-3 px-3 py-2 w-full rounded-md text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors"
          >
            <BookOpen size={15} />
            Glossary
          </button>
          <button
            onClick={() => setAboutOpen(true)}
            className="flex items-center gap-3 px-3 py-2 w-full rounded-md text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors"
          >
            <Info size={15} />
            About
          </button>
        </div>
      </aside>

      <GlossaryModal open={glossaryOpen} onClose={() => setGlossaryOpen(false)} />
      <AboutModal    open={aboutOpen}    onClose={() => setAboutOpen(false)}    />
    </>
  )
}
