import bcrypt from "bcryptjs";
import jwt, { SignOptions } from "jsonwebtoken";
import getEnvVariable from "../utils/env";
import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createJWT: () => string;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minLength: 6,
  },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const options: SignOptions = {
  expiresIn: getEnvVariable("JWT_EXPIRES_IN") as SignOptions["expiresIn"],
};

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, username: this.name },
    getEnvVariable("JWT_SECRET"),
    options,
  );
};

export default mongoose.model<IUser>("User", UserSchema);
