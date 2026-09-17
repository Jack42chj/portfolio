import React from "react";

import { NewWindowIcon } from "@/assets";
import { FILTER_DATA } from "@/constants/article";
import type { ArticleItem, FilterType } from "@/types";

import * as S from "./Paper.styled";

interface PaperProps {
  data: ArticleItem;
}

const Paper = ({ data }: PaperProps) => {
  const findKeyPair = (type: FilterType): string => {
    const findKey = FILTER_DATA.find((item) => item.key === type);

    return findKey ? findKey.label : "";
  };

  return (
    <S.Paper href={data.link} rel="noopener noreferrer" target="_blank">
      <S.IconTag>
        <S.Icon type={data.type}>
          <data.icon />
        </S.Icon>
        <S.Tag>{findKeyPair(data.type)}</S.Tag>
      </S.IconTag>
      <S.Title>{data.title}</S.Title>
      <S.Desc>{data.desc}</S.Desc>
      <NewWindowIcon css={S.icon} />
    </S.Paper>
  );
};

export default Paper;
