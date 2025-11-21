import { Home, Plus, MapPin, User, Calendar } from 'lucide-react';
import Card from '@/components/card';

export default function FarmPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Farm Management</h1>
          <p className="text-neutral-600 mt-2">Manage all your farm properties and information</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1F8A34] text-white rounded-lg hover:bg-[#1a7029] transition-colors">
          <Plus className="w-5 h-5" />
          <span>Add New Farm</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Total Farms</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">12</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#1F8A34]/10 flex items-center justify-center">
                <Home className="w-6 h-6 text-[#1F8A34]" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Total Area</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">245 ha</p>
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
                <p className="text-sm text-neutral-600">Active Managers</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">8</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <User className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>
      </div>

      {/* Farms List */}
      <Card.Card className="border-neutral-200">
        <Card.CardHeader>
          <Card.CardTitle>All Farms</Card.CardTitle>
          <Card.CardDescription>View and manage your farm properties</Card.CardDescription>
        </Card.CardHeader>
        <Card.CardContent>
          <div className="space-y-4">
            {[
              { name: 'Green Valley Farm', location: 'North District', area: '45 ha', manager: 'John Doe', status: 'active' },
              { name: 'Sunrise Acres', location: 'East Region', area: '62 ha', manager: 'Jane Smith', status: 'active' },
              { name: 'Golden Fields', location: 'West Valley', area: '38 ha', manager: 'Mike Johnson', status: 'maintenance' },
              { name: 'River Bend Farm', location: 'South Plains', area: '55 ha', manager: 'Sarah Williams', status: 'active' },
            ].map((farm, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1F8A34]/10 flex items-center justify-center">
                    <Home className="w-6 h-6 text-[#1F8A34]" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">{farm.name}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <p className="text-sm text-neutral-600 flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {farm.location}
                      </p>
                      <p className="text-sm text-neutral-600">{farm.area}</p>
                      <p className="text-sm text-neutral-600 flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {farm.manager}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    farm.status === 'active' 
                      ? 'bg-[#1F8A34]/10 text-[#1F8A34]' 
                      : 'bg-amber-500/10 text-amber-600'
                  }`}>
                    {farm.status}
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
