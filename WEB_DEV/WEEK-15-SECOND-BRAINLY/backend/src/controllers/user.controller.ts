import { Request, Response } from "express";
import { signupSchema } from "../zod";
import HttpStatusCode from "../lib/types";
import { User } from "../models/user.model";

export const signup = async (req: Request, res: Response) => {
  const { success, error, data: user } = signupSchema.safeParse(req.body);

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
      password: user.password,
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
      .json({ success: true, message: "User Created", data: user });
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
