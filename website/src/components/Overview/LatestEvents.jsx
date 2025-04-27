import { latestEvents } from '@/lib/data';

const LatestEvents = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center mb-2">
        <span className="text-gray-800 mr-2">🕒</span>
        <h3 className="font-semibold text-lg">Latest Events</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">Latest events involving the system.</p>
      <ul className="space-y-3">
        {latestEvents.map((event, index) => (
          <li key={index} className="flex items-center">
            <div className="bg-green-100 rounded-full p-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500">Today at {event.time}</p>
              <p className="text-sm">{event.event}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestEvents;