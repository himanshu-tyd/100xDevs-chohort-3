import { Route, Routes } from "react-router-dom";
import LeftPanel from "../components/LeftPanel";
import Home from "../pages/Home";
import ProtectedRoute from "../router/ProtectedRoute";
import Courses from "../pages/Courses";
import Purchase from "../pages/Purchase";
import Settings from "../pages/Settings";

const DashBoard = () => {
  const baseRoute = "/dashboard";

  return (
    <div className="w-full flex    ">
      <LeftPanel />
      <div className="px-4 py-2">
        <Routes>
          <Route path={`home`} element={<Home />} />
          <Route path={`courses`} element={<Courses />} />
          <Route path={`purchase`} element={<Purchase />} />
          <Route path={`settings`} element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashBoard;
