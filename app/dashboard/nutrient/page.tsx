import { Droplet, Plus, Beaker, TrendingUp, Package } from 'lucide-react';
import Card from '@/components/card';

export default function NutrientPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Nutrient Management</h1>
          <p className="text-neutral-600 mt-2">Monitor and optimize soil nutrients and fertilization</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1F8A34] text-white rounded-lg hover:bg-[#1a7029] transition-colors">
          <Plus className="w-5 h-5" />
          <span>Add Application</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Active Programs</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">15</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#1F8A34]/10 flex items-center justify-center">
                <Droplet className="w-6 h-6 text-[#1F8A34]" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Fertilizer Stock</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">850 kg</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Soil Tests</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">42</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Beaker className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Efficiency</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">94%</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>
      </div>

      {/* Nutrient Programs */}
      <Card.Card className="border-neutral-200">
        <Card.CardHeader>
          <Card.CardTitle>Active Nutrient Programs</Card.CardTitle>
          <Card.CardDescription>Current fertilization and nutrient management programs</Card.CardDescription>
        </Card.CardHeader>
        <Card.CardContent>
          <div className="space-y-4">
            {[
              { program: 'NPK Balanced Program', farm: 'Green Valley', crop: 'Tomatoes', type: 'NPK 15-15-15', status: 'ongoing', frequency: 'Weekly' },
              { program: 'Organic Compost', farm: 'Sunrise Acres', crop: 'Corn', type: 'Organic Mix', status: 'scheduled', frequency: 'Bi-weekly' },
              { program: 'Phosphorus Boost', farm: 'Golden Fields', crop: 'Wheat', type: 'Superphosphate', status: 'ongoing', frequency: 'Monthly' },
              { program: 'Nitrogen Enhancement', farm: 'River Bend', crop: 'Rice', type: 'Urea 46%', status: 'completed', frequency: 'As needed' },
            ].map((program, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1F8A34]/10 flex items-center justify-center">
                    <Droplet className="w-6 h-6 text-[#1F8A34]" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">{program.program}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <p className="text-sm text-neutral-600">{program.farm}</p>
                      <p className="text-sm text-neutral-600">Crop: {program.crop}</p>
                      <p className="text-sm text-neutral-600">Type: {program.type}</p>
                      <p className="text-sm text-neutral-600">{program.frequency}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    program.status === 'ongoing' 
                      ? 'bg-[#1F8A34]/10 text-[#1F8A34]' 
                      : program.status === 'scheduled'
                      ? 'bg-blue-500/10 text-blue-600'
                      : 'bg-neutral-500/10 text-neutral-600'
                  }`}>
                    {program.status}
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

      {/* Soil Health Overview */}
      <Card.Card className="border-neutral-200">
        <Card.CardHeader>
          <Card.CardTitle>Soil Health Overview</Card.CardTitle>
          <Card.CardDescription>Recent soil test results</Card.CardDescription>
        </Card.CardHeader>
        <Card.CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { nutrient: 'Nitrogen (N)', level: 'Optimal', value: '45 ppm', status: 'good' },
              { nutrient: 'Phosphorus (P)', level: 'Low', value: '18 ppm', status: 'warning' },
              { nutrient: 'Potassium (K)', level: 'High', value: '180 ppm', status: 'good' },
            ].map((soil, index) => (
              <div key={index} className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-neutral-900">{soil.nutrient}</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    soil.status === 'good' 
                      ? 'bg-[#1F8A34]/10 text-[#1F8A34]' 
                      : 'bg-amber-500/10 text-amber-600'
                  }`}>
                    {soil.level}
                  </span>
                </div>
                <p className="text-2xl font-bold text-neutral-900">{soil.value}</p>
              </div>
            ))}
          </div>
        </Card.CardContent>
      </Card.Card>
    </div>
  );
}
