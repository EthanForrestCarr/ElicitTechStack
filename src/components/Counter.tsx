import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log('Counter component rendered'); // <-- See when it re-renders!

  return (
    <div className="flex items-center space-x-4">
      <button 
        onClick={() => setCount((prev) => prev + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
      <span className="text-lg font-medium">Count: {count}</span>
    </div>
  );
};

export default Counter;
