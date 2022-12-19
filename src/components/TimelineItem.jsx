import React from "react";

function TimelineItem({ year, title, company, duration, details }) {
  return (
    <ol className="border-l border-stone-200 dark:border-stone-700 flex flex-col md:flex-row relative">
      <li className="mb-10 ml-4">
        <div className="absolute border border-white w-3 h-3 bg-stone-200 dark:border-stone-900 dark:bg-stone-700 mt-1.5 -left-1.5 rounded-full" />
        <p className="flex flex-wrap flex-row gap-4 items-center justify-start md:text-sm text-xs">
          <span className="bg-stone-900 dark:text-stone-900 dark:bg-white font-semibold inline-block px-2 py-1 rounded-md text-white">
            {year}
          </span>
          <span className="bg-stone-900 dark:text-stone-900 dark:bg-amber-100 font-semibold inline-block px-2 py-1 rounded-md text-white">
            {company}
          </span>
          <h3 className="dark:text-white font-semibold text-lg text-stone-900">
            {title}
          </h3>
          <div className="dark:text-stone-500 font-normal leading-none my-1 text-sm text-stone-400">
            {duration}
          </div>
        </p>
        <p className="dark:text-stone-400 font-normal my-2 text-base text-stone-500">
          {details}
        </p>
      </li>
    </ol>
  );
}

export default TimelineItem;
