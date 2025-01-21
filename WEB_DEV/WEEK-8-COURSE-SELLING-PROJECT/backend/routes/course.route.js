//coures route

import express from "express";
import {
  purchase,
  getAllCourse,
  getAdminCourse,
} from "../controllers/course.controller.js";
import { isAuthenticate } from "../middlwares/authentication.js";
import { createCourse } from "../controllers/admin.controller.js";



const route = express.Router();

route.post("/create", isAuthenticate, createCourse);
route.post("/purchase", purchase);
route.get("/", getAllCourse);
route.get('/', )


export default route;
