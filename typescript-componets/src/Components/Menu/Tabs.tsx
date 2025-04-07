import React from "react";
import { TabsProvider } from "./TabsContent";
import { useTabs } from "./TabsContent";

const Tab = ({ id, title }: { id: string; title: string }) => {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === id;

  return (
    <button
      onClick={() => setActiveTab(id)}
      aria-selected={isActive}
    >
      {title}
    </button>
  );
};

const Tabs = ({ children }: { children: React.ReactNode }) => {
  return <TabsProvider>{children}</TabsProvider>;
};

Tabs.Tab = Tab;
export default Tabs;