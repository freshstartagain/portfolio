import React from "react";
import PropTypes from "prop-types";

function TimelineItem({ year, title, company, duration, details }) {
  return (
    <ol className="relative flex flex-col border-l border-[#85586F] dark:border-[#5C527F] md:flex-row">
      <li className="mb-10 ml-4">
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-[#85586F] bg-[#85586F] dark:border-[#5C527F] dark:bg-[#5C527F]" />
        <p className="flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm">
          <span className="inline-block rounded-md bg-[#BF9270] px-2 py-1 font-semibold text-white dark:bg-white dark:text-stone-900">
            {year}
          </span>
          <span className="inline-block rounded-md bg-[#E3B7A0] px-2 py-1 font-semibold text-white dark:bg-amber-200 dark:text-stone-900">
            {company}
          </span>
          <span className="text-lg font-semibold text-stone-900 dark:text-white">
            {title}
          </span>
          <span className="text-[#D0B8A8]dark:text-[#5C527F] my-1 text-sm font-normal leading-none">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-normal text-[#85586F] dark:text-[#6E85B2]">
          {details}
        </p>
      </li>
    </ol>
  );
}

TimelineItem.propTypes = {
  year: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  duration: PropTypes.string,
  details: PropTypes.string,
};

TimelineItem.defaultProps = {
  year: "",
  title: "",
  company: "",
  duration: "",
  details: "",
};

export default TimelineItem;
