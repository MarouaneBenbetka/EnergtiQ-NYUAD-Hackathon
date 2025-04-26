'use client';

import { useEffect, useRef } from 'react';
import { energyStorageData } from '@/lib/data';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const EnergyStorage = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        // Destroy existing chart if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        // Create new chart
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: energyStorageData.map(d => d.battery),
            datasets: [{
              label: 'Energy Storage (kWh)',
              data: energyStorageData.map(d => d.energy),
              backgroundColor: 'rgba(54, 162, 235, 0.7)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'kWh'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Battery'
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
      <div className="flex items-center mb-2">
        <span className="text-gray-800 mr-2">🔋</span>
        <h3 className="font-semibold text-lg">Energy Storage</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">Energy stored in each battery.</p>
      <div className="h-48">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default EnergyStorage;