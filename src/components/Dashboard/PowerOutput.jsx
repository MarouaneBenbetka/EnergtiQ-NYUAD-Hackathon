'use client';

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { powerOutputData } from '@/lib/data';

Chart.register(...registerables);

const PowerOutput = () => {
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
          type: 'line',
          data: {
            labels: powerOutputData.map(d => d.time === 0 ? 'Now' : `${d.time}s`),
            datasets: [{
              label: 'Power Output (kW)',
              data: powerOutputData.map(d => d.output),
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 2,
              tension: 0.1,
              fill: true
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                max: 0.5,
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
      <h3 className="font-semibold text-lg mb-2">Power Output</h3>
      <p className="text-sm text-gray-600 mb-4">Power output by the inverter.</p>
      <div className="h-48">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default PowerOutput;