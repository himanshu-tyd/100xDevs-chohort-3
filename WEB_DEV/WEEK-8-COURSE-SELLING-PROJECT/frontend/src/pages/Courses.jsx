import React from "react";
import WrapperContainer from "../components/WrapperContainer";
import { course } from "../constants/data";
import { CourseCard } from "../components/CourseCard";

const Courses = () => {
  return (
    <WrapperContainer containerClass={' flex items-start justify-center w-full h-full overflow-x-hidden'} >
      <div className="flex flex-wrap gap-5 justify-center md:justify-start ">
        {course.map((items, i) => (
          <CourseCard key={i} {...items} />
        ))}
      </div>
    </WrapperContainer>
  );
};

export default Courses;
