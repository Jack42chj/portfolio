import React, { useEffect, MouseEvent } from "react";

import Portal from "@/components/portal/Portal";

import * as S from "./DrawerPortal.styled";
import Drawer from "./Drawer";

interface DrawerProps {
  project: string | null;
  handleDrawerClose: () => void;
}

const DrawerPortal = ({ project, handleDrawerClose }: DrawerProps) => {
  const mounted: boolean = project !== null;
  const handleDimClick = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) handleDrawerClose();
  };

  useEffect(() => {
    if (!mounted) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted]);

  return (
    <Portal container="#drawer-root" mounted={mounted}>
      <S.Dim onClick={handleDimClick}>
        <Drawer project={project} handleDrawerClose={handleDrawerClose} />
      </S.Dim>
    </Portal>
  );
};

export default DrawerPortal;
