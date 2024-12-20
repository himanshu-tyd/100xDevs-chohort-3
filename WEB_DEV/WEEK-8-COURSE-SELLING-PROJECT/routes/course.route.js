//coures route

import express from "express";
import {
  signup,
  createCourse,
  signin,
  purchase,
} from "../controllers/course.controller.js";

const route = express.Router();

route.post("/sigup",signup);
route.post("/signin",signin);
route.post('/create', createCourse)
route.post('/purchase', purchase)

export default route
