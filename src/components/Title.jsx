import React from "react";

function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className="dark:text-white decoration-4 font-bold mb-5 text-stone-900 text-2xl underline underline-offset-8"
    >
      {children}
    </h1>
  );
}

export default Title;
