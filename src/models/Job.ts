import mongoose, { Schema, Document } from "mongoose";

export interface IJob extends Document {
  company: string;
  position: string;
  status: string;
  enum: "interview" | "declined" | "pending";
  createdBy: mongoose.Types.ObjectId;
}

export const JobSchema = new Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxLength: 50,
    },

    position: {
      type: String,
      required: [true, "Please provide job title"],
      maxLength: 100,
    },
    status: {
      type: String,
      enum: {
        values: ["interview", "declined", "pending"],
        message: "{VALUE} is not supported",
      },
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true },
);

export default mongoose.model<IJob>("Job", JobSchema);
