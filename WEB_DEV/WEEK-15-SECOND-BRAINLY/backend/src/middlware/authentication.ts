import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import HttpStatusCode from "../lib/types";
import { catchError } from "../lib/catchError";

const isAuthenticate = (req: Request, res: Response, next: NextFunction) => {
  const secret = process.env.JWT_SECRET;
  try {
    const token = req.cookies["jwtToken"];


    if (!token) {
      res
        .status(HttpStatusCode.NOT_AUTHENTICATE)
        .json({ success: false, message: "Not Authenticate" });

      return;
    }

    if (!secret) return;

    const decode = jwt.verify(token, secret);

    if (!decode) {
      res
        .status(HttpStatusCode.UNAUTHORIZED)
        .json({ success: false, message: "Not Authorized" });
      return;
    }

    //@ts-ignore
    // console.log(decode?.userId)
    req.userId = decode.userId;


    next();
  } catch (e) {
    catchError(e, res);
  }
};

export default isAuthenticate;
