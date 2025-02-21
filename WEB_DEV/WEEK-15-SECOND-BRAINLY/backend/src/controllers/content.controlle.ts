import { Request, Response } from "express";
import { contentSchema } from "../zod";
import HttpStatusCode from "../lib/types";
import { Content } from "../models/content.model";
import { catchError } from "../lib/catchError";

export const createContent = async (req: Request, res: Response) => {
  const { success, error, data: content } = contentSchema.safeParse(req.body);

  console.log(req.body)

//   @ts-ignore
  const userId = req?.userId;

  if(!userId){
    res.status(HttpStatusCode.NOT_FOUND).json({success:false, message: "You are not login try again"})

    return
  }
  console.log('user id ',userId)

  if (!success) {
    res
      .status(HttpStatusCode.NOT_VALID_DATA)
      .json({ success: false, message: error.formErrors.fieldErrors });
    return;
  }

  try {
    const newContent = await Content.create({
      adminId: userId,
      title: content.title,
      type: content.type,
      link: content.link,
      tags: content.tags,
    });

    if (!newContent) {
      res.status(HttpStatusCode.NOT_CREATED).json({
        success: false,
        message: "Failed to create content",
      });

      return;
    }

    newContent.save();

    res
      .status(HttpStatusCode.CREATED)
      .json({ success: true, message: "New Content Added ", data: newContent });

      
  } catch (e) {
    catchError(e, res);
  }
};
