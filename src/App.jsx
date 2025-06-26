import "./App.css";

import { VirtualizedList } from "./Component/virtualizedList/VirtualizedList";

function App() {
  return (
    <div className="max-w-7xl m-auto py-12 px-2">
      <h1 className="text-4xl mb-4 font-bold ml-1">React Virtualization</h1>

      <h5>
        Virtualized list with{" "}
        <code className="bg-gray-100">react-virtuoso</code> — only visible items
        are rendered for performance.
      </h5>

      <VirtualizedList />
    </div>
  );
}

export default App;
