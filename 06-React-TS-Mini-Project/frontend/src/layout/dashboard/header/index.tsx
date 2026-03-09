import { useSidebar } from "../../../providers/SidebarProvider";

export const Header = () => {
  const { toggle } = useSidebar();
  
  return (
    <section
      id="header"
      className="fixed top-0 w-full right-0 md:right-80 md:w-full
          h-16 bg-red-200 flex items-center justify-between px-4
          z-30 transition-all duration-300"
    >
      <h1 className="font-bold text-lg">Header</h1>

      <button
        className="block md:hidden p-2 rounded bg-red-300"
        onClick={toggle}
      >
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
      </button>
    </section>
  );
};
