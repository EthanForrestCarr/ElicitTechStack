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
        <h1 className="text-4xl font-bold text-white text-center">Welcome to the Elicit Tech Stack Demo</h1>
        <p className="text-lg text-white mt-4">Scroll down to explore</p>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Demos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div id="react-re-render" className="scroll-mt-20 p-4 rounded-lg shadow-md bg-gradient-to-br from-purple-200 to-blue-200">
              <Counter />
            </div>

            <div id="flexbox-vs-grid" className="scroll-mt-20 p-4 rounded-lg shadow-md bg-gradient-to-br from-purple-200 to-blue-200">
              <LayoutDemo />
            </div>

            <div id="web-worker" className="p-4 rounded-lg shadow-md bg-gradient-to-br from-purple-200 to-blue-200">
              <WorkerDemo />
            </div>

            <div id="tailwind-card" className="p-4 rounded-lg shadow-md bg-gradient-to-br from-purple-200 to-blue-200">
              <TailwindCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;