import Card from '../ui/Card'
import InfoTag from '../ui/InfoTag'
import AumGlidePathChart from '../charts/AumGlidePathChart'
import NetAumWaterfall from '../charts/NetAumWaterfall'
import TicketSizeHistogram from '../charts/TicketSizeHistogram'
import MetricTile from '../tiles/MetricTile'
import ConcentrationCallout from '../tiles/ConcentrationCallout'
import { aumTimeSeries, currentAum, priorAum } from '../../data/aum'
import { bondSeries } from '../../data/bond'
import { formatMAI, formatPct } from '../../lib/formatters'

// Sparkline series
const maiSeries     = aumTimeSeries.map(d => d.mai)
const bookingSeries = aumTimeSeries.map(d => d.avgFdBookings)
const ticketSeries  = aumTimeSeries.map(d => d.avgTicketSize / 100000) // in L

const maiDelta     = ((currentAum.mai - priorAum.mai) / priorAum.mai * 100).toFixed(1)
const bookingDelta = (currentAum.avgFdBookings - priorAum.avgFdBookings).toFixed(2)
const ticketDelta  = (currentAum.avgTicketSize - priorAum.avgTicketSize) / 1000

const currentBond = bondSeries[bondSeries.length - 1]
const priorBond   = bondSeries[bondSeries.length - 2]
const bondDelta   = currentBond.aumPct - priorBond.aumPct

export default function AumGrowthTab() {
  return (
    <div className="space-y-4">
      {/* Hero: AUM vs Glide Path */}
      <Card>
        <AumGlidePathChart />
      </Card>

      {/* Row 2: Waterfall + 3 metric tiles */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <NetAumWaterfall />
        </Card>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <MetricTile
              title="Monthly Active Investors"
              value={formatMAI(currentAum.mai)}
              delta={`+${maiDelta}% MoM`}
              deltaPositive={true}
              sparklineData={maiSeries}
              sparklineColor="#3B82F6"
              glossaryTerm="MAI (Monthly Active Investors)"
            />
            <MetricTile
              title="Avg FD Bookings / MAI"
              value={currentAum.avgFdBookings.toFixed(2)}
              delta={`+${bookingDelta} MoM`}
              deltaPositive={true}
              sparklineData={bookingSeries}
              sparklineColor="#10B981"
            />
            <MetricTile
              title="Avg Ticket Size"
              value={`₹${(currentAum.avgTicketSize / 100000).toFixed(1)}L`}
              delta={`+₹${ticketDelta.toFixed(0)}K MoM`}
              deltaPositive={true}
              sparklineData={ticketSeries}
              sparklineColor="#F59E0B"
              glossaryTerm="Avg Ticket Size"
            />
          </div>

          {/* Bond AUM tile */}
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-1">
                  Bond AUM % of Total
                  <InfoTag term="Bond AUM % of Total AUM" />
                </div>
                <div className="font-mono text-2xl font-semibold text-zinc-50">
                  {formatPct(currentBond.aumPct)}
                </div>
                <div
                  className={`text-xs mt-1 font-medium ${bondDelta >= 0 ? 'text-positive' : 'text-critical'}`}
                >
                  {bondDelta >= 0 ? '+' : ''}{bondDelta.toFixed(1)}pp MoM
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-zinc-600">FD</div>
                <div className="font-mono text-sm text-zinc-400">{formatPct(100 - currentBond.aumPct)}</div>
                <div className="text-xs text-zinc-600 mt-2">Bonds</div>
                <div className="font-mono text-sm text-zinc-400">{formatPct(currentBond.aumPct)}</div>
              </div>
            </div>

            {/* Mini stacked bar */}
            <div className="mt-4 h-2 rounded-full overflow-hidden flex">
              <div
                className="bg-accent h-full"
                style={{ width: `${100 - currentBond.aumPct}%` }}
              />
              <div
                className="bg-purple-500 h-full"
                style={{ width: `${currentBond.aumPct}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-zinc-600 mt-1">
              <span>FDs</span>
              <span>Bonds</span>
            </div>
          </Card>
        </div>
      </div>

      {/* Row 3: Ticket Histogram */}
      <Card>
        <TicketSizeHistogram />
      </Card>

      {/* Concentration callout */}
      <ConcentrationCallout />
    </div>
  )
}
