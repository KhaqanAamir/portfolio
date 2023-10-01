import React from "react";

function EducationItem(props) {
  const { schoolName, degree, date, imageUrl } = props;

  return (
    <div className="mb-10">
      <div className="mb-2 flex">
        <div className="w-16 mr-4 ">
          <img src={imageUrl} alt={schoolName} className="rounded-full" />
        </div>
        <div className="bg-purple-500 w-2/4 p-4 rounded-lg">
          <div>
            <h2 className="md:text-3xl text-xl">{schoolName}</h2>
            <h6 className="md:text-xl sm:text-lg text-sm">{degree}</h6>
            <p>{date}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

function Education() {
  return (
    <>
      <div className="text-white m-6" id="education">
        <h1 style={{ fontSize: "2.7rem", fontWeight: "400" }} className="mb-8">
          Education
        </h1>
        <EducationItem
          schoolName="Aslam Foundation Model College"
          degree="FSC ~ Pre-Engineering"
          date="September 2016 - June 2018"
          imageUrl="https://www.result.pk/_images/institute/logo/2020-09/1738_1_38053.jpg"
        />

        <EducationItem
          schoolName="Foundation University"
          degree="Bachelors in Computer Science"
          date="September 2019 - June 2023"
          imageUrl="https://media.licdn.com/dms/image/C510BAQGDYKhRjfFvsw/company-logo_200_200/0/1582284790100?e=2147483647&v=beta&t=LTXGsxGYu2mLVKYfDOZyJGFan4BprdglmUAfxpGdI7Y"
        />
      </div>
    </>
  );
}

export default Education;
