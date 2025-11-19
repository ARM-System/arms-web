import { Button } from '@/components/button';
import Card from '@/components/card';
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

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {

  const features = [
    {
      icon: Warehouse,
      title: 'Inventory Management',
      description: 'Track seeds, fertilizers, pesticides, and equipment with smart reordering alerts.',
    },
    {
      icon: Bug,
      title: 'Pest Scouting',
      description: 'Log pest observations with severity tracking and treatment recommendations.',
    },
    {
      icon: Cloud,
      title: 'Climate Monitoring',
      description: 'Real-time temperature, humidity, and CO₂ tracking with automated alerts.',
    },
    {
      icon: Activity,
      title: 'Activity Logs',
      description: 'Record all farm activities from planting to harvest with labor tracking.',
    },
    {
      icon: Sprout,
      title: 'Crop Batch Tracking',
      description: 'Monitor growth stages, yields, and harvest data for every crop batch.',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Generate detailed reports and visualizations for data-driven decisions.',
    },
  ];

  // const testimonials = [
  //   {
  //     name: 'Sarah Martinez',
  //     role: 'Farm Manager, GreenLeaf Farms',
  //     content: 'ARMS transformed how we manage our 15 greenhouses. We increased yields by 23% and reduced waste significantly.',
  //   },
  // ];

  const plans = [
    {
      name: 'Basic',
      price: '₦99,000',
      period: 'per month',
      features: [
        'Up to 5 greenhouses',
        'Basic inventory management',
        'Activity logging',
        'Email support',
        'Mobile app access',
      ],
    },
    {
      name: 'Pro',
      price: '₦299,000',
      period: 'per month',
      features: [
        'Up to 25 greenhouses',
        'Advanced analytics',
        'Pest & climate tracking',
        'Priority support',
        'API access',
        'Custom reports',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact sales',
      features: [
        'Unlimited greenhouses',
        'White-label options',
        'Dedicated support',
        'Custom integrations',
        'On-premise deployment',
        'Training & onboarding',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-neutral-200">
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
              <Button variant="ghost" className="text-neutral-700">Features</Button>
              <Button variant="ghost" className="text-neutral-700">Pricing</Button>
              <Button variant="ghost" className="text-neutral-700">Contact</Button>
              <Button variant="default" className="text-neutral-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F8A34]/10 text-[#1F8A34] text-sm mb-6">
              <span className="w-2 h-2 bg-[#1F8A34] rounded-full"></span>
              Modern Farm Management
            </div>
            <h2 className="text-neutral-900 mb-6 text-2xl font-bold">
             Powering Smart Farming Through Simple Records.
            </h2>
            <p className="text-sm text-neutral-600 mb-8">
            ARMS is the all-in-one agronomy platform for modern farming—inventory, pests, climate, livestock, and yields, unified in one system.
            </p>
            <div className="flex gap-4">
              <Button onClick={onGetStarted} size="lg" className="bg-[#1F8A34] hover:bg-[#1a7029] text-white">
                Request Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-neutral-300">
                Get Started
              </Button>
            </div>
            <p className="text-sm text-neutral-500 mt-4">
              No credit card required • Cancel anytime
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl">
              <div className="bg-gradient-to-br from-[#1F8A34] to-[#8B5A2B] p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-80">Total Greenhouses</p>
                      <p className="text-3xl">24</p>
                    </div>
                    <Home className="w-12 h-12 opacity-50" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-xs opacity-80">Active Batches</p>
                      <p className="text-xl">156</p>
                    </div>
                    <div>
                      <p className="text-xs opacity-80">Yield (kg)</p>
                      <p className="text-xl">3,420</p>
                    </div>
                    <div>
                      <p className="text-xs opacity-80">Tasks Today</p>
                      <p className="text-xl">18</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-600">Climate Status</span>
                    <span className="text-[#1F8A34]">Optimal</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-600">Inventory Alerts</span>
                    <span className="text-amber-600">3 Low Stock</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-600">Pest Reports</span>
                    <span className="text-neutral-900">12 This Week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-12">
            <h3 className="text-neutral-900 mb-3 text-2xl font-bold">Our Product Features</h3>
            <p className="text-sm text-neutral-600 max-w-2xl mx-auto">
              Comprehensive tools designed specifically for greenhouse and controlled environment agriculture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-neutral-200 hover:shadow-lg transition-shadow p-6"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1F8A34]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#1F8A34]" />
                    </div>
              
                    <h4 className="text-neutral-900 font-semibold">{feature.title}</h4>
              
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

        </div>
      </section>
  
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-neutral-900 mb-4 text-2xl font-bold">Ready to transform your farm?</h3>
          <p className="text-sm text-neutral-600 mb-8">
            Join hundreds of farms using ARMS to increase yields and reduce costs.
          </p>
          <div className="flex gap-4 justify-center">
            <Button  size="lg" className="bg-[#1F8A34] hover:bg-[#1a7029] text-white">
              Sign Up Now
            </Button>
            <Button size="lg" variant="outline" className="border-neutral-300">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 justify-between max-w-full">
            <div>
              <div className="flex items-center gap-2 mb-1">
                   <Image
                  src="/arms_logo.png"
                  alt='Agronomy Record Management System logo'
                  width={100}
                  height={100}
                  />
              </div>
              <p className="text-sm text-neutral-600">
                Modern farm management for the digital age.
              </p>
            </div>
            <div className='grid md:grid-cols-2'>
              <div>
              <h5 className="text-neutral-900 mb-3">Product</h5>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Features</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h5 className="text-neutral-900 mb-3">Legal</h5>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-200 text-center text-sm text-neutral-500">
            © 2025 ARMS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
