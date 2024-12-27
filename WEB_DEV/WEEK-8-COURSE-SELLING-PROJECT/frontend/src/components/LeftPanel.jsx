import React from "react";
import { BookDown, House, Presentation, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const LeftPanel = () => {
  return (
    <div className="min-w-[248px] h-dvh bg-slate-100 rounded-md hidden sm:block ">
      <div className="px-6 py-10">
        <h3 className="uppercase font-clash-semibold text-sm text-gray">
          main menu
        </h3>
      </div>
      <div className="mt-5 flex flex-col gap-5  ">
        {Links.map((item) => (
          <Link
            to={`/dashboard/${item.href}`}
            key={item.title}
            className="flex items-center w-full gap-3 hover:bg-yellow duration-500 px-6 py-4 hover:shadow-md rounded-lg hover:scale-105  "
          >
            <span className="text-dusty font-light text-[14px]">
              {item.icon}
            </span>
            <h4 className="text-gray">{item.title}</h4>
          </Link>
        ))}
      </div>
    </div>
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
