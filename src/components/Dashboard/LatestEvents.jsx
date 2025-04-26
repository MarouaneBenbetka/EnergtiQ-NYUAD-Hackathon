'use client';

import { latestEvents } from '@/lib/data';

const LatestEvents = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-2">Latest Events</h3>
      <p className="text-sm text-gray-600 mb-4">Latest events involving the system.</p>
      
      <div className="space-y-3">
        {latestEvents.map((event, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-xs text-gray-500">Today at {event.time}</p>
              <p className="text-sm">{event.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestEvents;