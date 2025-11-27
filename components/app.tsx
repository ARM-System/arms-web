import React, { useState } from 'react';
import LandingPage from '../app/page';
import AuthScreen from '../app/(auth)/login/page';
import Dashboard from '../app/dashboard/page';
import GreenhouseManagement from '../app/dashboard/farm/page';
// import { BedManagement } from './components/BedManagement';
import CropBatchTracking from '../app/dashboard/crop-batch/page';
import PestScouting from '../app/dashboard/pest/page';
import NutrientApplication from '../app/dashboard/nutrient/page';
import ClimateMonitoring from '../app/dashboard/climate/page';
import HarvestRecords from '../app/dashboard/harvest/page';
import InventoryManagement from '../app/dashboard/inventory/page';
// import { ActivityLog } from './components/ActivityLog';
import ReportsAnalytics from '../app/dashboard/report/page';
import Settings from '../app/dashboard/settings/page';
import AppLayout from '../app/layout';
// import { UserProfileProvider } from './components/UserProfileContext';
// import { Toaster } from './components/ui/sonner';

type Screen = 
  | 'landing'
  | 'auth'
  | 'dashboard'
  | 'greenhouses'
  | 'beds'
  | 'crops'
  | 'pest'
  | 'nutrients'
  | 'climate'
  | 'harvest'
  | 'inventory'
  | 'activity'
  | 'reports'
  | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedGreenhouse, setSelectedGreenhouse] = useState<string | null>(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentScreen('dashboard');
  };

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleSelectGreenhouse = (id: string) => {
    setSelectedGreenhouse(id);
    setCurrentScreen('beds');
  };

  if (!isAuthenticated) {
    if (currentScreen === 'landing') {
      return <LandingPage />;
    }
    return <AuthScreen />;
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard />;
      case 'greenhouses':
        return <GreenhouseManagement />;
      case 'beds':
        return <div>BedManagement Placeholder</div>;
      case 'crops':
        return <CropBatchTracking />;
      case 'pest':
        return <PestScouting />;
      case 'nutrients':
        return <NutrientApplication />;
      case 'climate':
        return <ClimateMonitoring />;
      case 'harvest':
        return <HarvestRecords />;
      case 'inventory':
        return <InventoryManagement />;
      case 'activity':
        return <div>ActivityLog Placeholder</div>;
      case 'reports':
        return <ReportsAnalytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      {renderScreen()}
    </>
  );
}
