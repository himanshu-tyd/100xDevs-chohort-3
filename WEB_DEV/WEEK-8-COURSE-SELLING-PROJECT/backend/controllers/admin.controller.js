import { AdminModel, CourseModel } from "../models/models.js";
import { compareHash, generateHash } from "../utils/helper.js";
import { GenerateCookie } from "../utils/verify.js";

export const signup = async (req, res) => {
  const { email, password, firstName, lastName, role } = req.body;

  if (role !== "admin")
    return res.json({ success: false, message: "!opps somethin get wrong" });

  if (!email || !password || !firstName || !lastName) {
    return res.json({
      success: false,
      message: "please provide valid details.",
    });
  }

  const user = await AdminModel.findOne({ email });

  if (user) {
    return res.json({
      success: false,
      message: "You already have an account on this email ",
    });
  }

  const newAdmin = await AdminModel.create({
    firstName,
    lastName,
    email,
    password: await generateHash(password),
  });

  if (!newAdmin) {
    res.json({ success: false, message: "faile to register data" });
  }

  res.json({
    success: true,
    message: "Admin register successfully",
    data: newAdmin,
  });
};

export const signin = async (req, res) => {
  const { email, password, role } = req.body;

  if ((!email || !password, !role)) {
    return res.json({ success: false, message: "All field are required" });
  }

  if (role !== "admin")
    return res.json({
      success: false,
      message: "You don't have access to this",
    });

  const admin = await AdminModel.findOne({ email });

  if (!admin) {
    return res.json({ success: false, message: "Invalid creadintials." });
  }

  //check hash password

  const isValidPass = await compareHash(password, admin);

  if (!isValidPass) {
    return res.json({ success: false, message: "Invalid creadintials." });
  }

  // generate cookie here and send this to client

  GenerateCookie(admin._id, res);

  res.json({
    success: true,
    message: "Admin Login successfully",
    data: admin,
    role: role,
  });
};

export const createCourse = async (req, res) => {
  const userId = req.userId;
  const { title, description, price, imageUrl } = req.body;

  if (!title || !description || !price) {
    return res.json({ success: false, message: "all fieds are requre" });
  }

  const newCourse = await CourseModel.create({
    title,
    description,
    price,
    imageUrl,
    creatorId: userId,
  });

  if (!newCourse) {
    return res.json({ success: false, message: "failed to create course" });
  }

  res.json({
    success: true,
    message: "Coure register successfully",
    data: newCourse,
  });
};