import { Sprout, Plus, Calendar, MapPin, TrendingUp } from 'lucide-react';
import Card from '@/components/card';

export default function CropBatchPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Crop Batch Management</h1>
          <p className="text-neutral-600 mt-2">Track and manage your crop batches across all farms</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1F8A34] text-white rounded-lg hover:bg-[#1a7029] transition-colors">
          <Plus className="w-5 h-5" />
          <span>Add New Batch</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Active Batches</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">48</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#1F8A34]/10 flex items-center justify-center">
                <Sprout className="w-6 h-6 text-[#1F8A34]" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Planted Area</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">180 ha</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Growth Rate</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">92%</p>
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
                <p className="text-sm text-neutral-600">Ready to Harvest</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">12</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>
      </div>

      {/* Crop Batches List */}
      <Card.Card className="border-neutral-200">
        <Card.CardHeader>
          <Card.CardTitle>Active Crop Batches</Card.CardTitle>
          <Card.CardDescription>Monitor your current crop cultivation</Card.CardDescription>
        </Card.CardHeader>
        <Card.CardContent>
          <div className="space-y-4">
            {[
              { crop: 'Tomatoes - Batch A', farm: 'Green Valley', planted: '2025-10-15', area: '5 ha', stage: 'Flowering', health: 'excellent' },
              { crop: 'Corn - Season 2', farm: 'Sunrise Acres', planted: '2025-09-20', area: '12 ha', stage: 'Vegetative', health: 'good' },
              { crop: 'Wheat - Winter', farm: 'Golden Fields', planted: '2025-08-10', area: '8 ha', stage: 'Mature', health: 'excellent' },
              { crop: 'Rice - Batch C', farm: 'River Bend', planted: '2025-10-01', area: '10 ha', stage: 'Tillering', health: 'good' },
            ].map((batch, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1F8A34]/10 flex items-center justify-center">
                    <Sprout className="w-6 h-6 text-[#1F8A34]" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">{batch.crop}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <p className="text-sm text-neutral-600 flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {batch.farm}
                      </p>
                      <p className="text-sm text-neutral-600 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {batch.planted}
                      </p>
                      <p className="text-sm text-neutral-600">{batch.area}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-neutral-900">{batch.stage}</p>
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                      batch.health === 'excellent' 
                        ? 'bg-[#1F8A34]/10 text-[#1F8A34]' 
                        : 'bg-blue-500/10 text-blue-600'
                    }`}>
                      {batch.health}
                    </span>
                  </div>
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
