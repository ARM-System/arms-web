'use client';

import { 
  LayoutDashboard, 
  Home, 
  Sprout, 
  Bug, 
  Droplet, 
  Cloud, 
  Wheat,
  Package,
  FileText,
  Settings,
  Menu,
  X,
  LogOut,
  ClipboardList,
  BarChart3
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { logout } from '@/actions/AuthService';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Farm', href: '/dashboard/farm', icon: Home },
  { name: 'Crop Batch', href: '/dashboard/crop-batch', icon: Sprout },
  { name: 'Pest', href: '/dashboard/pest', icon: Bug },
  { name: 'Nutrient', href: '/dashboard/nutrient', icon: Droplet },
  { name: 'Climate', href: '/dashboard/climate', icon: Cloud },
  { name: 'Harvest', href: '/dashboard/harvest', icon: Wheat },
  { name: 'Inventory', href: '/dashboard/inventory', icon: Package },
  { name: 'Report', href: '/dashboard/report', icon: FileText },
  { name: 'Insight', href: '/dashboard/insight', icon: BarChart3 },
  { name: 'Activity', href: '/dashboard/activity', icon: ClipboardList },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#1F8A34] text-white hover:bg-[#1a7029] transition-colors"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-white border-r border-neutral-200 z-40
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-neutral-200">
            <Link href="/dashboard" className="flex items-center gap-3">
              <Image
                src="/arms_logo.png"
                alt="ARMS Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg
                        transition-all duration-200
                        ${
                          isActive
                            ? 'bg-[#1F8A34] text-white shadow-md'
                            : 'text-neutral-700 hover:bg-neutral-100 hover:text-[#1F8A34]'
                        }
                      `}
                    >
                      <Icon className="w-3 h-3" />
                      <span className="font-normal text-sm">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-neutral-200 space-y-3">
            <div className="flex items-center gap-3 px-4 py-3">
              <div className="w-8 h-8 rounded-full bg-[#1F8A34] flex items-center justify-center text-white font-semibold">
                U
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-neutral-900 truncate">
                  User Name
                </p>
                <p className="text-xs text-neutral-500 truncate">
                  user@farm.com
                </p>
              </div>
              <button
                onClick={() => logout()}
                className="p-2 text-neutral-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Sign out"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
            {/* <div className="px-4">
              <SetupStatus showInline />
            </div> */}
          </div>
        </div>
      </aside>

      {/* Spacer for desktop to prevent content from going under sidebar */}
      <div className="hidden lg:block w-64 shrink-0" />
    </>
  );
}
