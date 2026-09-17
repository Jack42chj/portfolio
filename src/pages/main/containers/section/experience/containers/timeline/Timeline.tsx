import React from "react";

import * as S from "./Timeline.styled";

interface TimelineProps {
  children: React.ReactNode;
}

const Timeline = ({ children }: TimelineProps) => {
  return (
    <S.Track>
      <S.Line />
      {children}
    </S.Track>
  );
};

interface TimelineItemProps {
  year: string;
  role: string;
  place: string;
  details: string[];
}

Timeline.Item = function TimelineItem({
  year,
  role,
  place,
  details,
}: TimelineItemProps) {
  return (
    <S.Item>
      <S.Dot />
      <S.Content>
        <S.Year>{year}</S.Year>
        <S.Role>{role}</S.Role>
        <S.Place>{place}</S.Place>
        <S.Details>
          {details.map((item) => (
            <S.List key={item}>{item}</S.List>
          ))}
        </S.Details>
      </S.Content>
    </S.Item>
  );
};

export default Timeline;
