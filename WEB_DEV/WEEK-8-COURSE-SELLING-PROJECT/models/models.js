import { model, Schema, Types } from "mongoose";

const userSchema = new Schema({
  email: { type: String, unique: true },
  fullname: {
    type: String,
  },
  password: String,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  fullname: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: Types.ObjectId,
});

const purchaseSchema = new Schema({
  userId: Types.ObjectId,
  courseId: {
    type: Types.ObjectId,
    rel: "course",
  },
});

const UserModel = model("user", userSchema);
const AdminModel = model("admin", adminSchema);
const CourseModel = model("course", courseSchema);
const PurchasedModel = model("purchase", purchaseSchema);

export { UserModel, AdminModel, CourseModel, PurchasedModel };
