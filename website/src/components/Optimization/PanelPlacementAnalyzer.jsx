'use client';

import { useState } from 'react';

const PanelPlacementAnalyzer = () => {
  const [budget, setBudget] = useState(5000);
  const [roofSize, setRoofSize] = useState(50);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">Panel Placement Analyzer</h3>
      
      <div className="mb-6 border rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-50 border-b">
          <h4 className="font-medium">UAE Sunlight Intensity Map</h4>
        </div>
        <div className="p-4">
          {/* Placeholder for the heatmap */}
          <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
            <p className="text-gray-600">UAE map with sunlight intensity heatmap</p>
          </div>
          <p className="text-xs text-gray-500 mt-2">Data source: NASA POWER</p>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium mb-3">Adjustment Parameters</h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Budget (AED)</label>
            <div className="flex items-center">
              <input
                type="range"
                min="1000"
                max="20000"
                step="500"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="ml-3 text-sm font-medium">{budget} AED</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Roof Size (m²)</label>
            <div className="flex items-center">
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={roofSize}
                onChange={(e) => setRoofSize(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="ml-3 text-sm font-medium">{roofSize} m²</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium text-blue-700 mb-2">AI Recommendations</h4>
        <ul className="list-disc pl-5 text-sm text-blue-800 space-y-1">
          <li>Optimal panel count: 8 panels</li>
          <li>Recommended orientation: South-facing, 25° tilt</li>
          <li>Estimated annual production: 5,840 kWh</li>
          <li>Estimated ROI: 4.2 years</li>
        </ul>
      </div>
    </div>
  );
};

export default PanelPlacementAnalyzer;