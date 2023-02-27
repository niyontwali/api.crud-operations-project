import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});



const User = mongoose.model("User", userSchema)

export default User