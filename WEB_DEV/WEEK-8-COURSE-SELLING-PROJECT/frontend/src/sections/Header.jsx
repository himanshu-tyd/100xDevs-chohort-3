import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Header = () => {
  return (
    <header className="w-full flex-center  items-center text-dusty font-clash ">
      <nav className=" w-full  flex justify-between items-center py-4 px-8 ">
        <div className="flex items-center gap-2 ">
          <span className=" border-yellow border-[4px] px-1 py-1 rounded-full " />
          <Link to="/" className="font-clash font-bold text-dark text-xl ">
            CourseGround
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-20 ">
          <a href="#">Courses</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <Link to="/signup">
          <Button
            lable={"Sing Up"}
            icon={<HiArrowRight />}
            containerClass={
              "border border-gray  rounded-full hover:bg-dark hover:text-white"
            }
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
