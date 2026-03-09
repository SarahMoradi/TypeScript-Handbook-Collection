import { useSidebar } from "../providers/SidebarProvider";
import { Content } from "./dashboard/content";
import { Header } from "./dashboard/header";
import { SideBar } from "./dashboard/sidebar";

export const DashboardLayout = () => {
  const { isOpen, close } = useSidebar();

  return (
    <div className="min-h-screen">
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 md:hidden" onClick={close} />
      )}

      <SideBar />
      <Header />
      <Content />
    </div>
  );
};
