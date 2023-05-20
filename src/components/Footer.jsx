import React from "react";

function Footer() {
  return (
    <div className="py-5 text-center">
      <a
        href="https://github.com/gguditus"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="./githubLogo.png"
          className="inline-flex items-center w-6 h-6 filter-none dark:invert hover:scale-110"
        />
      </a>
      <p className="text-sm mt-2 opacity-100 dark:opacity-70">
        &copy; {new Date().getFullYear()} Greg Guditus. All rights reserved.
      </p>{" "}
    </div>
  );
}

export default Footer;
