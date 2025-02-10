import { EllipsisIcon, Loader2Icon, Pencil, Trash2 } from "lucide-react";
import { useFetch } from "../hooks/useFetchData";
import useStore from "../zustand/useStore";

const CourseList = () => {
  const { adminCoures, setAdminCourse } = useStore();
  const { data: adminCourseList, error, loading } = useFetch(
    "/api/admin/courses", 
    setAdminCourse, 
    adminCoures
  );

  if (error) {
    return (
      <div className="flex items-center justify-center h-[400px] rounded-xl bg-red-50/50 border border-red-100">
        <span className="text-red-500 font-medium">{error}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-white border shadow-sm">
      {/* Table Header */}
      <div className="grid grid-cols-4 items-center bg-slate-50/80 p-4 border-b">
        {["Title", "Description", "Price", "Actions"].map((header) => (
          <div key={header} className={`font-medium text-slate-700 ${
            header === "Actions" ? "text-center" : ""
          }`}>
            {header}
          </div>
        ))}
      </div>

      {/* Table Body */}
      <div className="flex flex-col overflow-y-auto max-h-[448px]">
        {loading ? (
          <div className="flex items-center justify-center h-[300px]">
            <Loader2Icon className="animate-spin text-yellow w-8 h-8" />
          </div>
        ) : adminCourseList?.length > 0 ? (
          adminCourseList.map((course) => (
            <div
              key={course._id}
              className="grid grid-cols-4 items-center py-3 px-4 hover:bg-slate-50 border-b 
                last:border-none group transition-colors"
            >
              <div className="pr-4">
                <p className="font-medium text-slate-900 truncate">
                  {course.title}
                </p>
              </div>
              <div className="pr-4">
                <p className="text-slate-600 truncate">{course.desc}</p>
              </div>
              <div>
                <p className="text-slate-900">₹ {course.price.toLocaleString()}</p>
              </div>
              <div className="flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all">
                <ActionButton 
                  icon={<Pencil className="w-4 h-4" />}
                  label="Edit"
                  onClick={() => {}} // Add edit handler
                  className="hover:bg-yellow/20 hover:text-yellow-700"
                />
                <ActionButton 
                  icon={<Trash2 className="w-4 h-4" />}
                  label="Delete"
                  onClick={() => {}} // Add delete handler
                  className="hover:bg-red-50 hover:text-red-600"
                />
                <ActionButton 
                  icon={<EllipsisIcon className="w-4 h-4" />}
                  label="More"
                  onClick={() => {}} // Add more options handler
                  className="hover:bg-slate-100 hover:text-slate-900"
                />
              </div>
            </div>
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

const ActionButton = ({ icon, label, onClick, className = "" }) => (
  <button
    type="button"
    onClick={onClick}
    className={`p-2 rounded-lg transition-colors ${className}`}
    aria-label={label}
  >
    {icon}
  </button>
);

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center h-[300px] text-slate-500 gap-3">
    <p className="text-slate-600">No courses created yet</p>
    <button className="px-4 py-2 text-sm font-medium text-yellow-600 hover:text-yellow-700 
      hover:bg-yellow-50 rounded-lg transition-colors">
      Create your first course
    </button>
  </div>
);

export default CourseList;
