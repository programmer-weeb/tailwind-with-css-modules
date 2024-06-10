import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
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
  img: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
}, { timestamps: true })

export const TeacherModelSchema = mongoose.models.TeacherModelSchema || mongoose.model("TeacherModelSchema", teacherSchema)
