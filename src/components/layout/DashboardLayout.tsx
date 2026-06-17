import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-shell overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 space-y-5">
          <Outlet />
        </main>
        <footer className="flex-shrink-0 px-6 py-3 border-t border-stroke flex items-center justify-between">
          <span className="text-xs text-zinc-600">
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
