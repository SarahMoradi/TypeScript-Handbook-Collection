import { DashboardLayout } from "../layout";
import { SidebarProvider } from "../providers/SidebarProvider";

function App() {
  return (
    <SidebarProvider>
      <DashboardLayout />
    </SidebarProvider>
  );
}

export default App;
