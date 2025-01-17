import React, { useState } from "react";
import { X } from "lucide-react";

import { toast } from "sonner";
import useCloudnaryUpload from "../hooks/useUploadImage";

const AddCourseDialog = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});

  const { loading, uploadImage } = useCloudnaryUpload();

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      toast.error("Please select an image");
    }

    console.log(file);

    await uploadImage(file);
  };

  const handleOpen = () => {
    setOpen((pre) => !pre);
  };

  return (
    <div>
      <button
        className="px-2 py-2 text-sm bg-dark border-2 border-dusty text-white rounded-lg "
        onClick={handleOpen}
      >
        Add New Course
      </button>
      <div className={open ? "block" : "hidden"}>
        <div
          className={`w-screen h-lvh absolute top-0 left-0 flex-center bg-dark bg-opacity-70 backdrop-blur-sm `}
        >
          <div className="min-w-auto sm:min-w-[600px]  p-4 bg-white rounded-lg">
            <div className="flex items-center justify-between w-full ">
              <div className="w-full">
                <h3
                  className="text-md font-semibold text-black "
                  onClick={handleOpen}
                >
                  Add New Course
                </h3>
                <span className="text-sm text-slate-600">
                  Fill in the course details. Click save when you're done.
                </span>
              </div>
              <div
                onClick={handleOpen}
                className="bg-yellow rounded-full cursor-pointer  p-2 hover:scale-105 active:scale-100  duration-150 border-gray border    "
              >
                <X className="w-4 h-4" />
              </div>
            </div>

            {/* inputs section */}

            <div className="mt-4 flex flex-col gap-4 ">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="title"
                  className="text-black text-sm  font-semibold "
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter course name"
                  className="input-style placeholder:text-gray border-gray border-[1px] placeholder:text-sm  "
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="desc"
                  className="text-black text-sm  font-semibold "
                >
                  Description
                </label>
                <textarea
                  id="desc"
                  type="text"
                  placeholder="Enter course description"
                  className="input-style h-[120px] placeholder:text-gray border-gray border-[1px] placeholder:text-sm  "
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="image"
                  className="text-black text-sm  font-semibold "
                >
                  Course Image
                </label>
                <input
                  onChange={handleUploadImage}
                  id="image"
                  type="file"
                  placeholder="Enter course name"
                  className="input-style placeholder:text-gray border-gray border-[1px] placeholder:text-sm  "
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="price"
                  className="text-black text-sm  font-semibold "
                >
                  Price
                </label>
                <input
                  id="price"
                  type="number"
                  placeholder="$ Price"
                  className="input-style placeholder:text-gray border-gray border-[1px] placeholder:text-sm  "
                />
              </div>
            </div>

            {/* action buttons */}
            <div className="mt-5 ">
              <div className="flex gap-2 justify-end ">
                <button
                  className="button-click px-4 py-2 text-sm bg-transparent border-2 border-dusty text-dark rounded-lg "
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button className=" button-click px-8 py-2 text-sm bg-dark border-2 border-dusty text-white rounded-lg ">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourseDialog;
