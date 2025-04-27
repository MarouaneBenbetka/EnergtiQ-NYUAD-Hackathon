'use client';

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { solarRadianceData } from '@/lib/data';

Chart.register(...registerables);

const SolarRadiance = () => {
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
            labels: solarRadianceData.map(d => d.panel),
            datasets: [{
              label: 'Solar Radiance (kW/m²)',
              data: solarRadianceData.map(d => d.radiance),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
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
      <h3 className="font-semibold text-lg mb-2">Solar Radiance</h3>
      <p className="text-sm text-gray-600 mb-4">Solar radiance at each panel.</p>
      <div className="h-48">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default SolarRadiance;