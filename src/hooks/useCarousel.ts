import { useEffect, useState } from "react";

import { PROJECT_DATA } from "@/constants/project";

const useCarousel = () => {
  const [index, setIndex] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(1);

  useEffect(() => {
    const updateVisibleCount = (): void => {
      const width = window.innerWidth;

      setVisibleCount(width >= 720 ? 3 : width >= 540 ? 2 : 1);
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const maxIndex = Math.max(PROJECT_DATA.length - visibleCount, 0);
  const isPrevDisabled = index === 0;
  const isNextDisabled = index >= maxIndex;

  const handleNext = (): void =>
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  const handlePrev = (): void => setIndex((prev) => Math.max(prev - 1, 0));

  return { index, isNextDisabled, isPrevDisabled, handleNext, handlePrev };
};

export default useCarousel;
