import AddCourseDialog from "../components/AddCourseDialog ";
import CourseList from "../components/CourseList";
import DashboardHeader from "../components/DashboardHeader";
import { getContextData } from "../context/AuthContexProvider";

export default function AdminDashboard() {
  const { role } = getContextData();

  return (
    <div className="flex min-h-screen flex-col gap-8 p-6 md:p-8 w-full">
      <DashboardHeader />
      <main className="flex flex-col gap-4">
        {role === "admin" ? (
          <>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
              <AddCourseDialog />
            </div>
            <CourseList />
          </>
        ) : (
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
          </div>
        )}
      </main>
    </div>
  );
}
