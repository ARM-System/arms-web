import React, { useState } from 'react';
// import { LandingPage } from '';
// import { AuthScreen } from './components/AuthScreen';
// import { Dashboard } from './components/Dashboard';
// import { GreenhouseManagement } from './components/GreenhouseManagement';
// import { BedManagement } from './components/BedManagement';
// import { CropBatchTracking } from './components/CropBatchTracking';
// import { PestScouting } from './components/PestScouting';
// import { NutrientApplication } from './components/NutrientApplication';
// import { ClimateMonitoring } from './components/ClimateMonitoring';
// import { HarvestRecords } from './components/HarvestRecords';
// import { InventoryManagement } from './components/InventoryManagement';
// import { ActivityLog } from './components/ActivityLog';
// import { ReportsAnalytics } from './components/ReportsAnalytics';
// import { Settings } from './components/Settings';
// import { AppLayout } from './components/AppLayout';
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
      return <LandingPage onGetStarted={() => setCurrentScreen('auth')} />;
    }
    return <AuthScreen onLogin={handleLogin} onBack={() => setCurrentScreen('landing')} />;
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard />;
      case 'greenhouses':
        return <GreenhouseManagement onSelectGreenhouse={handleSelectGreenhouse} />;
      case 'beds':
        return <BedManagement greenhouseId={selectedGreenhouse} onBack={() => setCurrentScreen('greenhouses')} />;
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
        return <ActivityLog />;
      case 'reports':
        return <ReportsAnalytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

//   return (
//     <UserProfileProvider>
//       <AppLayout currentScreen={currentScreen} onNavigate={handleNavigate}>
//         {renderScreen()}
//       </AppLayout>
//       <Toaster position="top-right" />
//     </UserProfileProvider>
//   );
}
