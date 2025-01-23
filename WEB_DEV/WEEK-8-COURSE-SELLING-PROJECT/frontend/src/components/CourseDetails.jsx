import React from "react";
import { useFechCourses } from "../hooks/useFetchCourse";
import { Link, useLocation } from "react-router-dom";
import Error from "./Error";
import Loader from "./Loader";
import {
  ArrowLeft,
  ChevronLeft,
  Clock,
  DollarSign,
  GraduationCap,
} from "lucide-react";
import Button from "./Button";

const CourseDetails = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];

  const {
    data: courseData,
    error,
    loading,
  } = useFechCourses(`/api/course/${id}`);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="w-full flex flex-col ">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col w-full">
          {/* title */}
          <header className="w-full flex-col gap-2 h-[140px] bg-slate-950 flex justify-center px-10 ">
            <button
              onClick={() => window.history.back()}
              className="text-slate-500 flex items-center gap-2 group hover:text-slate-400 transition-all "
            >
              {" "}
              <ChevronLeft className=" w-5 h-5  inline-block font-clash-regular group-hover:-translate-x-1 duration-150 " />{" "}
              Back to Courses
            </button>
            <h3 className="text-white text-xl  md:text-2xl font-clash-semibold  ">
              {courseData?.title}
            </h3>
          </header>

          {/* about couser */}

          <div className="flex-col-reverse lg:flex-row flex  justify-between p-2 md:p-8 ">
            <div className="px-5 py-3">
              <span className="font-clash-bold text-xl  ">
                About This Course
              </span>
              <p className="font-clash-light  text-[14px] text-gray  ">
                {courseData?.desc}
              </p>

              <div className="flex flex-col mt-5 gap-2">
                <span className="font-clash-semibold font-xl">
                  You Instructor
                </span>
                <div className="flex gap-4 w-full ">
                  <img
                    src="https://yt3.googleusercontent.com/C25u3DcSguL-wd3GaO110Q1fyO5ClTraTjtF72kJhZtpQwuAv3zLmb7K-ZLJecQQJBVvP1McmA=s900-c-k-c0x00ffffff-no-rj"
                    height={50}
                    width={50}
                  />
                  <div className="flex flex-col font-clash-regular">
                    <span className=" ">Harkirat</span>
                    <p className="text-slate-700 ">Senior Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* image price  */}

            <div className="flex flex-col w-full gap-5 font-clash-regular ">
              <img src={courseData?.imageUrl} className="rounded-md" />
              <div className="w-full border border-slate-400 px-8 py-3 rounded-md  ">
                <h3 className="font-clash-semibold text-2xl  ">
                  {" "}
                  &#8377; {courseData?.price}
                </h3>
                <p className="text-[12px] text-gray ">
                  One-time purchase, lifetime access
                </p>
                <ul className="space-y-2 text-sm mt-5">
                  <li className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>1 Year</span>
                  </li>
                  <li className="flex items-center">
                    <GraduationCap className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Advance</span>
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>30-day money-back guarantee</span>
                  </li>
                </ul>

                <div className="mt-5 w-full">
                  <Button lable={"Purchase Now "} containerClass={"bg-black text-white rounded-full w-full "}  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
