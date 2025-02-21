import { Request, Response } from "express";
import { userSchema } from "../zod";
import HttpStatusCode from "../lib/types";
import { User } from "../models/user.model";
import { comapareHash, generateHash } from "../lib/helper";
import { generateToken } from "../lib/token";

export const signup = async (req: Request, res: Response) => {
  const { success, error, data: user } = userSchema.safeParse(req.body);

  if (!success) {
    res
      .status(HttpStatusCode.FORBIDDEN)
      .json({ success: false, message: error.formErrors.fieldErrors });
    return;
  }

  try {
    const existingUser = await User.findOne({ username: user.username });

    if (existingUser) {
      res
        .status(HttpStatusCode.ALREADY_EXISTS)
        .json({ success: false, message: "User already have an account" });

        return
    }

    const newUser = await User.create({
      username: user.username,
      password: await generateHash(user.password),
    });

    if (!newUser) {
      res.status(HttpStatusCode.NOT_CREATED).json({
        success: false,
        message: "failed to create something went wrong",
      });

      return
    }

    newUser.save();

    res
      .status(HttpStatusCode.CREATED)
      .json({ success: true, message: "User Created", data: newUser });
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: e.message });
      return;
    }
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: e });
  }
};
export const signin = async (req: Request, res: Response) => {
  const { success, error, data: user } = userSchema.safeParse(req.body);

  if (!success) {
    res
      .status(HttpStatusCode.FORBIDDEN)
      .json({ success: false, message: error.formErrors.fieldErrors });
    return;
  }

  try {
    const existingUser = await User.findOne({ username: user.username });

    
    if (existingUser==null) {
        res
        .status(HttpStatusCode.NOT_FOUND)
        .json({ success: false, message: "User account not found" });
        
        return
    }

    const isValidPass=await comapareHash(user.password, existingUser?.password!)

    if(!isValidPass){
        res.status(HttpStatusCode.NOT_VALID_DATA).json({success:false, message:"Invalid creadentials"})
    }

    generateToken(res, existingUser?._id.toString())

    res
      .status(HttpStatusCode.OK)
      .json({ success: true, message: "User Signin successfully", data: existingUser });
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: e.message });
      return;
    }
    res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: e });
  }
};
