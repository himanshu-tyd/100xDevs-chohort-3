import React, { ReactFragment, useState } from "react";

export const CourseCard = ({ title, desc, image, price }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShow = () => {
    setShowMore((pre) => setShowMore(!pre));
  };

  return (
    <div className="p-4 flex flex-col gap-2  ">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-2xl border-dusty border-2 "
      />
      <h5 className="text-sm font-clash-regular  ">{title}</h5>
      <p className="text-gray  ">
        {!showMore && desc.length > 60 ? (
          <>
            {desc.substring(0, 60)}
            <button className="hover:text-blue-400" onClick={handleShow}>
              ...more
            </button>
          </>
        ) : (
          <>{desc}</>
        )}
      </p>
      <span className="font-clash-semibold">{price}</span>
    </div>
  );
};
