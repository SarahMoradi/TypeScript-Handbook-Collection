import { useSidebar } from "../../../providers/SidebarProvider";

export const SideBar = () => {
  const { isOpen, close } = useSidebar();

  return (
    <aside
      className={`fixed top-0 right-0 h-screen w-80 bg-blue-400 px-4 z-50
          transform transition-transform duration-300 ease-in-out md:translate-x-0
          ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}`}
    >
      <div className="py-4">
        <h2 className="text-xl font-semibold mb-10">Sidebar</h2>

        <p>Menu Item</p>
        <p>Menu Item</p>
        <p>Menu Item</p>
      </div>
      <button
        onClick={close}
        className="block md:hidden mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        بستن
      </button>
    </aside>
  );
};
