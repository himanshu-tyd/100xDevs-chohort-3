import { CourseModel, PurchasedModel, UserModel } from "../models/models.js";
import { compareHash, generateHash } from "../utils/helper.js";
import { GenerateCookie } from "../utils/verify.js";
import { purchase } from "./course.controller.js";

export const signup = async (req, res) => {
  const { email, password, firstName, lastName, role } = req.body;

  if (role !== "user")
    return res.json({ success: false, message: "!opps somethin get wrong" });

  if (!email || !password || !firstName || !lastName) {
    return res.json({
      success: false,
      message: "please provide valid details.",
    });
  }

  const user = await UserModel.findOne({ email });

  if (user) {
    return res.json({
      success: false,
      message: "You already have an account ",
    });
  }

  const newUser = await UserModel.create({
    email,
    firstName,
    lastName,
    password: await generateHash(password),
  });

  if (!newUser) {
    res.json({ success: false, message: "faile to register data" });
  }

  res.json({
    success: true,
    message: "User register successfully",
    data: newUser,
  });
};

export const signin = async (req, res) => {
  const { email, password, role } = req.body;

  if ((!email || !password, !role)) {
    return res.json({ success: false, message: "All field are required" });
  }

  if (role !== "user")
    return res.json({
      success: false,
      message: "You dont' have access of this",
    });

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.json({ success: false, message: "Invalid creadintials." });
  }

  //check hash password

  const isValidPass = await compareHash(password, user);

  if (!isValidPass) {
    return res.json({ success: false, message: "Invalid creadintials." });
  }

  // generate cookie here and send this to client

  GenerateCookie(user._id, res);

  res.json({
    success: true,
    message: "Sigin succesfully",
    data: user,
    role: role,
  });
};

export const myCourse = async (req, res) => {
  const userId = req.userId;

  if (!userId) {
    return res.json({
      success: false,
      message: "Opps somethig get wrong please tyr again.",
    });
  }

  const courses = await PurchasedModel.find({
    userId,
  });

  if (courses.length == 0) {
    return res.json({
      success: false,
      message: "You have not purchase any course yet",
    });
  }

  const courseIds = [];

  for (let i = 0; i < courses.length; i++) {
    courseIds.push(courses[i].courseId);
  }

  const courseInfo = await CourseModel.find({
    _id: { $in: courseIds },
  });

  return res.json({
    success: false,
    message: "Course found sucessfully ",
    data: { courseIds, courseInfo },
  });
};

export const buyCoures = async (req, res) => {
  const courseId = req.params["id"];
  const userId = req.userId;

  if (!courseId || !userId) {
    return res.json({ success: false, message: "something get wrong" });
  }

  const existingCourse = await PurchasedModel.findOne({
    userId,
    courseId,
  });

  if (existingCourse) {
    return res.json({
      success: false,
      message: "You already purchasedd this course",
    });
  }

  const course = await PurchasedModel.create({
    courseId,
    userId,
  });

  if (!course) {
    return res.json({
      success: false,
      message: "failed to buy course somthig get wron",
      data: course,
    });
  }

  return res.json({
    success: true,
    message: "Congratulation you successfully enrolled in course ",
  });
};

export const updatePassword=async(req,res)=>{
  const userId=req.userId

  const user=UserModel.findById(userId)

  console.log(user)

}
