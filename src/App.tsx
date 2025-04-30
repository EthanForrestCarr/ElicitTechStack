import Counter from './components/Counter';
import LayoutDemo from './components/LayoutDemo';
import WorkerDemo from './components/WorkerDemo';
import TailwindCard from './components/TailwindCard';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col items-center justify-center">
        <br />
        <br />
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
    </>
  );
}

export default App;