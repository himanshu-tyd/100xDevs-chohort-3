import { FaStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const CourseCard = ({
  _id,
  title,
  desc,
  imageUrl,
  price,
}) => {
  const random = Math.floor(Math.random() * 3) + 1;
  const path = useLocation();
  const pathname = path.pathname;

  return (
    <div className="flex flex-col gap-3 p-4 border-2 border-dusty rounded-2xl 
      sm:max-w-[300px] md:max-w-[398px] border-b-4 border-r-4 bg-white
      hover:shadow-lg hover:shadow-yellow/10 transition-all duration-300">
      {/* Image */}
      <div className="relative w-full h-[218px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-2xl border-2 border-dusty"
        />
        <div className="absolute top-3 right-3 px-3 py-1 bg-green-500/90 
          backdrop-blur-sm text-white rounded-full text-sm font-medium">
          {Math.floor((price / (price * random)) * 100)
            .toString()
            .slice(0, 2)}% OFF
        </div>
      </div>

      {/* Title & Description */}
      <div className="space-y-2">
        <h5 className="font-clash-semibold text-lg">{title}</h5>
        <p className="text-gray text-sm">{desc.substring(0, 60)}...</p>
      </div>

      {/* Price Section */}
      <div className="flex items-center gap-2 w-full">
        <span className="font-clash-semibold text-lg">₹{price}</span>
        <span className="font-clash-regular text-gray text-sm line-through">
          ₹{price * random}
        </span>
      </div>

      {/* Rating */}
      <div className="flex gap-1.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <FaStar key={i} className="text-yellow w-4 h-4" />
        ))}
      </div>

      {/* View Details Button */}
      {pathname === "/dashboard/courses" && (
        <div className="w-full mt-2 relative group">
          <Link
            to={`${_id}`}
            className="block w-full text-center font-clash-semibold rounded-full 
              py-3 border bg-white hover:bg-yellow z-20 relative duration-150"
          >
            View Details
          </Link>
          <span className="w-full h-full bg-black rounded-full absolute top-0 
            group-hover:translate-x-2 group-hover:translate-y-2 duration-150" />
        </div>
      )}
    </div>
  );
};
