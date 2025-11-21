import { FileText, Plus, Download, Calendar, TrendingUp } from 'lucide-react';
import Card from '@/components/card';

export default function ReportPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Reports & Analytics</h1>
          <p className="text-neutral-600 mt-2">Generate and view farm performance reports</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1F8A34] text-white rounded-lg hover:bg-[#1a7029] transition-colors">
          <Plus className="w-5 h-5" />
          <span>Generate Report</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Total Reports</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">86</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#1F8A34]/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#1F8A34]" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">This Month</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">12</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Downloads</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">245</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Download className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Growth</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">+18%</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Crop Performance', description: 'Detailed analysis of crop yields and growth metrics', reports: 24 },
          { title: 'Financial Summary', description: 'Revenue, expenses, and profitability reports', reports: 18 },
          { title: 'Pest & Disease', description: 'Incident tracking and treatment effectiveness', reports: 12 },
          { title: 'Climate Analysis', description: 'Weather patterns and climate impact reports', reports: 15 },
          { title: 'Harvest Reports', description: 'Yield data and harvest efficiency analysis', reports: 20 },
          { title: 'Inventory Status', description: 'Stock levels and usage statistics', reports: 11 },
        ].map((type, index) => (
          <Card.Card key={index} className="border-neutral-200 hover:border-[#1F8A34] transition-colors cursor-pointer">
            <Card.CardHeader>
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#1F8A34]/10 flex items-center justify-center mb-3">
                  <FileText className="w-5 h-5 text-[#1F8A34]" />
                </div>
                <span className="text-xs font-medium text-neutral-600">{type.reports} reports</span>
              </div>
              <Card.CardTitle className="text-lg">{type.title}</Card.CardTitle>
              <Card.CardDescription>{type.description}</Card.CardDescription>
            </Card.CardHeader>
            <Card.CardContent>
              <button className="text-[#1F8A34] hover:text-[#1a7029] text-sm font-medium transition-colors">
                View Reports →
              </button>
            </Card.CardContent>
          </Card.Card>
        ))}
      </div>

      {/* Recent Reports */}
      <Card.Card className="border-neutral-200">
        <Card.CardHeader>
          <Card.CardTitle>Recent Reports</Card.CardTitle>
          <Card.CardDescription>Latest generated reports</Card.CardDescription>
        </Card.CardHeader>
        <Card.CardContent>
          <div className="space-y-4">
            {[
              { title: 'Monthly Harvest Summary - November 2025', type: 'Harvest', date: '2025-11-20', size: '2.4 MB' },
              { title: 'Crop Performance Analysis Q4', type: 'Crop', date: '2025-11-18', size: '1.8 MB' },
              { title: 'Pest Management Report - Week 46', type: 'Pest', date: '2025-11-15', size: '850 KB' },
              { title: 'Climate Impact Assessment', type: 'Climate', date: '2025-11-12', size: '3.2 MB' },
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1F8A34]/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#1F8A34]" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">{report.title}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <p className="text-sm text-neutral-600">{report.type}</p>
                      <p className="text-sm text-neutral-600">{report.date}</p>
                      <p className="text-sm text-neutral-600">{report.size}</p>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-3 py-2 text-[#1F8A34] hover:bg-[#1F8A34]/10 rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">Download</span>
                </button>
              </div>
            ))}
          </div>
        </Card.CardContent>
      </Card.Card>
    </div>
  );
}
