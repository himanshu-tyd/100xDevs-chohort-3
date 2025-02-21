import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (uri == undefined) return;

  mongoose
    .connect(uri, {
      dbName: "second-brainly",
    })
    .then(() => {
      console.log("DATABASE CONNECTED");
    })
    .catch((e) => {
      console.log(e);
    });
};
