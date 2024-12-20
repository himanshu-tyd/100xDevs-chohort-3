import express from "express";
import {
  getAllCourser,
  signin,
  signup,
  buyCoures,
} from "../controllers/user.controller.js";

const route = express.Router();

route.post("/signup", signup);
route.post("/signin", signin);
route.post("/buy", buyCoures);
route.get("/", getAllCourser);

export default route;
