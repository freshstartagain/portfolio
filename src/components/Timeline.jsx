import React, { forwardRef } from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

const Timeline = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="my-20 flex flex-col justify-center md:flex-row">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {timeline.map((item) => (
          <TimelineItem
            key={item.id}
            year={item.year}
            title={item.title}
            company={item.company}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
});

Timeline.displayName = "Timeline";

export default Timeline;
