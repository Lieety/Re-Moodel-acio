import mongoose, { Schema, Document, ObjectId } from "mongoose";

export interface IUser {
  _id?: ObjectId | string | undefined;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IUserSchema extends Document {
  _id?: ObjectId | string | undefined;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
