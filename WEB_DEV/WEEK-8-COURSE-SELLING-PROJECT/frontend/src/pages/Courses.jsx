import React from "react";
import WrapperContainer from "../components/WrapperContainer";
import { course } from "../constants/data";
import { CourseCard } from "../components/CourseCard";

const Courses = () => {
  return (
    <WrapperContainer>

      <div className="flex flex-wrap gap-5 " >

      {course.map((items, i) => (
        <div key={i} className="border-2 border-dusty rounded-2xl min-h-[300px] max-w-[300px]  " >
          <CourseCard {...items} />
        </div>
      ))}
      </div>
    </WrapperContainer>
  );
};

export default Courses;
