'use client';

import { useState } from 'react';
import { panelStatusData } from '@/lib/data';

const PanelTable = () => {
  const [panels, setPanels] = useState(panelStatusData);

  const togglePanel = (number) => {
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
        <span className="text-gray-800 mr-2">📊</span>
        <h3 className="font-semibold text-lg">Panel Status</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">Status of each panel.</p>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Enabled
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Panel
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Solar Radiance
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Output Voltage
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Output Current
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {panels.map((panel) => (
              <tr key={panel.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={panel.enabled}
                      onChange={() => togglePanel(panel.id)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {panel.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {panel.radiance.toFixed(2)} kW/m²
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {panel.voltage.toFixed(2)} V
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {panel.current.toFixed(2)} A
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 flex space-x-4">
        <button
          onClick={disableAll}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Disable All
        </button>
        <button
          onClick={enableAll}
          className="px-4 py-2 border border-green-500 rounded-md text-sm font-medium text-white bg-green-500 hover:bg-green-600"
        >
          Enable All
        </button>
      </div>
    </div>
  );
};

export default PanelTable;