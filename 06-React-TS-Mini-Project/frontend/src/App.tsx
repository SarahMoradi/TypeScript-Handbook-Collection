import { useState, useEffect } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSidebarOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="relative min-h-screen">
        {/* Sidebar */}
        <section
          id="sidebar"
          className={`fixed top-0 right-0 h-screen w-96 bg-blue-400 px-4 z-50
          transform transition-transform duration-300 ease-in-out md:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}`}
        >
          <div className="py-4">
            <h2 className="text-xl font-semibold mb-10">Sidebar</h2>

            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>

            <button
              onClick={() => setIsSidebarOpen(false)}
              className="block md:hidden mt-6 bg-blue-600 text-white px-4 py-2 rounded"
            >
              بستن
            </button>
          </div>
        </section>

        {/* Header */}
        <section
          id="header"
          className="fixed top-0 w-full right-0 md:right-96 md:w-[calc(100%-24rem)]
          h-16 bg-red-200 flex items-center justify-between px-4
          z-30 transition-all duration-300"
        >
          <h1 className="font-bold text-lg">Header</h1>

          <button
            className="block md:hidden p-2 rounded bg-red-300"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          </button>
        </section>

        {/* Content */}
        <section
          id="content"
          className="pt-16 md:pr-96 bg-green-500 min-h-screen transition-all duration-300"
        >
          <div className="p-4">
            <h1 className="text-lg font-semibold mb-10">content</h1>
            <p>Some page content...</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
