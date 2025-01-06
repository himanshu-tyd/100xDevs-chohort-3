import { AdminModel, CourseModel } from "../models/models.js";



export const purchase = (req, res) => {
  
  const courseId=req.params['id']
  const userId=req.userId

};

export const getAllCourse = async (req, res) => {
  const courses = await CourseModel.find();

  if (!courses ||  courses.length == 0) {
    return res.json({ success: false, message: " Courese not found" });
  }

  return res.json({
    success: true,
    message: "Here are you courses list",
    data: courses,
  });
};
