import './App.css';
import { DynamicDieFace } from './components/dynamic-die-face';

function App() {

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-10 lg:px-24 lg:py-10 min-h-screen bg-gray-400">
      <DynamicDieFace />
      <DynamicDieFace />
      <DynamicDieFace />
      <DynamicDieFace />
      <DynamicDieFace />
      <DynamicDieFace />
      </div>
  );
}

export default App;
