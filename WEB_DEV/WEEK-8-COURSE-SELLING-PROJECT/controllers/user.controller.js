import { UserModel } from "../models/models.js";
import { compareHash, generateHash } from "../utils/helper.js";
import { GenerateCookie } from "../utils/verify.js";

export const signup = async (req, res) => {
  const { email, password, fullname } = req.body;

  if (!email || !password || !fullname) {
    return res.json({
      success: false,
      message: "please provide valid details.",
    });
  }

  const user = await UserModel.findOne({ email });

  if (user) {
    return res.json({ success: false, message: "user alreay exits " });
  }

  const newUser = await UserModel.create({
    email,
    fullname,
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
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ success: false, message: "All field are required" });
  }

  const user = await UserModel.findOne({ email });
  
  console.log(user)

  if (!user) {
    return res.json({ success: false, message: "Invalid creadintials." });
  }

  //check hash password

  const isValidPass=await compareHash(password, user)

  if (!isValidPass) {
    return res.json({ success: false, message: "Invalid creadintials." });
  }

  // generate cookie here and send this to client

  GenerateCookie(user._id, res);

  res.json({ success: true, message: "Sigin succesfully", data: user });
};

export const myCourse = (req, res) => {
  res.send("my course route");
};

export const getAllCourser = (req, res) => {
  res.send("all course list routes");
};

export const buyCoures = (req, res) => {
  res.send("use course buy end-point");
};
