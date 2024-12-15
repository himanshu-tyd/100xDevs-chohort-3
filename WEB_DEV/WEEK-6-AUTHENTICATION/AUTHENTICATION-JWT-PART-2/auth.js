//create a middleware that authenticate every requrest in

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./index.js";

export const isAuthenticate = (req, res, next) => {
  const userToken = req.headers['jwt'];

  const decoded = jwt.verify(userToken, JWT_SECRET);

  console.log(decoded);

  if (!decoded) {
    return res.json({ message: "not autorized" });
  } else req.body = decoded;

  next();
};
