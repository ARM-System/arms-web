import { Settings as SettingsIcon, User, Bell, Lock, Globe, Database } from 'lucide-react';
import Card from '@/components/card';
import { Input } from '@/components/input';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900">Settings</h1>
        <p className="text-neutral-600 mt-2">Manage your account and application preferences</p>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Account Settings */}
        <Card.Card className="border-neutral-200 lg:col-span-2">
          <Card.CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1F8A34]/10 flex items-center justify-center">
                <User className="w-5 h-5 text-[#1F8A34]" />
              </div>
              <div>
                <Card.CardTitle>Account Information</Card.CardTitle>
                <Card.CardDescription>Update your personal information</Card.CardDescription>
              </div>
            </div>
          </Card.CardHeader>
          <Card.CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
                <Input type="text" placeholder="John Doe" defaultValue="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                <Input type="email" placeholder="john@example.com" defaultValue="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                <Input type="tel" placeholder="+1234567890" defaultValue="+1234567890" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Organization</label>
                <Input type="text" placeholder="Company Name" defaultValue="Green Valley Farms" />
              </div>
              <button className="px-4 py-2 bg-[#1F8A34] text-white rounded-lg hover:bg-[#1a7029] transition-colors">
                Save Changes
              </button>
            </div>
          </Card.CardContent>
        </Card.Card>

        {/* Quick Actions */}
        <div className="space-y-6">
          <Card.Card className="border-neutral-200">
            <Card.CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <Card.CardTitle>Notifications</Card.CardTitle>
                  <Card.CardDescription>Manage alerts</Card.CardDescription>
                </div>
              </div>
            </Card.CardHeader>
            <Card.CardContent>
              <div className="space-y-3">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-neutral-700">Email Notifications</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-[#1F8A34]" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-neutral-700">Push Notifications</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-[#1F8A34]" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-neutral-700">SMS Alerts</span>
                  <input type="checkbox" className="w-4 h-4 text-[#1F8A34]" />
                </label>
              </div>
            </Card.CardContent>
          </Card.Card>

          <Card.Card className="border-neutral-200">
            <Card.CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <Card.CardTitle>Preferences</Card.CardTitle>
                  <Card.CardDescription>App settings</Card.CardDescription>
                </div>
              </div>
            </Card.CardHeader>
            <Card.CardContent>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-neutral-700 mb-2">Language</label>
                  <select className="w-full px-3 py-2 border border-neutral-300 rounded-lg">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-neutral-700 mb-2">Timezone</label>
                  <select className="w-full px-3 py-2 border border-neutral-300 rounded-lg">
                    <option>UTC+00:00</option>
                    <option>UTC+01:00</option>
                    <option>UTC-05:00</option>
                  </select>
                </div>
              </div>
            </Card.CardContent>
          </Card.Card>
        </div>
      </div>

      {/* Security Section */}
      <Card.Card className="border-neutral-200">
        <Card.CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
              <Lock className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <Card.CardTitle>Security</Card.CardTitle>
              <Card.CardDescription>Manage your password and security settings</Card.CardDescription>
            </div>
          </div>
        </Card.CardHeader>
        <Card.CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Current Password</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">New Password</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Confirm Password</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <button className="px-4 py-2 bg-[#1F8A34] text-white rounded-lg hover:bg-[#1a7029] transition-colors">
                Update Password
              </button>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-neutral-900">Two-Factor Authentication</h3>
              <p className="text-sm text-neutral-600">Add an extra layer of security to your account</p>
              <button className="px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors">
                Enable 2FA
              </button>
              <div className="mt-6">
                <h3 className="font-medium text-neutral-900 mb-2">Active Sessions</h3>
                <p className="text-sm text-neutral-600 mb-3">Manage your active login sessions</p>
                <button className="text-sm text-red-600 hover:text-red-700">
                  Sign out from all devices
                </button>
              </div>
            </div>
          </div>
        </Card.CardContent>
      </Card.Card>

      {/* Data & Privacy */}
      <Card.Card className="border-neutral-200">
        <Card.CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <Database className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <Card.CardTitle>Data & Privacy</Card.CardTitle>
              <Card.CardDescription>Manage your data and privacy settings</Card.CardDescription>
            </div>
          </div>
        </Card.CardHeader>
        <Card.CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-neutral-50">
              <div>
                <p className="font-medium text-neutral-900">Export Data</p>
                <p className="text-sm text-neutral-600">Download all your farm data</p>
              </div>
              <button className="px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-white transition-colors">
                Export
              </button>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-neutral-50">
              <div>
                <p className="font-medium text-neutral-900">Delete Account</p>
                <p className="text-sm text-neutral-600">Permanently delete your account and data</p>
              </div>
              <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                Delete
              </button>
            </div>
          </div>
        </Card.CardContent>
      </Card.Card>
    </div>
  );
}
