'use client';

import { useEffect, useRef } from 'react';
import { solarRadianceData } from '@/lib/data';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const SolarRadiance = () => {
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
            labels: solarRadianceData.map(d => d.panel),
            datasets: [{
              label: 'Solar Radiance (kW/m²)',
              data: solarRadianceData.map(d => d.radiance),
              backgroundColor: 'rgba(75, 192, 75, 0.7)',
              borderColor: 'rgba(75, 192, 75, 1)',
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
                  text: 'kW/m²'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Panel'
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
        <span className="text-gray-800 mr-2">☀️</span>
        <h3 className="font-semibold text-lg">Solar Radiance</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">Solar radiance at each panel.</p>
      <div className="h-48">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default SolarRadiance;