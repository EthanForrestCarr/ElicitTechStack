import Counter from './components/Counter';
import LayoutDemo from './components/LayoutDemo';
import WorkerDemo from './components/WorkerDemo';
import TailwindCard from './components/TailwindCard';

function App() {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">

      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Tailwind is Working!</h1>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center">Elicit Demo</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. React Re-Render Demo</h2>
        <Counter />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Flexbox vs Grid Demo</h2>
        <LayoutDemo />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Web Worker Demo</h2>
        <WorkerDemo />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Tailwind Drop Shadow Demo</h2>
        <TailwindCard />
      </section>
    </div>
  );
}

export default App;