import { AdminModel, CourseModel } from "../models/models.js";

export const purchase = (req, res) => {
  const courseId = req.params["id"];
  const userId = req.userId;
};

export const getAllCourse = async (req, res) => {
  const courses = await CourseModel.find();

  if (!courses || courses.length == 0) {
    return res.json({ success: false, message: " Courese not found" });
  }

  return res.json({
    success: true,
    message: "Here are you courses list",
    data: courses,
  });
};

export const getAdminCourse = async (req, res) => {
  const userId = req.userId;
  const userRole = req.userRole;

  try {
    if (userRole !== "admin") {
      return res.json({
        successfL: false,
        message: "You are not authorize to access this",
      });
    }

    if (!userId) {
      return res.json({ success: false, message: "failed to authenticate" });
    }

    const course = await CourseModel.find({
      creatorId: userId,
    });

    console.log(course);

    if (course.length < 0) {
      return res.json({ message: "You have not create any course yet!" });
    }

    res.json({ success: true, message: "course found", data: course });
  } catch (error) {
    return res.json({ success: false, message: "Intenal server error" });
  }
};
