import React from "react";

const CertificationItems = (props) => {
  const { courseTitle, courseDescription, imageUrl, certificateurl} = props;
  return (
    <>
      <a class="block sm:ml-10 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-4 xl:w-1/5 md:w-2/6 sm:w-3/4" href={certificateurl}>
          <img
            class="rounded-t-lg h-36 w-full"
            src={imageUrl}
            alt=""
          />
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 h-16 md:h-16">
            {courseTitle}
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200 ">
            {courseDescription}
          </p>
          <button
            type="button"
            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Link to Certificate
          </button>
        </div>
      </a>
    </>
  );
};

const Certifications = () => {
  return (
    <div className="m-8" id="certifications">
    <h1 className="mb-8 text-white text-4xl">My Certifications</h1>
    <div className="text-white flex  md:justify-around md:justify-center md:flex-row flex-col">
      <CertificationItems courseTitle="PSEB IT Industry Academia Bridge Program 2022" 
      courseDescription="Completed Certification from PSEB for Mern Stack Web App Development" 
      imageUrl="data:image/jpeg;base64,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" 
      certificateurl="https://drive.google.com/file/d/1Ikmz1IPS44JAwcjGV1KyTjK4H4t1nqWK/view?usp=sharing"/>

      <CertificationItems courseTitle="From Coursera 2023" 
      courseDescription="Complete Certification by Meta of Basic Introduction to Frontned" 
      imageUrl="data:image/png;base64,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" 
      certificateurl="https://drive.google.com/file/d/1E9hl2Clo5a0NUAjZ_5Ls2hnj2NH43Mpf/view?usp=sharing"/>

      <CertificationItems courseTitle="From Coursera 2023" 
      courseDescription="Complete Certification by Meta of React and Javascript" 
      imageUrl="data:image/png;base64,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" 
      certificateurl="https://drive.google.com/file/d/1tkOOOF_tWdkep9lBafX8Lz5TOR-8MkqH/view?usp=drive_link"/>
    </div>
    </div>
  );
};

export default Certifications;
