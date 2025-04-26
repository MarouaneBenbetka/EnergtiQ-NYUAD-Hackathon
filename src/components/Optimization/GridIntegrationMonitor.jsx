'use client';

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const GridIntegrationMonitor = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        // Destroy existing chart if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        // Create mock data for energy distribution vs demand
        const hours = Array.from({ length: 24 }, (_, i) => i);
        const solarProduction = hours.map(hour => {
          if (hour >= 6 && hour <= 18) {
            return Math.sin((hour - 6) * Math.PI / 12) * 5 + Math.random();
          }
          return 0;
        });
        
        const demand = hours.map(hour => {
          if (hour >= 7 && hour <= 9) return 3 + Math.random();
          if (hour >= 18 && hour <= 22) return 4 + Math.random();
          return 1 + Math.random();
        });
        
        // Create new chart
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: hours.map(h => `${h}:00`),
            datasets: [
              {
                label: 'Solar Production (kW)',
                data: solarProduction,
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderColor: 'rgb(255, 205, 86)',
                borderWidth: 2,
                tension: 0.3
              },
              {
                label: 'Energy Demand (kW)',
                data: demand,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 2,
                tension: 0.3
              }
            ]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'kW'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Time of Day'
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
      <h3 className="font-semibold text-lg mb-4">Grid Integration Monitor</h3>
      
      <div className="h-64 mb-4">
        <canvas ref={chartRef}></canvas>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-md mb-2">Load Balancing Tips:</h4>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Shift non-essential consumption to high solar production hours (10AM-2PM)</li>
          <li>Consider battery storage to capture excess production</li>
          <li>Reduce consumption during peak demand hours (6PM-9PM)</li>
        </ul>
      </div>
    </div>
  );
};

export default GridIntegrationMonitor;