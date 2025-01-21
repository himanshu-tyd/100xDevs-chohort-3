import { Ellipsis, Loader2Icon } from "lucide-react";
import { useFetch } from "../hooks/useFetchData";

const CourseList = () => {
  const {
    data: adminCourseList,
    error,
    loading,
  } = useFetch("/api/admin/courses");

  console.log(adminCourseList.data);

  return (
    <div className="flex flex-col gap-5 text-gray font-clash-regular border-2 py-2 px-4 rounded-md ">
      <div className="flex items-center justify-between   w-full border-b py-4 px-2   ">
        <p>Title</p>
        <p>Description</p>
        <p>Price</p>
        <p>Action</p>
      </div>

      <div className="flex flex-col  ">
        {!loading ? (
          adminCourseList.data?.map((items) => (
            <div
              key={items?._id}
              className="flex justify-between space-y-2 items-center text-black font-clash-light "
            >
              <p className="capitalize max-width ">{items.title}</p>
              <p className="max-width" >{items.description}</p>
              <p>{items.price}</p>
              <p className="p-2 hover:bg-slate-200 rounded-md group transition-all  ">
                <Ellipsis className="text-black group-hover:text-red-400 " />
              </p>
            </div>
          ))
        ) : (
          <Loader2Icon className="self-center animate-spin " />
        )}
      </div>
    </div>
  );
};
export default CourseList;
