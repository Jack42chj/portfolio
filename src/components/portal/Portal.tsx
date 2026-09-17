import type { ReactNode } from "react";

import { createPortal } from "react-dom";

interface PortalProps {
  container: string;
  mounted: boolean;
  children: ReactNode;
}

const Portal = ({ children, container, mounted }: PortalProps) => {
  const portal = document.querySelector(container);

  if (!mounted || !portal) return null;

  return createPortal(children, portal);
};

export default Portal;
