import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-10 pb-6">
      <h1 className="text-5xl md:text-7xl mb-3 md:mb-4 font-medium">
        Greg Guditus
      </h1>
      <p className="text-2xl md:text-3xl mb-3 font-bold">
        Web & Software Developer
      </p>
      <p className="text-base md:text-lg max-w-xl mb-6 font-semibold">
        An aspiring developer with nearly 2 years of industry experience and 4
        years of studying in a Bachelor's of Science Computer Science program at
        a leading university.
      </p>
    </div>
  );
}

export default Intro;
