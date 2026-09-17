import React from "react";

import * as S from "./Card.styled";

interface CardProps {
  description: string;
  image: string;
  skills: string[];
  tag: "team" | "personal";
  title: string;
  handleCardClick: () => void;
}

const Card = ({
  description,
  image,
  skills,
  tag,
  title,
  handleCardClick,
}: CardProps) => {
  return (
    <S.Card onClick={handleCardClick}>
      <S.Image src={image} alt={title} />
      <S.Content>
        <S.Tag>{tag === "team" ? "TEAM" : "PERSONAL"} PROJECT</S.Tag>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Item>
          {skills.map((item) => (
            <S.Skill key={item}>{item}</S.Skill>
          ))}
        </S.Item>
      </S.Content>
    </S.Card>
  );
};

export default Card;
