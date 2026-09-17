import React from "react";

import Section from "@/components/section/Section";
import { TIMELINE_DATA } from "@/constants/experience";

import Timeline from "./containers/timeline/Timeline";

const Experience = () => {
  return (
    <Section id="experience" title="EXPERIENCE">
      <Timeline>
        {TIMELINE_DATA.map((item) => (
          <Timeline.Item
            key={item.place}
            year={item.year}
            role={item.role}
            place={item.place}
            details={item.details}
          />
        ))}
      </Timeline>
    </Section>
  );
};

export default Experience;
