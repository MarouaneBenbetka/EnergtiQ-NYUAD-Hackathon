'use client';

import SolarRadiance from '@/components/Dashboard/SolarRadiance';
import PowerOutput from '@/components/Dashboard/PowerOutput';
import EnergyStorage from '@/components/Dashboard/EnergyStorage';
import LatestEvents from '@/components/Dashboard/LatestEvents';
import PanelStatus from '@/components/Dashboard/PanelStatus';
import CleaningScheduleTracker from '@/components/Optimization/CleaningScheduleTracker';
import GridIntegrationMonitor from '@/components/Optimization/GridIntegrationMonitor';
import PanelPlacementAnalyzer from '@/components/Optimization/PanelPlacementAnalyzer';
import BatteryLifecycle from '@/components/Dashboard/BatteryLifecycle';
import PredictiveMaintenance from '@/components/Dashboard/PredictiveMaintenance';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        </svg>
        <h1 className="text-2xl font-bold">MySolarSystem</h1> */}
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-600 mb-6">System status in a nutshell</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SolarRadiance />
          <PowerOutput />
          <EnergyStorage />
          <LatestEvents />
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Panel Status</h2>
        <PanelStatus />
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Battery Lifecycle & Maintenance</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BatteryLifecycle />
          <PredictiveMaintenance />
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Optimization</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GridIntegrationMonitor />
          <div className="space-y-6">
            <CleaningScheduleTracker />
            <PanelPlacementAnalyzer />
          </div>
        </div>
      </div>
    </div>
  );
}