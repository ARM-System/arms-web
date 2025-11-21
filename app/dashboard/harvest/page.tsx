import { Wheat, Plus, Calendar, TrendingUp, Package, Scale } from 'lucide-react';
import Card from '@/components/card';

export default function HarvestPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Harvest Management</h1>
          <p className="text-neutral-600 mt-2">Track harvest schedules and yield data</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1F8A34] text-white rounded-lg hover:bg-[#1a7029] transition-colors">
          <Plus className="w-5 h-5" />
          <span>Record Harvest</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Total Yield</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">1,245 tons</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#1F8A34]/10 flex items-center justify-center">
                <Wheat className="w-6 h-6 text-[#1F8A34]" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Upcoming Harvests</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">8</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Avg Yield/ha</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">6.8 tons</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">In Storage</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">320 tons</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>
      </div>

      {/* Upcoming Harvests */}
      <Card.Card className="border-neutral-200">
        <Card.CardHeader>
          <Card.CardTitle>Upcoming Harvests</Card.CardTitle>
          <Card.CardDescription>Scheduled harvest operations</Card.CardDescription>
        </Card.CardHeader>
        <Card.CardContent>
          <div className="space-y-4">
            {[
              { crop: 'Wheat - Winter', farm: 'Golden Fields', area: '8 ha', scheduled: '2025-11-25', estimated: '54 tons', status: 'ready' },
              { crop: 'Tomatoes - Batch A', farm: 'Green Valley', area: '5 ha', scheduled: '2025-11-28', estimated: '42 tons', status: 'upcoming' },
              { crop: 'Rice - Batch C', farm: 'River Bend', area: '10 ha', scheduled: '2025-12-02', estimated: '68 tons', status: 'upcoming' },
              { crop: 'Corn - Season 2', farm: 'Sunrise Acres', area: '12 ha', scheduled: '2025-12-05', estimated: '96 tons', status: 'monitoring' },
            ].map((harvest, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1F8A34]/10 flex items-center justify-center">
                    <Wheat className="w-6 h-6 text-[#1F8A34]" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">{harvest.crop}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <p className="text-sm text-neutral-600">{harvest.farm}</p>
                      <p className="text-sm text-neutral-600">Area: {harvest.area}</p>
                      <p className="text-sm text-neutral-600 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {harvest.scheduled}
                      </p>
                      <p className="text-sm text-neutral-600 flex items-center gap-1">
                        <Scale className="w-4 h-4" />
                        Est: {harvest.estimated}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    harvest.status === 'ready' 
                      ? 'bg-[#1F8A34]/10 text-[#1F8A34]' 
                      : harvest.status === 'upcoming'
                      ? 'bg-amber-500/10 text-amber-600'
                      : 'bg-blue-500/10 text-blue-600'
                  }`}>
                    {harvest.status}
                  </span>
                  <button className="text-neutral-600 hover:text-[#1F8A34] transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card.CardContent>
      </Card.Card>
    </div>
  );
}
