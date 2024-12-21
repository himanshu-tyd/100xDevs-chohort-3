//coures route

import express from "express";
import {
  signup,
  createCourse,
  signin,
  purchase,
} from "../controllers/course.controller.js";
import { isAuthenticate } from "../middlwares/authentication.js";

const route = express.Router();

route.post("/signup",signup);
route.post("/signin",signin);
route.post('/create', isAuthenticate ,createCourse)
route.post('/purchase', purchase)

export default route
