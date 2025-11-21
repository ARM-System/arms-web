import { Package, Plus, TrendingDown, AlertCircle, Archive } from 'lucide-react';
import Card from '@/components/card';

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Inventory Management</h1>
          <p className="text-neutral-600 mt-2">Track supplies, equipment, and produce inventory</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1F8A34] text-white rounded-lg hover:bg-[#1a7029] transition-colors">
          <Plus className="w-5 h-5" />
          <span>Add Item</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Total Items</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">158</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#1F8A34]/10 flex items-center justify-center">
                <Package className="w-6 h-6 text-[#1F8A34]" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Low Stock</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">12</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Out of Stock</p>
                <p className="text-2xl font-bold text-neutral-900 mt-1">5</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
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
                <Archive className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card.CardContent>
        </Card.Card>
      </div>

      {/* Inventory Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card.Card className="border-neutral-200">
          <Card.CardHeader>
            <Card.CardTitle>Fertilizers</Card.CardTitle>
            <Card.CardDescription>Available fertilizer stock</Card.CardDescription>
          </Card.CardHeader>
          <Card.CardContent>
            <div className="space-y-3">
              {[
                { name: 'NPK 15-15-15', quantity: '450 kg', status: 'good' },
                { name: 'Urea 46%', quantity: '200 kg', status: 'low' },
                { name: 'Superphosphate', quantity: '180 kg', status: 'good' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="text-sm text-neutral-700">{item.name}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-neutral-900">{item.quantity}</span>
                    <span className={`w-2 h-2 rounded-full ${
                      item.status === 'good' ? 'bg-[#1F8A34]' : 'bg-amber-500'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardHeader>
            <Card.CardTitle>Pesticides</Card.CardTitle>
            <Card.CardDescription>Available pesticide stock</Card.CardDescription>
          </Card.CardHeader>
          <Card.CardContent>
            <div className="space-y-3">
              {[
                { name: 'Herbicide A', quantity: '85 L', status: 'good' },
                { name: 'Insecticide B', quantity: '45 L', status: 'low' },
                { name: 'Fungicide C', quantity: '120 L', status: 'good' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="text-sm text-neutral-700">{item.name}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-neutral-900">{item.quantity}</span>
                    <span className={`w-2 h-2 rounded-full ${
                      item.status === 'good' ? 'bg-[#1F8A34]' : 'bg-amber-500'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </Card.CardContent>
        </Card.Card>

        <Card.Card className="border-neutral-200">
          <Card.CardHeader>
            <Card.CardTitle>Equipment</Card.CardTitle>
            <Card.CardDescription>Farm equipment inventory</Card.CardDescription>
          </Card.CardHeader>
          <Card.CardContent>
            <div className="space-y-3">
              {[
                { name: 'Tractors', quantity: '8 units', status: 'good' },
                { name: 'Harvesters', quantity: '4 units', status: 'good' },
                { name: 'Sprayers', quantity: '12 units', status: 'good' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <p className="text-sm text-neutral-700">{item.name}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-neutral-900">{item.quantity}</span>
                    <span className={`w-2 h-2 rounded-full bg-[#1F8A34]`} />
                  </div>
                </div>
              ))}
            </div>
          </Card.CardContent>
        </Card.Card>
      </div>
    </div>
  );
}
