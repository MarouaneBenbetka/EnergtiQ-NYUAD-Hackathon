'use client';

import { useState } from 'react';
import { panelStatusData } from '@/lib/data';

const PanelStatus = () => {
  const [panels, setPanels] = useState(panelStatusData);

  const togglePanel = (id) => {
    setPanels(panels.map(panel => 
      panel.id === id ? { ...panel, enabled: !panel.enabled } : panel
    ));
  };

  const enableAll = () => {
    setPanels(panels.map(panel => ({ ...panel, enabled: true })));
  };

  const disableAll = () => {
    setPanels(panels.map(panel => ({ ...panel, enabled: false })));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <h3 className="font-semibold text-lg">Panel Status</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">Status of each panel.</p>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enabled</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Panel</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Solar Radiance</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Output Voltage</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Output Current</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {panels.map(panel => (
              <tr key={panel.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      checked={panel.enabled} 
                      onChange={() => togglePanel(panel.id)}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded" 
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{panel.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{panel.radiance.toFixed(2)} kW/m²</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{panel.voltage.toFixed(2)} V</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{panel.current.toFixed(2)} A</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 flex space-x-4">
        <button 
          onClick={disableAll}
          className="px-4 py-2 bg-red-100 text-red-700 rounded-md text-sm font-medium hover:bg-red-200"
        >
          Disable All
        </button>
        <button 
          onClick={enableAll}
          className="px-4 py-2 bg-green-100 text-green-700 rounded-md text-sm font-medium hover:bg-green-200"
        >
          Enable All
        </button>
      </div>
    </div>
  );
};

export default PanelStatus;