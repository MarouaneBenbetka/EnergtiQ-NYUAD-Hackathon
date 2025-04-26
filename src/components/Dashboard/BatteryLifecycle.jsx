'use client';

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BatteryLifecycle = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        // Sample data for battery lifecycle
        const batteries = [
          { id: 1, installDate: '2023-01-15', cycleCount: 320, healthPercent: 92, estimatedLifeRemaining: '4.2 years' },
          { id: 2, installDate: '2023-01-15', cycleCount: 305, healthPercent: 94, estimatedLifeRemaining: '4.3 years' },
          { id: 3, installDate: '2022-06-10', cycleCount: 512, healthPercent: 87, estimatedLifeRemaining: '3.8 years' },
        ];
        
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: batteries.map(b => `Battery ${b.id}`),
            datasets: [
              {
                label: 'Health (%)',
                data: batteries.map(b => b.healthPercent),
                backgroundColor: batteries.map(b => {
                  if (b.healthPercent > 90) return 'rgba(75, 192, 75, 0.7)';
                  if (b.healthPercent > 80) return 'rgba(255, 205, 86, 0.7)';
                  return 'rgba(255, 99, 132, 0.7)';
                }),
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
              }
            ]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                title: {
                  display: true,
                  text: 'Health %'
                }
              }
            },
            plugins: {
              tooltip: {
                callbacks: {
                  afterLabel: function(context) {
                    const batteryIndex = context.dataIndex;
                    const battery = batteries[batteryIndex];
                    return [
                      `Installed: ${battery.installDate}`,
                      `Cycle count: ${battery.cycleCount}`,
                      `Est. remaining: ${battery.estimatedLifeRemaining}`
                    ];
                  }
                }
              }
            }
          }
        });
      }
    }
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-2">Battery Lifecycle</h3>
      <p className="text-sm text-gray-600 mb-4">Battery health and lifecycle status.</p>
      <div className="h-48">
        <canvas ref={chartRef}></canvas>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-center">
        <div className="bg-green-100 p-2 rounded">
          <p className="font-medium">Healthy</p>
          <p className="text-green-700">90-100%</p>
        </div>
        <div className="bg-yellow-100 p-2 rounded">
          <p className="font-medium">Monitor</p>
          <p className="text-yellow-700">80-89%</p>
        </div>
        <div className="bg-red-100 p-2 rounded">
          <p className="font-medium">Replace Soon</p>
          <p className="text-red-700">&lt;80%</p>
        </div>
      </div>
    </div>
  );
};

export default BatteryLifecycle;