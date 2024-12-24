import { AdminModel, CourseModel } from "../models/models.js";

export const signup = async (req, res) => {
  const { email, password, fullname } = req.body;

  if (!email || !password || !fullname) {
    return res.json({
      success: false,
      message: "please provide valid details.",
    });
  }

  const user = await AdminModel.findOne({ email });

  if (user) {
    return res.json({ success: false, message: "Admin Created Successfully " });
  }

  const newAdmin = await AdminModel.create({
    email,
    fullname,
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
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ success: false, message: "All field are required" });
  }

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

  res.json({ success: true, message: "Admin Login successfully", data: admin });
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
