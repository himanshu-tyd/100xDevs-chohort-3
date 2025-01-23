import React from "react";

const Error = ({ error }) => {
  return (
    <div className="flex flex-col w-full justify-center h-[300px] ">
      <p>{error}</p>
    </div>
  );
};

export default Error;
