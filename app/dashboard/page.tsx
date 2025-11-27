'use client';

import { LayoutDashboard, Home, Sprout, Bug, TrendingUp, Eye } from 'lucide-react';
import Card from '@/components/card';
import { SetupStatus } from '@/components/setup-status';
import { getUser } from '@/actions/UserService';
import { redirect } from 'next/navigation';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default async function Dashboard() {

    // let user;

    // try {
    //     // Call the server function to get the user
    //     user = await getUser();
    // } catch (err) {
    //     // If no token or invalid, redirect to login
    //     console.log(err);
    //     redirect("/login");
    // }
    
    const stats = [
        { 
            label: 'Total Farms', 
            value: '12', 
            icon: Home, 
            color: 'from-emerald-500 to-teal-600',
            bgColor: 'bg-emerald-50',
            change: '+2 this month'
        },
        { 
            label: 'Active Crops', 
            value: '48', 
            icon: Sprout, 
            color: 'from-green-500 to-emerald-600',
            bgColor: 'bg-green-50',
            change: '+5 recently'
        },
        { 
            label: 'Pest Reports', 
            value: '7', 
            icon: Bug, 
            color: 'from-amber-500 to-orange-600',
            bgColor: 'bg-amber-50',
            change: '-3 from last week'
        },
        { 
            label: 'Farm Health', 
            value: 'Good', 
            icon: TrendingUp, 
            color: 'from-blue-500 to-cyan-600',
            bgColor: 'bg-blue-50',
            change: '↑ Improving'
        },
    ];

    // Analytics data
    const activityTrendData = [
        { day: 'Mon', activities: 12 },
        { day: 'Tue', activities: 15 },
        { day: 'Wed', activities: 8 },
        { day: 'Thu', activities: 18 },
        { day: 'Fri', activities: 14 },
        { day: 'Sat', activities: 10 },
        { day: 'Sun', activities: 9 },
    ];

    const cropDistributionData = [
        { crop: 'Maize', count: 18 },
        { crop: 'Wheat', count: 12 },
        { crop: 'Rice', count: 10 },
        { crop: 'Barley', count: 8 },
    ];

    const pestReportsData = [
        { week: 'Week 1', reports: 5 },
        { week: 'Week 2', reports: 8 },
        { week: 'Week 3', reports: 6 },
        { week: 'Week 4', reports: 7 },
    ];

    const activities = [
        { 
            activity: 'New crop batch added', 
            date: '2025-11-27', 
            time: '21:30', 
            doneBy: 'John Farmer', 
            notes: 'Added 200 maize seedlings to Farm A',
            color: 'bg-[#1F8A34]' 
        },
        { 
            activity: 'Pest alert reported', 
            date: '2025-11-27', 
            time: '18:45', 
            doneBy: 'Sarah Johnson', 
            notes: 'Aphids detected in wheat field B2',
            color: 'bg-amber-500' 
        },
        { 
            activity: 'Climate monitoring updated', 
            date: '2025-11-26', 
            time: '14:20', 
            doneBy: 'System Auto', 
            notes: 'Temperature and humidity sensors calibrated',
            color: 'bg-blue-500' 
        },
        { 
            activity: 'Harvest completed', 
            date: '2025-11-25', 
            time: '09:15', 
            doneBy: 'Mike Davis', 
            notes: 'Successfully harvested 2 tons of rice',
            color: 'bg-[#1F8A34]' 
        },
        { 
            activity: 'Irrigation system activated', 
            date: '2025-11-25', 
            time: '06:00', 
            doneBy: 'System Auto', 
            notes: 'Scheduled watering for sectors 3-5',
            color: 'bg-blue-500' 
        },
    ];

    return (
        <div className="space-y-8">
            {/* Setup Status Warning */}
            <SetupStatus />

            {/* Header with gradient */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold bg-linear-to-r from-neutral-900 via-[#1F8A34] to-emerald-700 bg-clip-text text-transparent mb-3">
                    Dashboard
                </h1>
                <p className="text-lg text-neutral-600">Welcome back! Here's what's happening with your farm today.</p>
            </div>

            {/* Stats Grid with modern cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Card.Card 
                            key={index}
                            className="border-neutral-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                        >
                            {/* Gradient accent bar */}
                            <div className={`h-1 bg-linear-to-r ${stat.color}`}></div>
                            
                            <Card.CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <p className="text-sm font-medium text-neutral-600 mb-1">{stat.label}</p>
                                        <p className="text-3xl font-bold text-neutral-900">{stat.value}</p>
                                        <p className="text-xs text-neutral-500 mt-1">{stat.change}</p>
                                    </div>
                                    <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                </div>
                               
                            </Card.CardContent>
                        </Card.Card>
                    );
                })}
            </div>

            {/* Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Activity Trends Chart */}
                <Card.Card className="border-neutral-200 shadow-lg">
                    <Card.CardHeader className="border-b border-neutral-100">
                        <Card.CardTitle className="text-xl">Activity Trends (Weekly)</Card.CardTitle>
                        <Card.CardDescription>Farm activities over the past week</Card.CardDescription>
                    </Card.CardHeader>
                    <Card.CardContent className="p-6">
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={activityTrendData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="day" stroke="#6b7280" style={{ fontSize: '12px' }} />
                                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                                <Tooltip 
                                    contentStyle={{ 
                                        backgroundColor: '#fff', 
                                        border: '1px solid #e5e7eb', 
                                        borderRadius: '8px',
                                        fontSize: '12px'
                                    }} 
                                />
                                <Line 
                                    type="monotone" 
                                    dataKey="activities" 
                                    stroke="#1F8A34" 
                                    strokeWidth={2}
                                    dot={{ fill: '#1F8A34', r: 4 }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card.CardContent>
                </Card.Card>

                {/* Crop Distribution Chart */}
                <Card.Card className="border-neutral-200 shadow-lg">
                    <Card.CardHeader className="border-b border-neutral-100">
                        <Card.CardTitle className="text-xl">Crop Distribution</Card.CardTitle>
                        <Card.CardDescription>Active crops by type</Card.CardDescription>
                    </Card.CardHeader>
                    <Card.CardContent className="p-6">
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={cropDistributionData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="crop" stroke="#6b7280" style={{ fontSize: '12px' }} />
                                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                                <Tooltip 
                                    contentStyle={{ 
                                        backgroundColor: '#fff', 
                                        border: '1px solid #e5e7eb', 
                                        borderRadius: '8px',
                                        fontSize: '12px'
                                    }} 
                                />
                                <Bar 
                                    dataKey="count" 
                                    fill="#1F8A34" 
                                    radius={[8, 8, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card.CardContent>
                </Card.Card>

                {/* Pest Reports Timeline */}
                <Card.Card className="border-neutral-200 shadow-lg lg:col-span-2">
                    <Card.CardHeader className="border-b border-neutral-100">
                        <Card.CardTitle className="text-xl">Pest Reports Timeline</Card.CardTitle>
                        <Card.CardDescription>Pest reports over the past month</Card.CardDescription>
                    </Card.CardHeader>
                    <Card.CardContent className="p-6">
                        <ResponsiveContainer width="100%" height={250}>
                            <AreaChart data={pestReportsData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="week" stroke="#6b7280" style={{ fontSize: '12px' }} />
                                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                                <Tooltip 
                                    contentStyle={{ 
                                        backgroundColor: '#fff', 
                                        border: '1px solid #e5e7eb', 
                                        borderRadius: '8px',
                                        fontSize: '12px'
                                    }} 
                                />
                                <Area 
                                    type="monotone" 
                                    dataKey="reports" 
                                    stroke="#f59e0b" 
                                    fill="#fef3c7" 
                                    strokeWidth={2}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Card.CardContent>
                </Card.Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card.Card className="border-emerald-200 bg-linear-to-br from-emerald-50 to-teal-50 hover:shadow-lg transition-shadow">
                    <Card.CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md">
                                <Sprout className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-emerald-900">Add New Crop</h3>
                                <p className="text-sm text-emerald-700">Start a new batch</p>
                            </div>
                        </div>
                    </Card.CardContent>
                </Card.Card>

                <Card.Card className="border-blue-200 bg-linear-to-br from-blue-50 to-cyan-50 hover:shadow-lg transition-shadow">
                    <Card.CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-md">
                                <LayoutDashboard className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-blue-900">View Analytics</h3>
                                <p className="text-sm text-blue-700">Check farm insights</p>
                            </div>
                        </div>
                    </Card.CardContent>
                </Card.Card>

                <Card.Card className="border-amber-200 bg-linear-to-br from-amber-50 to-orange-50 hover:shadow-lg transition-shadow">
                    <Card.CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-md">
                                <Bug className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-amber-900">Report Pest</h3>
                                <p className="text-sm text-amber-700">Log new observation</p>
                            </div>
                        </div>
                    </Card.CardContent>
                </Card.Card>
            </div>

            {/* Recent Activity Table */}
            <Card.Card className="border-neutral-200 shadow-lg">
                <Card.CardHeader className="border-b border-neutral-100 bg-linear-to-r from-neutral-50 to-transparent">
                    <div className="flex items-center justify-between">
                        <div>
                            <Card.CardTitle className="text-2xl">Recent Activity</Card.CardTitle>
                            <Card.CardDescription className="mt-1">Latest updates from your farms</Card.CardDescription>
                        </div>
                        <button className="text-sm text-[#1F8A34] font-medium hover:underline">
                            View All
                        </button>
                    </div>
                </Card.CardHeader>
                <Card.CardContent className="p-6">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-neutral-200">
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Activity</th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Date & Time</th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Done By</th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Notes</th>
                                    <th className="text-center py-3 px-4 text-sm font-semibold text-neutral-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activities.map((activity, index) => (
                                    <tr 
                                        key={index}
                                        className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors group"
                                    >
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-2 h-2 ${activity.color} rounded-full`}></div>
                                                <span className="text-sm font-medium text-neutral-900">{activity.activity}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="text-sm text-neutral-600">
                                                <div>{activity.date}</div>
                                                <div className="text-xs text-neutral-500">{activity.time}</div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className="text-sm text-neutral-700">{activity.doneBy}</span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className="text-sm text-neutral-600 line-clamp-2">{activity.notes}</span>
                                        </td>
                                        <td className="py-4 px-4 text-center">
                                            <button className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#1F8A34] text-white hover:bg-[#1a6e2a] transition-colors opacity-0 group-hover:opacity-100">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card.CardContent>
            </Card.Card>
        </div>
    );
}