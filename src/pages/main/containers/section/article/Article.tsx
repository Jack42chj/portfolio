import React from "react";

import Section from "@/components/section/Section";
import { ARTICLE_DATA } from "@/constants/article";
import useFilter from "@/hooks/useFilter";

import * as S from "./Article.styled";
import ExternalLinkButton from "./containers/externalLinkButton/ExternalLinkButton";
import Filter from "./containers/filter/Filter";
import Paper from "./containers/paper/Paper";

const Article = () => {
  const { filteredData, selectedFilter, setSelectedFilter } =
    useFilter(ARTICLE_DATA);

  return (
    <Section id="articles" title="DEV LOGS">
      <ExternalLinkButton />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <S.PaperWrapper>
        {filteredData.map((item) => (
          <Paper key={item.title} data={item} />
        ))}
      </S.PaperWrapper>
    </Section>
  );
};

export default Article;
