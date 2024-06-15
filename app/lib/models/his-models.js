import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
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
  parentName: {
    type: String,
    required: true,
  },
  parentEmail: {
    type: String,
    required: true,
  },
  parentPhone: {
    type: String,
    required: true,
  },
  medicalRecords: {
    type: String,
    // required: true,
  }
    
}, {timestamps: true})

const loginSchema = new mongoose.Schema({
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
  role: {
    type: String,
    enum: ['student', 'admin', 'teacher', 'parent'],
    required: true
  },
}, { timestamps: true })


export const LoginModelSchema = mongoose.models.LoginModelSchema || mongoose.model("LoginModelSchema", loginSchema)
export const StudentModelSchema = mongoose.models.StudentModelSchema || mongoose.model("StudentModelSchema", studentSchema)
