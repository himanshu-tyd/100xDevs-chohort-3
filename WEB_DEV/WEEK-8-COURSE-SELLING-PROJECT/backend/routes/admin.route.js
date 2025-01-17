
import express from "express";
import { isAuthenticate } from "../middlwares/authentication.js";
import { createCourse, signin, signup } from "../controllers/admin.controller.js";
import { getAllCourse } from "../controllers/course.controller.js";
import { updatePassword } from "../controllers/admin.controller.js";

const route = express.Router();

route.post("/signup", signup);
route.post("/signin", signin);
route.post("/create", isAuthenticate, createCourse);
route.get("/", getAllCourse);
route.post("/update-password",isAuthenticate, updatePassword);

export default route;
