import React from "react";
import PropTypes from "prop-types";

function TimelineItem({ year, title, company, duration, details }) {
  return (
    <ol className="relative flex flex-col border-l border-stone-200 dark:border-stone-700 md:flex-row">
      <li className="mb-10 ml-4">
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-stone-200 dark:border-stone-900 dark:bg-stone-700" />
        <p className="flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm">
          <span className="inline-block rounded-md bg-stone-900 px-2 py-1 font-semibold text-white dark:bg-white dark:text-stone-900">
            {year}
          </span>
          <span className="inline-block rounded-md bg-stone-900 px-2 py-1 font-semibold text-white dark:bg-amber-100 dark:text-stone-900">
            {company}
          </span>
          <span className="text-lg font-semibold text-stone-900 dark:text-white">
            {title}
          </span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
          {details}
        </p>
      </li>
    </ol>
  );
}

TimelineItem.propTypes = {
  year: PropTypes.any,
  title: PropTypes.any,
  company: PropTypes.any,
  duration: PropTypes.any,
  details: PropTypes.any,
};

TimelineItem.defaultProps = {
  year: "",
  title: "",
  company: "",
  duration: "",
  details: "",
};

export default TimelineItem;
