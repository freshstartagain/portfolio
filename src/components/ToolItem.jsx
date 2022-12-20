import React from "react";

function ToolItem({ title }) {
  return (
    <div className="my-10 justify-center text-center">
      <h1 className="dark:text-white font-bold mb-5 text-stone-900 text-2xl">
        {title}
      </h1>
      <div className="grid grid-cols gap-4"></div>
    </div>
  );
}

export default ToolItem;
