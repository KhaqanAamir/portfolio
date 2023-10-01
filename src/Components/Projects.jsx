import React from "react";

const ProjectItems = (props) => {
  const { specialTitle, cardSubtitle, description, repolink, linktowebsite } =
    props;
  return (
    <a href={repolink}>
      <div className="md:max-w-[18rem] bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 font-bold py-2 px-4 rounded-xl m-4 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]Wx` ">
        <div className="p-6">
          <h5 className="mb-1 text-xl font-medium leading-tight text-slate-300 dark:text-neutral-50">
            {specialTitle}
          </h5>
          <h6 className="mb-2 text-base font-medium leading-tight text-neutral-500 dark:text-neutral-50">
            {cardSubtitle}
          </h6>
          <p className="mb-4 text-base  leading-normal text-neutral-600 dark:text-neutral-200">
            {description}
          </p>
          <a
            type="button"
            href={linktowebsite}
            className="pointer-events-auto mr-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 border p-2"
          >
            Link
          </a>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  return (
    <div className="m-8" id="projects">
      <h1 className="mb-8 text-white text-4xl">Open Source Projects</h1>
      <div className="flex justify-around flex-col md:flex-row">
        <ProjectItems
          specialTitle="DocRising"
          cardSubtitle="FYP Project"
          description="Online Doctor Appointment System"
          repolink="https://github.com/KhaqanAamir/docrising-project"
          linktowebsite="https://github.com/KhaqanAamir/docrising-project"
        />
        <ProjectItems
          specialTitle="CreationNetwork.AI"
          cardSubtitle="FYP Project"
          description="This project consists of many AI tools like AI copywriting tool, voice over, design studio, image generator, transcriber, voice replicator and many more are in progress"
          repolink="https://github.com/KhaqanAamir/CreationNetwork2.AI"
          linktowebsite="https://creation-network-ai.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
