import React from "react";
import PropTypes from "prop-types";

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

Title.propTypes = {
  children: PropTypes.any,
  id: PropTypes.any,
};

Title.defaultProps = {
  children: "",
  id: "",
};

export default Title;
