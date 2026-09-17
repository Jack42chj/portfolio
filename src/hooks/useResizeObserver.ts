import { useEffect, useRef, useState } from "react";

const useResizeObserver = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [currentWidth, setCurrentWidth] = useState<number>(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setCurrentWidth(entry.contentRect.width);
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, currentWidth };
};

export default useResizeObserver;
