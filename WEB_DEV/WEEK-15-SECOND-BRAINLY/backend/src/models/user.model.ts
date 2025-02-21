import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, require },
    password: { type: String, require },
  },
  { timestamps: true }
);


export const User=mongoose.model("User", userSchema)
