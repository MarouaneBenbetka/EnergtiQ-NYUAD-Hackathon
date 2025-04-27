'use client';

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { energyStorageData } from '@/lib/data';

Chart.register(...registerables);

const EnergyStorage = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: energyStorageData.map(d => d.battery),
            datasets: [{
              label: 'Energy Stored (kWh)',
              data: energyStorageData.map(d => d.energy),
              backgroundColor: 'rgba(153, 102, 255, 0.6)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                max: 15,
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
            },
            plugins: {
              legend: {
                display: false
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
      <h3 className="font-semibold text-lg mb-2">Energy Storage</h3>
      <p className="text-sm text-gray-600 mb-4">Energy stored in each battery.</p>
      <div className="h-48">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default EnergyStorage;