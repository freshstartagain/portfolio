import React from "react";

function Intro() {
  return (
    <div className="flex flex-col items-center justify-center pb-6 pt-20 text-center">
      <h1 className="dark:text-white font-bold mb-1 text-7xl">Lester</h1>
      <p className="font-medium text-base mb-3 text-xl">
        Software & Data Engineer
      </p>
      <p className="font-bold max-w-xl text-md">
        Hi, my name is Lester and I am a software and data engineer with a
        diverse background in different industries. I have spent most of my
        career working in the government, bank, startup, and legal analytics
        sectors, where I have developed and maintained software systems and
        delivered data solutions using a wide range of technologies.
        <br /><br />I have a unique ability to switch between software and data
        engineering, which allows me to tackle complex challenges and create
        innovative solutions. I am confident that I can contribute to any team
        and help drive successful projects.
      </p>
    </div>
  );
}

export default Intro;
