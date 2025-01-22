import WrapperContainer from "../components/WrapperContainer";
import { course } from "../constants/data";
import { CourseCard } from "../components/CourseCard";

import Loader from "../components/Loader";
import { useFetch } from "../hooks/useFetchData";
import { useStore } from "zustand";

const Courses = () => {
  const { data, loading, error } = useFetch("/api/course");
  const {courses, setCourses}=useStore()


  setCourses(data)

  console.log(courses)



  console.log(courses.data);

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
          <div className="flex flex-wrap gap-5 justify-center md:justify-start ">
            {courses.data >= 0 ?
              courses?.data.map((items, i) => (
                <CourseCard key={i} {...items} />
              ))
              : 
                <p className="text-slate-700 h-dvh flex-center w-full self-center " >There are no course listed yet!</p>
             
            }
          </div>
        )}
      </WrapperContainer>
    </div>
  );
};

export default Courses;
