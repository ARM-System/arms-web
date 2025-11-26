
import { Button } from '@/components/button';
import Card from '@/components/card';
import { RequestDemoButton, ViewElementButton } from '@/components/subButtons';
import { 
  Sprout, 
  Activity, 
  Bug, 
  Warehouse, 
  BarChart3, 
  Cloud, 
  Check, 
  ArrowRight, 
  Home
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';



export default function LandingPage() {

  const features = [
    {
      icon: Warehouse,
      title: 'Inventory Management',
      description: 'Track seeds, fertilizers, pesticides, and equipment with smart reordering alerts.',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: Bug,
      title: 'Pest Scouting',
      description: 'Log pest observations with severity tracking and treatment recommendations.',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
    },
    {
      icon: Cloud,
      title: 'Climate Monitoring',
      description: 'Real-time temperature, humidity, and CO₂ tracking with automated alerts.',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Activity,
      title: 'Activity Logs',
      description: 'Record all farm activities from planting to harvest with labor tracking.',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Sprout,
      title: 'Crop Batch Tracking',
      description: 'Monitor growth stages, yields, and harvest data for every crop batch.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Generate detailed reports and visualizations for data-driven decisions.',
      color: 'from-indigo-500 to-violet-600',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="">
                 <Image
                  src="/arms_logo.png"
                  alt='Agronomy Record Management System logo'
                  width={100}
                  height={100}
                  />
               </div>
             
            </div>
            <div className="flex items-center gap-4">
              <ViewElementButton elementId="product-features" label="Features" />
              <ViewElementButton elementId="contact_us" label="Contact" />
              <Link href={'/login'}>
                  <Button className="bg-linear-to-r from-[#1F8A34] to-emerald-700 hover:from-[#1a7029] hover:to-emerald-800 text-white shadow-lg shadow-emerald-200">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-emerald-50 via-white to-teal-50 -z-10"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/50 border border-emerald-200 text-[#1F8A34] text-sm font-medium mb-8 shadow-sm">
                <span className="w-2 h-2 bg-[#1F8A34] rounded-full animate-pulse"></span>
                Modern Farm Management
              </div>
              <h1 className="text-2xl lg:text-4xl font-bold mb-6 leading-tight">
                <span className="text-neutral-900">Powering Smart Farming</span>
                <br />
                <span className="bg-linear-to-r from-[#1F8A34] to-emerald-600 bg-clip-text text-transparent">
                  Through Simple Records.
                </span>
              </h1>
              <p className="text-lg text-neutral-600 mb-10 leading-relaxed max-w-xl">
                ARMS is the all-in-one agronomy platform for modern farming—inventory, pests, climate, livestock, and yields, unified in one system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <RequestDemoButton/>
                <Button size="lg" variant="outline" className="border-neutral-300 hover:bg-neutral-50 h-12 px-8 text-base">
                  View Documentation
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-10 text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1F8A34]" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1F8A34]" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-[#1F8A34] to-teal-600 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/50 shadow-2xl bg-white/80 backdrop-blur-sm">
                <div className="bg-linear-to-br from-[#1F8A34] to-[#0d5f20] p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-emerald-100 font-medium mb-1 text-sm">Total Greenhouses</p>
                        <p className="text-3xl font-bold">24</p>
                      </div>
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                        <Home className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 pt-3 border-t border-white/20">
                      <div>
                        <p className="text-xs text-emerald-100 mb-1">Active Batches</p>
                        <p className="text-xl font-semibold">156</p>
                      </div>
                      <div>
                        <p className="text-xs text-emerald-100 mb-1">Yield (kg)</p>
                        <p className="text-xl font-semibold">3,420</p>
                      </div>
                      <div>
                        <p className="text-xs text-emerald-100 mb-1">Tasks Today</p>
                        <p className="text-xl font-semibold">18</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                          <Cloud className="w-4 h-4 text-[#1F8A34]" />
                        </div>
                        <span className="text-neutral-700 text-sm font-medium">Climate Status</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#1F8A34] text-xs font-medium">Optimal</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                          <Warehouse className="w-4 h-4 text-amber-600" />
                        </div>
                        <span className="text-neutral-700 text-sm font-medium">Inventory Alerts</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">3 Low Stock</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Bug className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-neutral-700 text-sm font-medium">Pest Reports</span>
                      </div>
                      <span className="text-neutral-900 text-sm font-semibold">12 This Week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white relative" id="product-features"> 
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-linear-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                Everything you need to grow
              </span>
            </h2>
            <p className="text-sm text-neutral-600 max-w-2xl mx-auto">
              Comprehensive tools designed specifically for greenhouse and controlled environment agriculture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card.Card
                  key={index}
                  className="border-neutral-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
                >
                  <div className={`h-1 bg-linear-to-r ${feature.color}`}></div>
                  <Card.CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
              
                    <h4 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h4>
              
                    <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                  </Card.CardContent>
                </Card.Card>
              );
            })}
          </div>

        </div>
      </section>
  
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden" id='contact_us'>
        <div className="absolute inset-0 bg-linear-to-br from-[#1F8A34] to-[#0d5f20]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your farm?</h3>
          <p className="text-lg text-emerald-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of farms using ARMS to increase yields, reduce waste, and make data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700! hover:bg-emerald-50 h-14 px-8 text-lg font-semibold shadow-xl">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-400 text-white hover:bg-emerald-800/50 h-14 px-8 text-lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                   <Image
                    src="/arms_logo.png"
                    alt='Agronomy Record Management System logo'
                    width={120}
                    height={120}
                    className="h-10 w-24"
                    />
              </div>
              <p className="text-neutral-400 max-w-sm leading-relaxed">
                The complete operating system for modern agriculture. Track, analyze, and optimize every aspect of your farm.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-6">Product</h5>
              <ul className="space-y-4 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-6">Company</h5>
              <ul className="space-y-4 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <p>© 2025 ARMS. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
