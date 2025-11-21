import { Bug, Plus, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import Card from '@/components/card';

export default function PestPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Pest Management</h1>
          <p className="text-neutral-600 mt-2">Monitor and control pest incidents across your farms</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1F8A34] text-white rounded-lg hover:bg-[#1a7029] transition-colors">
          <Plus className="w-5 h-5" />
          <span>Report Pest</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Active Reports</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">7</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Bug className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Critical</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">3</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Under Control</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">4</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Resolved</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">28</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#1F8A34]/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#1F8A34]" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>
      </div>

      {/* Pest Reports */}
      <Card.Card className="border-neutral-200">
        <Card.CardHeader>
          <Card.CardTitle>Recent Pest Reports</Card.CardTitle>
          <Card.CardDescription>Track and manage pest incidents</Card.CardDescription>
        </Card.CardHeader>
        <Card.CardContent>
          <div className="space-y-4">
            {[
              { pest: 'Aphids Infestation', farm: 'Green Valley', crop: 'Tomatoes', severity: 'critical', status: 'active', date: '2025-11-18' },
              { pest: 'Cutworms', farm: 'Sunrise Acres', crop: 'Corn', severity: 'moderate', status: 'treating', date: '2025-11-17' },
              { pest: 'Leaf Miners', farm: 'Golden Fields', crop: 'Wheat', severity: 'low', status: 'monitoring', date: '2025-11-15' },
              { pest: 'Whiteflies', farm: 'River Bend', crop: 'Rice', severity: 'critical', status: 'active', date: '2025-11-14' },
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    report.severity === 'critical' 
                      ? 'bg-red-500/10' 
                      : report.severity === 'moderate'
                      ? 'bg-amber-500/10'
                      : 'bg-blue-500/10'
                  }`}>
                    <Bug className={`w-6 h-6 ${
                      report.severity === 'critical' 
                        ? 'text-red-600' 
                        : report.severity === 'moderate'
                        ? 'text-amber-600'
                        : 'text-blue-600'
                    }`} />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">{report.pest}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <p className="text-sm text-neutral-600">{report.farm}</p>
                      <p className="text-sm text-neutral-600">Crop: {report.crop}</p>
                      <p className="text-sm text-neutral-600">{report.date}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      report.severity === 'critical' 
                        ? 'bg-red-500/10 text-red-600' 
                        : report.severity === 'moderate'
                        ? 'bg-amber-500/10 text-amber-600'
                        : 'bg-blue-500/10 text-blue-600'
                    }`}>
                      {report.severity}
                    </span>
                    <p className="text-xs text-neutral-600 mt-1">{report.status}</p>
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
