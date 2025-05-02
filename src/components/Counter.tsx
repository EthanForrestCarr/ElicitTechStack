import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log('Counter component rendered'); // <-- See when it re-renders!

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-semibold mb-2">React Re-Render Demo</h3>
        <p className="text-gray-700 mb-4">
          Common use cases for re-rendering:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Updating the UI in response to user interactions (e.g., button clicks).</li>
          <li>Displaying new data fetched from an API.</li>
          <li>Reacting to changes in application state (e.g., form inputs).</li>
          <li>Animating or transitioning elements based on state changes.</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setCount((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <span className="text-lg font-medium">Count: {count}</span>
      </div>
    </div>
  );
};

export default Counter;
