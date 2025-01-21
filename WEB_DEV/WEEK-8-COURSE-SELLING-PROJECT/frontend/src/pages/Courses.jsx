import WrapperContainer from "../components/WrapperContainer";
import { course } from "../constants/data";
import { CourseCard } from "../components/CourseCard";

import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFetchData";

const Courses = () => {
  const { data: courses, loading, error } = useFetch("/api/course");

  return (
    <div className="flex">
      <WrapperContainer
        containerClass={
          " flex items-start justify-center w-full h-full overflow-x-hidden"
        }
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            {error ? (
              <div className="w-full h-full flex-center text-red-500">
                {error}
              </div>
            ) : (
              <div className="flex flex-wrap gap-5 justify-center md:justify-start ">
                {course.map((items, i) => (
                  <CourseCard key={i} {...items} />
                ))}
              </div>
            )}
          </>
        )}
      </WrapperContainer>
    </div>
  );
};

export default Courses;
