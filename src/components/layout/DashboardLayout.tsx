import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-shell overflow-hidden">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-col flex-1 min-w-0">
        <Header onMenuClick={() => setSidebarOpen(v => !v)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-5">
          <Outlet />
        </main>
        <footer className="flex-shrink-0 px-4 md:px-6 py-3 border-t border-stroke flex items-center justify-between">
          <span className="text-xs text-zinc-600 hidden sm:block">
            PM portfolio exercise · mock data illustrative, not real Stable Money data
          </span>
          <span className="text-xs text-zinc-600">
            Built by <span className="text-zinc-500">Chris Mattam</span>
          </span>
        </footer>
      </div>
    </div>
  )
}
