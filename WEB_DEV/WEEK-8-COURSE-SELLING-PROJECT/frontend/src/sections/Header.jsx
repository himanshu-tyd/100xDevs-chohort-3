import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import Button from "../components/Button";
import { getContextData } from "../context/AuthContexProvider";
import { toast } from "sonner";

const Header = () => {
  const { user, setUser } = getContextData();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    toast.success("Logged out successfully");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="w-3 h-3 rounded-full border-[3px] border-yellow 
            group-hover:scale-110 transition-transform" />
          <span className="font-clash-bold text-xl text-slate-900">
            CourseGround
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          {user ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 
                border-slate-200 hover:border-red-200 hover:bg-red-50 
                transition-colors group"
            >
              <span className="font-medium text-slate-700 group-hover:text-red-600">
                Logout
              </span>
              <LogOut className="w-4 h-4 text-slate-400 group-hover:text-red-500" />
            </button>
          ) : (
            <Link to="/signin">
              <Button
                lable="Sign Up"
                icon={<HiArrowRight className="w-4 h-4" />}
                containerClass="px-6 py-2.5 border-2 border-slate-200 rounded-full 
                  font-medium text-slate-700 hover:border-yellow hover:bg-yellow/10
                  hover:text-slate-900 transition-colors"
              />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ href, label, isExternal = false }) => {
  const Tag = isExternal ? 'a' : Link;
  const props = isExternal ? { href, target: "_blank", rel: "noopener" } : { to: href };

  return (
    <Tag
      {...props}
      className="relative font-medium text-slate-600 hover:text-slate-900 
        transition-colors after:absolute after:left-0 after:-bottom-1 
        after:h-0.5 after:w-0 after:bg-yellow hover:after:w-full 
        after:transition-all"
    >
      {label}
    </Tag>
  );
};

const navLinks = [
  { href: "#courses", label: "Courses" },
  { href: "#about", label: "About" },
  { href: "https://github.com/himanshu-tyd", label: "GitHub", isExternal: true },
];

export default Header;
