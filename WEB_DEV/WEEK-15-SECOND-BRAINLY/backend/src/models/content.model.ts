import mongoose, { Document, Schema } from "mongoose";

export const contentSchema = new Schema(
  {
    adminId: { 
      type: Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
    type: { 
      type: String, 
      enum: ["document", "tweet", "youtube", "link"], 
      required: true 
    },
    link: { 
      type: String, 
      required: true 
    },
    title: { 
      type: String, 
      required: true, 
      trim: true 
    },
    tags: { 
      type: [String], 
      default: [] 
    },
  },
  {
    timestamps: true,
  }
);

export const Content = mongoose.model("Content", contentSchema);
