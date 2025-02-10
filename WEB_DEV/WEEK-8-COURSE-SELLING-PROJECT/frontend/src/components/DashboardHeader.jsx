import React from "react";
import { Bell, ChevronDown, LogOut } from "lucide-react";
import { getContextData } from "../context/AuthContexProvider";

const DashboardHeader = () => {
  const { role, user } = getContextData();

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between w-full py-4 px-6 bg-white/80 backdrop-blur-lg border-b">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-clash-semibold text-slate-900">
          {role === "admin" ? "Admin" : `${user?.firstName}'s`} Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button 
          className="relative p-2 hover:bg-slate-100 rounded-full transition-colors group"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 text-slate-600 group-hover:text-slate-900" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white" />
        </button>
        
        {/* User Profile */}
        <div className="relative group">
          <button className="flex items-center gap-3 group/btn">
            <div className="hidden sm:flex flex-col items-end">
              <p className="font-medium text-slate-900">{user?.firstName} {user?.lastName}</p>
              <p className="text-sm text-slate-500 capitalize">{role} Account</p>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-yellow/30 group-hover/btn:ring-yellow transition-all">
                <img
                  src={`https://randomuser.me/api/portraits/men/1.jpg`}
                  alt={user?.firstName}
                  className="w-full h-full object-cover"
                />
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover/btn:text-slate-600 transition-colors" />
            </div>
          </button>

        
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
