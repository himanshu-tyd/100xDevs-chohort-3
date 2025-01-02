import { FaStar } from "react-icons/fa";

export const CourseCard = ({ title, desc, image, price }) => {
  return (
    <div className="p-4 flex flex-col gap-2 border-2 border-dusty rounded-2xl min-h-[300px] max-w-full sm:max-w-[300px]  border-b-4 border-r-4  w-full  ">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-2xl border-dusty border-2 "
      />
      <h5 className="text-sm font-clash-regular  ">{title}</h5>
      <p className="text-gray text-sm  ">{desc.substring(0, 60)}...</p>
      <div className="flex items-center  gap-2 w-full">
        <span className="font-clash-semibold">{price}</span>
        <span className="font-clash-regular  text-gray text-sm line-through ">
          {price * 2}
        </span>
        <p className="ml-auto text-green-600 font-clash-bold backdrop-blur-lg ">
          {(price / (price * 2)) * 100}% OFF
        </p>
      </div>
      <div className="flex gap-1 mt-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <p key={i}>
            <FaStar className="text-yellow" />
          </p>
        ))}
      </div>
    </div>
  );
};
