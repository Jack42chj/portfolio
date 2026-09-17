import React from "react";

import Section from "@/components/section/Section";
import { PROJECT_DATA } from "@/constants/project";
import useCarousel from "@/hooks/useCarousel";
import useDrawer from "@/hooks/useDrawer";

import * as S from "./Project.styled";
import Card from "./containers/card/Card";
import DrawerPortal from "./containers/drawer/DrawerPortal";
import IconButton from "./containers/iconButton/IconButton";

const Project = () => {
  const { index, isNextDisabled, isPrevDisabled, handleNext, handlePrev } =
    useCarousel();
  const { drawer, handleDrawerClose, handleDrawerOpen } = useDrawer();

  return (
    <Section id="projects" title="PROJECT HIGHLIGHTS">
      <IconButton
        isNextDisabled={isNextDisabled}
        isPrevDisabled={isPrevDisabled}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <S.Wrapper>
        <S.Track index={index}>
          {PROJECT_DATA.map((item) => (
            <S.CardWrapper key={item.title}>
              <Card
                description={item.description}
                title={item.title}
                tag={item.tag}
                image={item.image}
                skills={item.skills}
                handleCardClick={() => handleDrawerOpen(item.title)}
              />
            </S.CardWrapper>
          ))}
        </S.Track>
      </S.Wrapper>
      <DrawerPortal project={drawer} handleDrawerClose={handleDrawerClose} />
    </Section>
  );
};

export default Project;
