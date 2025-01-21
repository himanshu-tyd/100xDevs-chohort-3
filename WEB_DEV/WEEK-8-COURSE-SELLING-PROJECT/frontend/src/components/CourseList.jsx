import { Ellipsis, Loader2Icon } from "lucide-react";
import { useFetch } from "../hooks/useFetchData";

const CourseList = () => {
  const {
    data: adminCourseList,
    error,
    loading,
  } = useFetch("/api/admin/courses");


  if (error) {
    return (
      <div className="flex-center h-dvh  ">
        <span className="text-red-500">{error}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 text-gray font-clash-regular border-2 py-2 px-4 md:py-4 md:px-2 rounded-md ">
      <div className="flex items-center justify-between p-2 w-full border-b   ">
        <div className="max-width">
          <p>Title</p>
        </div>

        <div className="max-width">
          <p>Description</p>
        </div>
        <div className="max-width">
          <p>Price</p>
        </div>

        <div className="max-width">
          <p>Action</p>
        </div>
      </div>

      <div className="flex flex-col  ">
        {!loading ? (
          adminCourseList.data>0 ? adminCourseList.data?.map((items) => (
            <div
              key={items?._id}
              className="flex justify-between space-y-2   items-center text-slate-900 text-[12px] "
            >
              <div className="max-width  ">
                <p className="capitalize max-width font-clash-semibold ">
                  {items.title}
                </p>
              </div>
              <div className="max-width  ">
                <p className="">{items.description}</p>
              </div>
              <div className="max-width  ">
                <p>&#8377; {items.price}</p>
              </div>

              <div className="max-width text-center  p-1   ">
                <Ellipsis className="text-black hover:text-red-700 rounded-md  hover:bg-slate-200 cursor-pointer  " />
              </div>
            </div>
          )
        ) : <div className="flex-center">
            You have not created any course yet!
        </div>
        ) : (
          <Loader2Icon className="self-center animate-spin " />
        )}
      </div>
    </div>
  );
};
export default CourseList;
