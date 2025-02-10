import { useState } from "react";
import { ImagePlus, Loader2Icon, X } from "lucide-react";

import { toast } from "sonner";
import useCloudnaryUpload from "../hooks/useUploadImage";
import useAddUpload from "../hooks/useAddCourse";

const AddCourseDialog = () => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [data, setData] = useState({
    title: "",
    desc: "",
    imageUrl: "",
    price: "",
  });

  const { loading: imageLoading, uploadImage } = useCloudnaryUpload();
  const { loading: uploadLoading, uploadCours } = useAddUpload();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await uploadCours(data);
    if (result) setOpen(false);
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return toast.error("Please select an image");

    const url = await uploadImage(file);
    if (!url) return toast.error("Failed to upload image");

    setUrl(url);
    setData(prev => ({ ...prev, imageUrl: url }));
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-2.5 text-sm bg-dark text-white rounded-lg 
          border-2 border-dusty hover:bg-dark/90 transition-colors
          active:scale-95 duration-200"
      >
        Add New Course
      </button>

      {/* Modal Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full animate-in fade-in duration-200">
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-clash-semibold text-slate-900">
                    Add New Course
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Fill in the course details. Click save when you're done.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div className="form-group">
                  <label htmlFor="title">Course Title</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    placeholder="Enter course name"
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="desc">Description</label>
                  <textarea
                    id="desc"
                    name="desc"
                    required
                    rows={4}
                    placeholder="Enter course description"
                    onChange={handleChange}
                    className="input-field resize-none"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="image">Course Image</label>
                  <div className="mt-1 flex items-center gap-4">
                    <input
                      id="image"
                      name="image"
                      type="file"
                      required
                      accept="image/*"
                      onChange={handleUploadImage}
                      className="hidden"
                    />
                    <label 
                      htmlFor="image"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-dashed 
                        border-slate-300 rounded-lg hover:border-yellow cursor-pointer
                        text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      <ImagePlus className="w-5 h-5" />
                      <span>Choose Image</span>
                    </label>
                    
                    {/* Image Preview */}
                    <div className="relative w-20 h-20 rounded-lg bg-slate-100 overflow-hidden">
                      {imageLoading ? (
                        <div className="absolute inset-0 flex-center">
                          <Loader2Icon className="w-6 h-6 animate-spin text-yellow" />
                        </div>
                      ) : (
                        url && (
                          <img
                            src={url}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="price">Price (₹)</label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    required
                    min="0"
                    placeholder="Enter course price"
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-700 
                    hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploadLoading}
                  className="px-6 py-2 text-sm font-medium text-white bg-dark 
                    rounded-lg hover:bg-dark/90 transition-colors disabled:opacity-50
                    disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {uploadLoading ? (
                    <>
                      <Loader2Icon className="w-4 h-4 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    'Save Course'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCourseDialog;
