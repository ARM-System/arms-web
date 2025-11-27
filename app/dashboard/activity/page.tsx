'use client';

import { useState } from 'react';
import { 
    Plus, 
    Search, 
    Filter, 
    MoreHorizontal, 
    Calendar, 
    User, 
    CheckCircle2, 
    Clock, 
    AlertCircle,
    X
} from 'lucide-react';
import Card from '@/components/card';

interface Activity {
    id: number;
    type: string;
    description: string;
    date: string;
    user: string;
    status: 'Completed' | 'Pending' | 'In Progress';
}

export default function ActivityPage() {
    const [activities, setActivities] = useState<Activity[]>([
        {
            id: 1,
            type: 'Crop Management',
            description: 'Planted new tomato seedlings in Sector B',
            date: '2024-03-15',
            user: 'John Doe',
            status: 'Completed'
        },
        {
            id: 2,
            type: 'Maintenance',
            description: 'Repaired irrigation pipe leak',
            date: '2024-03-14',
            user: 'Mike Ross',
            status: 'Completed'
        },
        {
            id: 3,
            type: 'Harvest',
            description: 'Harvested 500kg of wheat',
            date: '2024-03-12',
            user: 'Jane Smith',
            status: 'Pending'
        }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newActivity, setNewActivity] = useState({
        type: 'General',
        description: '',
        date: new Date().toISOString().split('T')[0],
        user: 'Current User', // In a real app, this would come from auth context
        status: 'Pending' as const
    });

    const handleAddActivity = (e: React.FormEvent) => {
        e.preventDefault();
        const activity: Activity = {
            id: activities.length + 1,
            ...newActivity
        };
        setActivities([activity, ...activities]);
        setIsModalOpen(false);
        setNewActivity({
            type: 'General',
            description: '',
            date: new Date().toISOString().split('T')[0],
            user: 'Current User',
            status: 'Pending'
        });
    };

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Activity Log</h1>
                    <p className="text-neutral-600 mt-2">Track and manage farm operations and tasks.</p>
                </div>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-[#1F8A34] text-white rounded-lg hover:bg-[#1a7029] transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    <span>Add Activity</span>
                </button>
            </div>

            {/* Filters and Search */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input 
                        type="text" 
                        placeholder="Search activities..." 
                        className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F8A34]/20 focus:border-[#1F8A34]"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 text-neutral-700">
                    <Filter className="w-5 h-5" />
                    <span>Filter</span>
                </button>
            </div>

            {/* Activity List */}
            <Card.Card>
                <Card.CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-neutral-50 border-b border-neutral-200">
                                    <th className="text-left py-4 px-6 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Activity</th>
                                    <th className="text-left py-4 px-6 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Date</th>
                                    <th className="text-left py-4 px-6 text-xs font-semibold text-neutral-500 uppercase tracking-wider">User</th>
                                    <th className="text-left py-4 px-6 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Status</th>
                                    <th className="text-right py-4 px-6 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-100">
                                {activities.map((activity) => (
                                    <tr key={activity.id} className="hover:bg-neutral-50 transition-colors">
                                        <td className="py-4 px-6">
                                            <div>
                                                <p className="font-medium text-neutral-900">{activity.type}</p>
                                                <p className="text-sm text-neutral-500 mt-0.5">{activity.description}</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2 text-sm text-neutral-600">
                                                <Calendar className="w-4 h-4" />
                                                {activity.date}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-sm font-medium text-neutral-600">
                                                    {activity.user.charAt(0)}
                                                </div>
                                                <span className="text-sm text-neutral-900">{activity.user}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                                                activity.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                                activity.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                                                'bg-amber-100 text-amber-700'
                                            }`}>
                                                {activity.status === 'Completed' && <CheckCircle2 className="w-3.5 h-3.5" />}
                                                {activity.status === 'In Progress' && <Clock className="w-3.5 h-3.5" />}
                                                {activity.status === 'Pending' && <AlertCircle className="w-3.5 h-3.5" />}
                                                {activity.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <button className="p-2 hover:bg-neutral-100 rounded-lg text-neutral-400 hover:text-neutral-600 transition-colors">
                                                <MoreHorizontal className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card.CardContent>
            </Card.Card>

            {/* Add Activity Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="flex items-center justify-between p-6 border-b border-neutral-100">
                            <h2 className="text-xl font-semibold text-neutral-900">Add New Activity</h2>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-neutral-500" />
                            </button>
                        </div>
                        
                        <form onSubmit={handleAddActivity} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">Activity Type</label>
                                <select 
                                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F8A34]/20 focus:border-[#1F8A34]"
                                    value={newActivity.type}
                                    onChange={(e) => setNewActivity({...newActivity, type: e.target.value})}
                                >
                                    <option value="General">General</option>
                                    <option value="Crop Management">Crop Management</option>
                                    <option value="Maintenance">Maintenance</option>
                                    <option value="Harvest">Harvest</option>
                                    <option value="Irrigation">Irrigation</option>
                                    <option value="Pest Control">Pest Control</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">Description</label>
                                <textarea 
                                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F8A34]/20 focus:border-[#1F8A34]"
                                    rows={3}
                                    placeholder="Describe the activity..."
                                    required
                                    value={newActivity.description}
                                    onChange={(e) => setNewActivity({...newActivity, description: e.target.value})}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Date</label>
                                    <input 
                                        type="date" 
                                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F8A34]/20 focus:border-[#1F8A34]"
                                        required
                                        value={newActivity.date}
                                        onChange={(e) => setNewActivity({...newActivity, date: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Status</label>
                                    <select 
                                        className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F8A34]/20 focus:border-[#1F8A34]"
                                        value={newActivity.status}
                                        onChange={(e) => setNewActivity({...newActivity, status: e.target.value as any})}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pt-4 flex gap-3">
                                <button 
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-4 py-2 border border-neutral-200 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-[#1F8A34] text-white rounded-lg hover:bg-[#1a7029] transition-colors"
                                >
                                    Save Activity
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
