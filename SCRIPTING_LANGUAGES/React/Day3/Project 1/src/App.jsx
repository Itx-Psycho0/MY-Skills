import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="container">
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:items-start rounded-2xl bg-white shadow-lg">
        <div className="flex-shrink-0">
          <img
            className="w-48 h-48 shadow-xl rounded-md object-cover"
            alt="Class Warfare"
            src="/1093511.png"  
          />
        </div>
        <div className="flex flex-col gap-2 md:items-start items-center">
          <h2 className="text-2xl font-bold text-gray-900">Class Warfare</h2>
          <p className="font-medium text-sky-500">The Anti-Patterns</p>
          <div className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
