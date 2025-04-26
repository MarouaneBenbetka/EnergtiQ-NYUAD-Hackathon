'use client';

import { useState } from 'react';

const PredictiveMaintenance = () => {
  const [selectedComponent, setSelectedComponent] = useState('panels');
  
  // Sample maintenance predictions
  const maintenanceData = {
    panels: [
      { id: 'Panel 1', issue: 'Dust accumulation', probability: 87, recommendedAction: 'Schedule cleaning', urgency: 'Medium', estimatedDate: '2023-06-15' },
      { id: 'Panel 5', issue: 'Efficiency degradation', probability: 64, recommendedAction: 'Inspect for hotspots', urgency: 'Low', estimatedDate: '2023-07-02' },
      { id: 'Panel 3', issue: 'Connection issue', probability: 92, recommendedAction: 'Check wiring', urgency: 'High', estimatedDate: '2023-06-10' }
    ],
    batteries: [
      { id: 'Battery 3', issue: 'Capacity reduction', probability: 78, recommendedAction: 'Run diagnostics', urgency: 'Medium', estimatedDate: '2023-06-20' },
      { id: 'Battery 1', issue: 'Thermal regulation', probability: 45, recommendedAction: 'Monitor temperature', urgency: 'Low', estimatedDate: '2023-07-15' }
    ]
  };
  
  const getUrgencyColor = (urgency) => {
    switch(urgency) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-2">Predictive Maintenance</h3>
      <p className="text-sm text-gray-600 mb-4">AI-powered maintenance predictions.</p>
      
      <div className="flex space-x-2 mb-4">
        <button 
          onClick={() => setSelectedComponent('panels')}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            selectedComponent === 'panels' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Solar Panels
        </button>
        <button 
          onClick={() => setSelectedComponent('batteries')}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            selectedComponent === 'batteries' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Batteries
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Component</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Potential Issue</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Probability</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended Action</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Urgency</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {maintenanceData[selectedComponent].map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{item.issue}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${item.probability}%` }}></div>
                    </div>
                    <span>{item.probability}%</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{item.recommendedAction}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(item.urgency)}`}>
                    {item.urgency}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p className="font-medium">AI Recommendation:</p>
        <p>Schedule a maintenance check for {selectedComponent === 'panels' ? 'Panel 3' : 'Battery 3'} within the next {selectedComponent === 'panels' ? '5' : '10'} days to prevent potential issues.</p>
      </div>
    </div>
  );
};

export default PredictiveMaintenance;