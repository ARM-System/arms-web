import { LayoutDashboard, Home, Sprout, Bug, TrendingUp } from 'lucide-react';
import Card from '@/components/card';
import { SetupStatus } from '@/components/setup-status';
import { getUser } from '@/actions/UserService';
import { redirect } from 'next/navigation';

export default async function Dashboard() {

    let user;

    try {
        // Call the server function to get the user
        user = await getUser();
    } catch (err) {
        // If no token or invalid, redirect to login
        console.log(err);
        redirect("/login");
    }
    
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

    const activities = [
        { title: 'New crop batch added', time: '2 hours ago', color: 'bg-[#1F8A34]' },
        { title: 'Pest alert reported', time: '5 hours ago', color: 'bg-amber-500' },
        { title: 'Climate monitoring updated', time: '1 day ago', color: 'bg-blue-500' },
        { title: 'Harvest completed', time: '2 days ago', color: 'bg-[#1F8A34]' },
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

            {/* Recent Activity with modern design */}
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
                    <div className="space-y-3">
                        {activities.map((activity, index) => (
                            <div 
                                key={index}
                                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-all hover:shadow-md group"
                            >
                                <div className={`w-3 h-3 ${activity.color} rounded-full group-hover:scale-125 transition-transform`}></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-neutral-900">{activity.title}</p>
                                    <p className="text-xs text-neutral-500">{activity.time}</p>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card.CardContent>
            </Card.Card>
        </div>
    );
}