import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import DashboardLayout from './components/layout/DashboardLayout'
import AumGrowthTab from './components/tabs/AumGrowthTab'
import ActivationFunnelTab from './components/tabs/ActivationFunnelTab'
import TrustCompoundingTab from './components/tabs/TrustCompoundingTab'

export default function App() {
  return (
    <>
    <Analytics />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/aum-growth" replace />} />
          <Route path="aum-growth" element={<AumGrowthTab />} />
          <Route path="activation-funnel" element={<ActivationFunnelTab />} />
          <Route path="trust-compounding" element={<TrustCompoundingTab />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
