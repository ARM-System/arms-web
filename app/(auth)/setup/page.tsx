'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, MapPin, Ruler, Home, Sprout, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Select } from '@/components/select';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type SetupStep = 1 | 2 | 3 | 4;

export default function FarmSetupWizard() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<SetupStep>(1);

  // Form state
  const [farmDetails, setFarmDetails] = useState({
    farmName: '',
    farmType: '',
    description: '',
  });

  const [locationDetails, setLocationDetails] = useState({
    address: '',
    city: '',
    state: '',
    country: '',
    latitude: '',
    longitude: '',
  });

  const [sizeDetails, setSizeDetails] = useState({
    totalArea: '',
    unit: 'hectares',
    cultivableArea: '',
    numberOfGreenhouses: '',
  });

  const [additionalInfo, setAdditionalInfo] = useState({
    soilType: '',
    irrigationSystem: '',
    primaryCrops: '',
    yearsOfOperation: '',
  });

  const steps = [
    { number: 1, title: 'Farm Details', description: 'Basic information', icon: Home, color: 'from-emerald-500 to-teal-600' },
    { number: 2, title: 'Location', description: 'Where is your farm', icon: MapPin, color: 'from-blue-500 to-cyan-600' },
    { number: 3, title: 'Size & Area', description: 'Farm measurements', icon: Ruler, color: 'from-purple-500 to-pink-600' },
    { number: 4, title: 'Additional Info', description: 'Final details', icon: Sprout, color: 'from-amber-500 to-orange-600' },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as SetupStep);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as SetupStep);
    }
  };

  const handleComplete = () => {
    const setupData = {
      ...farmDetails,
      ...locationDetails,
      ...sizeDetails,
      ...additionalInfo,
    };
    
    console.log('Farm Setup Data:', setupData);
    
    localStorage.setItem('farmSetupComplete', 'true');
    localStorage.setItem('farmSetupData', JSON.stringify(setupData));
    
    router.push('/dashboard');
  };

  

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationDetails({
            ...locationDetails,
            latitude: position.coords.latitude.toFixed(6),
            longitude: position.coords.longitude.toFixed(6),
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get your location. Please enter manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const currentStepData = steps[currentStep - 1];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-emerald-50 to-teal-50 py-12 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-[#1F8A34]/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header with animated gradient */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-[#1F8A34] to-emerald-600 mb-6 shadow-lg shadow-emerald-500/30">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-neutral-900 via-[#1F8A34] to-emerald-700 bg-clip-text text-transparent mb-3">
            Farm Setup Wizard
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Let's configure your farm in a few simple steps and unlock the full potential of ARMS
          </p>
        </div>

        {/* Enhanced Progress Steps */}
        <div className="mb-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/50">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isCompleted = currentStep > step.number;
                const isCurrent = currentStep === step.number;
                
                return (
                  <div key={step.number} className="flex-1 flex items-center">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`relative w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 transform ${
                          isCompleted
                            ? 'bg-linear-to-br from-[#1F8A34] to-emerald-600 text-white scale-100 shadow-lg shadow-emerald-500/40'
                            : isCurrent
                            ? `bg-linear-to-br ${step.color} text-white scale-110 shadow-xl ring-4 ring-white/50`
                            : 'bg-white border-2 border-neutral-200 text-neutral-400 scale-90'
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-5 h-5 animate-scale-in" />
                        ) : (
                          <Icon className={`w-5 h-5 ${isCurrent ? 'animate-bounce-subtle' : ''}`} />
                        )}
                        {isCurrent && (
                          <div className="absolute inset-0 rounded-2xl animate-ping-slow bg-linear-to-br from-[#1F8A34]/30 to-emerald-600/30"></div>
                        )}
                      </div>
                      
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex-1 mx-3">
                        <div className="h-1 bg-neutral-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-linear-to-r from-[#1F8A34] to-emerald-600 transition-all duration-700 ${
                              isCompleted ? 'w-full' : 'w-0'
                            }`}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Form Card with glassmorphism */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 overflow-hidden transition-all duration-500">
          {/* Colorful header bar */}
          <div className={`h-2 bg-linear-to-r ${currentStepData.color}`}></div>
          
          <div className="p-8 md:p-10">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${currentStepData.color} flex items-center justify-center`}>
                  <currentStepData.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900">
                    {currentStepData.title}
                  </h2>
                  <p className="text-sm text-neutral-600">
                    Step {currentStep} of 4 • {currentStepData.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 1: Farm Details */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-slide-in">
                <div className="group">
                  <Label htmlFor="farmName" className="text-sm font-semibold text-neutral-700 mb-2 flex items-center gap-2">
                    Farm Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="farmName"
                    placeholder="e.g., Green Valley Farms"
                    value={farmDetails.farmName}
                    onChange={(e) => setFarmDetails({ ...farmDetails, farmName: e.target.value })}
                    className="border-2 border-neutral-200 focus:border-[#1F8A34] transition-all duration-300 hover:border-neutral-300"
                    required
                  />
                </div>

                <div className="group">
                  <Label htmlFor="farmType" className="text-sm font-semibold text-neutral-700 mb-2 flex items-center gap-2">
                    Farm Type <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    id="farmType"
                    value={farmDetails.farmType}
                    onChange={(e) => setFarmDetails({ ...farmDetails, farmType: e.target.value })}
                    className="border-2 border-neutral-200 focus:border-[#1F8A34] transition-all duration-300 hover:border-neutral-300"
                    required
                  >
                    <option value="">Select your farm type</option>
                    <option value="greenhouse">🏠 Greenhouse</option>
                    <option value="open-field">🌾 Open Field</option>
                    <option value="hydroponics">💧 Hydroponics</option>
                    <option value="aquaponics">🐟 Aquaponics</option>
                    <option value="mixed">🌿 Mixed Farming</option>
                    <option value="organic">🌱 Organic Farm</option>
                    <option value="livestock">🐄 Livestock</option>
                  </Select>
                </div>

                
              </div>
            )}

            {/* Step 2: Location Details */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-slide-in">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                  <p className="text-sm text-blue-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Provide accurate location data to enable weather forecasting and regional insights
                  </p>
                </div>

                <div className="group">
                  <Label htmlFor="address" className="text-sm font-semibold text-neutral-700 mb-2 flex items-center gap-2">
                    Street Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address"
                    placeholder="123 Farm Road"
                    value={locationDetails.address}
                    onChange={(e) => setLocationDetails({ ...locationDetails, address: e.target.value })}
                    className="border-2 border-neutral-200 focus:border-blue-500 transition-all duration-300"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <Label htmlFor="city" className="text-sm font-semibold text-neutral-700 mb-2 flex items-center gap-2">
                      City <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="city"
                      placeholder="Springfield"
                      value={locationDetails.city}
                      onChange={(e) => setLocationDetails({ ...locationDetails, city: e.target.value })}
                      className="border-2 border-neutral-200 focus:border-blue-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="group">
                    <Label htmlFor="state" className="text-sm font-semibold text-neutral-700 mb-2 flex items-center gap-2">
                      State/Province <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="state"
                      placeholder="Ogun"
                      value={locationDetails.state}
                      onChange={(e) => setLocationDetails({ ...locationDetails, state: e.target.value })}
                      className="border-2 border-neutral-200 focus:border-blue-500 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <Label htmlFor="country" className="text-sm font-semibold text-neutral-700 mb-2 flex items-center gap-2">
                    Country <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="country"
                    placeholder="Nigeria"
                    value={locationDetails.country}
                    onChange={(e) => setLocationDetails({ ...locationDetails, country: e.target.value })}
                    className="border-2 border-neutral-200 focus:border-blue-500 transition-all duration-300"
                    required
                  />
                </div>

                <div className="bg-linear-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6 mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-neutral-900 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        GPS Coordinates
                      </h3>
                      <p className="text-xs text-neutral-600 mt-1">Precise location for accurate weather and analytics</p>
                    </div>
                    <Button
                      type="button"
                      size="sm"
                      onClick={getCurrentLocation}
                      className="bg-linear-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/30"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Auto-Detect
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="latitude" className="text-sm font-semibold text-neutral-700 mb-2 flex items-center gap-2">
                        Latitude <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="latitude"
                        placeholder="34.0522"
                        value={locationDetails.latitude}
                        onChange={(e) => setLocationDetails({ ...locationDetails, latitude: e.target.value })}
                        className="bg-white border-2 border-blue-200 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="longitude" className="text-sm font-semibold text-neutral-700 mb-2 flex items-center gap-2">
                        Longitude <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="longitude"
                        placeholder="-118.2437"
                        value={locationDetails.longitude}
                        onChange={(e) => setLocationDetails({ ...locationDetails, longitude: e.target.value })}
                        className="bg-white border-2 border-blue-200 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Size & Area */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-slide-in">
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4">
                  <p className="text-sm text-purple-900 flex items-center gap-2">
                    <Ruler className="w-4 h-4" />
                    Farm size helps us provide accurate yield predictions and resource planning
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <Label htmlFor="totalArea" className="text-sm font-semibold text-neutral-700 mb-2 flex items-center gap-2">
                      Total Farm Area <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="totalArea"
                      type="number"
                      placeholder="100"
                      value={sizeDetails.totalArea}
                      onChange={(e) => setSizeDetails({ ...sizeDetails, totalArea: e.target.value })}
                      className="border-2 border-neutral-200 focus:border-purple-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="group">
                    <Label htmlFor="unit" className="text-sm font-semibold text-neutral-700 mb-2 flex items-center gap-2">
                      Unit <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      id="unit"
                      value={sizeDetails.unit}
                      onChange={(e) => setSizeDetails({ ...sizeDetails, unit: e.target.value })}
                      className="border-2 border-neutral-200 focus:border-purple-500 transition-all duration-300"
                      required
                    >
                      <option value="hectares">Hectares (ha)</option>
                      <option value="acres">Acres (ac)</option>
                      <option value="sqmeters">Square Meters (m²)</option>
                      <option value="sqfeet">Square Feet (ft²)</option>
                    </Select>
                  </div>
                </div>

                <div className="group">
                  <Label htmlFor="cultivableArea" className="text-sm font-semibold text-neutral-700 mb-2">
                    Cultivable Area
                  </Label>
                  <Input
                    id="cultivableArea"
                    type="number"
                    placeholder="80"
                    value={sizeDetails.cultivableArea}
                    onChange={(e) => setSizeDetails({ ...sizeDetails, cultivableArea: e.target.value })}
                    className="border-2 border-neutral-200 focus:border-purple-500 transition-all duration-300"
                  />
                  <p className="text-xs text-neutral-500 mt-2 flex items-center gap-1">
                    💡 Area that can be actively used for growing crops
                  </p>
                </div>

                <div className="group">
                  <Label htmlFor="numberOfGreenhouses" className="text-sm font-semibold text-neutral-700 mb-2">
                    Number of Greenhouses/Sections
                  </Label>
                  <Input
                    id="numberOfGreenhouses"
                    type="number"
                    placeholder="5"
                    value={sizeDetails.numberOfGreenhouses}
                    onChange={(e) => setSizeDetails({ ...sizeDetails, numberOfGreenhouses: e.target.value })}
                    className="border-2 border-neutral-200 focus:border-purple-500 transition-all duration-300"
                  />
                  <p className="text-xs text-neutral-500 mt-2 flex items-center gap-1">
                    🏠 How many separate growing zones do you manage?
                  </p>
                </div>
              </div>
            )}

            {/* Step 4: Additional Information */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-slide-in">
                <div className="bg-linear-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 mb-6">
                  <p className="text-sm text-amber-900 flex items-center gap-2">
                    <Sprout className="w-4 h-4" />
                    These details help us provide tailored recommendations and insights
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <Label htmlFor="soilType" className="text-sm font-semibold text-neutral-700 mb-2">
                      Soil Type
                    </Label>
                    <Select
                      id="soilType"
                      value={additionalInfo.soilType}
                      onChange={(e) => setAdditionalInfo({ ...additionalInfo, soilType: e.target.value })}
                      className="border-2 border-neutral-200 focus:border-amber-500 transition-all duration-300"
                    >
                      <option value="">Select soil type</option>
                      <option value="clay">Clay</option>
                      <option value="sandy">Sandy</option>
                      <option value="loamy">Loamy</option>
                      <option value="silty">Silty</option>
                      <option value="peaty">Peaty</option>
                      <option value="chalky">Chalky</option>
                      <option value="substrate">Substrate</option>
                      <option value="mixed">Mixed</option>
                    </Select>
                  </div>

                  <div className="group">
                    <Label htmlFor="irrigationSystem" className="text-sm font-semibold text-neutral-700 mb-2">
                      Irrigation System
                    </Label>
                    <Select
                      id="irrigationSystem"
                      value={additionalInfo.irrigationSystem}
                      onChange={(e) => setAdditionalInfo({ ...additionalInfo, irrigationSystem: e.target.value })}
                      className="border-2 border-neutral-200 focus:border-amber-500 transition-all duration-300"
                    >
                      <option value="">Select irrigation system</option>
                      <option value="drip">Drip Irrigation</option>
                      <option value="sprinkler">Sprinkler System</option>
                      <option value="surface">Surface Irrigation</option>
                      <option value="subsurface">Subsurface Irrigation</option>
                      <option value="manual">Manual Watering</option>
                      <option value="mixed">Mixed Systems</option>
                    </Select>
                  </div>
                </div>

                <div className="group">
                  <Label htmlFor="primaryCrops" className="text-sm font-semibold text-neutral-700 mb-2">
                    Primary Crops
                  </Label>
                  <Input
                    id="primaryCrops"
                    placeholder="e.g., Tomatoes, Lettuce, Peppers, Cucumbers"
                    value={additionalInfo.primaryCrops}
                    onChange={(e) => setAdditionalInfo({ ...additionalInfo, primaryCrops: e.target.value })}
                    className="border-2 border-neutral-200 focus:border-amber-500 transition-all duration-300"
                  />
                  <p className="text-xs text-neutral-500 mt-2 flex items-center gap-1">
                    Separate multiple crops with commas
                  </p>
                </div>

                <div className="group">
                  <Label htmlFor="yearsOfOperation" className="text-sm font-semibold text-neutral-700 mb-2">
                    Years of Operation
                  </Label>
                  <Input
                    id="yearsOfOperation"
                    type="number"
                    placeholder="5"
                    value={additionalInfo.yearsOfOperation}
                    onChange={(e) => setAdditionalInfo({ ...additionalInfo, yearsOfOperation: e.target.value })}
                    className="border-2 border-neutral-200 focus:border-amber-500 transition-all duration-300"
                  />
                  <p className="text-xs text-neutral-500 mt-2 flex items-center gap-1">
                    How many years has your farm been in operation?
                  </p>
                </div>

                <div className="bg-linear-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-2xl p-6 mt-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#1F8A34] to-emerald-600 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-emerald-900 mb-2">Almost Done! 🎉</h3>
                      <p className="text-sm text-emerald-800">
                        You're all set! Click 'Complete Setup' to finalize your farm configuration and unlock the full power of ARMS for your agricultural operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="px-8 md:px-10 pb-8 flex items-center justify-between gap-4">
            <div>
              {currentStep === 1 ? (
                <Link href="/dashboard">
                  <Button variant="ghost" className="text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Skip for Now
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  className="border-2 border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
              )}
            </div>

            <div>
              {currentStep === 4 ? (
                <Button
                  onClick={handleComplete}
                  className="bg-linear-to-r from-[#1F8A34] to-emerald-600 hover:from-[#1a7029] hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/40 px-8"
                >
                  Complete Setup
                  <CheckCircle2 className="w-5 h-5 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  className="bg-linear-to-r from-[#1F8A34] to-emerald-600 hover:from-[#1a7029] hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/40 px-8"
                >
                  Continue
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-600">
            {Math.round((currentStep / 4) * 100)}% Complete
          </p>
          <div className="w-full max-w-md mx-auto mt-2 h-2 bg-neutral-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-linear-to-r from-[#1F8A34] to-emerald-600 transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
