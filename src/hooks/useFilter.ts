import { useMemo, useState } from "react";

import type { ArticleItem, FilterType } from "@/types";

const useFilter = (data: ArticleItem[]) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("react");

  const filteredData = useMemo(() => {
    return data.filter((item) => item.type === selectedFilter);
  }, [data, selectedFilter]);

  return { filteredData, selectedFilter, setSelectedFilter };
};

export default useFilter;
