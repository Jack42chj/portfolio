import React, { useRef } from "react";

import IconButton from "@/components/iconButton/IconButton";
import { GithubIcon, XMarkIcon } from "@/assets";
import { PROJECT_DETAIL } from "@/constants/project";

import * as S from "./Drawer.styled";

interface DrawerProps {
  project: string | null;
  handleDrawerClose: () => void;
}

const Drawer = ({ project, handleDrawerClose }: DrawerProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const selectedProject = PROJECT_DETAIL.find((item) => item.title === project);

  if (!selectedProject) return null;

  return (
    <S.Drawer ref={dialogRef}>
      <S.DrawerHeader>
        <IconButton
          css={S.button}
          ariaLabel="닫기"
          disabled={false}
          handleButtonClick={handleDrawerClose}
          Icon={XMarkIcon}
        />
      </S.DrawerHeader>
      <S.Wrapper>
        <S.Image src={selectedProject.image} alt={selectedProject.title} />
        <S.Row>
          <S.Title>{selectedProject.title}</S.Title>
          <S.Tag>
            {selectedProject.tag === "team" ? "TEAM" : "PERSONAL"} PROJECT
          </S.Tag>
        </S.Row>
        <S.Desc>{selectedProject.description}</S.Desc>
        <S.SubTitle>TECH STACK</S.SubTitle>
        <S.Item>
          {selectedProject.skills.map((item) => (
            <S.Skill key={item}>{item}</S.Skill>
          ))}
        </S.Item>
        <S.SubTitle>TECHNICAL HIGHLIGHTS</S.SubTitle>
        <S.Details>
          {selectedProject.details.map((item) => (
            <S.List key={item}>{item}</S.List>
          ))}
        </S.Details>
      </S.Wrapper>
      {(selectedProject.demo_url || selectedProject.github_url) && (
        <S.ButtonWrapper>
          {selectedProject.demo_url && (
            <S.Link
              href={selectedProject.demo_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </S.Link>
          )}
          {selectedProject.github_url && (
            <S.Link
              href={selectedProject.github_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              Github Repo
            </S.Link>
          )}
        </S.ButtonWrapper>
      )}
    </S.Drawer>
  );
};

export default Drawer;
