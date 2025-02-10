import React, { useState } from "react";
import { BookDown, House, Menu, Presentation, Settings, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const LeftPanel = () => {
  const [active, setActive] = useState(true);
  const location = useLocation();

  return (
    <React.Fragment>
      {/* Desktop Sidebar */}
      <div className="min-w-[248px] h-dvh bg-slate-100/80 backdrop-blur-lg rounded-r-2xl hidden sm:block border-r border-slate-200">
        <div className="px-6 py-10">
          <h3 className="uppercase font-clash-semibold text-sm text-gray/80">
            main menu
          </h3>
        </div>
        <div className="mt-5 flex flex-col gap-3 px-4">
          {Links.map((item) => {
            const isActive = location.pathname.includes(item.href);
            return (
              <Link
                to={`/dashboard/${item.href}`}
                key={item.title}
                className={`flex items-center w-full gap-3 px-6 py-4 rounded-xl transition-all duration-300 group
                  ${isActive 
                    ? "bg-yellow shadow-lg shadow-yellow/20 scale-105" 
                    : "hover:bg-yellow/10"}`}
              >
                <span className={`text-dusty transition-colors duration-300 ${isActive ? "text-black" : ""}`}>
                  {item.icon}
                </span>
                <h4 className={`text-gray transition-colors duration-300 ${isActive ? "font-semibold" : ""}`}>
                  {item.title}
                </h4>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`min-w-[220px] h-dvh rounded-r-2xl block sm:hidden fixed z-30 transition-all duration-300 ease-in-out
          ${active 
            ? "-translate-x-full" 
            : "translate-x-0 bg-slate-100/80 backdrop-blur-lg border-r border-slate-200"}`}
      >
        <div className="px-4 py-8 flex items-center w-full">
          <h3 className="uppercase font-clash-semibold text-sm text-gray/80">
            main menu
          </h3>
          <button
            className={`ml-auto p-2 rounded-lg transition-all duration-300
              ${active 
                ? "bg-yellow shadow-lg" 
                : "hover:bg-slate-200"}`}
            onClick={() => setActive(!active)}
          >
            {active ? <Menu /> : <X />}
          </button>
        </div>
        <div className="mt-5 flex flex-col gap-3 px-4">
          {Links.map((item) => {
            const isActive = location.pathname.includes(item.href);
            return (
              <Link
                to={`/dashboard/${item.href}`}
                key={item.title}
                className={`flex items-center w-full gap-3 px-6 py-4 rounded-xl transition-all duration-300
                  ${isActive 
                    ? "bg-yellow shadow-lg shadow-yellow/20" 
                    : "hover:bg-yellow/10"}`}
                onClick={() => setActive(true)}
              >
                <span className={`text-dusty transition-colors duration-300 ${isActive ? "text-black" : ""}`}>
                  {item.icon}
                </span>
                <h4 className={`text-gray transition-colors duration-300 ${isActive ? "font-semibold" : ""}`}>
                  {item.title}
                </h4>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Overlay */}
      {!active && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 sm:hidden"
          onClick={() => setActive(true)}
        />
      )}
    </React.Fragment>
  );
};
  
export default LeftPanel;

const Links = [
  {
    title: "Home",
    icon: <House />,
    href: "home",
  },
  {
    title: "Course",
    icon: <Presentation />,
    href: "courses",
  },
  {
    title: "Purchase",
    icon: <BookDown />,
    href: "purchase",
  },
  {
    title: "Settings",
    icon: <Settings />,
    href: "settings",
  },
];
