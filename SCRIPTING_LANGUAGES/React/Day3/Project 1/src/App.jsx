import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
        <div>
          <img
            class="size-48 shadow-xl rounded-md"
            alt=""
            src="1093511.png"
          />
        </div>
        <div class="flex items-center md:items-start">
          <span class="text-2xl font-medium">Class Warfare</span>
          <span class="font-medium text-sky-500">The Anti-Patterns</span>
          <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
