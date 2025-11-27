'use client';

import { useState } from 'react';
import { 
    BarChart3, 
    TrendingUp, 
    TrendingDown, 
    DollarSign, 
    Droplet, 
    Sprout, 
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    Filter
} from 'lucide-react';
import Card from '@/components/card';

export default function InsightPage() {
    const [selectedCrop, setSelectedCrop] = useState('Tomato');
    const [selectedCycle, setSelectedCycle] = useState('Cycle 1 (Spring 2024)');

    // Mock Data - In a real app, this would be fetched based on selection
    const metrics = {
        yield: { value: '12.5 tons', change: '+8%', trend: 'up' },
        revenue: { value: '$24,500', change: '+12%', trend: 'up' },
        efficiency: { value: '94%', change: '+2%', trend: 'up' },
        roi: { value: '185%', change: '-5%', trend: 'down' }
    };

    const resourceUsage = [
        { label: 'Water Usage', value: 75, total: '100%', color: 'bg-blue-500', text: 'Optimal' },
        { label: 'Fertilizer', value: 60, total: '100%', color: 'bg-amber-500', text: 'Under Budget' },
        { label: 'Labor Hours', value: 90, total: '100%', color: 'bg-purple-500', text: 'High Usage' },
        { label: 'Pest Control', value: 40, total: '100%', color: 'bg-red-500', text: 'Low Risk' }
    ];

    const cycleComparison = [
        { metric: 'Avg. Yield / Hectare', current: '4.2 tons', previous: '3.8 tons', status: 'Improved' },
        { metric: 'Growth Duration', current: '85 days', previous: '90 days', status: 'Faster' },
        { metric: 'Input Cost / Ton', current: '$180', previous: '$195', status: 'Reduced' },
        { metric: 'Market Price', current: '$2.10/kg', previous: '$1.95/kg', status: 'Higher' }
    ];

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            {/* Header & Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Farm Insights</h1>
                    <p className="text-neutral-600 mt-2">Comprehensive analysis per crop cycle.</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative">
                        <label className="absolute -top-2.5 left-3 bg-neutral-50 px-1 text-xs font-medium text-neutral-500">Crop</label>
                        <select 
                            value={selectedCrop}
                            onChange={(e) => setSelectedCrop(e.target.value)}
                            className="w-full sm:w-48 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A34]/20 focus:border-[#1F8A34] appearance-none cursor-pointer"
                        >
                            <option>Tomato</option>
                            <option>Wheat</option>
                            <option>Corn</option>
                            <option>Potato</option>
                        </select>
                        <Sprout className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                    </div>

                    <div className="relative">
                        <label className="absolute -top-2.5 left-3 bg-neutral-50 px-1 text-xs font-medium text-neutral-500">Cycle</label>
                        <select 
                            value={selectedCycle}
                            onChange={(e) => setSelectedCycle(e.target.value)}
                            className="w-full sm:w-64 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F8A34]/20 focus:border-[#1F8A34] appearance-none cursor-pointer"
                        >
                            <option>Cycle 1 (Spring 2024)</option>
                            <option>Cycle 2 (Summer 2024)</option>
                            <option>Cycle 3 (Fall 2023)</option>
                        </select>
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card.Card className="hover:shadow-md transition-shadow">
                    <Card.CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-neutral-500">Total Yield</p>
                                <h3 className="text-2xl font-bold text-neutral-900 mt-2">{metrics.yield.value}</h3>
                            </div>
                            <div className="p-2 bg-emerald-50 rounded-lg">
                                <Sprout className="w-5 h-5 text-emerald-600" />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <span className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                <TrendingUp className="w-3 h-3 mr-1" /> {metrics.yield.change}
                            </span>
                            <span className="text-xs text-neutral-400">vs last cycle</span>
                        </div>
                    </Card.CardContent>
                </Card.Card>

                <Card.Card className="hover:shadow-md transition-shadow">
                    <Card.CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-neutral-500">Revenue</p>
                                <h3 className="text-2xl font-bold text-neutral-900 mt-2">{metrics.revenue.value}</h3>
                            </div>
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <DollarSign className="w-5 h-5 text-blue-600" />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <span className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                <TrendingUp className="w-3 h-3 mr-1" /> {metrics.revenue.change}
                            </span>
                            <span className="text-xs text-neutral-400">vs last cycle</span>
                        </div>
                    </Card.CardContent>
                </Card.Card>

                <Card.Card className="hover:shadow-md transition-shadow">
                    <Card.CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-neutral-500">Resource Efficiency</p>
                                <h3 className="text-2xl font-bold text-neutral-900 mt-2">{metrics.efficiency.value}</h3>
                            </div>
                            <div className="p-2 bg-purple-50 rounded-lg">
                                <Droplet className="w-5 h-5 text-purple-600" />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <span className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                <TrendingUp className="w-3 h-3 mr-1" /> {metrics.efficiency.change}
                            </span>
                            <span className="text-xs text-neutral-400">vs last cycle</span>
                        </div>
                    </Card.CardContent>
                </Card.Card>

                <Card.Card className="hover:shadow-md transition-shadow">
                    <Card.CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-neutral-500">ROI</p>
                                <h3 className="text-2xl font-bold text-neutral-900 mt-2">{metrics.roi.value}</h3>
                            </div>
                            <div className="p-2 bg-amber-50 rounded-lg">
                                <BarChart3 className="w-5 h-5 text-amber-600" />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <span className="flex items-center text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                                <TrendingDown className="w-3 h-3 mr-1" /> {metrics.roi.change}
                            </span>
                            <span className="text-xs text-neutral-400">vs last cycle</span>
                        </div>
                    </Card.CardContent>
                </Card.Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Resource Usage Analysis */}
                <Card.Card className="lg:col-span-2">
                    <Card.CardHeader>
                        <Card.CardTitle>Resource Usage Analysis</Card.CardTitle>
                        <Card.CardDescription>Input consumption vs planned budget for {selectedCrop}</Card.CardDescription>
                    </Card.CardHeader>
                    <Card.CardContent>
                        <div className="space-y-6">
                            {resourceUsage.map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-end mb-2">
                                        <div>
                                            <span className="font-medium text-neutral-900">{item.label}</span>
                                            <span className="text-xs text-neutral-500 ml-2">({item.text})</span>
                                        </div>
                                        <span className="text-sm font-medium text-neutral-700">{item.value}%</span>
                                    </div>
                                    <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full rounded-full ${item.color} transition-all duration-500`} 
                                            style={{ width: `${item.value}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-neutral-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="text-center">
                                <p className="text-xs text-neutral-500 uppercase tracking-wide">Total Cost</p>
                                <p className="text-lg font-bold text-neutral-900 mt-1">$12,450</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-neutral-500 uppercase tracking-wide">Cost / Unit</p>
                                <p className="text-lg font-bold text-neutral-900 mt-1">$0.98</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-neutral-500 uppercase tracking-wide">Waste</p>
                                <p className="text-lg font-bold text-red-600 mt-1">2.4%</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-neutral-500 uppercase tracking-wide">Efficiency</p>
                                <p className="text-lg font-bold text-emerald-600 mt-1">A+</p>
                            </div>
                        </div>
                    </Card.CardContent>
                </Card.Card>

                {/* Cycle Comparison */}
                <Card.Card>
                    <Card.CardHeader>
                        <Card.CardTitle>Cycle Comparison</Card.CardTitle>
                        <Card.CardDescription>Current vs Previous Cycle</Card.CardDescription>
                    </Card.CardHeader>
                    <Card.CardContent>
                        <div className="space-y-6">
                            {cycleComparison.map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 border border-neutral-100">
                                    <div className="flex-1">
                                        <p className="text-xs text-neutral-500 mb-1">{item.metric}</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-lg font-bold text-neutral-900">{item.current}</span>
                                            <span className="text-xs text-neutral-400 line-through">{item.previous}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                                            item.status === 'Improved' || item.status === 'Higher' || item.status === 'Faster' || item.status === 'Reduced'
                                            ? 'bg-emerald-100 text-emerald-700' 
                                            : 'bg-amber-100 text-amber-700'
                                        }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-2.5 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors">
                            View Full Report
                        </button>
                    </Card.CardContent>
                </Card.Card>
            </div>
        </div>
    );
}
