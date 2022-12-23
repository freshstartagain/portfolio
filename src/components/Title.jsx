import React from "react";
import PropTypes from "prop-types";

function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className="mb-5 text-2xl font-bold text-stone-900 underline decoration-4 underline-offset-8 dark:text-white"
    >
      {children}
    </h1>
  );
}

Title.propTypes = {
  children: PropTypes.any,
  id: PropTypes.any,
};

Title.defaultProps = {
  children: "",
  id: "",
};

export default Title;
