import React from "react";
import tools from "../data/tools";
import Title from "./Title";
import ToolItem from "./ToolItem";

function Tools() {
  return (
    <div className="flex flex-col items-center justify-center my-20 pb-6">
      <div className="md:w-7/12 w-full">
        <Title>Tools</Title>
        {tools.map((tool) => (
          <ToolItem
            title={tool.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Tools;
