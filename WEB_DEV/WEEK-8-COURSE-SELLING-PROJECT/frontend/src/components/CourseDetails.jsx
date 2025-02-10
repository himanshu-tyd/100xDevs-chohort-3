import { useState } from "react";
import { useFechCourses } from "../hooks/useFetchCourse";
import { useLocation, useNavigate } from "react-router-dom";
import Error from "./Error";
import Loader from "./Loader";
import {
  ArrowLeft,
  Clock,
  DollarSign,
  GraduationCap,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import Button from "./Button";
import usePurchase from "../hooks/usePurchase";
import { toast } from "sonner";
import { getContextData } from "../context/AuthContexProvider";

const CourseDetails = () => {
  const location = useLocation();
  const [checkTime, setCheckTime] = useState(true);
  const { loading: purchaseLoader, purchaseCourse } = usePurchase();
  const { role } = getContextData();
  const id = location.pathname.split("/")[3];
  const navigate = useNavigate();

  const {
    data: courseData,
    error,
    loading,
  } = useFechCourses(`/api/course/${id}`);

  if (error) return <Error error={error} />;

  const handlePurchase = async () => {
    if (role === "admin") {
      return toast.error("Administrators cannot purchase courses");
    }

    if (!checkTime) {
      return toast.warning("Please wait for 3 seconds before trying again");
    }

    setCheckTime(false);
    const data = await purchaseCourse(courseData?._id);
    
    setTimeout(() => setCheckTime(true), 3000);
    
    if (data) {
      navigate(`/dashboard/courses/${data?.creatorId}/purchase-confirm`);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Courses
          </button>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-clash-semibold leading-tight">
            {courseData?.title}
          </h1>
        </div>
      </header>

      {/* Course Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Course Info */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-clash-semibold mb-4">About This Course</h2>
              <p className="text-slate-600 leading-relaxed">
                {courseData?.desc}
              </p>
            </section>

            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-clash-semibold mb-4">Your Instructor</h2>
              <div className="flex items-start gap-4">
                <img
                  src="https://yt3.googleusercontent.com/C25u3DcSguL-wd3GaO110Q1fyO5ClTraTjtF72kJhZtpQwuAv3zLmb7K-ZLJecQQJBVvP1McmA=s900-c-k-c0x00ffffff-no-rj"
                  alt="Instructor"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-clash-semibold text-lg">Harkirat Singh</h3>
                  <p className="text-slate-600">Senior Software Engineer</p>
                  <p className="text-sm text-slate-500 mt-2">
                    Experienced instructor with expertise in full-stack development and system design.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Purchase Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-sm overflow-hidden">
              <img
                src={courseData?.imageUrl}
                alt={courseData?.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-3xl font-clash-semibold">
                    ₹{courseData?.price}
                  </h3>
                  <p className="text-sm text-slate-500">
                    One-time purchase, lifetime access
                  </p>
                </div>

                <ul className="space-y-4">
                  {courseFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-700">
                      {feature.icon}
                      <span className="text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  disabled={loading || role === "admin"}
                  handleClick={handlePurchase}
                  lable={purchaseLoader ? <Loader2 className="animate-spin" /> : "Purchase Now"}
                  containerClass={`w-full justify-center bg-yellow hover:bg-yellow/90 
                    text-slate-900 font-medium rounded-xl py-3 ${
                    (role === "admin" || loading) && "opacity-50 cursor-not-allowed"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const courseFeatures = [
  {
    icon: <Clock className="w-5 h-5 text-slate-400" />,
    text: "1 Year of Access",
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-slate-400" />,
    text: "Advanced Level Course",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-slate-400" />,
    text: "30-day Money-back Guarantee",
  },
  {
    icon: <DollarSign className="w-5 h-5 text-slate-400" />,
    text: "One-time Payment",
  },
];

export default CourseDetails;
