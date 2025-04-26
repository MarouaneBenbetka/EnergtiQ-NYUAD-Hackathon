'use client';

import { useState } from 'react';

const CleaningScheduleTracker = () => {
  const [currentMonth] = useState(new Date().getMonth());
  const [currentYear] = useState(new Date().getFullYear());
  
  // Generate some dummy cleaning dates
  const cleaningDates = [
    new Date(currentYear, currentMonth, 10),
    new Date(currentYear, currentMonth, 25),
    new Date(currentYear, currentMonth + 1, 8),
  ];
  
  // Generate calendar days for current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });
  
  // Check if a day has a cleaning scheduled
  const hasCleaningScheduled = (day) => {
    return cleaningDates.some(date => 
      date.getDate() === day && 
      date.getMonth() === currentMonth && 
      date.getFullYear() === currentYear
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h3 className="font-semibold text-lg mb-4">Cleaning Schedule Tracker</h3>
      
      <div className="mb-4">
        <h4 className="text-center font-medium text-gray-700 mb-2">
          {monthName} {currentYear}
        </h4>
        
        <div className="grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
              {day}
            </div>
          ))}
          
          {/* Empty cells for days before the first day of month */}
          {Array.from({ length: firstDayOfMonth }, (_, i) => (
            <div key={`empty-${i}`} className="h-10"></div>
          ))}
          
          {/* Calendar days */}
          {days.map(day => (
            <div 
              key={day} 
              className={`h-10 flex items-center justify-center text-sm rounded-full ${
                hasCleaningScheduled(day) 
                  ? 'bg-blue-100 text-blue-800 font-medium' 
                  : 'text-gray-700'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <h4 className="font-medium text-gray-700">Upcoming Cleanings</h4>
        
        {cleaningDates.map((date, index) => (
          <div key={index} className="flex items-center p-2 bg-blue-50 rounded">
            <div className="bg-blue-100 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">
                {date.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-xs text-gray-500">
                {index === 0 ? 'Clean panels in 3 days!' : 'Regular maintenance'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CleaningScheduleTracker;