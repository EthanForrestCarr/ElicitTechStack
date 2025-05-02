import { useState } from 'react';

// TypeScript needs a way to import workers
/// <reference types="vite/client" />

const WorkerDemo = () => {
  const [result, setResult] = useState<number[]>([]);

  const handleStartWorker = () => {
    const worker = new Worker(new URL('../workers/heavyWork.ts', import.meta.url), {
      type: 'module'
    });

    worker.postMessage(10000); // Find primes up to 10,000

    worker.onmessage = (event) => {
      setResult(event.data);
      worker.terminate();
    };
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-2">Web Worker Demo</h3>
      <p className="text-gray-700 mb-4">
        A Web Worker to calculate all prime numbers up to 10,000.
      </p>
      <button 
        onClick={handleStartWorker}
        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
      >
        Start Heavy Work
      </button>

      <div className="text-sm text-gray-700">
        {result.length > 0 ? `Found ${result.length} prime numbers!` : 'No results yet.'}
      </div>
    </div>
  );
};

export default WorkerDemo;
