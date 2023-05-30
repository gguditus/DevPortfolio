import React from "react";

function TimelineItem({ year, title, duration, details }) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-400 dark:border-stone-600">
      <li className="mb0-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-500 rounded-full mt-2.5 -left-1.5 border border-stone-800 dark:border-stone-200" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-stone-100 dark:text-stone-900 bg-stone-800 dark:bg-stone-200 rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-200">
            {title}
          </h3>
          <div className="my-3 text-sm font-normal leading-none text-stone-600 dark:text-stone-300">
            {duration}
          </div>
        </p>
        <p className="my-3 text-base font-normal text-stone-800 dark:text-stone-400">
          {details}
        </p>
      </li>
    </ol>
  );
}

export default TimelineItem;
