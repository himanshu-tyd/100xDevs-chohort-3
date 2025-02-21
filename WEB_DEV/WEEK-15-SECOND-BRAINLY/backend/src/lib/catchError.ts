import { Response } from "express";
import HttpStatusCode from "./types";

export const catchError = (e: any, res: Response) => {
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
};
