import React from "react";

import { FILTER_DATA } from "@/constants/article";
import type { FilterType } from "@/types";

import * as S from "./Filter.styled";

interface FilterProps {
  selectedFilter: FilterType;
  setSelectedFilter: (filter: FilterType) => void;
}

const Filter = ({ selectedFilter, setSelectedFilter }: FilterProps) => {
  const handleFilterSelect = (type: FilterType) => (): void =>
    setSelectedFilter(type);

  return (
    <S.Filter>
      {FILTER_DATA.map((item) => (
        <S.Chip
          key={item.key}
          type="button"
          aria-label={item.label}
          isActive={selectedFilter === item.key}
          onClick={handleFilterSelect(item.key)}
        >
          {item.label}
        </S.Chip>
      ))}
    </S.Filter>
  );
};

export default Filter;
