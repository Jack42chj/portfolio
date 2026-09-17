import { useState } from "react";

const useDrawer = () => {
  const [drawer, setDrawer] = useState<string | null>(null);

  const handleDrawerOpen = (title: string): void => setDrawer(title);
  const handleDrawerClose = (): void => setDrawer(null);

  return { drawer, handleDrawerOpen, handleDrawerClose };
};

export default useDrawer;
