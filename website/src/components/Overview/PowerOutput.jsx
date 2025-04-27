'use client';

import { useEffect, useRef } from 'react';
import { powerOutputData } from '@/lib/data';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PowerOutput = () => {
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
          type: 'line',
          data: {
            labels: powerOutputData.map(d => d.time === 0 ? 'Now' : `${d.time}s`),
            datasets: [{
              label: 'Power Output (kW)',
              data: powerOutputData.map(d => d.output),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
              fill: true,
              tension: 0.1
            }]
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
                  text: 'Time'
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
        <span className="text-gray-800 mr-2">⚡</span>
        <h3 className="font-semibold text-lg">Power Output</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">Power output by the inverter.</p>
      <div className="h-48">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default PowerOutput;