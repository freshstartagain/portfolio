import React, { forwardRef } from "react";

const Intro = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center pb-6 pt-20 text-center"
    >
      <h1 className="mb-1 text-7xl font-bold dark:text-white">Lester</h1>
      <p className="mb-3 text-base text-xl font-medium text-[#85586F] dark:text-[#5C527F]">
        Software & Data Engineer
      </p>
      <p className="text-md max-w-xl font-bold dark:text-white">
        Hi, my name is Lester, and I am a software and data engineer with a diverse background across various industries. 
        I have spent most of my career working in startups and medium-sized companies, where I have developed and 
        maintained software systems and delivered data solutions using a wide range of technologies.
        <br />
        <br />I specialize in backend development and cloud services, leveraging my skills to build scalable, reliable, 
        and efficient systems. With my experience, I am confident in my ability to contribute 
        to any team and drive successful projects to completion.
      </p>
    </div>
  );
});

Intro.displayName = "Intro";

export default Intro;
