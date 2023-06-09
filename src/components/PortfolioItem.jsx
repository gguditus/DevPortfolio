import React from "react";

function PortfolioItem({ title, imgUrl, techStack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-700 dark:border-stone-300 rounded-lg overflow-hidden hover:scale-105 hover:border-4"
    >
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {techStack.map((item) => (
            <span className="inline-block px-2 py-1 font-medium border-2 border-stone-800 dark:border-stone-400 rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;
